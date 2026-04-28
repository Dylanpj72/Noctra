'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
  uniform vec2 uMouse;

  varying float vBrightness;

  void main() {
    vec4 mvPosition  = modelViewMatrix * vec4(position, 1.0);
    vec4 projected   = projectionMatrix * mvPosition;

    // Normalised device coordinates of this particle
    vec2 ndc = projected.xy / projected.w;

    // Distance from cursor in screen space (NDC)
    float dist = length(ndc - uMouse);

    // How much of the torch falls on this particle (0 = none, 1 = full)
    float radius = 0.40;
    vBrightness = 1.0 - smoothstep(0.0, radius, dist);

    // Particles swell toward the cursor
    float baseSize  = 1.5;
    float glowSize  = 7.0;
    gl_PointSize = mix(baseSize, glowSize, vBrightness * vBrightness);

    gl_Position = projected;
  }
`;

const fragmentShader = /* glsl */ `
  varying float vBrightness;

  void main() {
    // Soft circular dot — discard the corners of the gl_Point quad
    vec2  center = gl_PointCoord - 0.5;
    float d      = length(center);
    if (d > 0.5) discard;

    // Feathered edge
    float soft = smoothstep(0.5, 0.12, d);

    // Opacity: dim at rest, full-bright under the torch
    float opacity = mix(0.28, 1.0, vBrightness) * soft;

    // Colour: cool neutral → pure white under torch
    vec3 restColor  = vec3(0.82, 0.84, 0.90);
    vec3 glowColor  = vec3(1.00, 1.00, 1.00);
    vec3 color      = mix(restColor, glowColor, vBrightness);

    gl_FragColor = vec4(color, opacity);
  }
`;

function ParticleField() {
  const meshRef   = useRef<THREE.Points>(null!);
  const { gl }    = useThree();
  const count     = 3000;

  // Particle positions — same spherical disc layout as before
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 2.5 + Math.random() * 0.8;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi) * 0.3; // flatten to disc
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return pos;
  }, []);

  // Uniforms — mouse starts off-screen so nothing glows on load
  const uniforms = useMemo(() => ({
    uMouse: { value: new THREE.Vector2(9999, 9999) },
  }), []);

  // When the cursor leaves the canvas, snap the torch off-screen
  useEffect(() => {
    const canvas  = gl.domElement;
    const onLeave = () => uniforms.uMouse.value.set(9999, 9999);
    canvas.addEventListener('pointerleave', onLeave);
    return () => canvas.removeEventListener('pointerleave', onLeave);
  }, [gl, uniforms]);

  useFrame((state) => {
    if (!meshRef.current) return;

    // Slow ambient rotation
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.08;

    // Feed cursor position into the shader (R3F keeps state.pointer current)
    uniforms.uMouse.value.set(state.pointer.x, state.pointer.y);
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </points>
  );
}

export function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 1.5, 5], fov: 60 }}
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
    >
      <ParticleField />
    </Canvas>
  );
}
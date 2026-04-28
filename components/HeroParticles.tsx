'use client';

import { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = /* glsl */ `
  uniform vec2 uMouse;
  uniform vec2 uResolution;

  varying float vBrightness;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 projected  = projectionMatrix * mvPosition;

    // NDC of this particle
    vec2 ndc  = projected.xy / projected.w;

    // Distance from cursor in NDC
    float dist = length(ndc - uMouse);
    float radius = 0.40;
    vBrightness = 1.0 - smoothstep(0.0, radius, dist);

    // Size attenuation — exactly matches PointsMaterial(size=0.012, sizeAttenuation=true)
    float worldSize = 0.012;
    float pixelBase = worldSize * projectionMatrix[1][1] * uResolution.y * 0.5 / (-mvPosition.z);

    // Torch swells particles slightly; stays close to base look at rest
    float glowBoost = 4.0;
    gl_PointSize = pixelBase + glowBoost * vBrightness * vBrightness;

    gl_Position = projected;
  }
`;

const fragmentShader = /* glsl */ `
  varying float vBrightness;

  void main() {
    // Soft circular dot
    vec2  center = gl_PointCoord - 0.5;
    float d      = length(center);
    if (d > 0.5) discard;

    float soft = smoothstep(0.5, 0.15, d);

    // Match original opacity 0.5 at rest; full bright under torch
    float opacity = mix(0.5, 1.0, vBrightness) * soft;

    gl_FragColor = vec4(1.0, 1.0, 1.0, opacity);
  }
`;

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null!);
  const { gl }  = useThree();
  const count   = 3000;

  // Identical layout to the original
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

  const uniforms = useMemo(() => ({
    uMouse:      { value: new THREE.Vector2(9999, 9999) },
    uResolution: { value: new THREE.Vector2(1, 1) },
  }), []);

  // Reset torch when cursor leaves the canvas
  useEffect(() => {
    const canvas  = gl.domElement;
    const onLeave = () => uniforms.uMouse.value.set(9999, 9999);
    canvas.addEventListener('pointerleave', onLeave);
    return () => canvas.removeEventListener('pointerleave', onLeave);
  }, [gl, uniforms]);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.04;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.08;
    uniforms.uMouse.value.set(state.pointer.x, state.pointer.y);
    // Keep resolution in sync for correct size attenuation after resize
    uniforms.uResolution.value.set(state.size.width, state.size.height);
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
      <ambientLight intensity={0.5} />
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>
    </Canvas>
  );
}
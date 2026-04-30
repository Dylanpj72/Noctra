'use client';

import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders';
import type React from 'react';
import { useEffect, useMemo, useRef, useState } from 'react';

interface LiquidMetalButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  width?: number;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export function LiquidMetalButton({
  label,
  href,
  onClick,
  width: widthProp = 160,
  type = 'button',
  disabled = false,
  className = '',
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const shaderRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shaderMount = useRef<any>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleId = useRef(0);

  const dims = useMemo(() => ({
    width: widthProp,
    height: 46,
    innerWidth: widthProp - 4,
    innerHeight: 42,
  }), [widthProp]);

  useEffect(() => {
    const styleId = 'lmb-canvas-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .lmb-shader-container canvas {
          width: 100% !important; height: 100% !important;
          display: block !important; position: absolute !important;
          top: 0 !important; left: 0 !important;
          border-radius: 100px !important;
        }
        @keyframes lmb-ripple {
          0%   { transform: translate(-50%,-50%) scale(0); opacity: 0.6; }
          100% { transform: translate(-50%,-50%) scale(4); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }

    if (shaderRef.current) {
      if (shaderMount.current?.destroy) shaderMount.current.destroy();
      shaderMount.current = new ShaderMount(
        shaderRef.current,
        liquidMetalFragmentShader,
        {
          u_repetition: 4, u_softness: 0.5,
          u_shiftRed: 0.3, u_shiftBlue: 0.3,
          u_distortion: 0, u_contour: 0,
          u_angle: 45, u_scale: 8,
          u_shape: 1, u_offsetX: 0.1, u_offsetY: -0.1,
        },
        undefined,
        0.6,
      );
    }

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(0.6);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    shaderMount.current?.setSpeed?.(2.4);
    setTimeout(() => {
      shaderMount.current?.setSpeed?.(isHovered ? 1 : 0.6);
    }, 300);

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const ripple = { x: e.clientX - rect.left, y: e.clientY - rect.top, id: rippleId.current++ };
      setRipples((prev) => [...prev, ripple]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== ripple.id)), 600);
    }

    if (href) {
      window.location.href = href;
    } else {
      onClick?.();
    }
  };

  return (
    <div className={`relative inline-block ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}>
      <div style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}>
        <div style={{ position: 'relative', width: `${dims.width}px`, height: `${dims.height}px`, transformStyle: 'preserve-3d', transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)' }}>

          {/* Label layer */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', transformStyle: 'preserve-3d', transform: 'translateZ(20px)', zIndex: 30, pointerEvents: 'none' }}>
            <span style={{ fontSize: '14px', color: '#666666', fontWeight: 400, textShadow: '0px 1px 2px rgba(0,0,0,0.5)', whiteSpace: 'nowrap' }}>
              {label}
            </span>
          </div>

          {/* Inner dark ring */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: `translateZ(10px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'scale(1)'}`, transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)', zIndex: 20 }}>
            <div style={{ width: `${dims.innerWidth}px`, height: `${dims.innerHeight}px`, margin: '2px', borderRadius: '100px', background: 'linear-gradient(180deg,#202020 0%,#000000 100%)', boxShadow: isPressed ? 'inset 0px 2px 4px rgba(0,0,0,0.4)' : 'none', transition: 'box-shadow 0.15s ease' }} />
          </div>

          {/* Shader layer */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transformStyle: 'preserve-3d', transform: `translateZ(0px) ${isPressed ? 'translateY(1px) scale(0.98)' : 'scale(1)'}`, transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)', zIndex: 10 }}>
            <div style={{ height: `${dims.height}px`, width: `${dims.width}px`, borderRadius: '100px', boxShadow: isPressed
              ? '0px 0px 0px 1px rgba(0,0,0,0.5), 0px 1px 2px rgba(0,0,0,0.3)'
              : isHovered
                ? '0px 0px 0px 1px rgba(0,0,0,0.4), 0px 12px 6px rgba(0,0,0,0.05), 0px 8px 5px rgba(0,0,0,0.1), 0px 4px 4px rgba(0,0,0,0.15), 0px 1px 2px rgba(0,0,0,0.2)'
                : '0px 0px 0px 1px rgba(0,0,0,0.3), 0px 9px 9px rgba(0,0,0,0.12), 0px 2px 5px rgba(0,0,0,0.15)',
              transition: 'box-shadow 0.15s ease', background: 'transparent' }}>
              <div ref={shaderRef} className="lmb-shader-container" style={{ borderRadius: '100px', overflow: 'hidden', position: 'relative', width: `${dims.width}px`, height: `${dims.height}px` }} />
            </div>
          </div>

          {/* Clickable button */}
          <button
            ref={buttonRef}
            type={type}
            disabled={disabled}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => !disabled && setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer', outline: 'none', zIndex: 40, transformStyle: 'preserve-3d', transform: 'translateZ(25px)', transition: 'all 0.8s cubic-bezier(0.34,1.56,0.64,1)', overflow: 'hidden', borderRadius: '100px' }}
            aria-label={label}
          >
            {ripples.map((r) => (
              <span key={r.id} style={{ position: 'absolute', left: `${r.x}px`, top: `${r.y}px`, width: '20px', height: '20px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 70%)', pointerEvents: 'none', animation: 'lmb-ripple 0.6s ease-out' }} />
            ))}
          </button>

        </div>
      </div>
    </div>
  );
}
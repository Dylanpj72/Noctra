'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function TextHoverEffect({
  text,
  duration,
}: {
  text: string;
  duration?: number;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  // Generate unique IDs so multiple instances on the same page don't conflict
  const uid = React.useId().replace(/:/g, '');
  const gradientId = `tg-${uid}`;
  const revealId   = `rm-${uid}`;
  const maskId     = `tm-${uid}`;

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setMaskPosition({
        cx: `${((cursor.x - rect.left) / rect.width) * 100}%`,
        cy: `${((cursor.y - rect.top)  / rect.height) * 100}%`,
      });
    }
  }, [cursor]);

  const textAttrs = {
    x: '50%',
    y: '50%',
    textAnchor: 'middle'    as const,
    dominantBaseline: 'middle' as const,
    strokeWidth: '0.3',
    fontSize:    '88',
    fontWeight:  '900',
    fontFamily:  "var(--font-inter), 'Inter', 'Helvetica Neue', sans-serif",
    style: { letterSpacing: '-0.06em' } as React.CSSProperties,
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        {/* Rainbow gradient applied to the cursor-revealed layer */}
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="500"
          y2="0"
        >
          {hovered && (
            <>
              <stop offset="0%"   stopColor="#eab308" />
              <stop offset="25%"  stopColor="#ef4444" />
              <stop offset="50%"  stopColor="#3b82f6" />
              <stop offset="75%"  stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </>
          )}
        </linearGradient>

        {/* Radial gradient that follows the cursor — used as the reveal mask */}
        <motion.radialGradient
          id={revealId}
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: '50%', cy: '50%' }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: 'easeOut' }}
        >
          <stop offset="0%"   stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id={maskId}>
          <rect x="0" y="0" width="100%" height="100%" fill={`url(#${revealId})`} />
        </mask>
      </defs>

      {/* Layer 1 — ghost stroke (fades in on hover) */}
      <text
        {...textAttrs}
        className="fill-transparent"
        stroke="rgba(255,255,255,0.08)"
        style={{ ...textAttrs.style, opacity: hovered ? 0.7 : 0, transition: 'opacity 0.3s ease' }}
      >
        {text}
      </text>

      {/* Layer 2 — animated draw-on stroke (plays once on mount) */}
      <motion.text
        {...textAttrs}
        className="fill-transparent"
        stroke="rgba(255,255,255,0.06)"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{ strokeDashoffset: 0, strokeDasharray: 1000 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
        {text}
      </motion.text>

      {/* Layer 3 — rainbow stroke revealed near cursor via radial mask */}
      <text
        {...textAttrs}
        className="fill-transparent"
        stroke={`url(#${gradientId})`}
        mask={`url(#${maskId})`}
      >
        {text}
      </text>
    </svg>
  );
}
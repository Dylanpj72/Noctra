'use client';

import { useRef } from 'react';
import { useTransform, motion } from 'motion/react';
import { galleryWorks, GalleryCard, useCarouselLock, CARD_H, RADIUS } from './SelectedWork';

// Re-uses the shared scroll-lock hook and card component from SelectedWork.
// No internal heading — the Work page supplies its own page header above this.
export function WorkCarousel() {
  const sectionRef   = useRef<HTMLElement>(null);
  const rotMV        = useCarouselLock(sectionRef);
  const hintOpacity  = useTransform(rotMV, [0, 20], [1, 0]);
  const anglePerItem = 360 / galleryWorks.length;

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black isolate overflow-hidden"
      aria-label="Work gallery"
    >
      <div
        className="relative w-full h-full"
        style={{ perspective: '2000px' }}
        role="region"
      >
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d', rotateY: rotMV }}
        >
          {galleryWorks.map((work, i) => (
            <GalleryCard key={work.id} work={work} itemAngle={i * anglePerItem} rotMV={rotMV} />
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.p
        style={{ opacity: hintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-[family-name:var(--font-jetbrains-mono)] text-[10px] tracking-[0.25em] uppercase text-[#5a5a62] pointer-events-none select-none whitespace-nowrap"
        aria-hidden="true"
      >
        Scroll to explore ↓
      </motion.p>
    </section>
  );
}
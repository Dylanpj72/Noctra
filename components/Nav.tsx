'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Floating pill nav */}
      <nav
        aria-label="Main navigation"
        className="relative z-30 flex justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative flex items-center gap-1 px-1.5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_rgba(0,0,0,0.5)]"
        >
          {/* Top highlight */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
          />

          {/* Home button — non-home pages only */}
          {!isHome && (
            <Link
              href="/"
              className="hidden md:flex items-center gap-1.5 px-4 py-2.5 text-[13px] font-[500] text-white rounded-full border border-white/[0.12] bg-white/[0.04] transition-all duration-300 hover:bg-white/[0.08] hover:border-white/[0.22] focus-visible:outline-2 focus-visible:outline-white mr-1"
            >
              ← Home
            </Link>
          )}

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2.5 text-[13px] font-[400] text-[#8a8a92] rounded-full border border-transparent transition-colors duration-300 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <a
            href="/contact"
            className="px-4 py-2.5 text-[13px] font-semibold text-black bg-white rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_0_4px_rgba(255,255,255,0.1),0_12px_40px_rgba(255,255,255,0.15)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ml-1"
          >
            Contact ↗
          </a>

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden items-center justify-center w-10 h-10 text-white rounded-full border border-white/10 bg-white/[0.04] transition-colors hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-white mr-0.5"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              {menuOpen ? (
                <>
                  <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="2" y1="5" x2="14" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="11" x2="14" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </motion.div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-2"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <button
              className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center text-white rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            {!isHome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Link
                  href="/"
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] bg-white/[0.04] text-[14px] font-[500] text-white mb-4"
                  onClick={() => setMenuOpen(false)}
                >
                  ← Home
                </Link>
              </motion.div>
            )}
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                className="text-[40px] font-[900] uppercase tracking-[-0.04em] text-white hover:text-[#f5d020] transition-colors py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06, duration: 0.4 }}
              className="mt-6 px-8 py-4 text-[14px] font-semibold text-black bg-white rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Contact ↗
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
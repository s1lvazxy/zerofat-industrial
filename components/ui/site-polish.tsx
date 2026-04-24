"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { BrandMark } from "./brand-mark";

const EASE = [0.76, 0, 0.24, 1] as const;

/* ───────────────── Intro Curtain ───────────────── */

function IntroCurtain() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Skip intro if user has seen it this session
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("zf-intro-seen");
    if (seen) return;
    setOpen(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      setOpen(false);
      document.body.style.overflow = "";
      sessionStorage.setItem("zf-intro-seen", "1");
    }, 2200);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--color-ink)]"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "inset(0 0 100% 0)",
            transition: { duration: 0.9, ease: EASE },
          }}
        >
          <motion.div
            className="flex items-center gap-4 text-white"
            initial={{ opacity: 0, y: 14 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: EASE, delay: 0.2 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.3, ease: EASE },
            }}
          >
            <motion.span
              className="inline-flex size-12 items-center justify-center rounded-full bg-white"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: 1,
                rotate: 0,
                transition: { duration: 0.9, ease: EASE, delay: 0.1 },
              }}
            >
              <BrandMark className="size-9" />
            </motion.span>
            <motion.span
              className="font-display text-4xl tracking-tight md:text-5xl"
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.7, ease: EASE, delay: 0.45 },
              }}
            >
              ZeroFat
            </motion.span>
          </motion.div>

          {/* thin sweep */}
          <motion.div
            className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left bg-white/40"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              transition: { duration: 1.6, ease: EASE, delay: 0.2 },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ───────────────── Scroll progress bar ───────────────── */

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[color:var(--color-accent-strong)] via-[#60a5fa] to-[color:var(--color-ink)]"
    />
  );
}

/* ───────────────── Grain overlay ───────────────── */

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.06] mix-blend-multiply"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        backgroundSize: "160px 160px",
      }}
    />
  );
}

/* ───────────────── Public wrapper ───────────────── */

export function SitePolish() {
  return (
    <>
      <ScrollProgress />
      <Grain />
      <IntroCurtain />
    </>
  );
}

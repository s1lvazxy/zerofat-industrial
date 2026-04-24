"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  type SVGProps,
} from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { BrandMark } from "./brand-mark";

const EASE = [0.76, 0, 0.24, 1] as const;

export interface NavItem {
  heading: string;
  href: string;
}

export interface CurvedMenuProps {
  navItems?: NavItem[];
  wordmark?: string;
  footer?: ReactNode;
}

const defaultNavItems: NavItem[] = [
  { heading: "Home", href: "#home" },
  { heading: "Sobre", href: "#sobre" },
  { heading: "Tecnologia", href: "#features" },
  { heading: "Produtos", href: "#produtos" },
  { heading: "Depoimentos", href: "#depoimentos" },
  { heading: "Contacto", href: "#contacto" },
];

const menuSlide = {
  initial: { x: "calc(100% + 120px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: EASE } },
  exit: {
    x: "calc(100% + 120px)",
    transition: { duration: 0.8, ease: EASE },
  },
};

/* ─────────────────────────── Social icons (inline, lucide-react@1.11 has no brands) ─────────────────────────── */

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M24 12.07C24 5.44 18.63.07 12 .07S0 5.44 0 12.07c0 5.99 4.39 10.96 10.13 11.85v-8.38H7.08v-3.47h3.05V9.43c0-3 1.79-4.67 4.53-4.67 1.31 0 2.69.23 2.69.23v2.95h-1.51c-1.49 0-1.96.92-1.96 1.87v2.25h3.33l-.53 3.47h-2.8v8.38C19.61 23.03 24 18.06 24 12.07z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 5.77.13 4.9.34 4.14.63c-.79.3-1.46.72-2.13 1.38A5.89 5.89 0 0 0 .63 4.14C.34 4.9.13 5.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.27 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.89 5.89 0 0 0 2.13 1.38c.76.29 1.63.5 2.91.56 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c1.28-.06 2.15-.27 2.91-.56a5.89 5.89 0 0 0 2.13-1.38 5.89 5.89 0 0 0 1.38-2.13c.29-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.27-2.15-.56-2.91a5.89 5.89 0 0 0-1.38-2.13A5.89 5.89 0 0 0 19.86.63C19.1.34 18.23.13 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.84a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

/* ─────────────────────────── NavLink with per-letter hover displacement ─────────────────────────── */

function NavLink({
  item,
  index,
  onClose,
}: {
  item: NavItem;
  index: number;
  onClose: () => void;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      onClick={onClose}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-[color:var(--color-ink)]/10 py-5 md:py-7"
    >
      <a
        ref={ref}
        onMouseMove={handleMouseMove}
        href={item.href}
        className="relative flex w-full items-baseline gap-4"
      >
        <span className="font-display text-sm font-normal text-[color:var(--color-text-dim)] tabular-nums">
          0{index}
        </span>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -10 },
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 22,
            staggerChildren: 0.03,
          }}
          className="font-display text-4xl leading-none tracking-tight text-[color:var(--color-ink)] md:text-5xl"
        >
          {item.heading.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 10 },
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="inline-block"
            >
              {letter === " " ? " " : letter}
            </motion.span>
          ))}
        </motion.span>
      </a>
    </motion.div>
  );
}

/* ─────────────────────────── Curved left-edge reveal ─────────────────────────── */

function Curve() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const update = () => setHeight(window.innerHeight);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!height) return null;

  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  return (
    <svg
      className="pointer-events-none absolute -left-[99px] top-0 h-full w-[100px] fill-white stroke-none"
      aria-hidden
    >
      <motion.path
        variants={{
          initial: { d: initialPath },
          enter: {
            d: targetPath,
            transition: { duration: 1, ease: EASE },
          },
          exit: {
            d: initialPath,
            transition: { duration: 0.8, ease: EASE },
          },
        }}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
}

/* ─────────────────────────── Panel body ─────────────────────────── */

function CurvedPanel({
  navItems,
  onClose,
  wordmark,
  footer,
}: {
  navItems: NavItem[];
  onClose: () => void;
  wordmark: string;
  footer?: ReactNode;
}) {
  return (
    <motion.aside
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 z-40 flex h-[100dvh] w-screen max-w-md flex-col bg-white md:max-w-xl"
    >
      <div className="flex h-full flex-col justify-between pt-16 md:pt-20">
        {/* Header + items */}
        <div className="flex flex-col gap-2 px-8 md:px-14">
          <div className="flex items-center justify-between border-b border-[color:var(--color-ink)]/10 pb-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-dim)]">
              Navegação
            </span>
            <span className="inline-flex items-center gap-2 font-display text-lg tracking-tight text-[color:var(--color-ink)]">
              <BrandMark className="size-5" />
              {wordmark}
            </span>
          </div>

          <nav className="mt-2">
            {navItems.map((item, i) => (
              <NavLink
                key={item.href}
                item={item}
                index={i + 1}
                onClose={onClose}
              />
            ))}
          </nav>
        </div>

        {/* Footer */}
        {footer}
      </div>

      <Curve />
    </motion.aside>
  );
}

function DefaultPanelFooter() {
  const socials = [
    { Icon: LinkedinIcon, href: "#", label: "LinkedIn" },
    {
      Icon: FacebookIcon,
      href: "https://www.facebook.com/tanque.desengordurante.zerofat/",
      label: "Facebook",
    },
    { Icon: InstagramIcon, href: "#", label: "Instagram" },
  ];

  return (
    <div className="flex flex-col gap-5 border-t border-[color:var(--color-ink)]/10 px-8 py-6 md:px-14 md:py-8">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-dim)]">
          Contacto
        </span>
        <a
          href="mailto:info@zerofat.pt"
          className="text-sm text-[color:var(--color-ink)] transition-opacity hover:opacity-70"
        >
          info@zerofat.pt
        </a>
        <a
          href="tel:+351234000000"
          className="text-sm text-[color:var(--color-text-muted)] transition-opacity hover:opacity-70"
        >
          +351 234 000 000
        </a>
      </div>

      <div className="flex items-center gap-3">
        {socials.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className="flex size-9 items-center justify-center rounded-full border border-[color:var(--color-border)] text-[color:var(--color-text-muted)] transition-colors hover:border-[color:var(--color-ink)] hover:text-[color:var(--color-ink)]"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Trigger + wordmark ─────────────────────────── */

export default function CurvedMenu({
  navItems = defaultNavItems,
  wordmark = "ZeroFat",
  footer = <DefaultPanelFooter />,
}: CurvedMenuProps) {
  const [isActive, setIsActive] = useState(false);
  const [onDark, setOnDark] = useState(true);

  // Track scroll to invert the persistent UI colors over dark/light sections
  useEffect(() => {
    const onScroll = () => setOnDark(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (!isActive) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isActive]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsActive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const persistentOnDark = onDark && !isActive;

  return (
    <>
      {/* Persistent wordmark (top-left) */}
      <a
        href="#home"
        className={`group fixed left-6 top-6 z-50 flex items-center gap-2.5 transition-colors duration-300 md:left-8 md:top-8 ${
          persistentOnDark ? "text-white" : "text-[color:var(--color-ink)]"
        }`}
      >
        <span
          className={`relative inline-flex size-9 items-center justify-center rounded-full ring-1 transition-all duration-500 ${
            persistentOnDark
              ? "bg-white/95 ring-white/40 backdrop-blur"
              : "bg-white ring-[color:var(--color-ink)]/10"
          }`}
        >
          <BrandMark className="size-[26px] transition-transform duration-[900ms] ease-out group-hover:rotate-[360deg]" />
        </span>
        <span className="font-display text-base tracking-tight">
          {wordmark}
        </span>
      </a>

      {/* Trigger */}
      <button
        type="button"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isActive}
        onClick={() => setIsActive((v) => !v)}
        className={`fixed right-6 top-6 z-50 flex size-12 items-center justify-center rounded-full transition-colors duration-300 md:right-8 md:top-8 ${
          isActive
            ? "bg-[color:var(--color-ink)] text-white"
            : persistentOnDark
              ? "bg-white/95 text-[color:var(--color-ink)] backdrop-blur"
              : "bg-[color:var(--color-ink)] text-white"
        }`}
      >
        <span className="relative block h-3.5 w-5">
          <span
            className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${
              isActive ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-current transition-opacity duration-300 ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${
              isActive ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </span>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            onClick={() => setIsActive(false)}
            className="fixed inset-0 z-30 bg-[color:var(--color-ink)]/40 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* Panel */}
      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedPanel
            key="panel"
            navItems={navItems}
            wordmark={wordmark}
            footer={footer}
            onClose={() => setIsActive(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

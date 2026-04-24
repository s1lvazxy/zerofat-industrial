"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const;

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  model: string;
  initials: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Reduziu o nosso tempo de limpeza em 60%. ROI em menos de oito meses.",
    name: "Miguel Costa",
    role: "Dir. Produção",
    company: "MetalParts",
    model: "ZF-220",
    initials: "MC",
    rating: 5,
  },
  {
    quote:
      "Trabalha três turnos há quatro anos sem avarias. O suporte responde em minutos — não em dias.",
    name: "Ana Silva",
    role: "Ops Manager",
    company: "AutoPeças Norte",
    model: "ZF-320",
    initials: "AS",
    rating: 5,
  },
  {
    quote:
      "A integração Industry 4.0 foi decisiva para o nosso projeto de automação. Plug-and-play real.",
    name: "Rui Ferreira",
    role: "CTO",
    company: "IndusTech",
    model: "ZF-540",
    initials: "RF",
    rating: 5,
  },
  {
    quote:
      "Consumo de água caiu 40%. Sem químicos agressivos, os nossos colaboradores finalmente trabalham num ambiente limpo.",
    name: "Catarina Mendes",
    role: "HSE Manager",
    company: "Alimentar Lusa",
    model: "ZF-220",
    initials: "CM",
    rating: 5,
  },
  {
    quote:
      "Avaliámos quatro fornecedores europeus. A ZeroFat foi a única com demonstração na nossa fábrica em 72 horas.",
    name: "Pedro Almeida",
    role: "Procurement",
    company: "Aero Portugal",
    model: "ZF-540",
    initials: "PA",
    rating: 5,
  },
  {
    quote:
      "Uma máquina compacta, silenciosa e extremamente eficiente. Perfeita para a nossa oficina de precisão.",
    name: "Joana Ribeiro",
    role: "Proprietária",
    company: "Mecânica JR",
    model: "ZF-150",
    initials: "JR",
    rating: 5,
  },
];

const rowA = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
const rowB = [...testimonials.slice(3), ...testimonials.slice(3)];

export function SlidingTestimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[color:var(--color-surface)] py-24 md:py-32"
    >
      {/* Top/bottom hairlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)]/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)]/60 to-transparent"
      />

      {/* Soft glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_70%)]"
      />

      {/* Header */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto mb-16 max-w-[var(--container-screen)] px-6 text-center md:mb-20 md:px-8"
      >
        <motion.span
          variants={fadeUp}
          className="eyebrow eyebrow--centered"
        >
          Clientes · {testimonials.length} opiniões
        </motion.span>
        <motion.h2 variants={fadeUp} className="section-title mt-4">
          Histórias que
          <br />
          <em className="italic text-[color:var(--color-accent-strong)]">
            valem mais
          </em>{" "}
          que folhas técnicas
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-lg text-[color:var(--color-text-muted)]"
        >
          Mais de 500 indústrias em 18 países confiam na ZeroFat todos os dias.
        </motion.p>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="flex flex-col gap-6"
      >
        <motion.div variants={fadeUp}>
          <MarqueeRow items={rowA} direction="forward" />
        </motion.div>
        <motion.div variants={fadeUp}>
          <MarqueeRow items={rowB} direction="reverse" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeRow({
  items,
  direction,
}: {
  items: Testimonial[];
  direction: "forward" | "reverse";
}) {
  return (
    <div
      className="group relative"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className={cn(
          "flex w-max gap-6 group-hover:[animation-play-state:paused]",
          direction === "forward"
            ? "animate-zf-slider"
            : "animate-zf-slider-reverse",
        )}
      >
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  const rating = t.rating ?? 5;
  return (
    <motion.article
      whileHover={{ y: -4, transition: { duration: 0.3, ease: EASE } }}
      className={cn(
        "relative flex w-[360px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] shadow-[0_1px_2px_rgba(10,31,61,0.04)] transition-[border-color,box-shadow] duration-400 hover:border-[color:var(--color-ink)]/20 hover:shadow-[0_20px_50px_-25px_rgba(10,31,61,0.2)] md:w-[440px]",
      )}
    >
      {/* Watermark quote */}
      <Quote
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-6 size-28 rotate-180 text-[color:var(--color-accent)] opacity-70"
        strokeWidth={1}
      />

      {/* Rating */}
      <div className="flex items-center gap-0.5 px-7 pt-7">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="size-3.5 fill-[color:var(--color-accent-strong)] text-[color:var(--color-accent-strong)]"
            aria-hidden
          />
        ))}
      </div>

      {/* Quote body */}
      <div className="relative z-10 flex-1 px-7 pb-6 pt-4">
        <p className="font-display text-2xl leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-[1.6rem]">
          {t.quote}
        </p>
      </div>

      {/* Footer */}
      <div className="relative flex items-stretch border-t border-[color:var(--color-border)]">
        {/* Author */}
        <div className="flex flex-1 items-center gap-3 px-5 py-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-accent)] font-display text-sm text-[color:var(--color-ink)]">
            {t.initials}
          </div>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-medium text-[color:var(--color-ink)]">
              {t.name}
            </span>
            <span className="truncate text-xs text-[color:var(--color-text-muted)]">
              {t.role}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-[color:var(--color-border)]" />

        {/* Company + model */}
        <div className="flex w-[42%] flex-col items-end justify-center gap-1 px-5 py-4 text-right">
          <span className="font-display text-base tracking-tight text-[color:var(--color-ink)]">
            {t.company}
          </span>
          <span className="inline-flex items-center gap-1.5 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-[color:var(--color-text-dim)]">
            <span className="size-1 rounded-full bg-[color:var(--color-accent-strong)]" />
            {t.model}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

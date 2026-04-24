"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  Droplets,
  Factory,
  Gauge,
  Headset,
  Leaf,
  Network,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Counter } from "@/app/components/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const staggerCards = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0 } },
};

const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const;

const marqueeItems = [
  { icon: BadgeCheck, label: "CE Mark" },
  { icon: ShieldCheck, label: "ISO 9001" },
  { icon: Leaf, label: "REACH Compliant" },
  { icon: Droplets, label: "Biodegradável" },
  { icon: Sparkles, label: "Ultrassons" },
  { icon: Factory, label: "Industry 4.0" },
];

export function Features11() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-[color:var(--color-surface)] py-24 md:py-32"
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_65%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)]/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-border-strong)]/60 to-transparent"
      />

      <div className="relative mx-auto max-w-[var(--container-screen)] px-6 md:px-8">
        {/* Header — editorial */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-16 grid items-end gap-8 md:mb-24 md:grid-cols-12"
        >
          <motion.div variants={fadeUp} className="md:col-span-7">
            <span className="eyebrow mb-4">Tecnologia</span>
            <h2 className="section-title mt-4">
              Por que escolher
              <br />
              <em className="italic text-[color:var(--color-accent-strong)]">
                a ZeroFat
              </em>
              ?
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} className="md:col-span-5">
            <p className="text-lg leading-relaxed text-[color:var(--color-text-muted)]">
              Seis pilares. Uma missão: entregar a limpeza industrial mais
              eficiente e responsável do mercado — sem compromissos.
            </p>
          </motion.div>
        </motion.div>

        {/* Bento — asymmetric 12-col grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5"
        >
          {/* HERO CARD — dark, takes 7 cols × 2 rows */}
          <motion.div
            variants={fadeIn}
            className="group relative col-span-1 overflow-hidden rounded-[28px] bg-[color:var(--color-ink)] p-8 text-white md:col-span-7 md:row-span-2 md:p-12"
          >
            {/* Radial glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,236,255,0.18),transparent_55%)]"
            />
            {/* Grid pattern */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:64px_64px]"
            />

            <div className="relative flex h-full flex-col">
              <div className="mb-10 flex items-start justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)]">
                  <span className="size-1.5 animate-pulse rounded-full bg-[color:var(--color-accent)]" />
                  feature · 01
                </span>
                <span className="font-display text-[0.9rem] text-white/40">
                  / monitorização
                </span>
              </div>

              <div className="mb-10 max-w-xl">
                <h3 className="font-display text-4xl leading-[1.05] md:text-6xl">
                  Cada ciclo <em className="italic text-[color:var(--color-accent)]">visível</em> ao segundo.
                </h3>
                <p className="mt-5 max-w-md text-white/65">
                  Telemetria industrial ao vivo — consumos, temperatura,
                  pressão e eficiência — tudo num painel único acessível a
                  partir de qualquer dispositivo.
                </p>
              </div>

              {/* Live mini-dashboard */}
              <div className="mt-auto grid gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm md:grid-cols-[1fr_auto]">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Temp.", value: "62°", icon: Gauge },
                    { label: "Pressão", value: "4.2b", icon: Activity },
                    { label: "Eficácia", value: "98%", icon: Sparkles },
                  ].map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/10 bg-[color:var(--color-ink)]/60 px-3 py-3"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <Icon
                          className="size-3.5 text-[color:var(--color-accent)]/70"
                          aria-hidden
                        />
                        <span className="text-[0.6rem] uppercase tracking-[0.18em] text-white/40">
                          {label}
                        </span>
                      </div>
                      <p className="font-display text-xl text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1 rounded-xl border border-white/10 bg-[color:var(--color-ink)]/60 px-3 py-3 md:w-40">
                  {[40, 55, 48, 70, 62, 85, 78, 92, 80, 95, 88, 72].map(
                    (h, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={viewport}
                        transition={{
                          duration: 0.6,
                          delay: 0.6 + i * 0.04,
                          ease: EASE,
                        }}
                        className="w-full rounded-sm bg-gradient-to-t from-[color:var(--color-accent-strong)]/80 to-[color:var(--color-accent)]"
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Big number card — 5 cols */}
          <motion.div
            variants={fadeIn}
            className="group relative col-span-1 overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 transition-colors duration-500 hover:border-[color:var(--color-border-strong)] md:col-span-5 md:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                feature · 02
              </span>
              <ArrowUpRight className="size-5 text-[color:var(--color-text-dim)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[color:var(--color-accent-strong)]" />
            </div>

            <div className="mt-10 flex items-baseline gap-1 tabular-nums">
              <span className="font-display text-7xl leading-none tracking-tight text-[color:var(--color-ink)] md:text-8xl">
                <Counter to={98} duration={2} />
              </span>
              <span className="font-display text-4xl text-[color:var(--color-accent-strong)] md:text-5xl">
                %
              </span>
            </div>
            <p className="mt-3 font-display text-2xl text-[color:var(--color-ink)]">
              de remoção de gordura
            </p>
            <p className="mt-2 max-w-xs text-sm text-[color:var(--color-text-muted)]">
              Em ciclo único. Menos retrabalho, zero refugo.
            </p>

            {/* Animated bar */}
            <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--color-border)]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "98%" }}
                viewport={viewport}
                transition={{ duration: 1.8, ease: EASE, delay: 0.3 }}
                className="h-full rounded-full bg-gradient-to-r from-[color:var(--color-accent-strong)] to-[color:var(--color-accent)]"
              />
            </div>
          </motion.div>

          {/* Support card — 5 cols */}
          <motion.div
            variants={fadeIn}
            className="group relative col-span-1 overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 transition-colors duration-500 hover:border-[color:var(--color-border-strong)] md:col-span-5 md:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                feature · 03
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-ink)]">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Online
              </span>
            </div>

            <h3 className="mt-10 font-display text-3xl text-[color:var(--color-ink)] md:text-4xl">
              Suporte técnico
              <br />
              <em className="italic text-[color:var(--color-accent-strong)]">
                24 / 7 · 365
              </em>
            </h3>
            <p className="mt-3 max-w-xs text-sm text-[color:var(--color-text-muted)]">
              Engenheiros em linha direta. Tempo médio de resposta sempre
              abaixo dos 10 minutos.
            </p>

            <div className="mt-8 flex items-center justify-between rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[11, 32, 47, 58].map((n, i) => (
                    <div
                      key={i}
                      className="relative size-9 overflow-hidden rounded-full border-2 border-[color:var(--color-surface)] bg-[color:var(--color-accent)]"
                    >
                      <img
                        src={`https://i.pravatar.cc/80?img=${n}`}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="flex size-9 items-center justify-center rounded-full border-2 border-[color:var(--color-surface)] bg-[color:var(--color-ink)] text-[0.65rem] font-semibold text-[color:var(--color-accent)]">
                    +12
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-[color:var(--color-ink)]">
                <Headset
                  className="size-4 text-[color:var(--color-accent-strong)]"
                  aria-hidden
                />
                <div className="leading-tight">
                  <p className="font-display text-xl">
                    ~<Counter to={7} duration={1.8} />
                    <span className="text-sm text-[color:var(--color-text-muted)]">
                      {" "}
                      min
                    </span>
                  </p>
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]">
                    resposta
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Eco card — 4 cols */}
          <motion.div
            variants={fadeIn}
            className="group relative col-span-1 overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 transition-colors duration-500 hover:border-[color:var(--color-border-strong)] md:col-span-4 md:p-10"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,var(--color-accent),transparent_70%)] opacity-60"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
                  feature · 04
                </span>
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-accent-strong)]">
                  <Leaf className="size-5" aria-hidden />
                </span>
              </div>

              <h3 className="mt-10 font-display text-3xl leading-tight text-[color:var(--color-ink)]">
                Zero químicos
                <br />
                <em className="italic text-[color:var(--color-accent-strong)]">
                  tóxicos
                </em>
              </h3>

              <div className="mt-8 space-y-3">
                {[
                  { label: "Biodegradável", pct: 100 },
                  { label: "Redução CO₂", pct: 64 },
                  { label: "Água reutilizada", pct: 87 },
                ].map((m, i) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[color:var(--color-text-muted)]">
                        {m.label}
                      </span>
                      <span className="font-display text-sm text-[color:var(--color-ink)]">
                        {m.pct}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-[3px] w-full overflow-hidden rounded-full bg-[color:var(--color-border)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.pct}%` }}
                        viewport={viewport}
                        transition={{
                          duration: 1.4,
                          ease: EASE,
                          delay: 0.3 + i * 0.12,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[color:var(--color-accent-strong)] to-[color:var(--color-accent)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Integration card — 4 cols */}
          <motion.div
            variants={fadeIn}
            className="group relative col-span-1 overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 transition-colors duration-500 hover:border-[color:var(--color-border-strong)] md:col-span-4 md:p-10"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
              feature · 05
            </span>

            <h3 className="mt-8 font-display text-3xl text-[color:var(--color-ink)]">
              Integra-se onde já estás
            </h3>

            {/* Orbital network */}
            <div className="relative mt-8 flex h-48 items-center justify-center">
              <svg
                aria-hidden
                viewBox="-100 -100 200 200"
                className="absolute inset-0 h-full w-full"
              >
                <circle
                  cx="0"
                  cy="0"
                  r="75"
                  fill="none"
                  stroke="var(--color-border)"
                  strokeWidth="0.5"
                />
                {[0, 72, 144, 216, 288].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = Math.cos(rad) * 75;
                  const y = Math.sin(rad) * 75;
                  return (
                    <motion.line
                      key={i}
                      x1="0"
                      y1="0"
                      x2={x}
                      y2={y}
                      stroke="var(--color-border-strong)"
                      strokeWidth="0.5"
                      strokeDasharray="2 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.6 }}
                      viewport={viewport}
                      transition={{
                        duration: 0.8,
                        delay: 0.3 + i * 0.06,
                        ease: EASE,
                      }}
                    />
                  );
                })}
              </svg>

              <div className="relative flex size-14 items-center justify-center rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-accent)] shadow-[0_8px_24px_-8px_rgba(10,31,61,0.4)]">
                <Network className="size-6" aria-hidden />
              </div>

              {[
                { icon: Factory, angle: 0 },
                { icon: Zap, angle: 72 },
                { icon: ShieldCheck, angle: 144 },
                { icon: BadgeCheck, angle: 216 },
                { icon: Activity, angle: 288 },
              ].map(({ icon: Icon, angle }, i) => {
                const rad = (angle * Math.PI) / 180;
                const r = 75;
                const x = Math.cos(rad) * r;
                const y = Math.sin(rad) * r;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, x, y }}
                    whileInView={{ opacity: 1, scale: 1, x, y }}
                    viewport={viewport}
                    transition={{
                      duration: 0.5,
                      ease: EASE,
                      delay: 0.6 + i * 0.08,
                    }}
                    className="absolute flex size-10 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] text-[color:var(--color-ink)] shadow-sm"
                  >
                    <Icon className="size-4" aria-hidden />
                  </motion.div>
                );
              })}
            </div>

            <p className="mt-4 text-sm text-[color:var(--color-text-muted)]">
              OPC-UA · Modbus · MQTT
            </p>
          </motion.div>

          {/* Low maintenance — 4 cols */}
          <motion.div
            variants={fadeIn}
            className="group relative col-span-1 overflow-hidden rounded-[28px] border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8 transition-colors duration-500 hover:border-[color:var(--color-border-strong)] md:col-span-4 md:p-10"
          >
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
              feature · 06
            </span>

            <h3 className="mt-8 font-display text-3xl text-[color:var(--color-ink)]">
              Construída para
              <br />
              <em className="italic text-[color:var(--color-accent-strong)]">
                durar décadas
              </em>
            </h3>

            <div className="mt-8 flex items-baseline gap-1 tabular-nums">
              <span className="font-display text-6xl leading-none text-[color:var(--color-ink)]">
                <Counter to={15} duration={1.8} />
              </span>
              <span className="font-display text-2xl text-[color:var(--color-accent-strong)]">
                anos+
              </span>
            </div>
            <p className="mt-2 text-sm text-[color:var(--color-text-muted)]">
              de vida útil média. Componentes aço inox, garantia estendida e
              peças sempre em stock.
            </p>
          </motion.div>
        </motion.div>

        {/* Marquee — certifications ticker */}
        <div className="relative mt-16 overflow-hidden md:mt-24">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--color-surface)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--color-surface)] to-transparent" />

          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map(
              ({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex shrink-0 items-center gap-3 text-[color:var(--color-text-dim)]"
                >
                  <Icon className="size-5" aria-hidden />
                  <span className="font-display text-2xl">{label}</span>
                  <span className="text-[color:var(--color-border-strong)]">
                    ·
                  </span>
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

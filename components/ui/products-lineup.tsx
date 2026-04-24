"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const;

interface Produto {
  model: string;
  tag: string;
  badgeVariant: "secondary" | "default" | "accent";
  capacity: number; // litros
  minDaily: number; // ciclos/dia mínimos recomendados
  maxDaily: number; // ciclos/dia máximos confortáveis
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  featured?: boolean;
}

const produtos: Produto[] = [
  {
    model: "ZF-150",
    tag: "Compacta",
    badgeVariant: "secondary",
    capacity: 150,
    minDaily: 1,
    maxDaily: 10,
    description:
      "Para oficinas e pequenas séries. Instala-se em minutos, ocupa o mínimo de espaço.",
    specs: [
      { label: "Capacidade", value: "150 L" },
      { label: "Temperatura", value: "até 80°C" },
      { label: "Potência", value: "2,2 kW" },
      { label: "Filtragem", value: "3 estágios" },
    ],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
  },
  {
    model: "ZF-220",
    tag: "Mais Vendida",
    badgeVariant: "default",
    capacity: 220,
    minDaily: 8,
    maxDaily: 22,
    description:
      "O equilíbrio perfeito entre capacidade e consumo. Eleita por PMEs em toda a Europa.",
    specs: [
      { label: "Capacidade", value: "220 L" },
      { label: "Temperatura", value: "até 85°C" },
      { label: "Potência", value: "3,7 kW" },
      { label: "Filtragem", value: "4 estágios" },
    ],
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=80",
    featured: true,
  },
  {
    model: "ZF-540",
    tag: "Pro Industrial",
    badgeVariant: "accent",
    capacity: 540,
    minDaily: 18,
    maxDaily: 60,
    description:
      "Potência de grande indústria. Industry 4.0 e drenagem automática de série.",
    specs: [
      { label: "Capacidade", value: "540 L" },
      { label: "Temperatura", value: "até 95°C" },
      { label: "Potência", value: "7,5 kW" },
      { label: "Filtragem", value: "6 est. + UV" },
    ],
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
  },
];

function getRecommended(daily: number): string {
  if (daily <= 10) return "ZF-150";
  if (daily <= 22) return "ZF-220";
  return "ZF-540";
}

export function ProductsLineup() {
  const [daily, setDaily] = useState(12);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const recommended = useMemo(() => getRecommended(daily), [daily]);
  const activeIdx =
    hoveredIdx !== null
      ? hoveredIdx
      : produtos.findIndex((p) => p.model === recommended);

  return (
    <section
      id="produtos"
      className="relative overflow-hidden bg-[color:var(--color-bg)] py-24 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-[var(--container-screen)] px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="eyebrow eyebrow--centered">
            Linha de Produtos
          </motion.span>
          <motion.h2 variants={fadeUp} className="section-title mt-4">
            Escolha o{" "}
            <em className="italic text-[color:var(--color-accent-strong)]">
              modelo ideal
            </em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-lg text-[color:var(--color-text-muted)]"
          >
            Três modelos para qualquer volume de produção. Use o cursor para
            descobrir qual se adequa ao seu ritmo.
          </motion.p>
        </motion.div>

        {/* Interactive selector */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto mb-16 max-w-xl rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 md:mb-20"
        >
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                Ciclos por dia
              </p>
              <div className="mt-1 flex items-baseline gap-2 tabular-nums">
                <span className="font-display text-5xl leading-none text-[color:var(--color-ink)]">
                  {daily}
                </span>
                <span className="text-sm text-[color:var(--color-text-muted)]">
                  ciclos / dia
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-text-muted)]">
                Recomendação
              </p>
              <div className="mt-1 flex items-center justify-end gap-2">
                <Sparkles
                  className="size-3.5 text-[color:var(--color-accent-strong)]"
                  aria-hidden
                />
                <span className="font-display text-xl text-[color:var(--color-ink)]">
                  ZeroFat{" "}
                  <em className="italic text-[color:var(--color-accent-strong)]">
                    {recommended}
                  </em>
                </span>
              </div>
            </div>
          </div>

          <input
            type="range"
            min={1}
            max={60}
            value={daily}
            onChange={(e) => {
              setDaily(Number(e.target.value));
              setHasInteracted(true);
            }}
            aria-label="Ciclos por dia"
            className="zf-range w-full"
            style={{ ["--_pct" as string]: `${(daily / 60) * 100}%` }}
          />

          <div className="mt-3 flex justify-between text-[0.65rem] uppercase tracking-[0.18em] text-[color:var(--color-text-dim)]">
            <span>1 ciclo</span>
            <span>30</span>
            <span>60+</span>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          onMouseLeave={() => setHoveredIdx(null)}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {produtos.map((p, i) => (
            <ProductCard
              key={p.model}
              produto={p}
              index={i}
              total={produtos.length}
              daily={daily}
              isActive={activeIdx === i}
              isRecommended={recommended === p.model}
              isIdle={!hasInteracted && hoveredIdx === null}
              onHover={() => {
                setHoveredIdx(i);
                setHasInteracted(true);
              }}
            />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

function ProductCard({
  produto,
  index,
  total,
  daily,
  isActive,
  isRecommended,
  isIdle,
  onHover,
}: {
  produto: Produto;
  index: number;
  total: number;
  daily: number;
  isActive: boolean;
  isRecommended: boolean;
  isIdle: boolean;
  onHover: () => void;
}) {
  const inRange = daily >= produto.minDaily && daily <= produto.maxDaily;
  const utilization = Math.min(
    100,
    Math.round((daily / produto.maxDaily) * 100),
  );
  const dark = !!produto.featured;

  const muted = dark ? "text-white/55" : "text-[color:var(--color-text-muted)]";
  const dim = dark ? "text-white/35" : "text-[color:var(--color-text-dim)]";
  const ink = dark ? "text-white" : "text-[color:var(--color-ink)]";
  const accent = dark
    ? "text-[color:var(--color-accent)]"
    : "text-[color:var(--color-accent-strong)]";
  const hairline = dark
    ? "border-white/10"
    : "border-[color:var(--color-border)]";

  return (
    <motion.article
      variants={fadeUp}
      onMouseEnter={onHover}
      animate={{
        scale: isIdle ? 1 : isActive ? 1.02 : 0.98,
        filter: isIdle || isActive ? "blur(0px)" : "blur(3px)",
        opacity: isIdle || isActive ? 1 : 0.5,
      }}
      transition={{ duration: 0.45, ease: EASE }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "transition-[border-color,box-shadow,background-color] duration-500",
        dark
          ? "bg-[color:var(--color-ink)] text-white"
          : "border border-[color:var(--color-border)] bg-[color:var(--color-bg)]",
        isActive &&
          !dark &&
          "border-[color:var(--color-ink)]/20 shadow-[0_40px_80px_-40px_rgba(10,31,61,0.3)]",
        isActive &&
          dark &&
          "shadow-[0_40px_90px_-30px_rgba(10,31,61,0.55)]",
      )}
    >
      {/* Top metadata bar */}
      <div
        className={cn(
          "relative flex items-center justify-between border-b px-6 py-4",
          hairline,
        )}
      >
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "size-1.5 rounded-full",
              dark
                ? "bg-[color:var(--color-accent)]"
                : "bg-[color:var(--color-accent-strong)]",
            )}
          />
          <span
            className={cn(
              "text-[0.65rem] font-semibold uppercase tracking-[0.22em]",
              dark ? "text-white/70" : "text-[color:var(--color-ink)]",
            )}
          >
            {produto.tag}
          </span>
        </div>
        <span
          className={cn(
            "font-display text-xs tabular-nums",
            dim,
          )}
        >
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>

        <AnimatePresence>
          {isRecommended ? (
            <motion.div
              key="recommended-badge"
              initial={{ opacity: 0, scale: 0.7, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.7, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className={cn(
                "absolute -top-2 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1 rounded-full px-2.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.22em] shadow-md",
                dark
                  ? "bg-[color:var(--color-accent)] text-[color:var(--color-accent-strong)]"
                  : "bg-[color:var(--color-ink)] text-[color:var(--color-accent)]",
              )}
            >
              <Sparkles className="size-2.5" aria-hidden />
              Recomendada
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ scale: isActive ? 1.05 : 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="aspect-[4/3] w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${produto.image})` }}
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            dark
              ? "bg-gradient-to-t from-[color:var(--color-ink)] via-[color:var(--color-ink)]/30 to-transparent"
              : "bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent",
          )}
        />
        {/* Capacity stamp bottom-left */}
        <div className="absolute bottom-4 left-5 flex items-baseline gap-1 tabular-nums">
          <span className={cn("font-display text-5xl leading-none", ink, dark && "text-white")}>
            {produto.capacity}
          </span>
          <span className={cn("font-display text-lg leading-none", dark ? "text-white/70" : "text-white")}>
            L
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 md:px-7 md:py-6">
        {/* Title */}
        <h3
          className={cn(
            "font-display text-3xl leading-none tracking-tight md:text-4xl",
            ink,
          )}
        >
          ZeroFat{" "}
          <em className={cn("italic", accent)}>{produto.model}</em>
        </h3>

        <p className={cn("mt-3 text-[13px] leading-relaxed", muted)}>
          {produto.description}
        </p>

        {/* Spec sheet */}
        <dl
          className={cn(
            "mt-6 divide-y border-y text-sm",
            hairline,
            dark ? "divide-white/10" : "divide-[color:var(--color-border)]",
          )}
        >
          {produto.specs.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline justify-between py-2.5"
            >
              <dt className={cn("text-[0.7rem] uppercase tracking-[0.14em]", muted)}>
                {s.label}
              </dt>
              <dd
                className={cn(
                  "font-display tabular-nums text-[15px]",
                  ink,
                )}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Utilization */}
        <div className="mt-6">
          <div className="mb-2 flex items-baseline justify-between">
            <span
              className={cn(
                "text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
                muted,
              )}
            >
              Carga · {daily} ciclos/dia
            </span>
            <span
              className={cn(
                "font-display tabular-nums text-sm",
                inRange ? accent : dim,
              )}
            >
              {utilization}%
            </span>
          </div>
          <div
            className={cn(
              "h-[3px] w-full overflow-hidden rounded-full",
              dark ? "bg-white/10" : "bg-[color:var(--color-border)]",
            )}
          >
            <motion.div
              animate={{ width: `${utilization}%` }}
              transition={{ duration: 0.4, ease: EASE }}
              className={cn(
                "h-full rounded-full",
                inRange
                  ? dark
                    ? "bg-gradient-to-r from-[color:var(--color-accent)] to-white"
                    : "bg-gradient-to-r from-[color:var(--color-accent-strong)] to-[color:var(--color-accent)]"
                  : dark
                    ? "bg-white/25"
                    : "bg-[color:var(--color-border-strong)]",
              )}
            />
          </div>
          <p className={cn("mt-2 text-[11px]", dim)}>
            Ideal entre {produto.minDaily}–{produto.maxDaily} ciclos/dia
          </p>
        </div>

        {/* CTA — editorial, full width */}
        <a
          href={`#contacto?model=${produto.model}`}
          className={cn(
            "group/cta mt-8 flex items-center justify-between border-t pt-5",
            hairline,
          )}
        >
          <span className={cn("font-display text-base", ink)}>
            Pedir orçamento
          </span>
          <span
            className={cn(
              "relative flex size-10 items-center justify-center overflow-hidden rounded-full transition-colors duration-400",
              dark
                ? "bg-[color:var(--color-accent)] text-[color:var(--color-ink)] group-hover/cta:bg-white"
                : "bg-[color:var(--color-ink)] text-[color:var(--color-accent)] group-hover/cta:bg-[color:var(--color-accent-strong)] group-hover/cta:text-white",
            )}
          >
            <ArrowUpRight className="absolute size-4 -translate-x-[130%] -translate-y-[130%] transition-transform duration-400 ease-out group-hover/cta:translate-x-0 group-hover/cta:translate-y-0" />
            <ArrowUpRight className="absolute size-4 transition-transform duration-400 ease-out group-hover/cta:translate-x-[130%] group-hover/cta:translate-y-[-130%]" />
          </span>
        </a>
      </div>
    </motion.article>
  );
}

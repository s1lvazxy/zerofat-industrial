"use client";

import { ArrowUpRight, Droplets, Factory, Leaf, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";

import { Button } from "@/components/ui/button";
import { Counter } from "@/app/components/Counter";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const viewport = { once: true, margin: "-10% 0px -10% 0px" } as const;

interface About3Props {
  eyebrow?: string;
  title?: string;
  description?: string;
  mainImage?: {
    src: string;
    alt: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
  };
  breakout?: {
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonUrl?: string;
  };
  companiesTitle?: string;
  companies?: Array<{
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
  }>;
  achievementsTitle?: string;
  achievementsDescription?: string;
  achievements?: Array<{
    label: string;
    value: string;
    suffix?: string;
    icon?: ComponentType<SVGProps<SVGSVGElement>>;
  }>;
}

const defaultCompanies = [
  { name: "MetalTech", icon: Factory },
  { name: "AutoPrime", icon: Zap },
  { name: "AeroParts", icon: Sparkles },
  { name: "FoodSafe", icon: Leaf },
  { name: "HydroClean", icon: Droplets },
  { name: "QualiSys", icon: ShieldCheck },
];

const defaultAchievements = [
  { label: "Empresas apoiadas", value: "500", suffix: "+", icon: Factory },
  { label: "Projetos concluídos", value: "1200", suffix: "+", icon: Sparkles },
  { label: "Clientes satisfeitos", value: "99", suffix: "%", icon: ShieldCheck },
  { label: "Países exportados", value: "18", icon: Droplets },
];

export const About3 = ({
  eyebrow = "Sobre a ZeroFat",
  title = "Sobre Nós",
  description = "Especialistas em desengorduramento industrial com tecnologia própria, entregando soluções eficientes que reduzem custos operacionais e respeitam o ambiente.",
  mainImage = {
    src: "/mainImage.png",
    alt: "Linha de produção industrial",
  },
  secondaryImage = {
    src: "/secondaryImage.png",
    alt: "Detalhe de máquina ZeroFat",
  },
  breakout = {
    icon: Sparkles,
    title: "Tecnologia desenvolvida em casa",
    description:
      "Sistemas de ultrassons, jatos de pressão e soluções aquosas biodegradáveis — combinados num único equipamento.",
    buttonText: "Descobrir mais",
    buttonUrl: "#produtos",
  },
  companiesTitle = "Confiam em nós empresas de referência",
  companies = defaultCompanies,
  achievementsTitle = "Os nossos números",
  achievementsDescription =
    "Mais de 15 anos a equipar a indústria metalomecânica, automóvel e alimentar com tecnologia de limpeza de alta performance.",
  achievements = defaultAchievements,
}: About3Props = {}) => {
  const BreakoutIcon = breakout.icon ?? Sparkles;

  return (
    <section
      id="sobre"
      className="relative bg-[color:var(--color-bg)] py-24 md:py-32"
    >
      <div className="relative mx-auto max-w-[var(--container-screen)] px-6 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mb-14 grid gap-6 text-center md:grid-cols-2 md:text-left"
        >
          <motion.div variants={fadeUp}>
            <span className="eyebrow eyebrow--centered md:[&]:justify-start md:before:hidden">
              {eyebrow}
            </span>
            <h2 className="section-title mt-4">{title}</h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-[color:var(--color-text-muted)] md:self-end"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid gap-7 lg:grid-cols-3"
        >
          <motion.img
            variants={fadeUp}
            src={mainImage.src}
            alt={mainImage.alt}
            className="size-full max-h-[620px] rounded-3xl border border-[color:var(--color-border)] object-cover lg:col-span-2"
          />
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            <motion.div
              variants={fadeUp}
              className="flex flex-col justify-between gap-6 rounded-3xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 md:w-1/2 lg:w-auto"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[color:var(--color-accent-strong)]">
                <BreakoutIcon className="size-6" aria-hidden />
              </span>
              <div>
                <p className="mb-2 font-display text-2xl leading-tight text-[color:var(--color-ink)]">
                  {breakout.title}
                </p>
                <p className="text-sm text-[color:var(--color-text-muted)] leading-relaxed">
                  {breakout.description}
                </p>
              </div>
              <Button
                variant="outline"
                className="mr-auto rounded-full border-[color:var(--color-border-strong)] bg-transparent text-[color:var(--color-ink)] hover:bg-[color:var(--color-accent)]"
                render={<a href={breakout.buttonUrl} />}
              >
                {breakout.buttonText}
                <ArrowUpRight className="size-4" />
              </Button>
            </motion.div>
            <motion.img
              variants={fadeUp}
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              className="grow basis-0 rounded-3xl border border-[color:var(--color-border)] object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="py-24"
        >
          <motion.p
            variants={fadeUp}
            className="text-center text-sm uppercase tracking-[0.18em] text-[color:var(--color-text-muted)]"
          >
            {companiesTitle}
          </motion.p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {companies.map(({ name, icon: Icon }, idx) => (
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-2 text-[color:var(--color-text-dim)] transition-colors hover:text-[color:var(--color-ink)]"
                key={name + idx}
              >
                <Icon className="size-5 md:size-6" aria-hidden />
                <span className="font-display text-lg md:text-xl">{name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="relative overflow-hidden rounded-3xl bg-[color:var(--color-ink)] p-10 text-[color:var(--color-bg)] md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,236,255,0.15),transparent_55%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1 right-1 hidden h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"
          />

          <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <motion.div
              variants={fadeUp}
              className="flex max-w-xl flex-col gap-4 text-center md:text-left"
            >
              <span className="inline-flex items-center gap-2 self-center text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--color-accent)] md:self-start">
                <span className="h-px w-8 bg-[color:var(--color-accent)]" />
                Impacto
              </span>
              <h3 className="font-display text-4xl leading-[1.05] md:text-6xl">
                {achievementsTitle}
              </h3>
              <p className="text-white/70 md:text-lg">
                {achievementsDescription}
              </p>
            </motion.div>
          </div>

          <div className="relative mt-16 grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
            {achievements.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label + idx}
                  variants={fadeUp}
                  className="group relative flex flex-col gap-5 px-6 py-8 md:px-8 md:py-2"
                >
                  <div className="flex items-center gap-3">
                    {Icon ? (
                      <Icon
                        className="size-4 text-[color:var(--color-accent)]/70"
                        aria-hidden
                      />
                    ) : null}
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/50">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 tabular-nums">
                    <span className="font-display text-6xl leading-[0.95] tracking-tight text-white md:text-7xl">
                      {Number.isFinite(Number(item.value)) ? (
                        <Counter to={Number(item.value)} duration={2.2} />
                      ) : (
                        item.value
                      )}
                    </span>
                    {item.suffix ? (
                      <span className="font-display text-3xl leading-none text-[color:var(--color-accent)] md:text-4xl">
                        {item.suffix}
                      </span>
                    ) : null}
                  </div>

                  <p className="max-w-[14ch] text-sm leading-snug text-white/65">
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

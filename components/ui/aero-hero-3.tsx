"use client";

import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type AeroHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description: string;
  primaryCta: { label: string; href: string };
  image: string;
  align?: "center" | "left";
};

export function AeroHero({
  eyebrow,
  title,
  description,
  primaryCta,
  image,
  align = "center",
}: AeroHeroProps) {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10 size-full pointer-events-none">
        <div className="grid h-full w-full grid-cols-12 divide-x divide-white/15">
          <div className="col-span-1" />
          <div className="col-span-3" />
          <div className="col-span-4" />
          <div className="col-span-3" />
          <div className="col-span-1" />
        </div>
      </div>

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-[color:var(--color-ink)]/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ink)]/30 via-transparent to-[color:var(--color-ink)]/80" />
      </div>

      <div
        className={cn(
          "relative z-20 max-w-5xl px-6 py-24 text-white",
          align === "center" ? "text-center" : "text-left",
        )}
      >
        {eyebrow && (
          <span className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-accent)]" />
            {eyebrow}
          </span>
        )}

        <h1 className="font-display font-normal text-5xl leading-[1.02] tracking-tight text-white md:text-6xl lg:text-[6.5rem]">
          {title}
        </h1>

        <p
          className={cn(
            "mt-6 mb-10 max-w-2xl text-lg font-light leading-relaxed text-white/85 md:text-xl",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>

        <div className={align === "center" ? "flex justify-center" : ""}>
          <AeroPillButton href={primaryCta.href} label={primaryCta.label} />
        </div>
      </div>
    </section>
  );
}

export function AeroPillButton({
  href,
  label,
  variant = "light",
}: {
  href: string;
  label: string;
  variant?: "light" | "dark";
}) {
  const isLight = variant === "light";
  return (
    <a
      href={href}
      className="group inline-flex cursor-pointer items-center justify-center"
    >
      <span
        className={cn(
          "rounded-full px-6 py-3 font-medium transition-colors duration-500 ease-in-out",
          isLight
            ? "bg-[color:var(--color-accent)] text-[color:var(--color-ink)] group-hover:bg-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]"
            : "bg-[color:var(--color-ink)] text-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)] group-hover:text-[color:var(--color-ink)]",
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          "relative flex h-[46px] w-[46px] items-center justify-center overflow-hidden rounded-full transition-colors duration-500 ease-in-out",
          isLight
            ? "bg-[color:var(--color-accent)] text-[color:var(--color-ink)] group-hover:bg-[color:var(--color-ink)] group-hover:text-[color:var(--color-accent)]"
            : "bg-[color:var(--color-ink)] text-[color:var(--color-accent)] group-hover:bg-[color:var(--color-accent)] group-hover:text-[color:var(--color-ink)]",
        )}
      >
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-10" />
        <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-transform duration-500 ease-in-out group-hover:-translate-x-1/2" />
      </span>
    </a>
  );
}

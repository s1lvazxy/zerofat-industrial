"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const viewport = { once: true, margin: "-8% 0px -8% 0px" } as const;

export function CTAFinal() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess(true);
    (e.currentTarget as HTMLFormElement).reset();
    setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-[color:var(--color-ink)] py-20 md:py-28"
    >
      {/* Ink-on-ink column grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20%)",
        }}
      />

      {/* Top hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-[var(--container-screen)] px-6 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20 xl:gap-28">

          {/* ── Left: editorial anchor ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="flex flex-col"
          >
            <motion.span
              variants={fadeUp}
              className="eyebrow !text-white/35 before:!bg-white/20"
            >
              Contacto
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="section-title mt-4 !text-white"
            >
              Vamos
              <br />
              <em className="italic text-white/55">trabalhar</em>
              <br />
              juntos.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[32ch] text-base leading-relaxed text-white/40"
            >
              Solicite um orçamento sem compromisso. Respondemos em menos de 24 horas.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-10 flex flex-col gap-2.5"
            >
              <motion.a
                variants={fadeUp}
                href="tel:+351234000000"
                className="w-fit text-sm text-white/50 transition-colors duration-200 hover:text-white"
              >
                +351 234 000 000
              </motion.a>
              <motion.a
                variants={fadeUp}
                href="mailto:info@zerofat.pt"
                className="w-fit text-sm text-white/50 transition-colors duration-200 hover:text-white"
              >
                info@zerofat.pt
              </motion.a>
              <motion.span
                variants={fadeUp}
                className="text-sm text-white/25"
              >
                Zona Industrial de Aveiro · Portugal
              </motion.span>
            </motion.div>
          </motion.div>

          {/* ── Right: form panel ── */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
          >
            <motion.form
              variants={fadeIn}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-3xl border border-white/[0.07] bg-white/[0.03] p-8 md:p-10"
            >
              <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
                <DarkField id="nome" label="Nome" placeholder="O seu nome" required />
                <DarkField id="empresa" label="Empresa" placeholder="Nome da empresa" required />
              </motion.div>

              <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-2">
                <DarkField id="email" type="email" label="Email" placeholder="email@empresa.pt" required />
                <DarkField id="telefone" type="tel" label="Telefone" placeholder="+351 000 000 000" />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  Modelo de Interesse
                </span>
                <select
                  name="modelo"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white/60 transition-colors focus:border-white/20 focus:bg-white/[0.07] focus:outline-none"
                >
                  <option value="" className="bg-[#0a1f3d]">Selecionar modelo…</option>
                  <option value="ZF-150" className="bg-[#0a1f3d] text-white">ZeroFat ZF-150 — 150 L</option>
                  <option value="ZF-220" className="bg-[#0a1f3d] text-white">ZeroFat ZF-220 — 220 L</option>
                  <option value="ZF-320" className="bg-[#0a1f3d] text-white">ZeroFat ZF-320 — 320 L</option>
                  <option value="ZF-540" className="bg-[#0a1f3d] text-white">ZeroFat ZF-540 — 540 L</option>
                  <option value="outro" className="bg-[#0a1f3d] text-white">Outro / Ainda não sei</option>
                </select>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  Mensagem *
                </span>
                <textarea
                  name="mensagem"
                  rows={4}
                  required
                  placeholder="Descreva as suas necessidades, volume de produção, tipo de peças…"
                  className="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white/75 placeholder:text-white/20 transition-colors focus:border-white/20 focus:bg-white/[0.07] focus:outline-none"
                />
              </motion.div>

              <motion.div variants={fadeUp}>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-between rounded-2xl bg-white px-6 py-4 transition-colors duration-300 hover:bg-neutral-100"
                >
                  <span className="font-display text-xl tracking-tight text-[color:var(--color-ink)]">
                    Enviar Mensagem
                  </span>
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                    <ArrowUpRight className="size-5 text-white" />
                  </span>
                </button>
              </motion.div>

              <motion.p variants={fadeIn} className="text-[11px] text-white/20">
                * Obrigatório · Dados tratados com total confidencialidade
              </motion.p>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400"
                >
                  Mensagem enviada! Entraremos em contacto em breve.
                </motion.div>
              )}
            </motion.form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function DarkField({
  id,
  label,
  type = "text",
  placeholder,
  required,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30"
      >
        {label}{required && " *"}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 text-sm text-white/75 placeholder:text-white/20 transition-colors focus:border-white/20 focus:bg-white/[0.07] focus:outline-none"
      />
    </div>
  );
}

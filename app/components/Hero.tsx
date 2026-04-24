"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.2, ease: EASE } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-end justify-center overflow-hidden"
    >
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="absolute inset-0 h-full bg-cover"
        style={{
          backgroundImage: "url(/hero.png)",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="absolute inset-0 bg-gradient-to-t from-[#0a1f3d]/85 via-[#0a1f3d]/40 to-transparent"
        />
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-7xl px-6 pb-20 text-white md:px-8"
      >
        <div className="flex flex-col items-start justify-between gap-10 text-left lg:flex-row lg:items-end">
          <div className="max-w-3xl space-y-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm"
            >
              Desengorduramento Industrial
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-normal text-5xl tracking-tighter text-white md:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Limpeza Industrial
              <br />
              <em className="italic text-[#d6ecff]">ao Nível Zero</em>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl font-light text-lg text-white/85 md:text-xl"
            >
              Máquinas de alta performance para indústria metalomecânica,
              automóvel e alimentar. Eficiência máxima, consumo mínimo.
              Certificadas CE.
            </motion.p>
          </div>

          <div className="mt-auto space-y-7">
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.6 + i * 0.08,
                    }}
                    className="size-12 overflow-hidden rounded-full border-2 border-[#d6ecff] bg-white/10 backdrop-blur-sm"
                  >
                    <img
                      src={`https://i.pravatar.cc/96?img=${i + 10}`}
                      alt={`Cliente ${i}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col font-normal text-sm text-white">
                <span className="text-base sm:text-lg font-semibold">
                  500+
                </span>
                <span className="text-white/80">Indústrias que confiam</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex w-fit gap-6">
              <motion.a
                href="#produtos"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="group flex cursor-pointer items-center justify-center gap-0"
              >
                <span className="rounded-full bg-[#d6ecff] px-6 py-3 text-[#0a1f3d] font-medium duration-500 ease-in-out group-hover:bg-[#0a1f3d] group-hover:text-[#d6ecff] group-hover:transition-colors">
                  Ver Modelos
                </span>
                <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-[#d6ecff] p-5 text-[#0a1f3d] duration-500 ease-in-out group-hover:bg-[#0a1f3d] group-hover:text-[#d6ecff] group-hover:transition-colors">
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10" />
                  <ArrowUpRight className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2" />
                </div>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

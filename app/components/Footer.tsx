"use client";

import type { SVGProps } from "react";
import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "../../components/ui/brand-mark";

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

const linkColumns = [
  {
    title: "Produtos",
    links: [
      { href: "#produtos", label: "ZF-150 · Compacta" },
      { href: "#produtos", label: "ZF-220 · Essencial" },
      { href: "#produtos", label: "ZF-320 · Industrial" },
      { href: "#produtos", label: "ZF-540 · Intensiva" },
      { href: "#produtos", label: "Acessórios & Químicos" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "#sobre", label: "Sobre a ZeroFat" },
      { href: "#depoimentos", label: "Clientes" },
      { href: "#", label: "Certificações" },
      { href: "#", label: "Sustentabilidade" },
      { href: "#", label: "Carreiras" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { href: "#", label: "Documentação técnica" },
      { href: "#", label: "Manuais de instalação" },
      { href: "#", label: "Peças sobresselentes" },
      { href: "#", label: "Formação" },
      { href: "#", label: "Área do cliente" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "tel:+351234000000", label: "+351 234 000 000" },
      { href: "mailto:info@zerofat.pt", label: "info@zerofat.pt" },
      { href: "mailto:comercial@zerofat.pt", label: "comercial@zerofat.pt" },
      { href: "#", label: "Zona Industrial · Aveiro" },
    ],
  },
];

const socials = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  {
    icon: FacebookIcon,
    href: "https://www.facebook.com/tanque.desengordurante.zerofat/",
    label: "Facebook",
  },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[color:var(--color-ink)] text-white">
      {/* Ink-on-ink column grid for continuity with CTA section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 20%)",
        }}
      />

      <div className="relative mx-auto max-w-[var(--container-screen)] px-6 md:px-8">
        {/* Top: wordmark + columns */}
        <div className="grid gap-12 py-20 md:py-24 lg:grid-cols-[1.4fr_3fr] lg:gap-20">
          {/* Brand column */}
          <div className="flex flex-col">
            <a href="#home" className="group flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white">
                <BrandMark className="size-7 transition-transform duration-[900ms] ease-out group-hover:rotate-[360deg]" />
              </span>
              <span className="font-display text-2xl tracking-tight">
                ZeroFat
              </span>
            </a>

            <p className="mt-6 max-w-[32ch] text-sm leading-relaxed text-white/45">
              Líderes em desengorduramento industrial desde 2008.
              <br />
              Projetado e fabricado em Portugal.
            </p>

            {/* Newsletter */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 w-full max-w-xs"
            >
              <label
                htmlFor="newsletter"
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30"
              >
                Newsletter
              </label>
              <div className="mt-2 flex items-center rounded-full border border-white/[0.1] bg-white/[0.03] pl-4 pr-1 transition-colors focus-within:border-white/25">
                <input
                  id="newsletter"
                  type="email"
                  placeholder="email@empresa.pt"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-white/80 placeholder:text-white/25 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscrever"
                  className="group flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-[color:var(--color-ink)] transition-transform hover:scale-[1.06]"
                >
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
            {linkColumns.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
                  {col.title}
                </h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-white/55 transition-colors duration-200 hover:text-white"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Hairline */}
        <div className="h-px bg-white/[0.08]" />

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-start gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} ZeroFat Industrial, Lda. · Todos os
            direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-xs text-white/35 transition-colors hover:text-white"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-xs text-white/35 transition-colors hover:text-white"
              >
                Termos
              </a>
              <a
                href="#"
                className="text-xs text-white/35 transition-colors hover:text-white"
              >
                Cookies
              </a>
            </div>

            <div className="hidden h-4 w-px bg-white/15 md:block" />

            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex size-9 items-center justify-center rounded-full border border-white/[0.1] text-white/45 transition-colors hover:border-white/30 hover:text-white"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Oversized wordmark stamp */}
        <div
          aria-hidden
          className="pointer-events-none relative overflow-hidden pb-10 pt-6 md:pb-14"
        >
          <div className="select-none bg-gradient-to-b from-white/[0.05] to-transparent bg-clip-text font-display text-[18vw] leading-[0.85] tracking-tight text-transparent md:text-[15vw]">
            ZeroFat
          </div>
        </div>
      </div>
    </footer>
  );
}

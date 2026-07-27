"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  WEBSITE_LABEL,
  WEBSITE_URL,
  WHATSAPP_URL,
} from "@/lib/config";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function GiftIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 12v10H4V12" />
      <path d="M2 7h20v5H2z" />
      <path d="M12 22V7" />
      <path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C10 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 1 0 0-5C14 2 12 7 12 7z" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-dvh flex-col">
      {/* <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg-elevated)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Get ID home">
            <Image
              src="/logo.png"
              alt="Get ID"
              width={160}
              height={48}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
            <a href="#home" className="transition hover:text-[var(--gold)]">
              Home
            </a>
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[var(--gold)]"
            >
              Website
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--whatsapp)] px-4 py-2 text-white transition hover:bg-[var(--whatsapp-hover)]"
            >
              WhatsApp
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <a
                href="#home"
                className="py-2 text-white/85"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-white/85"
              >
                Visit Website
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[var(--whatsapp)] px-4 py-3 text-center text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header> */}

      <main id="home" className="relative flex flex-1 flex-col overflow-hidden">
        <section className="relative flex min-h-[calc(100dvh-4rem)] flex-1 items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
          {/* Atmospheric background */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1408_0%,_#050505_55%,_#000_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(165deg,_rgba(253,184,19,0.08)_0%,_transparent_42%,_rgba(253,184,19,0.05)_100%)]" />
            <div className="hero-shape absolute -left-24 top-16 h-[55vmax] w-[55vmax] rounded-[2rem] bg-[linear-gradient(135deg,_rgba(253,184,19,0.14),_transparent_60%)] opacity-70 blur-[2px]" />
            <div className="absolute -right-20 bottom-0 h-[48vmax] w-[48vmax] rotate-[22deg] rounded-[2rem] bg-[linear-gradient(225deg,_rgba(255,255,255,0.06),_transparent_55%)]" />
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
            {/* <div className="animate-fade-up mb-7 sm:mb-8">
              <Image
                src="/logo.png"
                alt="Get ID — sports & casino betting"
                width={420}
                height={140}
                className="mx-auto h-auto w-[min(88vw,22rem)] drop-shadow-[0_12px_40px_rgba(253,184,19,0.18)] sm:w-[24rem]"
                priority
              />
            </div> */}

            <div className="animate-fade-up-delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-wide text-white/95 sm:text-xs">
              <span className="text-[var(--gold)]" aria-hidden="true">
                ★
              </span>
              Trusted Platform
            </div>

            <h1 className="animate-fade-up-delay-2 font-[family-name:var(--font-barlow)] text-[clamp(2.35rem,9vw,3.75rem)] font-extrabold leading-[0.95] tracking-wide uppercase">
              <span className="block text-white">Your Ultimate</span>
              <span className="mt-1 block text-[var(--gold)]">
                Gaming Partner
              </span>
            </h1>

            <p className="animate-fade-up-delay-3 mt-5 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-base">
              Sports, cricket & casino — get your ID fast with secure support.
              Chat with us or open the official site to start playing.
            </p>

            <div className="animate-fade-up-delay-4 mt-8 flex w-full max-w-sm flex-col gap-3.5 sm:mt-10">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-pulse inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-[var(--whatsapp)] px-6 text-base font-bold text-white transition hover:bg-[var(--whatsapp-hover)] hover:brightness-105 active:scale-[0.98]"
              >
                <WhatsAppIcon className="h-6 w-6" />
                Chat on WhatsApp
              </a>

              <a
                href={WEBSITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[var(--gold)]/70 bg-transparent px-6 text-base font-bold text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-black active:scale-[0.98]"
              >
                <ExternalIcon className="h-5 w-5" />
                Visit {WEBSITE_LABEL}
              </a>
            </div>
          </div>
        </section>

        {/* Feature content */}
        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
                Instant. Trusted. Rewarding.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--muted)] sm:text-base">
                Get ID makes it easy to start betting with fast withdrawals, reliable support, and bonus rewards.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <article className="group rounded-[1.6rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md transition hover:border-[var(--gold)]/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl border border-[var(--gold)]/40 bg-[rgba(253,184,19,0.08)] p-3 text-[var(--gold)]">
                    <ClockIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[var(--gold)]">
                    Instant Withdrawal
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Withdraw when you need it, with a smooth and quick process.
                </p>
              </article>

              <article className="group rounded-[1.6rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md transition hover:border-[var(--gold)]/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl border border-[var(--gold)]/40 bg-[rgba(253,184,19,0.08)] p-3 text-[var(--gold)]">
                    <ShieldIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[var(--gold)]">
                    Trusted Experience
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Support you can count on and a platform designed for reliability.
                </p>
              </article>

              <article className="group rounded-[1.6rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md transition hover:border-[var(--gold)]/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl border border-[var(--gold)]/40 bg-[rgba(253,184,19,0.08)] p-3 text-[var(--gold)]">
                    <GiftIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[var(--gold)]">
                    Bonus & Rewards
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Enjoy ongoing bonuses and reward offers when you get started.
                </p>
              </article>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/15 bg-[radial-gradient(ellipse_at_top,_rgba(253,184,19,0.18)_0%,_transparent_58%)] p-5 sm:p-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold tracking-wide text-[var(--gold)]">
                    CLAIM BONUS
                  </p>
                  <p className="mt-1 text-base font-bold text-white">
                    Ready to earn rewards? Chat with us on WhatsApp.
                  </p>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-pulse inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] px-5 text-sm font-bold text-white transition hover:bg-[var(--whatsapp-hover)] hover:brightness-105 active:scale-[0.98]"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Connect on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-black px-4 py-5 text-center text-xs text-white/45 sm:px-6">
        <p>
          © {new Date().getFullYear()} Get ID ·{" "}
          <a
            href={WEBSITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gold-soft)] underline-offset-2 hover:underline"
          >
            {WEBSITE_LABEL}
          </a>
        </p>
      </footer>
    </div>
  );
}

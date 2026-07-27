"use client";

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

function LiveIcon({ className }: { className?: string }) {
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
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ScoreIcon({ className }: { className?: string }) {
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
      <path d="M4 4h16v16H4z" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

function FansIcon({ className }: { className?: string }) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main id="home" className="relative flex flex-1 flex-col overflow-hidden">
        <section className="relative flex min-h-[calc(100dvh-4rem)] flex-1 items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
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
            <div className="animate-fade-up-delay-1 mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-wide text-white/95 sm:text-xs">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              Cricket Watching Platform
            </div>

            <h1 className="animate-fade-up-delay-2 font-[family-name:var(--font-barlow)] text-[clamp(2.35rem,9vw,3.75rem)] font-extrabold leading-[0.95] tracking-wide uppercase">
              <span className="block text-white">Watch Cricket</span>
              <span className="mt-1 block text-[var(--gold)]">Live &amp; Loud</span>
            </h1>

            <p className="animate-fade-up-delay-3 mt-5 max-w-md text-[0.95rem] leading-relaxed text-[var(--muted)] sm:text-base">
              Follow every ball, every six, every match moment. Get ID is built
              for cricket fans who love live action, scores, and highlights.
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

        <section className="px-4 pb-16 sm:px-6 sm:pb-20">
          <div className="mx-auto w-full max-w-5xl">
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-barlow)] text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
                Live. Updated. Fan-First.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--muted)] sm:text-base">
                Everything a cricket fan needs — live matches, instant updates,
                and a community that never misses a moment.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <article className="group rounded-[1.6rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md transition hover:border-[var(--gold)]/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl border border-[var(--gold)]/40 bg-[rgba(253,184,19,0.08)] p-3 text-[var(--gold)]">
                    <LiveIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[var(--gold)]">
                    Live Match Streams
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Catch international &amp; league cricket live — never miss a
                  match day.
                </p>
              </article>

              <article className="group rounded-[1.6rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md transition hover:border-[var(--gold)]/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl border border-[var(--gold)]/40 bg-[rgba(253,184,19,0.08)] p-3 text-[var(--gold)]">
                    <ScoreIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[var(--gold)]">
                    Instant Score Updates
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Ball-by-ball scores, wickets, and match status as it happens.
                </p>
              </article>

              <article className="group rounded-[1.6rem] border border-white/15 bg-black/35 p-6 backdrop-blur-md transition hover:border-[var(--gold)]/40">
                <div className="flex items-center gap-3">
                  <span className="inline-flex rounded-xl border border-[var(--gold)]/40 bg-[rgba(253,184,19,0.08)] p-3 text-[var(--gold)]">
                    <FansIcon className="h-6 w-6" />
                  </span>
                  <h3 className="text-lg font-bold text-white transition group-hover:text-[var(--gold)]">
                    Fan Community
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  Share highlights, talk cricket, and stay connected with fellow
                  fans.
                </p>
              </article>
            </div>

            <div className="mt-8 rounded-[1.6rem] border border-white/15 bg-[radial-gradient(ellipse_at_top,_rgba(253,184,19,0.18)_0%,_transparent_58%)] p-5 sm:p-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-semibold tracking-wide text-[var(--gold)]">
                    JOIN THE FANS
                  </p>
                  <p className="mt-1 text-base font-bold text-white">
                    Want match updates &amp; watch links? Message us on WhatsApp.
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
          © {new Date().getFullYear()} Get ID · Cricket for fans ·{" "}
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

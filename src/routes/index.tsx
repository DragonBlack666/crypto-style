import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { SocialLinks } from "@/components/SocialLinks";
import heroBg from "@/assets/hero-bg.jpg";
import whyBg from "@/assets/bg-why-light.jpg";
import tonBg from "@/assets/bg-ton-light.jpg";
import roadmapBg from "@/assets/bg-roadmap-light.jpg";
import nftCard from "@/assets/nft-card.jpg";

import {
  ShieldCheck, Zap, Globe2, Gem, CheckCircle2, Quote,
  Rocket, DollarSign, Send, Wallet, MessageCircle,
} from "lucide-react";

export default function Index() {
  const { t } = useI18n();

  const whyIcons = [ShieldCheck, Zap, Globe2, Gem];
  const tonIcons = [Rocket, DollarSign, Send, Globe2];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center">
            <span className="font-display text-2xl font-semibold text-gold">Crypto Style</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-foreground/75 md:flex">
            <a href="#why" className="transition hover:text-gold">{t.nav.features}</a>
            <a href="#nft" className="transition hover:text-gold">{t.nav.nft}</a>
            <a href="#ton" className="transition hover:text-gold">{t.nav.ton}</a>
            <a href="#roadmap" className="transition hover:text-gold">{t.nav.roadmap}</a>
          </nav>
          <div className="flex items-center gap-3">
            <SocialLinks />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            <span className="text-gradient-gold uppercase block">{t.hero.title1}</span>
            <span className="text-foreground block">{t.hero.title2}</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg text-foreground/75 sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={t.hero.cta1Link}
              className="group inline-flex items-center gap-2 rounded-xl btn-gold px-7 py-3.5 font-semibold"
            >
              <Wallet className="h-5 w-5" /> {t.hero.cta1}
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition hover:border-gold hover:bg-surface/70"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="relative isolate overflow-hidden py-24 sm:py-32">
        <img
          src={whyBg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 z-0 h-full w-full object-cover opacity-40 brightness-75 saturate-110"
        />
        <div className="absolute inset-0 z-[1] bg-section-glow opacity-60" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/80 via-background/70 to-background/85" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-gold">{t.why.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">{t.why.title}</h2>
            <p className="mt-6 text-lg text-foreground/70">{t.why.intro}</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((it, i) => {
              const Icon = whyIcons[i];
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:border-gold/50"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{it.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NFT */}
      <section id="nft" className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0 bg-hero opacity-100" />
        <div className="absolute inset-0 z-[1] bg-section-glow" />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-gold">{t.nft.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl">{t.nft.title}</h2>
            <p className="mt-6 text-lg text-foreground/75">{t.nft.intro}</p>
            <ul className="mt-8 space-y-3">
              {t.nft.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <blockquote className="mt-10 rounded-2xl border-l-2 border-gold bg-surface/60 p-6 backdrop-blur">
              <Quote className="h-6 w-6 text-gold/70" />
              <p className="mt-3 text-lg italic text-foreground/90">{t.nft.quote}</p>
            </blockquote>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--gradient-gold)] opacity-30 blur-2xl" />
            <img
              src={nftCard}
              alt={`${t.nft.caption} — ${t.nft.title}`}
              loading="lazy"
              width={1024}
              height={1280}
              className="w-full rounded-3xl border border-gold/30 shadow-[var(--shadow-gold)]"
            />
            <p className="mt-4 text-center text-sm text-foreground/60">{t.nft.caption}</p>
          </div>
        </div>
      </section>

      {/* TON */}
      <section id="ton" className="relative isolate overflow-hidden py-24 sm:py-32">
        <img
          src={tonBg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[center_70%] opacity-100 brightness-125 contrast-110 saturate-125"
        />
        <div className="absolute inset-0 z-[1] bg-section-glow" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-gold">{t.ton.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">{t.ton.title}</h2>
            <p className="mt-6 text-lg text-foreground/70">{t.ton.intro}</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {t.ton.items.map((it, i) => {
              const Icon = tonIcons[i];
              return (
                <div
                  key={i}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition hover:border-gold/50"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gold-gradient text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">{it.title}</h3>
                    <p className="mt-2 text-foreground/70">{it.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="relative isolate overflow-hidden py-24 sm:py-32">
        <img
          src={roadmapBg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1080}
          className="absolute inset-0 z-0 h-full w-full object-cover object-[center_65%] opacity-100 brightness-150 contrast-110 saturate-125"
        />
        <div className="absolute inset-0 z-[1] bg-section-glow" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/10 via-transparent to-background/15" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-gold">{t.roadmap.eyebrow}</p>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl">{t.roadmap.title}</h2>
            <p className="mt-6 text-lg text-foreground/70">{t.roadmap.intro}</p>
          </div>
          <ol className="relative mx-auto mt-16 max-w-4xl border-l border-gold/30 pl-6 sm:pl-10">
            {t.roadmap.stages.map((s, i) => (
              <li key={i} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[calc(1.75rem+1px)] flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-background font-display text-gold sm:-left-[calc(2.75rem+1px)]">
                  {i + 1}
                </span>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                  <p className="text-xs uppercase tracking-widest text-gold/80">{s.name}</p>
                  <h3 className="mt-1 font-display text-2xl">{s.title}</h3>
                  <p className="mt-3 text-foreground/70">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 z-0 bg-hero" />
        <div className="absolute inset-0 z-[1] bg-section-glow" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-display text-4xl sm:text-6xl">
            <span className="text-gradient-gold">{t.cta.title}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/75">{t.cta.intro}</p>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {t.cta.stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gold/30 bg-surface/60 p-8 backdrop-blur"
              >
                <p className="font-display text-6xl text-gradient-gold">{s.value}</p>
                <p className="mt-2 font-semibold text-foreground">{s.label}</p>
                <p className="mt-2 text-sm text-foreground/65">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={t.cta.btn1Link}
              className="inline-flex items-center gap-2 rounded-xl btn-gold px-7 py-3.5 font-semibold"
            >
              <Wallet className="h-5 w-5" /> {t.cta.btn1}
            </a>
            <a
              href={t.cta.btn2Link}
              className="inline-flex items-center gap-2 rounded-xl border border-gold/50 bg-surface/40 px-7 py-3.5 font-semibold text-foreground backdrop-blur transition hover:border-gold"
            >
              <MessageCircle className="h-5 w-5" /> {t.cta.btn2}
            </a>
          </div>

          <p className="mt-14 font-display text-xl italic text-gold/90">*{t.cta.tagline}*</p>
        </div>
      </section>

      <footer className="border-t border-border/50 py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-foreground/50 sm:px-6">
          {t.footer}
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { LANGUAGES, useI18n, type LangCode } from "@/lib/i18n";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full border border-gold/30 bg-surface/60 px-3 py-1.5 text-sm text-foreground/90 backdrop-blur transition hover:border-gold hover:text-gold"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Current language: ${current.label}. Change language.`}
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <span className="sm:hidden uppercase">{current.code}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" className="opacity-70">
          <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 max-h-80 w-56 overflow-auto rounded-xl border border-gold/20 bg-surface/95 p-1 shadow-2xl backdrop-blur-xl"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => {
                  setLang(l.code as LangCode);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition ${
                  l.code === lang
                    ? "bg-gold/15 text-gold"
                    : "text-foreground/85 hover:bg-gold/10 hover:text-gold"
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span>{l.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

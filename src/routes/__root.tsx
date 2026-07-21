import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logoAsset from "@/assets/logo.png.asset.json";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { DICTS, I18nContext, type LangCode } from "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient-gold">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

const BASE_URL = "https://cryptostyle.lovable.app";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Crypto Style",
  url: BASE_URL,
  logo: `${BASE_URL}${logoAsset.url}`,
  sameAs: [
    "https://t.me/CryptoStyleMatrix",
    "https://x.com/CryptoStyleTON",
    "https://www.youtube.com/@CryptoStyleOfficial",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Crypto Style",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?search={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Crypto Style — платформа нового поколения на TON" },
      { name: "description", content: "Партнёрские программы без админов. Мгновенные выплаты, NFT-профили и 100% прозрачность на блокчейне TON." },
      { property: "og:title", content: "Crypto Style — платформа нового поколения на TON" },
      { property: "og:description", content: "Партнёрские программы без админов. Мгновенные выплаты, NFT-профили и 100% прозрачность на блокчейне TON." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Crypto Style — платформа нового поколения на TON" },
      { name: "twitter:description", content: "Партнёрские программы без админов. Мгновенные выплаты, NFT-профили и 100% прозрачность на блокчейне TON." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/t2bwHysvVvNIwPpIaBu2vTvVROg1/social-images/social-1784444228400-Crypto_Style.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/t2bwHysvVvNIwPpIaBu2vTvVROg1/social-images/social-1784444228400-Crypto_Style.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const [lang, setLangState] = useState<LangCode>("ru");

  useEffect(() => {
    const saved = (typeof window !== "undefined" ? window.localStorage.getItem("cs_lang") : null) as LangCode | null;
    if (saved && saved in DICTS) setLangState(saved);
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("cs_lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <I18nContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
        <Outlet />
      </I18nContext.Provider>
    </QueryClientProvider>
  );
}

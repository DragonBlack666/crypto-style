import { createContext, useContext } from "react";

export const LANGUAGES = [
  { code: "ru", label: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "kk", label: "Қазақша", flag: "🇰🇿" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "hu", label: "Magyar", flag: "🇭🇺" },
] as const;

export type LangCode = (typeof LANGUAGES)[number]["code"];

export type Dict = {
  nav: { features: string; nft: string; ton: string; roadmap: string };
  hero: { title1: string; title2: string; subtitle: string; cta1: string; cta2: string; cta1Link: string };
  social: { youtube: string; twitter: string; telegram: string };
  why: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  nft: {
    eyebrow: string;
    title: string;
    intro: string;
    points: string[];
    quote: string;
    caption: string;
  };
  ton: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { title: string; desc: string }[];
  };
  roadmap: {
    eyebrow: string;
    title: string;
    intro: string;
    stages: { name: string; title: string; desc: string }[];
  };
  cta: {
    title: string;
    intro: string;
    stats: { value: string; label: string; desc: string }[];
    btn1: string;
    btn1Link: string;
    btn2: string;
    btn2Link: string;
    tagline: string;
  };
  footer: string;
};

const ru: Dict = {
  nav: { features: "Возможности", nft: "NFT-профиль", ton: "TON", roadmap: "Дорожная карта" },
  hero: {
    title1: "Crypto Style",
    title2: "Платформа нового поколения",
    subtitle:
      "Партнёрские программы без админов и посредников. Мгновенные выплаты прямо на ваш кошелёк, NFT-паспорта участников и 100% прозрачность на блокчейне TON.",
    cta1: "Подключить кошелёк",
    cta2: "Посмотреть возможности",
    cta1Link: "https://cryptostylematrix.github.io/frontend/",
  },
  social: {
    youtube: "https://www.youtube.com/@CryptoStyleOfficial",
    twitter: "https://x.com/CryptoStyleTON",
    telegram: "https://t.me/CryptoStyleMatrix",
  },
  why: {
    eyebrow: "Почему Crypto Style?",
    title: "Платформа, где правила нельзя изменить",
    intro:
      "Crypto Style — это не очередной сетевой проект с обещаниями. Это инфраструктура на блокчейне TON, где каждая транзакция зафиксирована смарт-контрактом, а доступ к средствам есть только у вас.",
    items: [
      { title: "Прозрачность", desc: "Все транзакции записаны в блокчейн. Никакого мошенничества, никаких скрытых условий — только открытый код смарт-контракта." },
      { title: "Мгновенные выплаты", desc: "Вознаграждения начисляются автоматически и сразу приходят на ваш кошелёк. Без ожиданий, без ручных переводов." },
      { title: "Децентрализация", desc: "Нет администраторов, которые могут задержать выплаты. Смарт-контракт работает по заданным правилам всегда." },
      { title: "NFT-профиль", desc: "Ваш аккаунт — это NFT на блокчейне TON. Его невозможно подделать, удалить или заморозить даже администраторам." },
    ],
  },
  nft: {
    eyebrow: "Ваша цифровая личность",
    title: "NFT-профиль на блокчейне TON",
    intro:
      "Ваш профиль в системе Crypto Style — это не просто аккаунт. Это NFT, навсегда записанный в блокчейн TON. Это ваш цифровой паспорт в экосистеме.",
    points: [
      "Невозможно подделать или скопировать",
      "Нельзя удалить или заморозить",
      "Администраторы не имеют доступа к вашим средствам",
      "Полный контроль только через ваш кошелёк",
      "Передаётся по наследству или может быть продан",
    ],
    quote:
      "Даже сам Crypto Style не может заблокировать ваш аккаунт. Доступ к средствам есть только у владельца кошелька.",
    caption: "NFT-карта Crypto Style",
  },
  ton: {
    eyebrow: "Расчёты в криптовалюте",
    title: "Почему TON?",
    intro:
      "TON (The Open Network) — один из самых быстрорастущих блокчейнов в мире, интегрированный с Telegram. Именно на нём построена вся инфраструктура Crypto Style.",
    items: [
      { title: "Высокая скорость", desc: "Транзакции обрабатываются за секунды. Выплаты поступают на кошелёк практически мгновенно." },
      { title: "Низкие комиссии", desc: "Комиссия в сети TON — доли цента. Вы получаете почти всё вознаграждение без потерь." },
      { title: "Интеграция с Telegram", desc: "TON — нативный блокчейн Telegram. Миллиарды пользователей уже имеют доступ к кошельку и Mini Apps." },
      { title: "Глобальная сеть", desc: "Объединяет пользователей по всему миру и обеспечивает удобную работу с цифровыми активами без географических ограничений." },
    ],
  },
  roadmap: {
    eyebrow: "Дорожная карта",
    title: "От партнёрских программ к инфраструктуре",
    intro:
      "Crypto Style — это живая экосистема, которая развивается поэтапно, давая преимущества тем, кто присоединился раньше.",
    stages: [
      { name: "Этап 1", title: "Удобство", desc: "Mini App в Telegram. NFT-профили. Сервис для ежедневного использования без сложных сайтов и логинов." },
      { name: "Этап 2", title: "Стабильность", desc: "Собственная монета CS Coin на реальном обеспечении. Разнообразие партнёрских программ. Снижение зависимости от волатильности." },
      { name: "Этап 3", title: "Экономика", desc: "CS USD с реальным применением. Маркетплейс. Товарные модели. Частичная конвертация в фиат." },
      { name: "Этап 4", title: "Децентрализация", desc: "DAO — управление сообществом. Выход Coin на DEX и CEX. Стейкинг через Nominator Pool. Собственные валидаторы." },
      { name: "Этап 5", title: "Интеллект", desc: "Платформа для создания собственных маркетингов. AI-модель, которая строит бизнес под цели каждого пользователя." },
    ],
  },
  cta: {
    title: "Начните прямо сейчас",
    intro:
      "Crypto Style — это не история «зайти и выйти». Это система, которая усиливается со временем. Каждый этап развития даёт преимущества тем, кто был внутри раньше.",
    stats: [
      { value: "0", label: "Посредников", desc: "Прямые выплаты смарт-контрактом кошелёк → кошелёк" },
      { value: "5", label: "Этапов развития", desc: "От Mini App в Telegram до децентрализованной инфраструктуры" },
      { value: "TON", label: "Блокчейн-основа", desc: "Построен на одном из самых быстрых блокчейнов в мире" },
    ],
    btn1: "Подключить TON кошелёк",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Открыть в Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Ваши деньги. Ваши правила. Ваш блокчейн.",
  },
  footer: "© Crypto Style. Все права защищены.",
};

const en: Dict = {
  nav: { features: "Features", nft: "NFT profile", ton: "TON", roadmap: "Roadmap" },
  hero: {
    title1: "Crypto Style",
    title2: "The Next-Generation Affiliate Platform",
    subtitle:
      "A decentralized affiliate platform with instant payouts, NFT membership passports, and complete transparency secured by the TON blockchain.",
    cta1: "Connect wallet",
    cta2: "Explore features",
    cta1Link: "https://cryptostylematrix.github.io/frontend/",
  },
  social: {
    youtube: "https://www.youtube.com/@CryptoStyleOfficial-EN",
    twitter: "https://x.com/CryptoStyleTON",
    telegram: "https://t.me/CryptoStyleMatrix",
  },
  why: {
    eyebrow: "Why Crypto Style?",
    title: "A Platform Where the Rules Never Change",
    intro:
      "Crypto Style isn't just another affiliate platform built on promises. It's a decentralized ecosystem on the TON blockchain where every transaction is secured by smart contracts, and only you control your funds.",
    items: [
      { title: "Transparency", desc: "Every transaction is permanently recorded on the blockchain. No hidden terms. No manipulation. Just transparent smart contracts." },
      { title: "Instant payouts", desc: "Rewards are calculated automatically and sent directly to your wallet. No waiting. No manual transfers." },
      { title: "Decentralization", desc: "Smart contracts execute automatically according to predefined rules." },
      { title: "NFT profile", desc: "Your account exists as an NFT on the TON blockchain. It cannot be forged, deleted, or frozen—not even by our team." },
    ],
  },
  nft: {
    eyebrow: "Your digital identity",
    title: "Your NFT Identity on the TON Blockchain",
    intro:
      "Your Crypto Style profile isn't just an account. It's an NFT permanently recorded on the TON blockchain—your digital passport within the ecosystem.",
    points: [
      "Impossible to forge or copy",
      "Cannot be deleted or frozen",
      "No one but you can access your funds",
      "Full control through your TON wallet",
      "Can be inherited or sold",
    ],
    quote:
      "Not even Crypto Style itself can block your account. Only the wallet owner controls access to the funds.",
    caption: "Crypto Style NFT Passport",
  },
  ton: {
    eyebrow: "BUILT ON TON",
    title: "Why TON?",
    intro:
      "TON (The Open Network) is one of the world's fastest-growing blockchains, seamlessly integrated with Telegram. The entire Crypto Style ecosystem is built on it.",
    items: [
      { title: "High speed", desc: "Transactions are confirmed within seconds, and payouts arrive in your wallet almost instantly." },
      { title: "Low fees", desc: "Transaction fees are just a fraction of a cent, allowing you to keep nearly all of your rewards." },
      { title: "Telegram integration", desc: "TON is closely integrated with Telegram, making blockchain services accessible through Mini Apps." },
      { title: "Global network", desc: "A global network that gives users seamless access to digital assets without geographical limitations." },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "From Affiliate Programs to a Complete Ecosystem",
    intro:
      "Crypto Style is an evolving ecosystem that grows step by step, rewarding early participants.",
    stages: [
      { name: "Stage 1", title: "Convenience", desc: "Telegram Mini App with NFT profiles. A seamless experience designed for everyday use—no complicated websites or separate logins." },
      { name: "Stage 2", title: "Stability", desc: "CS Coin backed by real-world assets. A diverse range of affiliate programs. Reduced exposure to market volatility." },
      { name: "Stage 3", title: "Economy", desc: "CS USD with real-world utility. Integrated marketplace. Multiple commerce models. Seamless fiat conversion." },
      { name: "Stage 4", title: "Decentralization", desc: "DAO governance. Listings on major DEXs and CEXs. Staking through Nominator Pools. Dedicated network validators." },
      { name: "Stage 5", title: "Intelligence", desc: "Build personalized marketing strategies with AI that adapt to every user's objectives." },
    ],
  },
  cta: {
    title: "Start Today",
    intro:
      "Crypto Style is built for long-term growth. Every new stage creates more value for early participants.",
    stats: [
      { value: "0", label: "Middlemen", desc: "Direct smart contract payouts from wallet to wallet" },
      { value: "5", label: "Growth stages", desc: "From a Telegram Mini App to a complete decentralized ecosystem" },
      { value: "TON", label: "Built on TON", desc: "Built on one of the world's fastest-growing blockchain networks" },
    ],
    btn1: "Connect TON wallet",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Open in Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Your Money. Your Rules. Your Future.",
  },
  footer: "© Crypto Style. All rights reserved.",
};

// For all other languages, fall back to English content but with translated nav/hero CTAs where useful.
// To keep this lean, we start with EN as base for de/fr/it/es/pt/uk/kk/pl/hu.
// You can extend these dictionaries per-language over time.
const de: Dict = {
  nav: { features: "Funktionen", nft: "NFT-Profil", ton: "TON", roadmap: "Roadmap" },
  hero: {
    title1: "Crypto Style",
    title2: "Die nächste Generation des Affiliate-Marketings",
    subtitle:
      "Eine dezentrale Affiliate-Plattform mit sofortigen Auszahlungen, NFT-Mitgliedspässen und vollständiger Transparenz durch die TON-Blockchain.",
    cta1: "Wallet verbinden",
    cta2: "Funktionen entdecken",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-DE" },
  why: {
    eyebrow: "WARUM CRYPTO STYLE?",
    title: "Eine Plattform, deren Regeln sich niemals ändern",
    intro:
      "Crypto Style ist nicht einfach nur eine weitere Affiliate-Plattform mit leeren Versprechen. Es ist ein dezentrales Ökosystem auf der TON-Blockchain, in dem jede Transaktion durch Smart Contracts abgesichert ist und nur Sie die Kontrolle über Ihr Vermögen haben.",
    items: [
      { title: "Transparenz", desc: "Jede Transaktion wird dauerhaft auf der Blockchain gespeichert. Keine versteckten Bedingungen. Keine Manipulation. Nur transparente Smart Contracts." },
      { title: "Sofortige Auszahlungen", desc: "Belohnungen werden automatisch berechnet und direkt an Ihre Wallet ausgezahlt. Keine Wartezeiten. Keine manuellen Überweisungen." },
      { title: "Dezentralisierung", desc: "Smart Contracts werden automatisch nach festgelegten Regeln ausgeführt." },
      { title: "NFT-Profil", desc: "Ihr Konto existiert als NFT auf der TON-Blockchain. Es kann weder gefälscht, gelöscht noch eingefroren werden – nicht einmal von unserem Team." },
    ],
  },
  nft: {
    eyebrow: "IHRE DIGITALE IDENTITÄT",
    title: "Ihre NFT-Identität auf der TON-Blockchain",
    intro:
      "Ihr Crypto Style-Profil ist mehr als nur ein Konto. Es ist ein dauerhaft auf der TON-Blockchain gespeichertes NFT – Ihr digitaler Ausweis innerhalb des Ökosystems.",
    points: [
      "Unmöglich zu fälschen oder zu kopieren",
      "Kann weder gelöscht noch eingefroren werden",
      "Nur Sie haben Zugriff auf Ihr Vermögen",
      "Volle Kontrolle über Ihre TON-Wallet",
      "Kann vererbt oder verkauft werden",
    ],
    quote:
      "Nicht einmal Crypto Style selbst kann Ihr Konto sperren. Nur der Inhaber der Wallet hat Zugriff auf die Vermögenswerte.",
    caption: "Crypto Style NFT-Pass",
  },
  ton: {
    eyebrow: "AUF TON AUFGEBAUT",
    title: "Warum TON?",
    intro:
      "TON (The Open Network) gehört zu den am schnellsten wachsenden Blockchains der Welt und ist nahtlos in Telegram integriert. Das gesamte Crypto Style-Ökosystem basiert auf TON.",
    items: [
      { title: "Hohe Geschwindigkeit", desc: "Transaktionen werden innerhalb weniger Sekunden bestätigt und Auszahlungen erfolgen nahezu sofort auf Ihre Wallet." },
      { title: "Niedrige Gebühren", desc: "Die Transaktionsgebühren betragen nur einen Bruchteil eines Cents, sodass Sie nahezu Ihre gesamte Belohnung behalten." },
      { title: "Telegram-Integration", desc: "TON ist eng mit Telegram integriert und macht Blockchain-Dienste über Mini Apps leicht zugänglich." },
      { title: "Globales Netzwerk", desc: "Ein globales Netzwerk, das Nutzern weltweit einen nahtlosen Zugang zu digitalen Vermögenswerten ohne geografische Einschränkungen ermöglicht." },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "Von Affiliate-Programmen zu einem vollständigen Ökosystem",
    intro:
      "Crypto Style ist ein sich ständig weiterentwickelndes Ökosystem, das Schritt für Schritt wächst und frühe Teilnehmer belohnt.",
    stages: [
      { name: "PHASE 1", title: "Komfort", desc: "Telegram Mini App mit NFT-Profilen. Ein nahtloses Nutzererlebnis für den Alltag – ohne komplizierte Websites oder zusätzliche Anmeldungen." },
      { name: "PHASE 2", title: "Stabilität", desc: "CS Coin, gedeckt durch reale Vermögenswerte. Vielfältige Affiliate-Programme. Geringere Abhängigkeit von Marktschwankungen." },
      { name: "PHASE 3", title: "Wirtschaft", desc: "CS USD mit echtem Nutzen. Integrierter Marktplatz. Vielfältige Geschäftsmodelle. Nahtlose Fiat-Konvertierung." },
      { name: "PHASE 4", title: "Dezentralisierung", desc: "DAO-Governance. Listings an führenden DEX- und CEX-Börsen. Staking über Nominator Pools. Eigene Netzwerk-Validatoren." },
      { name: "PHASE 5", title: "Intelligenz", desc: "KI-gestützte Marketingstrategien, die sich automatisch an die Ziele jedes Nutzers anpassen." },
    ],
  },
  cta: {
    title: "Jetzt starten",
    intro:
      "Crypto Style ist auf langfristiges Wachstum ausgelegt. Jede neue Phase schafft zusätzlichen Mehrwert für frühe Teilnehmer.",
    stats: [
      { value: "0", label: "Vermittler", desc: "Direkte Auszahlungen per Smart Contract – Wallet zu Wallet" },
      { value: "5", label: "Entwicklungsphasen", desc: "Von einer Telegram Mini App zu einem vollständig dezentralen Ökosystem" },
      { value: "TON", label: "Auf TON aufgebaut", desc: "Basiert auf einer der am schnellsten wachsenden Blockchain-Netzwerke der Welt." },
    ],
    btn1: "TON-Wallet verbinden",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "In Telegram öffnen",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Ihr Geld. Ihre Regeln. Ihre Zukunft.",
  },
  footer: "© Crypto Style. Alle Rechte vorbehalten.",
};
const fr: Dict = {
  nav: { features: "Fonctionnalités", nft: "Profil NFT", ton: "TON", roadmap: "Feuille de route" },
  hero: {
    title1: "Crypto Style",
    title2: "La plateforme d'affiliation nouvelle génération",
    subtitle:
      "Une plateforme d'affiliation décentralisée avec des paiements instantanés, des passeports NFT et une transparence totale garantie par la blockchain TON.",
    cta1: "Connecter votre portefeuille",
    cta2: "Découvrir les fonctionnalités",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-FR" },
  why: {
    eyebrow: "POURQUOI CRYPTO STYLE ?",
    title: "Une plateforme où les règles ne changent jamais",
    intro:
      "Crypto Style n'est pas une simple plateforme d'affiliation fondée sur des promesses. C'est un écosystème décentralisé basé sur la blockchain TON, où chaque transaction est sécurisée par des smart contracts et où vous seul gardez le contrôle de vos fonds.",
    items: [
      { title: "Transparence", desc: "Chaque transaction est enregistrée de manière permanente sur la blockchain. Aucune condition cachée. Aucune manipulation. Des smart contracts entièrement transparents." },
      { title: "Paiements instantanés", desc: "Les récompenses sont calculées automatiquement et versées directement sur votre portefeuille. Aucun délai. Aucun transfert manuel." },
      { title: "Décentralisation", desc: "Les smart contracts s'exécutent automatiquement selon des règles prédéfinies." },
      { title: "Profil NFT", desc: "Votre compte existe sous forme de NFT sur la blockchain TON. Il ne peut être ni falsifié, ni supprimé, ni gelé, pas même par notre équipe." },
    ],
  },
  nft: {
    eyebrow: "VOTRE IDENTITÉ NUMÉRIQUE",
    title: "Votre identité NFT sur la blockchain TON",
    intro:
      "Votre profil Crypto Style est bien plus qu'un simple compte. Il s'agit d'un NFT enregistré de façon permanente sur la blockchain TON : votre passeport numérique au sein de l'écosystème.",
    points: [
      "Impossible à falsifier ou à copier",
      "Ne peut être ni supprimé ni gelé",
      "Vous seul avez accès à vos fonds",
      "Contrôle total via votre portefeuille TON",
      "Peut être transmis par héritage ou vendu",
    ],
    quote:
      "Même Crypto Style ne peut pas bloquer votre compte. Seul le propriétaire du portefeuille contrôle l'accès aux fonds.",
    caption: "Passeport NFT Crypto Style",
  },
  ton: {
    eyebrow: "PROPULSÉ PAR TON",
    title: "Pourquoi TON ?",
    intro:
      "TON (The Open Network) est l'une des blockchains à la croissance la plus rapide au monde, parfaitement intégrée à Telegram. Tout l'écosystème Crypto Style repose sur TON.",
    items: [
      { title: "Haute vitesse", desc: "Les transactions sont confirmées en quelques secondes et les paiements arrivent presque instantanément sur votre portefeuille." },
      { title: "Frais réduits", desc: "Les frais de transaction ne représentent qu'une fraction de centime, ce qui vous permet de conserver presque l'intégralité de vos récompenses." },
      { title: "Intégration à Telegram", desc: "TON est étroitement intégré à Telegram, rendant les services blockchain facilement accessibles via les Mini Apps." },
      { title: "Réseau mondial", desc: "Un réseau mondial offrant aux utilisateurs un accès fluide aux actifs numériques, sans aucune restriction géographique." },
    ],
  },
  roadmap: {
    eyebrow: "FEUILLE DE ROUTE",
    title: "Des programmes d'affiliation à un écosystème complet",
    intro:
      "Crypto Style est un écosystème en constante évolution, qui se développe étape par étape et récompense les premiers participants.",
    stages: [
      { name: "ÉTAPE 1", title: "Simplicité", desc: "Mini App Telegram. Profils NFT. Domaine .TON. Un service conçu pour un usage quotidien, sans sites complexes ni connexions multiples." },
      { name: "ÉTAPE 2", title: "Stabilité", desc: "Notre CS Coin, adossé à des actifs réels. Une large gamme de programmes d'affiliation. Une exposition réduite à la volatilité des marchés." },
      { name: "ÉTAPE 3", title: "Économie", desc: "CS USD avec une véritable utilité. Marketplace intégré. Modèles de commerce. Conversion partielle en monnaie fiduciaire." },
      { name: "ÉTAPE 4", title: "Décentralisation", desc: "Gouvernance DAO. Cotation sur les principales plateformes DEX et CEX. Staking via les Nominator Pools. Propres validateurs du réseau." },
      { name: "ÉTAPE 5", title: "Intelligence", desc: "Une plateforme permettant de créer des stratégies marketing personnalisées. Une IA qui adapte votre activité aux objectifs de chaque utilisateur." },
    ],
  },
  cta: {
    title: "Commencez dès aujourd'hui",
    intro:
      "Crypto Style est conçu pour une croissance à long terme. Chaque nouvelle étape crée davantage de valeur pour les premiers participants.",
    stats: [
      { value: "0", label: "intermédiaire", desc: "Paiements directs par smart contract, de portefeuille à portefeuille." },
      { value: "5", label: "étapes de développement", desc: "D'une Mini App Telegram à un écosystème entièrement décentralisé." },
      { value: "TON", label: "Construit sur TON", desc: "Basé sur l'un des réseaux blockchain connaissant la croissance la plus rapide au monde." },
    ],
    btn1: "Connecter votre portefeuille TON",
    btn1Link: en.cta.btn1Link,
    btn2: "Ouvrir dans Telegram",
    btn2Link: en.cta.btn2Link,
    tagline: "Votre argent. Vos règles. Votre avenir.",
  },
  footer: "© Crypto Style. Tous droits réservés.",
};
const it: Dict = {
  nav: { features: "Funzionalità", nft: "Profilo NFT", ton: "TON", roadmap: "Roadmap" },
  hero: {
    title1: "Crypto Style",
    title2: "La piattaforma di affiliazione di nuova generazione",
    subtitle:
      "Una piattaforma di affiliazione decentralizzata con pagamenti istantanei, passaporti NFT e totale trasparenza garantita dalla blockchain TON.",
    cta1: "Connetti il wallet",
    cta2: "Esplora le funzionalità",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-IT" },
  why: {
    eyebrow: "PERCHÉ CRYPTO STYLE?",
    title: "Una piattaforma dove le regole non cambiano mai",
    intro:
      "Crypto Style non è l'ennesima piattaforma di affiliazione basata su promesse. È un ecosistema decentralizzato sulla blockchain TON, dove ogni transazione è protetta dagli smart contract e solo tu hai il controllo dei tuoi fondi.",
    items: [
      { title: "Trasparenza", desc: "Ogni transazione è registrata in modo permanente sulla blockchain. Nessuna condizione nascosta. Nessuna manipolazione. Solo smart contract trasparenti." },
      { title: "Pagamenti istantanei", desc: "Le ricompense vengono calcolate automaticamente e inviate direttamente al tuo wallet. Nessuna attesa. Nessun trasferimento manuale." },
      { title: "Decentralizzazione", desc: "Gli smart contract vengono eseguiti automaticamente secondo regole predefinite." },
      { title: "Profilo NFT", desc: "Il tuo account esiste come NFT sulla blockchain TON. Non può essere falsificato, eliminato o congelato, nemmeno dal nostro team." },
    ],
  },
  nft: {
    eyebrow: "LA TUA IDENTITÀ DIGITALE",
    title: "La tua identità NFT sulla blockchain TON",
    intro:
      "Il tuo profilo Crypto Style non è un semplice account. È un NFT registrato in modo permanente sulla blockchain TON: il tuo passaporto digitale all'interno dell'ecosistema.",
    points: [
      "Impossibile da falsificare o copiare",
      "Non può essere eliminato né congelato",
      "Solo tu hai accesso ai tuoi fondi",
      "Controllo totale tramite il tuo wallet TON",
      "Può essere ereditato o venduto",
    ],
    quote:
      "Nemmeno Crypto Style può bloccare il tuo account. Solo il proprietario del wallet controlla l'accesso ai fondi.",
    caption: "Passaporto NFT Crypto Style",
  },
  ton: {
    eyebrow: "BASATO SU TON",
    title: "Perché TON?",
    intro:
      "TON (The Open Network) è una delle blockchain in più rapida crescita al mondo, perfettamente integrata con Telegram. L'intero ecosistema Crypto Style è costruito su TON.",
    items: [
      { title: "Alta velocità", desc: "Le transazioni vengono confermate in pochi secondi e i pagamenti arrivano quasi istantaneamente sul tuo wallet." },
      { title: "Commissioni ridotte", desc: "Le commissioni di transazione sono solo una frazione di centesimo, permettendoti di conservare quasi tutte le tue ricompense." },
      { title: "Integrazione con Telegram", desc: "TON è strettamente integrata con Telegram, rendendo i servizi blockchain facilmente accessibili tramite le Mini App." },
      { title: "Rete globale", desc: "Una rete globale che offre agli utenti un accesso semplice agli asset digitali, senza limitazioni geografiche." },
    ],
  },
  roadmap: {
    eyebrow: "ROADMAP",
    title: "Dai programmi di affiliazione a un ecosistema completo",
    intro:
      "Crypto Style è un ecosistema in continua evoluzione che cresce fase dopo fase, premiando chi partecipa fin dall'inizio.",
    stages: [
      { name: "FASE 1", title: "Semplicità", desc: "Mini App Telegram. Profili NFT. Un servizio pensato per l'uso quotidiano, senza siti complessi né accessi aggiuntivi." },
      { name: "FASE 2", title: "Stabilità", desc: "CS Coin supportato da asset reali. Un'ampia gamma di programmi di affiliazione. Minore esposizione alla volatilità del mercato." },
      { name: "FASE 3", title: "Economia", desc: "CS USD con un'utilità reale. Marketplace integrato. Diversi modelli di business. Conversione parziale in valuta fiat." },
      { name: "FASE 4", title: "Decentralizzazione", desc: "Governance DAO. Quotazione sui principali DEX e CEX. Staking tramite Nominator Pool. Validator di rete dedicati." },
      { name: "FASE 5", title: "Intelligenza", desc: "Una piattaforma per creare strategie di marketing personalizzate. Un'intelligenza artificiale che adatta il business agli obiettivi di ogni utente." },
    ],
  },
  cta: {
    title: "Inizia subito",
    intro:
      "Crypto Style è progettato per una crescita a lungo termine. Ogni nuova fase crea più valore per chi partecipa fin dall'inizio.",
    stats: [
      { value: "0", label: "intermediari", desc: "Pagamenti diretti tramite smart contract, da wallet a wallet" },
      { value: "5", label: "fasi di sviluppo", desc: "Da una Mini App Telegram a un ecosistema completamente decentralizzato." },
      { value: "TON", label: "Basato su TON", desc: "Costruito su una delle reti blockchain in più rapida crescita al mondo." },
    ],
    btn1: "Connetti il wallet TON",
    btn1Link: en.cta.btn1Link,
    btn2: "Apri in Telegram",
    btn2Link: en.cta.btn2Link,
    tagline: "Il tuo denaro. Le tue regole. Il tuo futuro.",
  },
  footer: "© Crypto Style. Tutti i diritti riservati.",
};
const es: Dict = {
  nav: { features: "Funciones", nft: "Perfil NFT", ton: "TON", roadmap: "Hoja de ruta" },
  hero: {
    title1: "Crypto Style",
    title2: "La plataforma de afiliación de nueva generación",
    subtitle:
      "Una plataforma de afiliación descentralizada con pagos instantáneos, pasaportes NFT y total transparencia garantizada por la blockchain TON.",
    cta1: "Conectar billetera",
    cta2: "Explorar funciones",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-ES" },
  why: {
    eyebrow: "¿POR QUÉ CRYPTO STYLE?",
    title: "Una plataforma donde las reglas nunca cambian",
    intro:
      "Crypto Style no es otra plataforma de afiliación basada en promesas. Es un ecosistema descentralizado construido sobre la blockchain TON, donde cada transacción está protegida por contratos inteligentes y solo tú controlas tus fondos.",
    items: [
      {
        title: "Transparencia",
        desc: "Cada transacción queda registrada de forma permanente en la blockchain. Sin condiciones ocultas. Sin manipulaciones. Solo contratos inteligentes transparentes.",
      },
      {
        title: "Pagos instantáneos",
        desc: "Las recompensas se calculan automáticamente y se envían directamente a tu billetera. Sin esperas. Sin transferencias manuales.",
      },
      {
        title: "Descentralización",
        desc: "Los contratos inteligentes se ejecutan automáticamente según reglas predefinidas.",
      },
      {
        title: "Perfil NFT",
        desc: "Tu cuenta existe como un NFT en la blockchain TON. No puede falsificarse, eliminarse ni congelarse, ni siquiera por nuestro equipo.",
      },
    ],
  },
  nft: {
    eyebrow: "TU IDENTIDAD DIGITAL",
    title: "Tu identidad NFT en la blockchain TON",
    intro:
      "Tu perfil de Crypto Style es mucho más que una cuenta. Es un NFT registrado de forma permanente en la blockchain TON: tu pasaporte digital dentro del ecosistema.",
    points: [
      "Imposible de falsificar o copiar",
      "No puede eliminarse ni congelarse",
      "Solo tú tienes acceso a tus fondos",
      "Control total a través de tu billetera TON",
      "Puede heredarse o venderse",
    ],
    quote:
      "Ni siquiera Crypto Style puede bloquear tu cuenta. Solo el propietario de la billetera controla el acceso a los fondos.",
    caption: "Pasaporte NFT de Crypto Style",
  },
  ton: {
    eyebrow: "BASADO EN TON",
    title: "¿Por qué TON?",
    intro:
      "TON (The Open Network) es una de las blockchains de mayor crecimiento del mundo, perfectamente integrada con Telegram. Todo el ecosistema de Crypto Style está construido sobre TON.",
    items: [
      {
        title: "Alta velocidad",
        desc: "Las transacciones se confirman en segundos y los pagos llegan a tu billetera casi al instante.",
      },
      {
        title: "Comisiones bajas",
        desc: "Las comisiones de la red son solo una fracción de un centavo, lo que te permite conservar casi todas tus recompensas.",
      },
      {
        title: "Integración con Telegram",
        desc: "TON está estrechamente integrada con Telegram, lo que facilita el acceso a los servicios blockchain a través de las Mini Apps.",
      },
      {
        title: "Red global",
        desc: "Una red global que ofrece a los usuarios acceso fluido a los activos digitales sin restricciones geográficas.",
      },
    ],
  },
  roadmap: {
    eyebrow: "HOJA DE RUTA",
    title: "De los programas de afiliación a un ecosistema completo",
    intro:
      "Crypto Style es un ecosistema en constante evolución que crece etapa a etapa, recompensando a quienes se unieron desde el principio.",
    stages: [
      {
        name: "ETAPA 1",
        title: "Simplicidad",
        desc: "Mini App de Telegram. Perfiles NFT. Un servicio diseñado para el uso diario, sin sitios web complejos ni inicios de sesión adicionales.",
      },
      {
        name: "ETAPA 2",
        title: "Estabilidad",
        desc: "CS Coin respaldada por activos reales. Una amplia variedad de programas de afiliación. Menor exposición a la volatilidad del mercado.",
      },
      {
        name: "ETAPA 3",
        title: "Economía",
        desc: "CS USD con utilidad real. Marketplace integrado. Diversos modelos de comercio. Conversión parcial a moneda fiduciaria.",
      },
      {
        name: "ETAPA 4",
        title: "Descentralización",
        desc: "Gobernanza DAO. Cotización en los principales DEX y CEX. Staking mediante Nominator Pool. Validadores propios de la red.",
      },
      {
        name: "ETAPA 5",
        title: "Inteligencia",
        desc: "Una plataforma para crear estrategias de marketing personalizadas. Una IA que adapta el negocio a los objetivos de cada usuario.",
      },
    ],
  },
  cta: {
    title: "Empieza hoy mismo",
    intro:
      "Crypto Style está diseñado para un crecimiento a largo plazo. Cada nueva etapa genera más valor para quienes se unen desde el principio.",
    stats: [
      { value: "0", label: "intermediarios", desc: "Pagos directos mediante contratos inteligentes, de billetera a billetera." },
      { value: "5", label: "etapas de desarrollo", desc: "De una Mini App de Telegram a un ecosistema completamente descentralizado." },
      { value: "TON", label: "Basado en TON", desc: "Construido sobre una de las redes blockchain de mayor crecimiento del mundo." },
    ],
    btn1: "Conectar billetera TON",
    btn1Link: en.cta.btn1Link,
    btn2: "Abrir en Telegram",
    btn2Link: en.cta.btn2Link,
    tagline: "Tu dinero. Tus reglas. Tu futuro.",
  },
  footer: "© Crypto Style. Todos los derechos reservados.",
};
const pt: Dict = {
  nav: { features: "Funcionalidades", nft: "Perfil NFT", ton: "TON", roadmap: "Roteiro" },
  hero: {
    title1: "Crypto Style",
    title2: "A plataforma de afiliados da nova geração",
    subtitle:
      "Uma plataforma de afiliados descentralizada com pagamentos instantâneos, passaportes NFT e total transparência garantida pela blockchain TON.",
    cta1: "Conectar carteira",
    cta2: "Explorar recursos",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-PT" },
  why: {
    eyebrow: "POR QUE A CRYPTO STYLE?",
    title: "Uma plataforma onde as regras nunca mudam",
    intro:
      "A Crypto Style não é apenas mais uma plataforma de afiliados baseada em promessas. É um ecossistema descentralizado construído sobre a blockchain TON, onde cada transação é protegida por contratos inteligentes e apenas você tem controle sobre os seus fundos.",
    items: [
      { title: "Transparência", desc: "Todas as transações são registradas permanentemente na blockchain. Sem condições ocultas. Sem manipulação. Apenas contratos inteligentes transparentes." },
      { title: "Pagamentos instantâneos", desc: "As recompensas são calculadas automaticamente e enviadas diretamente para a sua carteira. Sem espera. Sem transferências manuais." },
      { title: "Descentralização", desc: "Os contratos inteligentes são executados automaticamente de acordo com regras predefinidas." },
      { title: "Perfil NFT", desc: "A sua conta existe como um NFT na blockchain TON. Não pode ser falsificada, eliminada ou congelada, nem mesmo pela nossa equipa." },
    ],
  },
  nft: {
    eyebrow: "A SUA IDENTIDADE DIGITAL",
    title: "A sua identidade NFT na blockchain TON",
    intro:
      "O seu perfil na Crypto Style é muito mais do que uma simples conta. É um NFT registado permanentemente na blockchain TON — o seu passaporte digital dentro do ecossistema.",
    points: [
      "Impossível de falsificar ou copiar",
      "Não pode ser eliminado nem congelado",
      "Só você tem acesso aos seus fundos",
      "Controlo total através da sua carteira TON",
      "Pode ser herdado ou vendido",
    ],
    quote:
      "Nem a própria Crypto Style pode bloquear a sua conta. Apenas o proprietário da carteira controla o acesso aos fundos.",
    caption: "Passaporte NFT da Crypto Style",
  },
  ton: {
    eyebrow: "BASEADO NA TON",
    title: "Por que a TON?",
    intro:
      "A TON (The Open Network) é uma das blockchains com crescimento mais rápido do mundo, perfeitamente integrada ao Telegram. Todo o ecossistema da Crypto Style é construído sobre a TON.",
    items: [
      { title: "Alta velocidade", desc: "As transações são confirmadas em segundos, e os pagamentos chegam à sua carteira quase instantaneamente." },
      { title: "Baixas taxas", desc: "As taxas de transação representam apenas uma fração de um centavo, permitindo que você fique com praticamente todas as suas recompensas." },
      { title: "Integração com o Telegram", desc: "A TON é totalmente integrada ao Telegram, tornando os serviços em blockchain facilmente acessíveis através das Mini Apps." },
      { title: "Rede global", desc: "Uma rede global que oferece aos utilizadores acesso simples a ativos digitais, sem restrições geográficas." },
    ],
  },
  roadmap: {
    eyebrow: "ROTEIRO",
    title: "Dos programas de afiliados a um ecossistema completo",
    intro:
      "A Crypto Style é um ecossistema vivo que evolui etapa por etapa, recompensando quem participa desde o início.",
    stages: [
      { name: "ETAPA 1", title: "Simplicidade", desc: "Mini App no Telegram. Perfis NFT. Um serviço concebido para o uso diário, sem sites complexos nem logins adicionais." },
      { name: "ETAPA 2", title: "Estabilidade", desc: "CS Coin respaldada por ativos reais. Uma ampla variedade de programas de afiliados. Menor exposição à volatilidade do mercado." },
      { name: "ETAPA 3", title: "Economia", desc: "CS USD com utilidade no mundo real. Marketplace integrado. Diversos modelos de comércio. Conversão simplificada para moedas fiduciárias." },
      { name: "ETAPA 4", title: "Descentralização", desc: "Governança por DAO. Listagem da CS Coin nas principais DEXs e CEXs. Staking através de Nomination Pools. Validadores próprios da rede." },
      { name: "ETAPA 5", title: "Inteligência", desc: "Plataforma para criar estratégias de marketing personalizadas. Um modelo de IA que desenvolve o negócio de acordo com os objetivos de cada utilizador." },
    ],
  },
  cta: {
    title: "Comece hoje mesmo",
    intro:
      "Crypto Style não é um projeto para entrar e sair rapidamente. É um ecossistema que cresce com o tempo. Cada nova etapa aumenta as vantagens para quem começou mais cedo.",
    stats: [
      { value: "0", label: "Intermediários", desc: "Pagamentos diretos por smart contract, de carteira para carteira." },
      { value: "5", label: "Etapas de crescimento", desc: "De um Mini App no Telegram a uma infraestrutura descentralizada completa." },
      { value: "TON", label: "Baseado na blockchain TON", desc: "Construído sobre uma das blockchains de crescimento mais rápido do mundo." },
    ],
    btn1: "Conectar carteira TON",
    btn1Link: en.cta.btn1Link,
    btn2: "Abrir no Telegram",
    btn2Link: en.cta.btn2Link,
    tagline: "Seu dinheiro. Suas regras. Sua blockchain.",
  },
  footer: "© Crypto Style. Todos os direitos reservados.",
};
const uk: Dict = {
  nav: { features: "Можливості", nft: "NFT-профіль", ton: "TON", roadmap: "Дорожня карта" },
  hero: {
    title1: "Crypto Style",
    title2: "Платформа нового покоління",
    subtitle:
      "Партнерські програми без адміністраторів і посередників. Миттєві виплати прямо на ваш гаманець, NFT-паспорти учасників та 100% прозорість на блокчейні TON.",
    cta1: "Підключити гаманець",
    cta2: "Переглянути можливості",
    cta1Link: ru.hero.cta1Link,
  },
  social: { ...ru.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-UA" },
  why: {
    eyebrow: "ЧОМУ CRYPTO STYLE?",
    title: "Платформа, де правила неможливо змінити",
    intro:
      "Crypto Style — це не черговий мережевий проєкт із обіцянками. Це інфраструктура на блокчейні TON, де кожна транзакція захищена смартконтрактом, а доступ до ваших коштів маєте лише ви.",
    items: [
      { title: "Прозорість", desc: "Усі транзакції назавжди записуються в блокчейн. Жодного шахрайства, жодних прихованих умов — лише відкритий код смартконтрактів." },
      { title: "Миттєві виплати", desc: "Винагороди нараховуються автоматично й одразу надходять на ваш гаманець. Без очікування. Без ручних переказів." },
      { title: "Децентралізація", desc: "Немає адміністраторів, які можуть затримати виплати або змінити правила. Смартконтракти завжди працюють за закладеною логікою." },
      { title: "NFT-профіль", desc: "Ваш акаунт існує як NFT у блокчейні TON. Його неможливо підробити, видалити чи заморозити — навіть адміністраторам." },
    ],
  },
  nft: {
    eyebrow: "ВАША ЦИФРОВА ОСОБИСТІСТЬ",
    title: "NFT-профіль у блокчейні TON",
    intro:
      "Ваш профіль у системі Crypto Style — це не просто акаунт. Це NFT, назавжди записаний у блокчейні TON. Це ваш цифровий паспорт в екосистемі.",
    points: [
      "Неможливо підробити або скопіювати",
      "Неможливо видалити чи заморозити",
      "Адміністратори не мають доступу до ваших коштів",
      "Повний контроль лише через ваш гаманець",
      "Може передаватися у спадок або бути проданий",
    ],
    quote:
      "Навіть Crypto Style не може заблокувати ваш акаунт. Доступ до коштів має лише власник гаманця.",
    caption: "NFT-картка Crypto Style",
  },
  ton: {
    eyebrow: "РОЗРАХУНКИ В КРИПТОВАЛЮТІ",
    title: "Чому TON?",
    intro:
      "TON (The Open Network) — один із найшвидше зростаючих блокчейнів у світі, інтегрований із Telegram. Саме на ньому побудована вся інфраструктура Crypto Style.",
    items: [
      { title: "Висока швидкість", desc: "Транзакції підтверджуються за лічені секунди, а виплати надходять на ваш гаманець майже миттєво." },
      { title: "Низькі комісії", desc: "Комісії в мережі TON становлять лише частки цента, тож ви зберігаєте майже всю свою винагороду." },
      { title: "Інтеграція з Telegram", desc: "TON — нативний блокчейн Telegram, що забезпечує зручний доступ до гаманця та Mini Apps для мільйонів користувачів." },
      { title: "Глобальна мережа", desc: "Глобальна мережа, яка надає користувачам у всьому світі безперешкодний доступ до цифрових активів без географічних обмежень." },
    ],
  },
  roadmap: {
    eyebrow: "Дорожня карта",
    title: "Від партнерських програм до інфраструктури",
    intro:
      "Crypto Style — це жива екосистема, яка розвивається поетапно, надаючи переваги тим, хто приєднався раніше.",
    stages: [
      { name: "Етап 1", title: "Зручність", desc: "Mini App у Telegram. NFT-профілі. Сервіс для щоденного використання без складних сайтів і входів." },
      { name: "Етап 2", title: "Стабільність", desc: "Власна монета CS Coin, забезпечена реальними активами. Різноманітні партнерські програми. Менша залежність від волатильності." },
      { name: "Етап 3", title: "Економіка", desc: "CS USD із реальним практичним застосуванням. Маркетплейс. Торговельні моделі. Часткова конвертація у фіат." },
      { name: "Етап 4", title: "Децентралізація", desc: "DAO — управління спільнотою. Лістинг CS Coin на DEX і CEX. Стейкінг через Nominator Pool. Власні валідатори." },
      { name: "Етап 5", title: "Інтелект", desc: "Платформа для створення власних маркетингових стратегій. AI-модель, що будує бізнес відповідно до цілей кожного користувача." },
    ],
  },
  cta: {
    title: "Почніть уже сьогодні",
    intro:
      "Crypto Style — це не історія «увійти й вийти». Це екосистема, яка стає сильнішою з часом. Кожен етап розвитку дає більше переваг тим, хто приєднався раніше.",
    stats: [
      { value: "0", label: "Посередників", desc: "Прямі виплати через смартконтракти — з гаманця в гаманець." },
      { value: "5", label: "Етапів розвитку", desc: "Від Mini App у Telegram до повноцінної децентралізованої інфраструктури." },
      { value: "TON", label: "Побудовано на TON", desc: "Побудовано на одній із найшвидше зростаючих блокчейн-мереж у світі." },
    ],
    btn1: "Підключити гаманець TON",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Відкрити в Telegram",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Ваші гроші. Ваші правила. Ваш блокчейн.",
  },
  footer: "© Crypto Style. Усі права захищені.",
};
const kk: Dict = {
  nav: { features: "Мүмкіндіктер", nft: "NFT-профиль", ton: "TON", roadmap: "Жол картасы" },
  hero: {
    title1: "Crypto Style",
    title2: "Жаңа буын платформасы",
    subtitle:
      "Әкімшілерсіз және делдалдарсыз серіктестік бағдарламалар. Төлемдер бірден әмияныңызға түседі, қатысушыларға арналған NFT-паспорттар және TON блокчейніндегі 100% ашықтық.",
    cta1: "Әмиянды қосу",
    cta2: "Мүмкіндіктерді қарау",
    cta1Link: "https://cryptostylematrix.github.io/frontend/",
  },
  social: {
    youtube: "https://www.youtube.com/@CryptoStyleOfficial-KK",
    twitter: "https://x.com/CryptoStyleTON",
    telegram: "https://t.me/CryptoStyleMatrix",
  },
  why: {
    eyebrow: "НЕГЕ CRYPTO STYLE?",
    title: "Ережелері өзгермейтін платформа",
    intro:
      "Crypto Style — жай ғана уәделерге құрылған желілік жоба емес. Бұл TON блокчейніндегі инфрақұрылым: әрбір транзакция смарт-келісімшартпен қорғалған, ал қаражатыңызға тек өзіңіз ғана қол жеткізе аласыз.",
    items: [
      { title: "Ашықтық", desc: "Барлық транзакциялар блокчейнде мәңгі сақталады. Ешқандай алаяқтық, жасырын шарттар жоқ — тек ашық смарт-келісімшарт коды." },
      { title: "Лезде төлемдер", desc: "Сыйақылар автоматты түрде есептеліп, бірден әмияныңызға жіберіледі. Күту жоқ. Қолмен аудару жоқ." },
      { title: "Орталықсыздандыру", desc: "Төлемдерді кідіртетін немесе ережелерді өзгертетін әкімшілер жоқ. Смарт-келісімшарттар әрқашан алдын ала белгіленген логика бойынша жұмыс істейді." },
      { title: "NFT-профиль", desc: "Сіздің аккаунтыңыз TON блокчейнінде NFT ретінде тіркеледі. Оны қолдан жасауға, жоюға немесе бұғаттауға болмайды — тіпті жоба әкімшілігінің өзі де мұны істей алмайды." },
    ],
  },
  nft: {
    eyebrow: "СІЗДІҢ ЦИФРЛЫҚ ЖЕКЕ ТҰЛҒАҢЫЗ",
    title: "TON блокчейніндегі NFT-профиль",
    intro:
      "Crypto Style жүйесіндегі профиліңіз — жай ғана аккаунт емес. Бұл TON блокчейнінде мәңгі тіркелетін NFT. Ол — экожүйедегі цифрлық төлқұжатыңыз.",
    points: [
      "Қолдан жасауға немесе көшіруге болмайды",
      "Жоюға немесе бұғаттауға болмайды",
      "Әкімшілердің қаражатыңызға қол жеткізу мүмкіндігі жоқ",
      "Толық бақылау тек өз әмияныңыз арқылы",
      "Мұраға қалдыруға немесе сатуға болады",
    ],
    quote:
      "Тіпті Crypto Style-дың өзі де аккаунтыңызды бұғаттай алмайды. Қаражатқа қол жеткізу құқығы тек әмиян иесіне ғана тиесілі.",
    caption: "Crypto Style NFT картасы",
  },
  ton: {
    eyebrow: "КРИПТОВАЛЮТАМЕН ЕСЕП АЙЫРЫСУ",
    title: "Неліктен TON?",
    intro:
      "TON (The Open Network) — әлемдегі ең жылдам дамып келе жатқан блокчейндердің бірі, Telegram-пен толық ықпалдастырылған. Crypto Style экожүйесінің бүкіл инфрақұрылымы осы желіде құрылған.",
    items: [
      { title: "Жоғары жылдамдық", desc: "Транзакциялар бірнеше секунд ішінде расталады. Төлемдер әмияныңызға іс жүзінде бірден түседі." },
      { title: "Төмен комиссиялар", desc: "TON желісіндегі комиссиялар — центтің аз ғана бөлігі. Сондықтан сыйақыларыңызды дерлік толық көлемде аласыз." },
      { title: "Telegram-пен интеграция", desc: "TON — Telegram-ның негізгі блокчейні. Миллиардтаған пайдаланушы әмиян мен Mini Apps қызметтеріне қол жеткізе алады." },
      { title: "Жаһандық желі", desc: "Әлемнің түкпір-түкпіріндегі пайдаланушыларды біріктіріп, цифрлық активтермен географиялық шектеулерсіз ыңғайлы жұмыс істеуге мүмкіндік береді." },
    ],
  },
  roadmap: {
    eyebrow: "ЖОЛ КАРТАСЫ",
    title: "Серіктестік бағдарламаларынан толық инфрақұрылымға дейін",
    intro:
      "Crypto Style — кезең-кезеңімен дамып келе жатқан тірі экожүйе. Ол ертерек қосылған қатысушыларға артықшылықтар береді.",
    stages: [
      { name: "1-КЕЗЕҢ", title: "Қолайлылық", desc: "Telegram-дағы Mini App. NFT-профильдер. Күрделі сайттар мен логиндерді қажет етпейтін күнделікті қолдануға арналған сервис." },
      { name: "2-КЕЗЕҢ", title: "Тұрақтылық", desc: "Нақты активтермен қамтамасыз етілген CS Coin монетасы. Серіктестік бағдарламаларының алуан түрлілігі. Құбылмалылыққа тәуелділікті азайту." },
      { name: "3-КЕЗЕҢ", title: "Экономика", desc: "CS USD нақты қолдануға ие. Маркетплейс. Тауарлық модельдер. Фиатқа ішінара айырбастау." },
      { name: "4-КЕЗЕҢ", title: "Орталықсыздандыру", desc: "DAO — қауымдастық арқылы басқару. Coin-ды DEX және CEX биржаларында іске қосу. Nominator Pool арқылы стейкинг. Өз валидаторлары." },
      { name: "5-КЕЗЕҢ", title: "Жасанды интеллект", desc: "Жеке маркетинг жүйелерін құруға арналған платформа. Әрбір пайдаланушының мақсаттарына сай бизнесті қалыптастыратын AI-модель." },
    ],
  },
  cta: {
    title: "Қазір бастаңыз",
    intro:
      "Crypto Style — «кіріп, шығып кететін» жоба емес. Бұл уақыт өте келе күшейе түсетін жүйе. Дамудың әрбір кезеңі ертерек қосылған қатысушыларға артықшылық береді.",
    stats: [
      { value: "0", label: "Делдалдар жоқ", desc: "Төлемдер смарт-келісімшарт арқылы әмияннан әмиянға тікелей жіберіледі." },
      { value: "5", label: "Даму кезеңі", desc: "Telegram-дағы Mini App-тен толық орталықтандырылмаған инфрақұрылымға дейін." },
      { value: "TON", label: "Негізгі блокчейн", desc: "Әлемдегі ең жылдам блокчейндердің бірінің негізінде құрылған." },
    ],
    btn1: "TON әмиянын қосу",
    btn1Link: "https://cryptostylematrix.github.io/frontend/",
    btn2: "Telegram-да ашу",
    btn2Link: "https://t.me/CryptoStyleMatrixbot",
    tagline: "Сіздің қаражатыңыз. Сіздің ережелеріңіз. Сіздің блокчейніңіз.",
  },
  footer: "© Crypto Style. Барлық құқықтар қорғалған.",
};
const pl: Dict = {
  nav: { features: "Funkcje", nft: "Profil NFT", ton: "TON", roadmap: "Mapa drogowa" },
  hero: {
    title1: ru.hero.title1,
    title2: "Platforma nowej generacji",
    subtitle:
      "Programy partnerskie bez administratorów i pośredników. Natychmiastowe wypłaty bezpośrednio do Twojego portfela, paszporty NFT uczestników oraz pełna przejrzystość dzięki blockchainowi TON.",
    cta1: "Podłącz portfel",
    cta2: "Poznaj funkcje",
    cta1Link: ru.hero.cta1Link,
  },
  social: {
    youtube: "https://www.youtube.com/@CryptoStyleOfficial-PL",
    twitter: ru.social.twitter,
    telegram: ru.social.telegram,
  },
  why: {
    eyebrow: "DLACZEGO CRYPTO STYLE?",
    title: "Platforma, w której zasad nie da się zmienić",
    intro:
      "Crypto Style to nie kolejny projekt sieciowy oparty na obietnicach. To infrastruktura zbudowana na blockchainie TON, gdzie każda transakcja jest zapisana w smart kontrakcie, a dostęp do środków ma wyłącznie ich właściciel.",
    items: [
      { title: "Przejrzystość", desc: "Wszystkie transakcje są zapisywane w blockchainie. Żadnych oszustw ani ukrytych warunków — tylko otwarty kod smart kontraktu." },
      { title: "Natychmiastowe wypłaty", desc: "Wynagrodzenie jest naliczane automatycznie i natychmiast trafia do Twojego portfela. Bez oczekiwania i bez ręcznych przelewów." },
      { title: "Decentralizacja", desc: "Brak administratorów, którzy mogliby wstrzymać wypłaty. Smart kontrakt zawsze działa zgodnie z zapisanymi zasadami." },
      { title: "Profil NFT", desc: "Twoje konto to NFT zapisane w blockchainie TON. Nie można go podrobić, usunąć ani zablokować — nawet przez administratorów." },
    ],
  },
  nft: {
    eyebrow: "TWOJA CYFROWA TOŻSAMOŚĆ",
    title: "Profil NFT w blockchainie TON",
    intro:
      "Twój profil w systemie Crypto Style to coś więcej niż zwykłe konto. To NFT zapisane na stałe w blockchainie TON — Twój cyfrowy paszport w ekosystemie.",
    points: [
      "Nie można go podrobić ani skopiować.",
      "Nie można go usunąć ani zablokować.",
      "Administratorzy nie mają dostępu do Twoich środków.",
      "Pełną kontrolę sprawujesz wyłącznie za pomocą własnego portfela.",
      "Może zostać przekazany w spadku lub sprzedany.",
    ],
    quote:
      "Nawet Crypto Style nie może zablokować Twojego konta. Dostęp do środków ma wyłącznie właściciel portfela.",
    caption: "Karta NFT Crypto Style",
  },
  ton: {
    eyebrow: "PŁATNOŚCI W KRYPTOWALUTACH",
    title: "Dlaczego TON?",
    intro:
      "TON (The Open Network) to jeden z najszybciej rozwijających się blockchainów na świecie, zintegrowany z Telegramem. Cała infrastruktura Crypto Style została zbudowana właśnie na nim.",
    items: [
      { title: "Wysoka szybkość", desc: "Transakcje są potwierdzane w ciągu kilku sekund. Wypłaty trafiają do portfela niemal natychmiast." },
      { title: "Niskie opłaty", desc: "Opłaty transakcyjne w sieci TON wynoszą zaledwie ułamek centa, dzięki czemu zachowujesz niemal całe swoje wynagrodzenie." },
      { title: "Integracja z Telegramem", desc: "TON jest natywnym blockchainem Telegrama. Miliardy użytkowników mają już dostęp do portfela oraz aplikacji Mini Apps." },
      { title: "Globalna sieć", desc: "Łączy użytkowników z całego świata i umożliwia wygodne korzystanie z aktywów cyfrowych bez ograniczeń geograficznych." },
    ],
  },
  roadmap: {
    eyebrow: "MAPA DROGOWA",
    title: "Od programów partnerskich do kompletnej infrastruktury",
    intro:
      "Crypto Style to żywy ekosystem, który rozwija się etapami, zapewniając przewagę osobom, które dołączyły wcześniej.",
    stages: [
      { name: "ETAP 1", title: "Wygoda", desc: "Mini App w Telegramie. Profile NFT. Usługa do codziennego korzystania bez skomplikowanych stron internetowych i logowania." },
      { name: "ETAP 2", title: "Stabilność", desc: "Własna moneta CS Coin zabezpieczona realnymi aktywami. Różnorodne programy partnerskie. Ograniczenie zależności od zmienności rynku." },
      { name: "ETAP 3", title: "Gospodarka", desc: "CS USD z praktycznym zastosowaniem. Marketplace. Modele towarowe. Częściowa konwersja na waluty fiducjarne." },
      { name: "ETAP 4", title: "Decentralizacja", desc: "DAO — zarządzanie przez społeczność. Wprowadzenie CS Coin na giełdy DEX i CEX. Staking poprzez Nominator Pool. Własne walidatory." },
      { name: "ETAP 5", title: "Sztuczna inteligencja", desc: "Platforma do tworzenia własnych systemów marketingowych. Model AI, który buduje biznes dostosowany do celów każdego użytkownika." },
    ],
  },
  cta: {
    title: "Rozpocznij już teraz",
    intro:
      "Crypto Style to nie historia typu „wejść i wyjść”. To system, który z czasem staje się coraz silniejszy. Każdy etap rozwoju daje przewagę tym, którzy dołączyli wcześniej.",
    stats: [
      { value: "0", label: "Pośredników", desc: "Bezpośrednie wypłaty za pośrednictwem smart kontraktu portfel → portfel" },
      { value: "5", label: "Etapów rozwoju", desc: "Od Mini App w Telegramie do zdecentralizowanej infrastruktury." },
      { value: "TON", label: "Blockchain jako fundament", desc: "Zbudowany na jednym z najszybszych blockchainów na świecie." },
    ],
    btn1: "Podłącz portfel TON",
    btn1Link: ru.cta.btn1Link,
    btn2: "Otwórz w Telegramie",
    btn2Link: ru.cta.btn2Link,
    tagline: "Twoje pieniądze. Twoje zasady. Twój blockchain.",
  },
  footer: "© Crypto Style. Wszystkie prawa zastrzeżone.",
};
const hu: Dict = {
  nav: { features: "Funkciók", nft: "NFT-profil", ton: "TON", roadmap: "Ütemterv" },
  hero: {
    title1: "Crypto Style",
    title2: "A következő generáció platformja",
    subtitle:
      "Partnerprogramok adminisztrátorok és közvetítők nélkül. Azonnali kifizetések közvetlenül a pénztárcádba, a résztvevők NFT-útlevelei és 100%-os átláthatóság a TON blokkláncon.",
    cta1: "TON pénztárca csatlakoztatása",
    cta2: "Funkciók felfedezése",
    cta1Link: en.hero.cta1Link,
  },
  social: { ...en.social, youtube: "https://www.youtube.com/@CryptoStyleOfficial-HU" },
  why: {
    eyebrow: "MIÉRT A CRYPTO STYLE?",
    title: "Platform, ahol a szabályokat nem lehet megváltoztatni",
    intro:
      "A Crypto Style nem egy újabb hálózatépítő projekt ígéretekkel. Ez egy, a TON blokkláncra épülő infrastruktúra, ahol minden tranzakciót okosszerződés rögzít, és a pénzeszközeidhez kizárólag te férhetsz hozzá.",
    items: [
      {
        title: "Átláthatóság",
        desc: "Minden tranzakció rögzítve van a blokkláncon. Nincs csalás, nincsenek rejtett feltételek – csak a nyílt forráskódú okosszerződés.",
      },
      {
        title: "Azonnali kifizetések",
        desc: "A jutalmak automatikusan kerülnek jóváírásra, és azonnal megérkeznek a pénztárcádba. Nincs várakozás, nincs manuális utalás.",
      },
      {
        title: "Decentralizáció",
        desc: "Nincsenek adminisztrátorok, akik visszatarthatják a kifizetéseket. Az okosszerződés mindig az előre meghatározott szabályok szerint működik.",
      },
      {
        title: "NFT-profil",
        desc: "A fiókod egy NFT a TON blokkláncon. Nem hamisítható, nem törölhető és nem fagyasztható be – még az adminisztrátorok számára sem.",
      },
    ],
  },
  nft: {
    eyebrow: "AZ ÖN DIGITÁLIS SZEMÉLYAZONOSSÁGA",
    title: "NFT-profil a TON blokkláncon",
    intro:
      "A Crypto Style rendszerében a profilod nem csupán egy fiók. Ez egy NFT, amely véglegesen rögzítve van a TON blokkláncon. Ez a te digitális útleveled az ökoszisztémában.",
    points: [
      "Nem hamisítható és nem másolható.",
      "Nem törölhető és nem fagyasztható be.",
      "Az adminisztrátoroknak nincs hozzáférésük a pénzeszközeidhez.",
      "A teljes irányítás kizárólag a pénztárcádon keresztül történik.",
      "Örökölhető vagy értékesíthető.",
    ],
    quote:
      "Még a Crypto Style sem tudja zárolni a fiókodat. A pénzeszközeidhez kizárólag a pénztárca tulajdonosa férhet hozzá.",
    caption: "Crypto Style NFT-kártya",
  },
  ton: {
    eyebrow: "KRIPTOPÉNZES ELSZÁMOLÁS",
    title: "Miért a TON?",
    intro:
      "A TON (The Open Network) a világ egyik leggyorsabban fejlődő blokklánca, amely szorosan integrálódik a Telegrammal. A Crypto Style teljes infrastruktúrája erre a hálózatra épül.",
    items: [
      {
        title: "Nagy sebesség",
        desc: "A tranzakciók másodpercek alatt feldolgozásra kerülnek. A kifizetések szinte azonnal megérkeznek a pénztárcádba.",
      },
      {
        title: "Alacsony tranzakciós díjak",
        desc: "A TON hálózaton a tranzakciós díjak csak a cent töredékét teszik ki. A jutalmad szinte teljes összegét megkapod, veszteség nélkül.",
      },
      {
        title: "Telegram-integráció",
        desc: "A TON a Telegram natív blokklánca. Felhasználók milliárdjai férnek már hozzá a pénztárcához és a Mini Appokhoz.",
      },
      {
        title: "Globális hálózat",
        desc: "Világszerte összeköti a felhasználókat, és lehetővé teszi a digitális eszközök kényelmes használatát földrajzi korlátozások nélkül.",
      },
    ],
  },
  roadmap: {
    eyebrow: "ÜTEMTERV",
    title: "A partnerprogramoktól az infrastruktúráig",
    intro:
      "A Crypto Style egy folyamatosan fejlődő ökoszisztéma, amely lépésről lépésre épül, és előnyt biztosít azoknak, akik korábban csatlakoznak.",
    stages: [
      {
        name: "1. SZAKASZ",
        title: "Kényelem",
        desc: "Mini App a Telegramban. NFT-profilok. Mindennapi használatra tervezett szolgáltatás bonyolult weboldalak és bejelentkezések nélkül.",
      },
      {
        name: "2. SZAKASZ",
        title: "Stabilitás",
        desc: "Saját CS Coin, valódi fedezettel. Sokszínű partnerprogramok. Csökkentett függőség a piaci volatilitástól.",
      },
      {
        name: "3. SZAKASZ",
        title: "Gazdaság",
        desc: "CS USD valós felhasználási lehetőségekkel. Piactér. Termékalapú üzleti modellek. Részleges átváltás fiat pénznemre.",
      },
      {
        name: "4. SZAKASZ",
        title: "Decentralizáció",
        desc: "DAO-alapú közösségi irányítás. A Coin bevezetése DEX-re és CEX-re. Staking a Nominator Poolon keresztül. Saját validátorok.",
      },
      {
        name: "5. SZAKASZ",
        title: "Mesterséges intelligencia",
        desc: "Platform saját marketingrendszerek létrehozásához. Olyan AI-modell, amely minden felhasználó céljaihoz igazodva építi fel az üzletet.",
      },
    ],
  },
  cta: {
    title: "Kezdje el még ma",
    intro:
      "A Crypto Style nem a „belépni és kilépni” története. Ez egy olyan rendszer, amely idővel egyre erősebbé válik. A fejlődés minden szakasza előnyt biztosít azoknak, akik korábban csatlakoztak.",
    stats: [
      {
        value: "0",
        label: "Közvetítő",
        desc: "Közvetlen kifizetések okosszerződésen keresztül pénztárca → pénztárca",
      },
      {
        value: "5",
        label: "Fejlődési szakasz",
        desc: "A Telegram Mini Apptól a decentralizált infrastruktúráig.",
      },
      {
        value: "TON",
        label: "A blokklánc alapja",
        desc: "A világ egyik leggyorsabb blokkláncára épül.",
      },
    ],
    btn1: "TON pénztárca csatlakoztatása",
    btn1Link: en.cta.btn1Link,
    btn2: "Megnyitás a Telegramban",
    btn2Link: en.cta.btn2Link,
    tagline: "A pénzed. A szabályaid. A blokkláncod.",
  },
  footer: "© Crypto Style. Minden jog fenntartva.",
};

export const DICTS: Record<LangCode, Dict> = {
  ru, en, de, fr, it, es, pt, uk, kk, pl, hu,
};

export const I18nContext = createContext<{ lang: LangCode; setLang: (l: LangCode) => void; t: Dict }>({
  lang: "ru",
  setLang: () => {},
  t: ru,
});

export const useI18n = () => useContext(I18nContext);

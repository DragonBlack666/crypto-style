import { Twitter, Youtube, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function SocialLinks() {
  const { t } = useI18n();

  const links = [
    { name: "YouTube", href: t.social.youtube, icon: Youtube },
    { name: "Twitter", href: t.social.twitter, icon: Twitter },
    { name: "Telegram", href: t.social.telegram, icon: Send },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30 bg-surface/60 text-foreground/80 backdrop-blur transition hover:border-gold hover:text-gold md:h-9 md:w-9"
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}

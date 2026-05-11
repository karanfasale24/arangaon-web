import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, MapPin, Phone, Languages } from "lucide-react";
import { useContent } from "@/lib/content-store";
import { useI18n } from "@/lib/i18n";
import logoImg from "@/assets/grampanchayat-logo.webp";

const nav = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/history", key: "nav.history" },
  { to: "/services", key: "nav.services" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteLayout() {
  const c = useContent();
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  const villageName = lang === "mr" ? t("village.name") : c.village.name;
  const villageTagline = lang === "mr" ? t("village.tagline") : c.village.tagline;
  const villageAddress = lang === "mr" ? t("village.address") : c.village.address;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top utility bar */}
      <div className="bg-secondary text-secondary-foreground text-xs">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "mr" : "en")}
            className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-secondary-foreground/10 hover:bg-secondary-foreground/20 transition-colors font-medium"
            aria-label="Toggle language"
          >
            <Languages className="h-3.5 w-3.5" />
            <span>{t("lang.toggleTo")}</span>
          </button>
          <a href={`mailto:${c.village.email}`} className="flex items-center gap-2 hover:underline">
            <Mail className="h-3.5 w-3.5" /> {c.village.email}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Arangaon Grampanchayat logo"
              className="h-12 w-12 rounded-full object-contain bg-card shadow-md ring-1 ring-border"
            />

            <div className="leading-tight">
              <div className="font-bold text-base sm:text-lg">{villageName}</div>
              <div className="text-[11px] text-muted-foreground">{t("layout.locationTag")}</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-accent text-accent-foreground" }}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {t(n.key)}
              </Link>
            ))}
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label={t("layout.menu")}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t bg-card">
            <div className="container mx-auto px-4 py-2 flex flex-col">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: n.to === "/" }}
                  activeProps={{ className: "bg-accent text-accent-foreground" }}
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  {t(n.key)}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground mt-12">
        <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg mb-3">{villageName}</h3>
            <p className="text-sm opacity-90">{villageTagline}</p>
            <p className="text-sm opacity-90 mt-2">{t("layout.footerTagline")}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{t("layout.quickLinks")}</h3>
            <ul className="space-y-1.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}><Link to={n.to} className="opacity-90 hover:opacity-100 hover:underline">{t(n.key)}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3">{t("layout.contact")}</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> {villageAddress}</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> <a href={`mailto:${c.village.email}`} className="hover:underline">{c.village.email}</a></li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> {c.village.phone}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20">
          <div className="container mx-auto px-4 py-4 text-xs opacity-80 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} {villageName}. {t("layout.rights")}</span>
            <span>{t("layout.designedFor")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

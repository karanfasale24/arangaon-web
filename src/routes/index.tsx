import { createFileRoute, Link } from "@tanstack/react-router";
import bhavanImg from "@/assets/grampanchayat-bhavan.jpeg";
import { ArrowRight, Building2, Users, Leaf, ShieldCheck } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arangaon Grampanchayat (Meherabad) — Home" },
      { name: "description", content: "Official home of Arangaon Grampanchayat, Meherabad. Transparent governance and citizen services." },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useI18n();
  return (
    <>
      {/* Hero — focus on the Grampanchayat Bhavan building */}
      <section className="bg-background">
        <div className="container mx-auto px-4 pt-6">
          <div className="rounded-xl overflow-hidden border shadow-[var(--shadow-card)] bg-card">
            <img
              src={bhavanImg}
              alt="Gramsansad Bhavan, Arangaon (Meherabad)"
              className="w-full h-[320px] sm:h-[440px] lg:h-[520px] object-cover object-center"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 py-10">
          <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium tracking-wide">
            {t("home.tag")}
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold max-w-3xl leading-tight text-foreground">
            {t("home.heroTitle")}
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            {t("home.heroSubtitle")}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/services" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold shadow-md hover:bg-primary/90">
              {t("home.exploreServices")} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border hover:bg-muted font-medium text-foreground">
              {t("home.contactOffice")}
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="container mx-auto px-4 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{t("home.welcomeTitle")}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{t("home.welcomeBody")}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-[var(--gradient-warm)] border-y">
        <div className="container mx-auto px-4 py-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Building2, title: t("home.h1.title"), text: t("home.h1.text") },
            { icon: Users, title: t("home.h2.title"), text: t("home.h2.text") },
            { icon: Leaf, title: t("home.h3.title"), text: t("home.h3.text") },
            { icon: ShieldCheck, title: t("home.h4.title"), text: t("home.h4.text") },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card rounded-xl p-5 shadow-[var(--shadow-card)] border">
              <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground grid place-items-center mb-3">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="container mx-auto px-4 py-16 grid gap-6 md:grid-cols-3">
        {[
          { to: "/about" as const, title: t("home.q1.title"), text: t("home.q1.text") },
          { to: "/history" as const, title: t("home.q2.title"), text: t("home.q2.text") },
          { to: "/gallery" as const, title: t("home.q3.title"), text: t("home.q3.text") },
        ].map((card) => (
          <Link key={card.to} to={card.to} className="group rounded-xl border bg-card p-6 hover:shadow-[var(--shadow-elegant)] transition-shadow">
            <h3 className="font-bold text-lg group-hover:text-primary">{card.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{card.text}</p>
            <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4">{t("home.readMore")} <ArrowRight className="h-4 w-4" /></span>
          </Link>
        ))}
      </section>
    </>
  );
}

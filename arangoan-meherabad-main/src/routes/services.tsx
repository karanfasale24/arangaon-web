import { createFileRoute } from "@tanstack/react-router";
import { useContent } from "@/lib/content-store";
import { PageHeader } from "./about";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Arangaon Grampanchayat" },
      { name: "description", content: "Citizen services offered by Arangaon Grampanchayat." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const c = useContent();
  const { t } = useI18n();
  const items = [
    { title: t("services.s1.t"), description: t("services.s1.d") },
    { title: t("services.s2.t"), description: t("services.s2.d") },
    { title: t("services.s3.t"), description: t("services.s3.d") },
    { title: t("services.s4.t"), description: t("services.s4.d") },
    { title: t("services.s5.t"), description: t("services.s5.d") },
    { title: t("services.s6.t"), description: t("services.s6.d") },
    { title: t("services.s7.t"), description: t("services.s7.d") },
    { title: t("services.s8.t"), description: t("services.s8.d") },
  ];
  return (
    <>
      <PageHeader title={t("services.title")} subtitle={t("services.subtitle")} />
      <section className="container mx-auto px-4 py-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <div key={s.title} className="rounded-xl border bg-card p-6 hover:shadow-[var(--shadow-card)] transition-shadow">
            <CheckCircle2 className="h-6 w-6 text-secondary" />
            <h3 className="mt-3 font-bold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </section>
      <section className="container mx-auto px-4 pb-16">
        <div className="rounded-xl bg-black text-white p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4 shadow-[var(--shadow-elegant)]">
          <div>
            <h3 className="text-xl font-bold">{t("services.help")}</h3>
            <p className="opacity-90 text-sm mt-1">{t("services.helpBody")}</p>
          </div>
          <a href={`mailto:${c.village.email}`} className="px-5 py-2.5 rounded-md bg-white text-primary font-semibold">{t("services.emailOffice")}</a>
        </div>
      </section>
    </>
  );
}

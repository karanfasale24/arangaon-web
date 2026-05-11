import { createFileRoute } from "@tanstack/react-router";
import { useContent } from "@/lib/content-store";
import { useI18n } from "@/lib/i18n";
import { Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Arangaon Grampanchayat" },
      { name: "description", content: "About Arangaon Grampanchayat, Meherabad — its mission, values and people." },
    ],
  }),
  component: AboutPage,
});

const committeeMembers = [
  { name: "श्री. पोपट विठ्ठल पुंड", roleKey: "about.role.sarpanch" },
  { name: "सौ. मोहिनी सूर्यभान जाधव", roleKey: "about.role.upasarpanch" },
  { name: "सौ. अंजुम मुस्ताक सय्यद", roleKey: "about.role.sadasya_f" },
  { name: "सौ. नम्रता प्रवीण कांबळे", roleKey: "about.role.sadasya_f" },
  { name: "श्री. विठ्ठल पंढरीनाथ दळवी", roleKey: "about.role.sadasya_m" },
  { name: "श्री. सतीश रमेश दळवी", roleKey: "about.role.sadasya_m" },
  { name: "सौ. प्रतीक्षा अर्जुन पुंड", roleKey: "about.role.sadasya_f" },
  { name: "सौ. स्वाती भाऊसाहेब शिंदे", roleKey: "about.role.sadasya_f" },
  { name: "श्री. सागर बाळासाहेब कल्हापुरे", roleKey: "about.role.sadasya_m" },
  { name: "सौ. नंदा बबन करांडे", roleKey: "about.role.sadasya_f" },
  { name: "सौ. प्रतिभा दिलीप थोरात", roleKey: "about.role.sadasya_f" },
  { name: "श्री. ईश्वर बाळकृष्ण फसले", roleKey: "about.role.sadasya_m" },
  { name: "श्री. मयूर अरुण जगताप", roleKey: "about.role.sadasya_m" },
  { name: "श्री. अनशाबापू भागिनाथ शिंदे", roleKey: "about.role.sadasya_m" },
  { name: "श्री. नाथा जगन शिंदे", roleKey: "about.role.sadasya_m" },
  { name: "सौ. सोनाली मारुती आमले", roleKey: "about.role.sadasya_f" },
];

function AboutPage() {
  const c = useContent();
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t("about.title")} subtitle={t("about.subtitle")} />

      {/* Committee Members */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Users className="h-7 w-7 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">{t("about.committee")}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {committeeMembers.map((m, i) => (
            <div key={i} className="rounded-xl border bg-card p-4 shadow-[var(--shadow-card)] flex flex-col gap-1">
              <span className="font-semibold text-foreground">{m.name}</span>
              <span className="text-sm text-primary font-medium">{t(m.roleKey as any)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 prose-like">
          <p className="text-muted-foreground leading-relaxed text-[15px]">{t("about.body")}</p>
          <h2 className="mt-8 text-xl font-bold text-foreground">{t("about.mission")}</h2>
          <p className="mt-2 text-muted-foreground leading-relaxed">{t("about.missionBody")}</p>
          <h2 className="mt-8 text-xl font-bold text-foreground">{t("about.values")}</h2>
          <ul className="mt-2 space-y-2 text-muted-foreground">
            <li>• {t("about.v1")}</li>
            <li>• {t("about.v2")}</li>
            <li>• {t("about.v3")}</li>
            <li>• {t("about.v4")}</li>
          </ul>
        </div>
        <aside className="rounded-xl border bg-card p-6 h-fit shadow-[var(--shadow-card)]">
          <h3 className="font-bold">{t("about.officeInfo")}</h3>
          <dl className="mt-4 space-y-3 text-sm">
            <div><dt className="text-muted-foreground">{t("about.office")}</dt><dd className="font-medium">{t("about.officeName")}</dd></div>
            <div><dt className="text-muted-foreground">{t("about.location")}</dt><dd className="font-medium">{t("about.locationName")}</dd></div>
            <div><dt className="text-muted-foreground">{t("about.taluka")}</dt><dd className="font-medium">{t("about.talukaName")}</dd></div>
            <div><dt className="text-muted-foreground">{t("about.state")}</dt><dd className="font-medium">{t("about.stateName")}</dd></div>
            <div><dt className="text-muted-foreground">{t("about.email")}</dt><dd className="font-medium break-all"><a href={`mailto:${c.village.email}`} className="text-primary hover:underline">{c.village.email}</a></dd></div>
          </dl>
        </aside>
      </section>
    </>
  );
}

export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-[var(--gradient-hero)] text-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

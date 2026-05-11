import { createFileRoute } from "@tanstack/react-router";
import { useContent } from "@/lib/content-store";
import { PageHeader } from "./about";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arangaon Grampanchayat" },
      { name: "description", content: "Contact Arangaon Grampanchayat office, Meherabad, Ahilyanagar." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const c = useContent();
  const { t, lang } = useI18n();
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const subject = t("contact.subjectPrefix") + (name || t("contact.website"));
  const mailto = `mailto:${c.village.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`;
  const address = lang === "mr" ? t("village.address") : c.village.address;

  return (
    <>
      <PageHeader title={t("contact.title")} subtitle={t("contact.subtitle")} />
      <section className="container mx-auto px-4 py-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="rounded-xl border bg-card p-5 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground grid place-items-center"><Mail className="h-5 w-5" /></div>
            <div>
              <div className="text-sm text-muted-foreground">{t("contact.email")}</div>
              <a href={`mailto:${c.village.email}`} className="font-semibold text-primary hover:underline break-all">{c.village.email}</a>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-5 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground grid place-items-center"><MapPin className="h-5 w-5" /></div>
            <div>
              <div className="text-sm text-muted-foreground">{t("contact.address")}</div>
              <div className="font-semibold">{address}</div>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-5 flex items-start gap-4">
            <div className="h-10 w-10 rounded-lg bg-accent text-accent-foreground grid place-items-center"><Phone className="h-5 w-5" /></div>
            <div>
              <div className="text-sm text-muted-foreground">{t("contact.phone")}</div>
              <div className="font-semibold">{c.village.phone}</div>
            </div>
          </div>
        </div>

        <form
          className="rounded-xl border bg-card p-6 shadow-[var(--shadow-card)]"
          onSubmit={(e) => { e.preventDefault(); window.location.href = mailto; }}
        >
          <h3 className="font-bold text-lg">{t("contact.send")}</h3>
          <p className="text-sm text-muted-foreground">{t("contact.sendBody")}</p>
          <div className="mt-4 space-y-3">
            <div>
              <label className="text-sm font-medium">{t("contact.name")}</label>
              <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border px-3 py-2 bg-background" placeholder={t("contact.namePh")} />
            </div>
            <div>
              <label className="text-sm font-medium">{t("contact.message")}</label>
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} required rows={5} className="mt-1 w-full rounded-md border px-3 py-2 bg-background" placeholder={t("contact.messagePh")} />
            </div>
            <button type="submit" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
              {t("contact.sendBtn")}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

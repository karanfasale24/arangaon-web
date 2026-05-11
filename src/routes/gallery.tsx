import { createFileRoute } from "@tanstack/react-router";
import { useContent } from "@/lib/content-store";
import { PageHeader } from "./about";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Arangaon Grampanchayat" },
      { name: "description", content: "Photo gallery of village activities and development work." },
    ],
  }),
  component: GalleryPage,
});

const captionKeys = ["gallery.g1", "gallery.g2", "gallery.g3", "gallery.g4", "gallery.g5"] as const;

function GalleryPage() {
  const c = useContent();
  const { t } = useI18n();
  return (
    <>
      <PageHeader title={t("gallery.title")} subtitle={t("gallery.subtitle")} />
      <section className="container mx-auto px-4 py-12">
        {c.gallery.length === 0 ? (
          <p className="text-muted-foreground">{t("gallery.empty")}</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.gallery.map((g, i) => {
              const caption = captionKeys[i] ? t(captionKeys[i]) : g.caption;
              return (
                <figure key={i} className="rounded-xl overflow-hidden border bg-card shadow-[var(--shadow-card)]">
                  <img src={g.src} alt={caption} className="w-full h-56 object-cover" />
                  <figcaption className="p-4 text-sm text-muted-foreground">{caption}</figcaption>
                </figure>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

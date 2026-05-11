import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Link } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Arangaon Grampanchayat (Meherabad) — Official Website" },
      { name: "description", content: "Official website of Arangaon Grampanchayat, Meherabad — a historic village in Ahilyanagar, Maharashtra. Citizen services, schemes, gallery and contact." },
      { property: "og:title", content: "Arangaon Grampanchayat (Meherabad) — Official Website" },
      { name: "twitter:title", content: "Arangaon Grampanchayat (Meherabad) — Official Website" },
      { property: "og:description", content: "Official website of Arangaon Grampanchayat, Meherabad — a historic village in Ahilyanagar, Maharashtra. Citizen services, schemes, gallery and contact." },
      { name: "twitter:description", content: "Official website of Arangaon Grampanchayat, Meherabad — a historic village in Ahilyanagar, Maharashtra. Citizen services, schemes, gallery and contact." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a8f4ac8e-70cc-4ca8-ab4a-2c740bca4c47" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a8f4ac8e-70cc-4ca8-ab4a-2c740bca4c47" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: () => (
    <I18nProvider>
      <SiteLayout />
    </I18nProvider>
  ),
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
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

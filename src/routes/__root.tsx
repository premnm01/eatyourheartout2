import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
} from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eat Your Heart Out II — Sandwich Shop in Poway, CA" },
      { name: "description", content: "Beloved mom-and-pop deli in Poway serving generous, hand-stacked pastrami sandwiches, clubs, wraps, and salads. 4.9★ on Google." },
      { property: "og:title", content: "Eat Your Heart Out II — Sandwich Shop in Poway, CA" },
      { property: "og:description", content: "Beloved mom-and-pop deli in Poway serving generous, hand-stacked pastrami sandwiches, clubs, wraps, and salads. 4.9★ on Google." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Eat Your Heart Out II — Sandwich Shop in Poway, CA" },
      { name: "twitter:description", content: "Beloved mom-and-pop deli in Poway serving generous, hand-stacked pastrami sandwiches, clubs, wraps, and salads. 4.9★ on Google." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2026a198-c9c9-4736-ae83-149c9bc3fc3c/id-preview-5326d37a--cb50746e-feae-4344-837f-c428e61fa785.lovable.app-1778618399416.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2026a198-c9c9-4736-ae83-149c9bc3fc3c/id-preview-5326d37a--cb50746e-feae-4344-837f-c428e61fa785.lovable.app-1778618399416.png" },
      { property: "og:site_name", content: "Eat Your Heart Out II" },
      { property: "og:locale", content: "en_US" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Eat Your Heart Out II",
          image: "https://eatyourheartout2.lovable.app/og-image.jpg",
          url: "https://eatyourheartout2.lovable.app",
          telephone: "+1-858-486-7976",
          priceRange: "$10–$20",
          servesCuisine: ["Sandwiches", "Deli", "American"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "12600 Stowe Dr #2",
            addressLocality: "Poway",
            addressRegion: "CA",
            postalCode: "92064",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 32.9956,
            longitude: -117.0876,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "10:00",
              closes: "14:30",
            },
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "207",
          },
          acceptsReservations: false,
          hasMenu: "https://eatyourheartout2.lovable.app/menu",
        }),
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

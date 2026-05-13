import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit & Hours — Eat Your Heart Out II, Poway" },
      {
        name: "description",
        content:
          "Find Eat Your Heart Out II at 12600 Stowe Dr #2, Poway, CA 92064. Open Monday through Friday for lunch. Call (858) 486-7976.",
      },
      { property: "og:title", content: "Visit & Hours — Eat Your Heart Out II, Poway" },
      { property: "og:description", content: "12600 Stowe Dr #2, Poway, CA 92064. Open Mon–Fri 10:00 AM–2:30 PM. Call (858) 486-7976." },
      { property: "og:url", content: "https://eatyourheartout2.lovable.app/visit" },
    ],
    links: [{ rel: "canonical", href: "https://eatyourheartout2.lovable.app/visit" }],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">Visit</span>
          <h1 className="mt-3 font-display text-5xl font-black text-ink md:text-6xl">
            Come hungry.
          </h1>
          <div className="mt-10 space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Address
              </h2>
              <p className="mt-2 text-lg text-ink">
                12600 Stowe Dr #2<br />
                Poway, CA 92064
              </p>
              <p className="text-sm text-muted-foreground">Inside Scenic View Business Park</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Phone
              </h2>
              <a href="tel:+18584867976" className="mt-2 block text-lg font-semibold text-paprika">
                (858) 486-7976
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Hours
              </h2>
              <ul className="mt-2 space-y-1 text-ink">
                <li className="flex justify-between border-b border-border py-1">
                  <span>Monday – Friday</span><span>10:00 AM – 2:30 PM</span>
                </li>
                <li className="flex justify-between border-b border-border py-1">
                  <span>Saturday</span><span className="text-muted-foreground">Closed</span>
                </li>
                <li className="flex justify-between py-1">
                  <span>Sunday</span><span className="text-muted-foreground">Closed</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Service
              </h2>
              <p className="mt-2 text-ink">Dine-in · Takeout · Delivery</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Eat+Your+Heart+Out+II+12600+Stowe+Dr+Poway+CA"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full bg-paprika px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
          <iframe
            title="Map to Eat Your Heart Out II"
            src="https://www.google.com/maps?q=12600+Stowe+Dr+%232,+Poway,+CA+92064&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-4xl px-6 pb-24">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">Good to Know</span>
      <h2 className="mt-2 font-display text-4xl font-bold text-ink">Common questions</h2>
      <div className="mt-10 divide-y divide-border">
        {faqs.map((f) => (
          <div key={f.q} className="py-6">
            <h3 className="font-display text-lg font-semibold text-ink">{f.q}</h3>
            <p className="mt-2 text-muted-foreground">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

const faqs = [
  {
    q: "Can I call ahead for pickup?",
    a: "Yes — calling ahead is the fastest way to grab lunch. The kitchen gets busy between 11:30 and 1:00, so an early call helps your order be ready when you arrive.",
  },
  {
    q: "Where do I park?",
    a: "There's free parking right outside the shop in the Scenic View Business Park lot. Look for the suite #2 door.",
  },
  {
    q: "Do you take credit cards?",
    a: "Yes — all major cards plus cash. There's no surcharge for card payments.",
  },
  {
    q: "Is delivery available?",
    a: "We're listed on the major delivery apps for the Poway area. For larger office orders, give us a call to coordinate directly.",
  },
  {
    q: "Are you open weekends?",
    a: "We're a weekday lunch spot — open Monday through Friday, 10:00 AM to 2:30 PM. Closed Saturday and Sunday.",
  },
];
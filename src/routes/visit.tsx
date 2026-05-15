import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, scaleIn, slideRight, stagger, staggerFast, viewport } from "@/lib/motion";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Can I call ahead for pickup?", acceptedAnswer: { "@type": "Answer", text: "Yes — calling ahead is the fastest way to grab lunch. The kitchen gets busy between 11:30 and 1:00." } },
            { "@type": "Question", name: "Where do I park?", acceptedAnswer: { "@type": "Answer", text: "Free parking is available in the Scenic View Business Park lot, right outside suite #2." } },
            { "@type": "Question", name: "Do you take credit cards?", acceptedAnswer: { "@type": "Answer", text: "Yes, all major credit cards and cash." } },
            { "@type": "Question", name: "Are you open weekends?", acceptedAnswer: { "@type": "Answer", text: "Open Monday through Friday, 10:00 AM to 2:30 PM. Closed Saturday and Sunday." } },
          ],
        }),
      },
    ],
  }),
  component: VisitPage,
});

function VisitPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">
              Visit
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-3 font-display text-5xl font-black text-ink md:text-6xl"
            >
              Come hungry.
            </motion.h1>

            <motion.div variants={staggerFast} className="mt-10 space-y-8">
              {[
                {
                  label: "Address",
                  content: (
                    <>
                      <p className="mt-2 text-lg text-ink">12600 Stowe Dr #2<br />Poway, CA 92064</p>
                      <p className="text-sm text-muted-foreground">Inside Scenic View Business Park</p>
                    </>
                  ),
                },
                {
                  label: "Phone",
                  content: (
                    <a href="tel:+18584867976" className="mt-2 block text-lg font-semibold text-paprika">
                      (858) 486-7976
                    </a>
                  ),
                },
              ].map((block) => (
                <motion.div key={block.label} variants={fadeUp}>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {block.label}
                  </h2>
                  {block.content}
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Hours</h2>
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
              </motion.div>

              <motion.div variants={fadeUp}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Service</h2>
                <p className="mt-2 text-ink">Dine-in · Takeout · Delivery</p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Eat+Your+Heart+Out+II+12600+Stowe+Dr+Poway+CA"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-paprika px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Open in Google Maps
                </a>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="overflow-hidden rounded-3xl border border-border shadow-xl"
          >
            <iframe
              title="Map to Eat Your Heart Out II"
              src="https://www.google.com/maps?q=12600+Stowe+Dr+%232,+Poway,+CA+92064&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">
            Good to Know
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 font-display text-4xl font-bold text-ink">
            Common questions
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 divide-y divide-border"
        >
          {faqs.map((f) => (
            <motion.div key={f.q} variants={fadeUp} className="py-6">
              <h3 className="font-display text-lg font-semibold text-ink">{f.q}</h3>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid items-center gap-8 rounded-3xl bg-ink p-10 text-cream md:grid-cols-[1fr_auto] md:p-14"
        >
          <div>
            <h2 className="font-display text-3xl font-bold">We'd love to see you.</h2>
            <p className="mt-3 max-w-md text-cream/70">
              Call ahead or just show up hungry. We'll take care of the rest.
            </p>
          </div>
          <motion.div variants={fadeIn} className="flex flex-wrap gap-3">
            <a
              href="tel:+18584867976"
              className="rounded-full bg-mustard px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink"
            >
              Call (858) 486-7976
            </a>
          </motion.div>
        </motion.div>
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

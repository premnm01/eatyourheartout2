import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-sandwich.jpg";
import interiorImg from "@/assets/deli-interior.jpg";
import { fadeUp, fadeIn, scaleIn, slideLeft, stagger, staggerFast, viewport } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Eat Your Heart Out II — Sandwich Shop in Poway, CA" },
      {
        name: "description",
        content:
          "Hand-stacked pastrami, clubs, wraps and salads from a beloved Poway mom-and-pop deli. 4.9★ across 207 Google reviews.",
      },
      { property: "og:url", content: "https://eatyourheartout2.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://eatyourheartout2.lovable.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-paprika/30 bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-paprika"
            >
              ★ 4.9 · 207 Google reviews
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-6 font-display text-5xl font-black leading-[1.05] text-ink md:text-7xl"
            >
              Sandwiches stacked
              <span className="text-paprika"> the old-fashioned way.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg text-muted-foreground">
              A tiny mom-and-pop deli tucked inside a Poway business park, serving
              generous portions and warm welcomes since day one.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="rounded-full bg-paprika px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                See the Menu
              </Link>
              <a
                href="tel:+18584867976"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink transition-colors hover:border-ink"
              >
                (858) 486-7976
              </a>
            </motion.div>
            <motion.dl
              variants={staggerFast}
              className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm"
            >
              {[
                { dt: "Open", dd: "Mon–Fri · 10–2:30" },
                { dt: "Price", dd: "$10 – $20" },
                { dt: "Service", dd: "Dine-in · To-go" },
              ].map((s) => (
                <motion.div key={s.dt} variants={fadeUp}>
                  <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.dt}</dt>
                  <dd className="mt-1 font-semibold text-ink">{s.dd}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div className="relative" variants={scaleIn} initial="hidden" animate="visible">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-mustard/40 blur-2xl" />
            <img
              src={heroImg}
              alt="Towering pastrami club sandwich on toasted bread"
              width={1600}
              height={1200}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ── House Favorites ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex items-end justify-between"
        >
          <div>
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">
              House Favorites
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-2 font-display text-4xl font-bold text-ink">
              Crowd pleasers
            </motion.h2>
          </div>
          <motion.div variants={fadeIn}>
            <Link to="/menu" className="hidden text-sm font-semibold text-paprika hover:underline md:block">
              Full menu →
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {[
            { name: "Hot Pastrami", desc: "Steamed pastrami piled high on rye with mustard.", price: "$13" },
            { name: "Pastrami Corned Beef Club", desc: "Double-deck classic with the works.", price: "$15" },
            { name: "The #4 Club", desc: "Turkey, bacon, cheese, lettuce, tomato.", price: "$14" },
          ].map((item) => (
            <motion.article
              key={item.name}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-bold text-ink">{item.name}</h3>
                <span className="font-semibold text-paprika">{item.price}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{item.desc}</p>
              <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-mustard">
                — fan favorite
              </span>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <motion.img
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            src={interiorImg}
            alt="Cozy mom-and-pop deli interior with chalkboard menus"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">
              Our Story
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-2 font-display text-4xl font-bold">
              A jolly place, run by jolly people.
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-5 text-cream/80">
              Eat Your Heart Out II is a husband-and-wife operation tucked into the
              Scenic View Business Park. No frills, no gimmicks — just hand-built
              sandwiches, fair prices, and the kind of welcome that's worth the drive.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/about"
                className="mt-6 inline-block rounded-full border border-mustard px-5 py-2 text-xs font-semibold uppercase tracking-wider text-mustard transition-colors hover:bg-mustard hover:text-ink"
              >
                Read more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center"
        >
          <motion.span variants={fadeUp} className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">
            What people say
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-2 font-display text-4xl font-bold text-ink">
            4.9 stars. 207 reviews.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              quote: "I came because of the reviews. This place is better than the reviews can even say. Get the number 3!",
              name: "T B · Local Guide",
            },
            {
              quote: "Seriously amazing sandwich place with delightful staff. We've been meaning to go for years and finally did.",
              name: "B C",
            },
            {
              quote: "The owner and his wife were so nice and sweet. The #4 club was one of the best I've eaten in a while.",
              name: "Madelene C · Local Guide",
            },
          ].map((r) => (
            <motion.figure key={r.name} variants={fadeUp} className="rounded-2xl bg-cream p-6">
              <div className="text-mustard">★★★★★</div>
              <blockquote className="mt-3 text-sm leading-relaxed text-ink">"{r.quote}"</blockquote>
              <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid items-center gap-8 rounded-3xl bg-paprika p-10 text-primary-foreground md:grid-cols-[1fr_auto] md:p-14"
        >
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">Hungry yet?</h2>
            <p className="mt-3 max-w-md text-primary-foreground/80">
              Call ahead for pickup, or swing by during lunch. We close at 2:30 sharp.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+18584867976"
              className="rounded-full bg-mustard px-6 py-3 text-sm font-semibold uppercase tracking-wider text-ink"
            >
              Call (858) 486-7976
            </a>
            <Link
              to="/visit"
              className="rounded-full border border-cream/40 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream"
            >
              Get Directions
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

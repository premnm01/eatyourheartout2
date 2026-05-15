import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import interiorImg from "@/assets/deli-interior.jpg";
import { fadeUp, scaleIn, stagger, viewport } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eat Your Heart Out II, Poway" },
      {
        name: "description",
        content:
          "A husband-and-wife sandwich shop tucked into a Poway business park, known for warm welcomes, generous portions, and that free cookie.",
      },
      { property: "og:title", content: "About — Eat Your Heart Out II, Poway" },
      { property: "og:description", content: "A husband-and-wife sandwich shop tucked into a Poway business park, known for warm welcomes, generous portions, and that free cookie." },
      { property: "og:url", content: "https://eatyourheartout2.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://eatyourheartout2.lovable.app/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika"
          >
            Our Story
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="mt-3 font-display text-5xl font-black text-ink md:text-6xl"
          >
            A hidden gem in Poway.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Eat Your Heart Out II is the kind of place you tell your friends about
            and then immediately regret, because the line might get longer. Run by
            a sweet couple inside the Scenic View Business Park, it's a true
            mom-and-pop deli — the kind that remembers your order.
          </motion.p>
        </motion.div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10">
        <motion.img
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          src={interiorImg}
          alt="Inside Eat Your Heart Out II — warm atmosphere and friendly deli counter"
          width={1400}
          height={1000}
          loading="lazy"
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-xl"
        />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-2xl font-bold text-ink">How it started</h2>
            <p className="mt-3 text-muted-foreground">
              The shop has been a Poway lunch staple for years — a husband-and-wife team
              who built their reputation one sandwich at a time. There's no corporate
              playbook here, just two people who genuinely love what they do and show
              it in every order.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <h2 className="font-display text-2xl font-bold text-ink">The free cookie</h2>
            <p className="mt-3 text-muted-foreground">
              First-timers sometimes leave with a homemade cookie they didn't order and
              didn't pay for. It's not on the menu and there's no rule about it — it's
              just the kind of place this is. Come in once and you'll understand the
              reviews.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-24 md:grid-cols-3">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="contents"
        >
          {[
            {
              t: "Generous",
              d: "Sandwiches that you'll be tempted to split — and probably won't.",
            },
            {
              t: "Welcoming",
              d: "The owners greet regulars by name and newcomers like regulars.",
            },
            {
              t: "Honest",
              d: "Reasonable prices, real ingredients, no menu theater.",
            },
          ].map((card) => (
            <motion.div
              key={card.t}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <h3 className="font-display text-2xl font-bold text-paprika">{card.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
}

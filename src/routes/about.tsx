import { createFileRoute } from "@tanstack/react-router";
import interiorImg from "@/assets/deli-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Eat Your Heart Out II, Poway" },
      {
        name: "description",
        content:
          "A husband-and-wife sandwich shop tucked into a Poway business park, known for warm welcomes, generous portions, and that free cookie.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">Our Story</span>
        <h1 className="mt-3 font-display text-5xl font-black text-ink md:text-6xl">
          A hidden gem in Poway.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Eat Your Heart Out II is the kind of place you tell your friends about
          and then immediately regret, because the line might get longer. Run by
          a sweet couple inside the Scenic View Business Park, it's a true
          mom-and-pop deli — the kind that remembers your order.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <img
          src={interiorImg}
          alt="Inside Eat Your Heart Out II — warm atmosphere and friendly deli counter"
          width={1400}
          height={1000}
          loading="lazy"
          className="aspect-[16/9] w-full rounded-3xl object-cover shadow-xl"
        />
      </section>

      <section className="mx-auto grid max-w-5xl gap-8 px-6 pb-24 md:grid-cols-3">
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
          <div key={card.t} className="rounded-2xl border border-border bg-card p-8">
            <h3 className="font-display text-2xl font-bold text-paprika">{card.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{card.d}</p>
          </div>
        ))}
      </section>
    </>
  );
}
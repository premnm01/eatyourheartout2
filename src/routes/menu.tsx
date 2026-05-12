import { createFileRoute } from "@tanstack/react-router";
import plateImg from "@/assets/pastrami-plate.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Eat Your Heart Out II Deli, Poway" },
      {
        name: "description",
        content:
          "Sandwiches, clubs, wraps, salads and sides at Eat Your Heart Out II in Poway, CA. Hot pastrami, the famous #3 and #4 clubs, macaroni salad and more.",
      },
    ],
  }),
  component: MenuPage,
});

const sections = [
  {
    title: "Signature Sandwiches",
    items: [
      { name: "#1 — Hot Pastrami", desc: "Steamed pastrami, mustard, rye.", price: "$13" },
      { name: "#2 — Pastrami Corned Beef Club", desc: "Double-deck with everything on it.", price: "$15" },
      { name: "#3 — The Local Favorite", desc: "Ask anyone — they'll tell you to get it.", price: "$14" },
      { name: "#4 — Turkey Bacon Club", desc: "Turkey, bacon, cheese, lettuce, tomato.", price: "$14" },
      { name: "Everything on the Sandwich", desc: "House meats, cheese, fixings, dressings.", price: "$13" },
    ],
  },
  {
    title: "Wraps & Vegetarian",
    items: [
      { name: "Veggie Stack", desc: "Avocado, sprouts, cheese, garden veg.", price: "$11" },
      { name: "Turkey Wrap", desc: "Roasted turkey, greens, herb spread.", price: "$12" },
      { name: "Garden Wrap", desc: "Hummus, cucumber, tomato, onion, feta.", price: "$11" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Macaroni Salad", desc: "Made fresh, served cold.", price: "$4" },
      { name: "Kettle Chips", desc: "Crunchy & salty.", price: "$2" },
      { name: "House Pickle", desc: "Big, garlicky.", price: "$2" },
      { name: "Free Cookie", desc: "If you're lucky. Often you are.", price: "—" },
    ],
  },
];

function MenuPage() {
  return (
    <>
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-paprika">The Menu</span>
            <h1 className="mt-3 font-display text-5xl font-black text-ink md:text-6xl">
              Built by hand,<br />priced like a friend.
            </h1>
            <p className="mt-5 max-w-lg text-muted-foreground">
              Prices are estimates — the chalkboard inside is the source of truth.
              Most lunches land between $10 and $20 per person.
            </p>
          </div>
          <img
            src={plateImg}
            alt="Pastrami sandwich with macaroni salad and a pickle"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl space-y-16 px-6 py-20">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-3xl font-bold text-ink">{section.title}</h2>
            <div className="mt-2 h-px w-16 bg-paprika" />
            <ul className="mt-8 divide-y divide-border">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-baseline gap-4 py-5">
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-ink">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <span className="font-semibold text-paprika">{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
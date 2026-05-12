import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-xl font-black tracking-tight text-ink">
            Eat Your Heart Out
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paprika">
            II · Poway Deli
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-paprika"
              activeProps={{ className: "text-paprika" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a
          href="tel:+18584867976"
          className="hidden rounded-full bg-paprika px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
        >
          Call to Order
        </a>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-border/60 py-2 md:hidden">
        {nav.map((n) => (
          <Link
            key={n.to}
            to={n.to}
            className="text-xs font-medium text-foreground/70"
            activeProps={{ className: "text-paprika" }}
            activeOptions={{ exact: n.to === "/" }}
          >
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { stagger, fadeUp } from "@/lib/motion";
import { useIsOpen } from "@/lib/hours";

const nav = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/visit", label: "Visit" },
] as const;

export function SiteHeader() {
  const isOpen = useIsOpen();

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex flex-col leading-none">
            <span className="font-display text-xl font-black tracking-tight text-ink">
              Eat Your Heart Out
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paprika">
              II · Poway Deli
            </span>
          </Link>
          <AnimatePresence>
            {isOpen !== null && (
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`hidden items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider sm:flex ${
                  isOpen
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                }`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"} animate-pulse`} />
                {isOpen ? "Open" : "Closed"}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        <motion.nav
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((n) => (
            <motion.div key={n.to} variants={fadeUp}>
              <Link
                to={n.to}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-paprika"
                activeProps={{ className: "text-paprika" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.a
          href="tel:+18584867976"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
          className="hidden rounded-full bg-paprika px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-block"
        >
          Call to Order
        </motion.a>
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
    </motion.header>
  );
}

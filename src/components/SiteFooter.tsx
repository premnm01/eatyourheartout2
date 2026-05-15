import { motion } from "framer-motion";
import { stagger, fadeUp, viewport } from "@/lib/motion";

export function SiteFooter() {
  return (
    <motion.footer
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mt-24 border-t border-border bg-ink text-cream"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <motion.div variants={fadeUp}>
          <h3 className="font-display text-2xl font-bold">Eat Your Heart Out II</h3>
          <p className="mt-3 text-sm text-cream/70">
            A neighborhood sandwich shop in Poway, CA. Generous portions, friendly faces, free cookie if you're lucky.
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">Find Us</h4>
          <p className="mt-3 text-sm text-cream/80">
            12600 Stowe Dr #2<br />
            Poway, CA 92064<br />
            Scenic View Business Park
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-mustard">Hours</h4>
          <p className="mt-3 text-sm text-cream/80">
            Mon – Fri · 10:00 AM – 2:30 PM<br />
            Sat – Sun · Closed
          </p>
          <a href="tel:+18584867976" className="mt-3 inline-block text-sm font-semibold text-mustard hover:underline">
            (858) 486-7976
          </a>
        </motion.div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Eat Your Heart Out II. Made with mustard.
      </div>
    </motion.footer>
  );
}

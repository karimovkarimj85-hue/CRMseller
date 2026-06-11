import { motion } from 'framer-motion';
import { proofStripConfig } from '../config';

export default function ProofStrip() {
  return (
    <section className="border-y border-theme bg-surface-elevated/80 py-4 backdrop-blur-xl">
      <div className="container-main">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center sm:justify-between"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {proofStripConfig.items.map((item) => (
            <div key={item.label} className="min-w-[120px]">
              <p className="text-lg font-bold tabular-nums text-primary sm:text-xl">{item.value}</p>
              <p className="mt-0.5 text-xs text-muted">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

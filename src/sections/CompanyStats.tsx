import { motion } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter';
import AnimateIn from '../components/AnimateIn';
import { companyStatsConfig } from '../config';
import { fadeUp, staggerFast } from '../lib/motion';

export default function CompanyStats() {
  return (
    <section className="pb-12 sm:pb-16">
      <div className="container-main">
        <AnimateIn variants={fadeUp}>
          <p className="section-label">{companyStatsConfig.sectionLabel}</p>
          <h2 className="section-title mt-3">{companyStatsConfig.title}</h2>
          <p className="section-desc">{companyStatsConfig.description}</p>
        </AnimateIn>

        <motion.div
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {companyStatsConfig.items.map((stat) => (
            <motion.div key={stat.headline} variants={fadeUp} className="glass flex flex-col p-6">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-faint">{stat.headline}</p>
              <p className="stat-value mt-3">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import { aboutConfig } from '../config';
import { fadeUp, staggerFast } from '../lib/motion';

const MotionLink = motion.create(Link);

export default function About() {
  return (
    <section id="about" className="section-pad !py-12 sm:!py-16">
      <div className="container-main">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <AnimateIn variants={fadeUp}>
            <p className="section-label">{aboutConfig.sectionLabel}</p>
            <h2 className="section-title mt-3">{aboutConfig.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{aboutConfig.hook}</p>

            <MotionLink
              to={{ pathname: '/', hash: 'contact' }}
              className="btn-crm-outline mt-6 inline-flex gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Поговорить с командой <ArrowRight size={16} />
            </MotionLink>
          </AnimateIn>

          <motion.div
            className="space-y-3"
            variants={staggerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutConfig.outcomes.map((item) => (
              <motion.div key={item.title} variants={fadeUp} className="glass p-5">
                <h3 className="text-sm font-semibold text-primary">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="glass-inner mt-8 flex flex-wrap items-center justify-between gap-4 px-6 py-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted">{aboutConfig.trustLine}</p>
          <div className="flex flex-wrap gap-2">
            {aboutConfig.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-theme bg-[var(--btn-outline-bg)] px-3 py-1 text-xs text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

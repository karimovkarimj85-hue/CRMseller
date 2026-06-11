import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ModuleIcon from '../components/ModuleIcon';
import AnimateIn from '../components/AnimateIn';
import { facilitiesConfig } from '../config';
import { fadeUp, staggerFast } from '../lib/motion';

export default function Facilities() {
  const facilities = facilitiesConfig.items;
  if (!facilities.length) return null;

  return (
    <section id="facilities" className="section-pad">
      <div className="container-main">
        <AnimateIn variants={fadeUp}>
          <p className="section-label">{facilitiesConfig.sectionLabel}</p>
          <h2 className="section-title mt-3">Шесть модулей — всё в одном тарифе</h2>
          <p className="section-desc">
            Финансы, ученики, склад и CRM уже внутри. На отдельной странице — скрины каждого раздела.
          </p>
        </AnimateIn>

        <motion.div
          className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {facilities.map((f) => (
            <motion.div key={f.slug} variants={fadeUp}>
              <Link
                to={`/facility/${f.slug}`}
                className="group flex items-center gap-3 rounded-glass-lg border border-theme bg-surface p-4 transition hover:border-[var(--border-strong)] hover:bg-surface-elevated"
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-theme bg-surface-elevated text-primary"
                >
                  <ModuleIcon slug={f.slug} size={20} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-primary">{f.name}</h3>
                  <p className="mt-0.5 truncate text-xs text-muted">{f.address}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-faint transition group-hover:translate-x-0.5 group-hover:text-muted"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link to="/modules" className="btn-crm-outline inline-flex gap-2 text-sm">
            Все модули с экранами
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { manifestoConfig } from '../config';

const highlights = [
  'Персональный менеджер по развитию бизнеса',
  'Интеграция с Instagram и Telegram',
  'Аналитика и отчёты в реальном времени',
];

export default function Manifesto() {
  if (!manifestoConfig.text) return null;

  return (
    <section id="manifesto" className="section-pad bg-surface-muted">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label">О платформе</p>
            <h2 className="section-title mt-3">
              Всё для вашего центра — в одном окне
            </h2>
            <p className="section-desc">{manifestoConfig.text}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            {highlights.map((item, i) => (
              <div key={item} className="card-base flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm font-medium leading-relaxed text-slate-700">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

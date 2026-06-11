import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { archivesConfig } from '../config';

interface ArchivesProps {
  onConsultation: () => void;
}

export default function Archives({ onConsultation }: ArchivesProps) {
  return (
    <section id="archives" className="section-pad">
      <div className="container-main">
        <p className="section-label text-center">
          {archivesConfig.sectionLabel.replace(/[\[\]]/g, '').trim()}
        </p>
        <h2 className="section-title mt-4 text-center">Конкурентные преимущества</h2>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {archivesConfig.items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card flex items-center gap-4 p-5"
            >
              <span className="font-mono text-lg font-bold text-finance/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-medium text-slate-300">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-border mx-auto mt-14 max-w-3xl"
        >
          <div className="glass-card flex flex-col items-center gap-6 p-8 text-center sm:flex-row sm:text-left">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white">Готовы к демо?</h3>
              <p className="mt-2 text-sm text-slate-400">14 дней бесплатно + персональная настройка</p>
            </div>
            <button type="button" onClick={onConsultation} className="btn-primary shrink-0">
              {archivesConfig.vaultTitle}
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

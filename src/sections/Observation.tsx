import { motion } from 'framer-motion';
import { Play, Monitor, Shield, Zap } from 'lucide-react';
import { observationConfig } from '../config';

const perks = [
  { icon: Monitor, text: 'Интуитивный интерфейс' },
  { icon: Zap, text: 'Быстрый старт за 1 день' },
  { icon: Shield, text: 'Безопасное хранение данных' },
];

export default function Observation() {
  return (
    <section id="observation" className="section-pad bg-surface-dark text-white">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              {observationConfig.sectionLabel.replace(/[\[\]]/g, '').trim()}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Посмотрите Gain CRM в действии
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Запишитесь на демо — покажем систему на примере вашего учебного центра
              и ответим на все вопросы.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              {observationConfig.statusText}
            </div>

            <ul className="mt-8 space-y-3">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-slate-300">
                  <Icon size={18} className="text-brand-500" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-800/50">
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow">
                  <Play size={28} className="ml-1" fill="currentColor" />
                </div>
                <p className="text-center text-sm text-slate-400">
                  Демо-видео скоро будет доступно
                </p>
                <p className="text-center text-xs text-slate-500">
                  Запишитесь на консультацию — покажем систему вживую
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

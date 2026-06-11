import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, PieChart, BarChart2 } from 'lucide-react';
import { financeConfig } from '../config';

const icons = [TrendingUp, DollarSign, PieChart, BarChart2];

export default function Finance() {
  return (
    <section id="finance" className="section-pad relative overflow-hidden bg-void-900">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-finance/5 to-transparent" />

      <div className="container-main relative">
        <div className="max-w-3xl">
          <p className="section-label">{financeConfig.sectionLabel}</p>
          <h2 className="section-title mt-4">{financeConfig.title}</h2>
          <p className="section-desc">{financeConfig.description}</p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {financeConfig.highlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="gradient-border group"
              >
                <div className="glass-card flex h-full flex-col p-6 transition hover:bg-white/[0.05]">
                  <div className="flex items-start justify-between">
                    <Icon size={22} className="text-finance" />
                    <span className="font-mono text-2xl font-bold text-finance">{item.metric}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-2xl border border-finance/20 bg-void p-6 sm:p-8"
        >
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <span className="font-mono text-xs text-slate-500">// p&l_dashboard.q4_2025</span>
            <span className="font-mono text-xs text-finance">● REAL-TIME</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { label: 'Выручка', amount: '128.4M', pct: 100 },
              { label: 'Расходы', amount: '54.2M', pct: 42 },
              { label: 'Чистая прибыль', amount: '74.2M', pct: 58 },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{row.label}</span>
                  <span className="font-mono font-semibold text-white">{row.amount} <span className="text-slate-500">UZS</span></span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${row.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3 }}
                    className="h-full rounded-full bg-gradient-to-r from-finance-dim to-finance"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

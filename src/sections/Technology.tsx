import { motion } from 'framer-motion';
import { Cpu, Code2 } from 'lucide-react';
import { technologyConfig } from '../config';

export default function Technology() {
  return (
    <section id="technology" className="section-pad relative">
      <div className="container-main">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">{technologyConfig.sectionLabel}</p>
            <h2 className="section-title mt-4">{technologyConfig.title}</h2>
            <p className="section-desc">{technologyConfig.description}</p>
          </div>
          <div className="hidden items-center gap-2 font-mono text-xs text-slate-500 lg:flex">
            <Cpu size={14} />
            <span>arch: microservices · db: postgres · cache: redis</span>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologyConfig.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group glass-card p-6 transition hover:border-brand-500/30 hover:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <Code2 size={18} className="text-brand-400" />
                <span className="rounded border border-brand-500/30 bg-brand-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-400">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-4 font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 overflow-x-auto rounded-xl border border-white/10 bg-void-900 p-4 font-mono text-xs leading-relaxed text-slate-500"
        >
          <pre className="whitespace-pre">{`$ gain status --verbose
├── api.gaincrm.uz          ✓ healthy    latency: 42ms
├── fin-core                ✓ healthy    tx/s: 1,240
├── crm-engine              ✓ healthy    leads/sync: active
├── telegram-bridge         ✓ connected  uptime: 99.9%
└── backup                  ✓ last: 2h ago  encrypted: AES-256`}</pre>
        </motion.div>
      </div>
    </section>
  );
}

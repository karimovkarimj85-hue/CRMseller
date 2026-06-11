import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import DataValue from './DataValue';

const logLines = [
  { type: 'up', text: '[FIN] Касса #1: +2,400,000 UZS — Python Pro' },
  { type: 'neutral', text: '[CRM] Лид: @user → стадия "Контакт"' },
  { type: 'up', text: '[HR] Зарплата А.Каримов: 4,800,000 UZS ✓' },
  { type: 'down', text: '[STU] Задолженность: Р.Турсунов — 3 занятия' },
  { type: 'neutral', text: '[SCH] JS-2025: 18:00, каб. 4' },
];

const rows = [
  { label: 'Выручка', val: '42,800,000', unit: 'UZS', change: '+24%', dir: 'up' as const },
  { label: 'Расходы', val: '18,200,000', unit: 'UZS', change: '+3%', dir: 'neutral' as const },
  { label: 'Прибыль', val: '24,600,000', unit: 'UZS', change: '+38%', dir: 'up' as const },
  { label: 'Дебиторка', val: '3,100,000', unit: 'UZS', change: '−12%', dir: 'down' as const },
];

export default function TerminalDashboard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((v) => (v < logLines.length ? v + 1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="panel scanline relative overflow-hidden"
    >
      <div className="flex items-center gap-2 border-b border-gain-border px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-gain-red" />
        <span className="h-2 w-2 rounded-full bg-gain-white/40" />
        <span className="h-2 w-2 rounded-full bg-gain-green" />
        <span className="ml-2 font-mono text-[10px] text-gain-muted">gain.crm — dashboard</span>
        <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-gain-green">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-gain-green" />
          LIVE
        </span>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="border-b border-gain-border p-4 lg:border-b-0 lg:border-r">
          <p className="mb-3 font-mono text-[10px] text-gain-muted">// snapshot</p>
          <div className="space-y-2">
            {rows.map((row) => (
              <div key={row.label} className="flex items-center justify-between border border-gain-border/50 px-3 py-2">
                <span className="text-[11px] text-gain-muted">{row.label}</span>
                <div className="text-right">
                  <DataValue value={row.val} variant="neutral" size="sm" />
                  <span className="ml-1 font-mono text-[9px] text-gain-muted">{row.unit}</span>
                  <DataValue
                    value={` ${row.change}`}
                    variant={row.dir === 'up' ? 'positive' : row.dir === 'down' ? 'negative' : 'neutral'}
                    size="sm"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex h-16 items-end gap-px border border-gain-border p-2">
            {[40, 55, 45, 70, 60, 85, 75, 90, 65, 95, 80, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gain-green"
                style={{ height: `${h}%`, opacity: 0.3 + (h / 100) * 0.7 }}
              />
            ))}
          </div>
        </div>

        <div className="p-4">
          <p className="mb-3 font-mono text-[10px] text-gain-muted">// log</p>
          <div className="space-y-1 font-mono text-[10px] leading-relaxed">
            {logLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={`${line.text}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={
                  line.type === 'up' ? 'text-gain-green' :
                  line.type === 'down' ? 'text-gain-red' : 'text-gain-gray'
                }
              >
                <span className="text-gain-muted">{String(i + 1).padStart(2, '0')}</span> {line.text}
              </motion.div>
            ))}
            <span className="animate-blink text-gain-green">_</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

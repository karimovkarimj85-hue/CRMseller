import { motion } from 'framer-motion';
import { LayoutDashboard, Users, Wallet, Calendar, MessageSquare, Package } from 'lucide-react';
import DataValue from './DataValue';
import { staggerFast, fadeUp } from '../lib/motion';

const nav = [
  { icon: LayoutDashboard, label: 'Дашборд', active: true },
  { icon: Users, label: 'Ученики' },
  { icon: Wallet, label: 'Финансы' },
  { icon: Calendar, label: 'Расписание' },
  { icon: MessageSquare, label: 'CRM' },
  { icon: Package, label: 'Склад' },
];

const stats = [
  { label: 'Выручка', value: '42 800 000', suffix: 'UZS', change: '+24%', dir: 'up' as const },
  { label: 'Расходы', value: '18 200 000', suffix: 'UZS', change: '+3%', dir: 'neutral' as const },
  { label: 'Прибыль', value: '24 600 000', suffix: 'UZS', change: '+38%', dir: 'up' as const },
  { label: 'Долги', value: '3 100 000', suffix: 'UZS', change: '−12%', dir: 'down' as const },
];

const bars = [40, 55, 45, 70, 60, 85, 75, 90, 65, 95, 80, 100];

const rows = [
  { desc: 'Оплата Python Pro', sum: '+2 400 000', variant: 'positive' as const, date: 'Сегодня' },
  { desc: 'Зарплата преподавателя', sum: '−4 800 000', variant: 'negative' as const, date: 'Вчера' },
  { desc: 'Долг ученика', sum: '−180 000', variant: 'negative' as const, date: '3 дня' },
];

export default function CrmPreview() {
  return (
    <motion.div
      className="glass-lg overflow-hidden"
      initial={{ opacity: 0, y: 40, rotateY: -8 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      style={{ transformPerspective: 1200 }}
    >
      <div className="flex min-h-[360px]">
        <aside className="hidden w-48 shrink-0 border-r border-white/10 bg-black/30 p-4 backdrop-blur-xl sm:block">
          <motion.div
            className="mb-6 px-2 text-xs font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            GAIN CRM
          </motion.div>
          {nav.map(({ icon: Icon, label, active }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.07 }}
              whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.08)' }}
              className={`mb-1 flex cursor-default items-center gap-3 rounded-glass px-3 py-2.5 text-xs ${
                active ? 'bg-white/15 font-medium text-white' : 'text-white/40'
              }`}
            >
              <Icon size={15} />
              {label}
            </motion.div>
          ))}
        </aside>

        <div className="flex-1 p-5">
          <motion.div
            className="mb-5 flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <h3 className="text-sm font-semibold text-white">Дашборд</h3>
              <p className="text-xs text-white/40">Обзор за месяц</p>
            </div>
            <span className="glass-inner px-3 py-1.5 text-xs text-white/50">Декабрь 2025</span>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-3 lg:grid-cols-4"
            variants={staggerFast}
            initial="hidden"
            animate="visible"
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                whileHover={{ scale: 1.04, borderColor: 'rgba(255,255,255,0.2)' }}
                className="glass-inner p-3.5"
              >
                <p className="text-[11px] text-white/40">{s.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{s.value}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-[10px] text-white/30">{s.suffix}</span>
                  <DataValue
                    value={s.change}
                    variant={s.dir === 'up' ? 'positive' : s.dir === 'down' ? 'negative' : 'neutral'}
                    size="xs"
                    animate
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="glass-inner mt-4 p-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <p className="mb-3 text-xs font-medium text-white/70">Выручка по месяцам</p>
            <div className="mb-4 flex h-14 items-end gap-1">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-white/80"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1 + i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: `${h}%`, transformOrigin: 'bottom', opacity: 0.25 + (h / 100) * 0.75 }}
                />
              ))}
            </div>

            <p className="mb-3 text-xs font-medium text-white/70">Последние операции</p>
            <table className="w-full text-left text-[11px]">
              <thead>
                <tr className="text-white/35">
                  <th className="pb-2 font-medium">Описание</th>
                  <th className="pb-2 font-medium">Сумма</th>
                  <th className="pb-2 font-medium">Дата</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {rows.map((row, i) => (
                  <motion.tr
                    key={row.desc}
                    className="border-t border-white/10"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.15 }}
                  >
                    <td className="py-2.5">{row.desc}</td>
                    <td className="py-2.5">
                      <DataValue value={row.sum} variant={row.variant} size="xs" animate />
                    </td>
                    <td className="py-2.5 text-white/35">{row.date}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

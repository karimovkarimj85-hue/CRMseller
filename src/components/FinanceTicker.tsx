const items: { text: string; type: 'up' | 'down' | 'neutral' }[] = [
  { text: 'ВЫРУЧКА +24%', type: 'up' },
  { text: 'РАСХОДЫ +3%', type: 'neutral' },
  { text: 'ПРИБЫЛЬ +38%', type: 'up' },
  { text: 'ДЕБИТОРКА −12%', type: 'down' },
  { text: 'УЧЕНИКИ 248', type: 'neutral' },
  { text: 'ГРУППЫ 18', type: 'neutral' },
  { text: 'ДОЛГ 3.1M UZS', type: 'down' },
  { text: 'КОНВЕРСИЯ +5%', type: 'up' },
];

export default function FinanceTicker() {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-gain-border bg-gain-surface py-2.5">
      <div className="flex animate-ticker whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item.text}-${i}`}
            className={`mx-6 font-mono text-[11px] tracking-widest ${
              item.type === 'up' ? 'text-gain-green' :
              item.type === 'down' ? 'text-gain-red' : 'text-gain-muted'
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

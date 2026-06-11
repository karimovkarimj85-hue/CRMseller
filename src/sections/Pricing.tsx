import { contactConfig } from '../config';

const plans = [
  { name: 'Базовый', price: '1 990 000', period: 'UZS/мес' },
  { name: 'Стандарт', price: '3 990 000', period: 'UZS/мес' },
  { name: 'Премиум', price: '7 990 000', period: 'UZS/мес' },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-crm-border bg-crm-bg py-12">
      <div className="container-main">
        <p className="section-label">Тарифы</p>
        <p className="mt-2 text-xs text-crm-muted">Актуальные условия — при обращении</p>
        <div className="mt-5 flex flex-wrap gap-3">
          {plans.map((plan) => (
            <div key={plan.name} className="crm-card px-4 py-3">
              <p className="text-xs text-crm-muted">{plan.name}</p>
              <p className="mt-0.5 font-mono text-sm font-semibold text-crm-text">
                {plan.price} <span className="font-sans text-xs font-normal text-crm-muted">{plan.period}</span>
              </p>
            </div>
          ))}
        </div>
        <a href="#contact" className="btn-crm-outline mt-5 inline-flex text-xs">
          Уточнить → {contactConfig.channels[0].value}
        </a>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { isTelegramConfigured, sendTelegramLead } from '../lib/telegram';

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', center: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setError('');
      setFormData({ name: '', phone: '', email: '', center: '' });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isTelegramConfigured()) {
      setError('Отправка временно недоступна. Напишите нам в Telegram.');
      return;
    }

    setLoading(true);
    try {
      await sendTelegramLead('consultation', {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        center: formData.center.trim(),
        message: 'Заявка на консультацию с лендинга',
      });
      setSubmitted(true);
      setTimeout(handleClose, 2500);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Не удалось отправить. Попробуйте позже.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-void/80 backdrop-blur-sm" onClick={handleClose} />

      <div className="gradient-border relative w-full max-w-md">
        <div className="glass-card p-6 sm:p-8">
          <button type="button" onClick={handleClose} className="absolute right-4 top-4 text-slate-500 hover:text-white">
            <X size={20} />
          </button>

          {submitted ? (
            <div className="py-8 text-center">
              <CheckCircle2 size={48} className="mx-auto mb-4 text-finance" />
              <h3 className="text-xl font-bold text-white">Заявка принята</h3>
              <p className="mt-2 font-mono text-xs text-slate-400">Менеджер свяжется за 15 минут</p>
            </div>
          ) : (
            <>
              <p className="font-mono text-xs text-finance">// request_demo</p>
              <h3 className="mt-2 text-xl font-bold text-white">Запись на консультацию</h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {[
                  { key: 'name', label: 'Имя', type: 'text', placeholder: 'Карим Каримов', req: true },
                  { key: 'phone', label: 'Телефон', type: 'tel', placeholder: '+998 90 123 45 67', req: true },
                  { key: 'email', label: 'Email', type: 'email', placeholder: 'info@center.uz', req: false },
                  { key: 'center', label: 'Учебный центр', type: 'text', placeholder: 'GainTech Academy', req: false },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-wider text-slate-500">{f.label}</label>
                    <input
                      type={f.type}
                      required={f.req}
                      placeholder={f.placeholder}
                      value={formData[f.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-finance/50"
                      disabled={loading}
                    />
                  </div>
                ))}

                {error && (
                  <p className="flex items-center gap-2 text-xs text-red-400">
                    <AlertCircle size={14} />
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-primary w-full disabled:opacity-60" disabled={loading}>
                  {loading ? 'Отправляем...' : 'Отправить'} {!loading && <Send size={16} />}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

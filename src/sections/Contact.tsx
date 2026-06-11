import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Send, Mail, MessageCircle, Instagram, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import AnimateIn from '../components/AnimateIn';
import { contactConfig } from '../config';
import { fadeUp, staggerFast, scaleIn, cardHover } from '../lib/motion';

const icons = { phone: Phone, telegram: MessageCircle, email: Mail, instagram: Instagram };

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', phone: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="container-main">
        <AnimateIn variants={scaleIn}>
          <div className="glass-lg p-8 sm:p-10">
            <p className="section-label">{contactConfig.sectionLabel}</p>
            <h2 className="section-title mt-3">{contactConfig.title}</h2>
            <p className="section-desc">{contactConfig.description}</p>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <motion.div
                className="space-y-3"
                variants={staggerFast}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactConfig.channels.map((ch) => {
                  const Icon = icons[ch.type];
                  return (
                    <motion.a
                      key={ch.type}
                      href={ch.href}
                      target={ch.type === 'phone' || ch.type === 'email' ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      variants={fadeUp}
                      whileHover={cardHover}
                      className="glass flex items-center gap-4 p-4"
                    >
                      <motion.div
                        className="flex h-11 w-11 items-center justify-center rounded-glass bg-[var(--btn-outline-bg)] text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Icon size={18} />
                      </motion.div>
                      <div>
                        <p className="text-xs text-faint">{ch.label}</p>
                        <p className="text-sm font-medium text-primary">{ch.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap gap-5 pt-2 text-xs text-faint"
                >
                  <span className="flex items-center gap-2"><MapPin size={14} />{contactConfig.address}</span>
                  <span className="flex items-center gap-2"><Clock size={14} />{contactConfig.hours}</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="glass p-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.div
                      key="success"
                      className="flex flex-col items-center py-12 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.1 }}
                      >
                        <CheckCircle2 size={40} className="text-primary" />
                      </motion.div>
                      <p className="mt-4 text-sm font-medium text-primary">Сообщение отправлено</p>
                      <p className="mt-1 text-xs text-faint">Ответим в ближайшее время</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {[
                        { key: 'name', label: 'Имя', type: 'text', placeholder: 'Ваше имя' },
                        { key: 'phone', label: 'Телефон', type: 'tel', placeholder: '+998 90 000 00 00' },
                      ].map((field, i) => (
                        <motion.div
                          key={field.key}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <label className="mb-2 block text-xs font-medium text-faint">{field.label}</label>
                          <input
                            required
                            type={field.type}
                            className="crm-input"
                            value={form[field.key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                            placeholder={field.placeholder}
                          />
                        </motion.div>
                      ))}
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <label className="mb-2 block text-xs font-medium text-faint">Сообщение</label>
                        <textarea
                          required
                          rows={4}
                          className="crm-input resize-none"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Ваш вопрос..."
                        />
                      </motion.div>
                      <motion.button
                        type="submit"
                        className="btn-crm w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Отправить <Send size={14} />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}

import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config';

export default function StickyContactBar() {
  const telegram = contactConfig.channels.find((c) => c.type === 'telegram');
  if (!telegram) return null;

  return (
    <a
      href={telegram.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-lg transition hover:scale-[1.03] active:scale-[0.98] sm:bottom-6 sm:right-6"
      style={{ background: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)' }}
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">Telegram</span>
    </a>
  );
}

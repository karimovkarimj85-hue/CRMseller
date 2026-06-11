const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN as string | undefined;
const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID as string | undefined;

export type TelegramLeadType = 'contact' | 'consultation' | 'demo';

export interface TelegramLeadData {
  name: string;
  phone: string;
  message?: string;
  email?: string;
  center?: string;
}

export function isTelegramConfigured(): boolean {
  return Boolean(BOT_TOKEN?.trim() && CHAT_ID?.trim());
}

export function tashkentNow(): string {
  return new Date().toLocaleString('ru-RU', {
    timeZone: 'Asia/Tashkent',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function formatLeadMessage(type: TelegramLeadType, data: TelegramLeadData): string {
  const tag =
    type === 'consultation'
      ? '#консультация #gaincrm'
      : type === 'demo'
        ? '#демо #gaincrm'
        : '#заявка #gaincrm';

  const lines = [
    tag,
    '━━━━━━━━━━━━━━━━━━',
    `👤 Имя: ${escapeHtml(data.name)}`,
    `📞 Телефон: ${escapeHtml(data.phone)}`,
  ];

  if (data.email?.trim()) lines.push(`📧 Email: ${escapeHtml(data.email.trim())}`);
  if (data.center?.trim()) lines.push(`🏫 Центр: ${escapeHtml(data.center.trim())}`);
  if (data.message?.trim()) lines.push(`💬 Сообщение: ${escapeHtml(data.message.trim())}`);

  lines.push('🌐 Источник: Gain CRM лендинг');
  lines.push(`🕐 Время: ${escapeHtml(tashkentNow())}`);
  lines.push('━━━━━━━━━━━━━━━━━━');

  return lines.join('\n');
}

export async function sendTelegramMessage(text: string): Promise<void> {
  if (!isTelegramConfigured()) {
    throw new Error('Telegram не настроен. Добавьте VITE_TELEGRAM_BOT_TOKEN и VITE_TELEGRAM_CHAT_ID.');
  }

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: 'HTML',
    }),
  });

  const payload = (await response.json()) as { ok?: boolean; description?: string };
  if (!payload.ok) {
    throw new Error(payload.description || 'Не удалось отправить сообщение в Telegram');
  }
}

export async function sendTelegramLead(type: TelegramLeadType, data: TelegramLeadData): Promise<void> {
  await sendTelegramMessage(formatLeadMessage(type, data));
}

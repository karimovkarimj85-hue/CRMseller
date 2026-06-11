import { execFileSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const video = path.join(root, 'public/videos/crm-demo.mp4');
const outDir = path.join(root, 'public/images/panels');

if (!existsSync(video)) {
  console.error('Video not found:', video);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

// Timestamps verified by scanning the demo video (real CRM screens, no login/IDE)
const frames = [
  { name: 'hero', time: '00:00:40', note: 'Дашборд' },
  { name: 'dashboard', time: '00:00:40', note: 'Дашборд' },
  { name: 'finance', time: '00:00:50', note: 'Финансы — обзор' },
  { name: 'inventory', time: '00:04:20', note: 'Склад — продукты' },
  { name: 'personnel', time: '00:06:40', note: 'Персонал — филиалы' },
  { name: 'students', time: '00:06:50', note: 'Ученики' },
  { name: 'groups', time: '00:07:30', note: 'Группы и расписание' },
  { name: 'schedule', time: '00:08:10', note: 'Расписание' },
  { name: 'crm', time: '00:08:12', note: 'Сделки — воронка' },
];

for (const { name, time, note } of frames) {
  const output = path.join(outDir, `${name}.jpg`);
  execFileSync(ffmpegPath.path, [
    '-y',
    '-ss', time,
    '-i', video,
    '-frames:v', '1',
    '-q:v', '2',
    '-vf', 'scale=1400:-1',
    output,
  ], { stdio: 'inherit' });
  console.log(`Saved ${name}.jpg — ${note}`);
}

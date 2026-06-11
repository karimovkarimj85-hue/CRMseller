import { execFileSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ffmpegPath from '@ffmpeg-installer/ffmpeg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const video = path.join(root, 'public/videos/crm-demo.mp4');
const outDir = path.join(root, 'public/images/previews');

const startSec = Number(process.argv[2] ?? 40);
const endSec = Number(process.argv[3] ?? 555);
const step = Number(process.argv[4] ?? 10);

if (!existsSync(video)) {
  console.error('Video not found:', video);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });

for (let sec = startSec; sec <= endSec; sec += step) {
  const name = String(sec).padStart(4, '0');
  const output = path.join(outDir, `t${name}.jpg`);
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  const time = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  execFileSync(ffmpegPath.path, [
    '-y', '-ss', time, '-i', video,
    '-frames:v', '1', '-q:v', '4',
    '-vf', 'scale=900:-1',
    output,
  ], { stdio: 'pipe' });
  console.log('t' + name);
}

console.log('Done:', outDir);

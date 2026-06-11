import { copyFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const index = resolve('dist/index.html');
const fallback = resolve('dist/404.html');

if (!existsSync(index)) {
  console.error('dist/index.html not found. Run build first.');
  process.exit(1);
}

copyFileSync(index, fallback);
console.log('Created dist/404.html for GitHub Pages SPA routing.');

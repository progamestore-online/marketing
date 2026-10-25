import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const publicFiles = [
  'index.html', 'privacy.html', 'terms.html', '404.html',
  'favicon.svg', 'robots.txt', 'llms.txt', 'skills.md',
];

export function preparePublic(outputDir, sourceDir = root) {
  const output = path.resolve(outputDir);
  const source = path.resolve(sourceDir);
  if (output === source || source.startsWith(output + path.sep)) {
    throw new Error('Public output must not replace the source checkout');
  }
  const notFound = fs.readFileSync(path.join(source, '404.html'), 'utf8');
  if (!/<meta\s+name="robots"\s+content="noindex, nofollow">/.test(notFound) ||
      /rel=["']canonical["']/.test(notFound) ||
      !notFound.includes('Page not found')) {
    throw new Error('A distinct noindex 404 page is required; do not re-enable SPA fallback');
  }
  fs.rmSync(output, { recursive: true, force: true });
  fs.mkdirSync(output, { recursive: true });
  for (const file of publicFiles) fs.copyFileSync(path.join(source, file), path.join(output, file));
  return publicFiles;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const files = preparePublic(path.join(root, 'dist'));
  console.log(`Prepared ${files.length} approved public files with a real 404 fallback`);
}

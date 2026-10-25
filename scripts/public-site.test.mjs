import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { test } from 'node:test';
import { preparePublic } from './prepare-public.mjs';

test('deployment artifact includes real policies and 404, excluding repo notes and build code', (t) => {
  const output = fs.mkdtempSync(path.join(os.tmpdir(), 'pgs-public-'));
  t.after(() => fs.rmSync(output, { recursive: true, force: true }));
  preparePublic(output);
  assert.deepEqual(fs.readdirSync(output).sort(), [
    '404.html', 'favicon.svg', 'index.html', 'llms.txt', 'privacy.html', 'robots.txt', 'skills.md', 'terms.html',
  ]);
  const home = fs.readFileSync(path.join(output, 'index.html'), 'utf8');
  const missing = fs.readFileSync(path.join(output, '404.html'), 'utf8');
  assert.ok(home.includes('https://progamestore.online/'));
  assert.ok(!missing.includes('rel="canonical"'));
  assert.ok(missing.includes('noindex, nofollow'));
  assert.ok(!fs.existsSync(path.join(output, 'sitemap.xml')));
  assert.ok(!fs.readFileSync(path.join(output, 'robots.txt'), 'utf8').includes('Sitemap:'));
});

test('cannot overwrite the source checkout', () => {
  const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
  assert.throws(() => preparePublic(root), /must not replace/);
});

/**
 * Preflight: verify esbuild's native binary is present and runnable.
 *
 * Astro/Vite drive esbuild through its JS API, whose platform-specific binary
 * lives in an optional package (e.g. @esbuild/darwin-arm64). If that package
 * extracts incompletely the build dies ~2 min in with a misleading
 * "you installed esbuild for another platform" error. This catches the problem
 * in milliseconds and self-heals it.
 *
 * Note: we must exercise esbuild's JS API (esbuild.transform) rather than the
 * `esbuild` CLI. The CLI uses a separate copy at node_modules/esbuild/bin and
 * keeps working even when the @esbuild/<platform> binary is missing — which is
 * exactly the state that breaks Vite.
 */
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

/** Run esbuild's JS API in a fresh process (the path Vite actually uses). */
function esbuildApiWorks() {
  const probe =
    "import('esbuild').then((e) => e.transform('1', { loader: 'js' }))" +
    '.then(() => process.exit(0)).catch(() => process.exit(1))';
  return spawnSync(process.execPath, ['-e', probe], { stdio: 'ignore' })
    .status === 0;
}

if (esbuildApiWorks()) {
  process.exit(0);
}

console.warn(
  '[check-build-deps] esbuild native binary missing or broken — repairing automatically…',
);

// Drop any @esbuild platform packages whose native binary failed to extract,
// so the reinstall fetches them cleanly.
const esbuildDir = join(root, 'node_modules', '@esbuild');
if (existsSync(esbuildDir)) {
  for (const entry of readdirSync(esbuildDir)) {
    const dir = join(esbuildDir, entry);
    const hasBinary =
      existsSync(join(dir, 'bin', 'esbuild')) ||
      existsSync(join(dir, 'esbuild.exe'));
    if (!hasBinary) rmSync(dir, { recursive: true, force: true });
  }
}

execFileSync('npm', ['install'], { stdio: 'inherit' });

if (!esbuildApiWorks()) {
  console.error(
    '[check-build-deps] esbuild still broken after reinstall.\n' +
      'Try a clean install: rm -rf node_modules package-lock.json && npm install',
  );
  process.exit(1);
}

console.log('[check-build-deps] esbuild repaired. Continuing…');

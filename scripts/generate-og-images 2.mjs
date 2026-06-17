/**
 * Build-time Open Graph images for writing (1200×630).
 * Run via `npm run og` or automatically before `npm run build`.
 */
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const writingDir = join(root, 'src/content/writing');
const outDir = join(root, 'public/og/writing');

const WIDTH = 1200;
const HEIGHT = 630;

/** @type {import('satori').SatoriOptions['fonts']} */
let fonts;

async function loadFonts() {
  if (fonts) return fonts;

  const regularPath = join(
    root,
    'node_modules/@fontsource/inter/files/inter-latin-400-normal.woff',
  );
  const boldPath = join(
    root,
    'node_modules/@fontsource/inter/files/inter-latin-700-normal.woff',
  );

  const [regular, bold] = await Promise.all([
    readFile(regularPath),
    readFile(boldPath),
  ]);

  fonts = [
    { name: 'Inter', data: regular, weight: 400, style: 'normal' },
    { name: 'Inter', data: bold, weight: 700, style: 'normal' },
  ];
  return fonts;
}

/** Brand tokens (light OG — feeds rarely respect dark mode) */
const colors = {
  bg: '#faf9f7',
  fg: '#1c1b19',
  muted: '#9e9c97',
  border: '#e2e0da',
};

function titleFontSize(title) {
  const len = title.length;
  if (len > 95) return 34;
  if (len > 70) return 40;
  if (len > 48) return 46;
  return 52;
}

function ogMarkup({ label, title, subtitle }) {
  const size = titleFontSize(title);

  return {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colors.bg,
        padding: '56px 72px 52px',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              flex: 1,
              justifyContent: 'center',
            },
            children: [
              {
                type: 'p',
                props: {
                  style: {
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: colors.muted,
                  },
                  children: label,
                },
              },
              {
                type: 'h1',
                props: {
                  style: {
                    margin: 0,
                    fontSize: size,
                    fontWeight: 700,
                    lineHeight: 1.15,
                    color: colors.fg,
                    maxWidth: 980,
                  },
                  children: title,
                },
              },
              ...(subtitle
                ? [
                    {
                      type: 'p',
                      props: {
                        style: {
                          margin: 0,
                          fontSize: 22,
                          lineHeight: 1.45,
                          color: colors.muted,
                          maxWidth: 900,
                        },
                        children: subtitle,
                      },
                    },
                  ]
                : []),
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: `1px solid ${colors.border}`,
              paddingTop: 24,
            },
            children: [
              {
                type: 'p',
                props: {
                  style: {
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 700,
                    color: colors.fg,
                  },
                  children: 'Kyle Mayne',
                },
              },
              {
                type: 'p',
                props: {
                  style: {
                    margin: 0,
                    fontSize: 18,
                    color: colors.muted,
                  },
                  children: 'kylemayne.com',
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function renderPng(markup, outPath) {
  const svg = await satori(markup, {
    width: WIDTH,
    height: HEIGHT,
    fonts: await loadFonts(),
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: WIDTH },
  });
  const png = resvg.render().asPng();
  await writeFile(outPath, png);
}

async function generateArticleCards() {
  const files = (await readdir(writingDir)).filter((f) => f.endsWith('.md'));
  await mkdir(outDir, { recursive: true });

  for (const file of files) {
    const raw = await readFile(join(writingDir, file), 'utf8');
    const { data } = matter(raw);
    const slug = data.slug ?? file.replace(/\.md$/, '');
    const title = data.title ?? slug;

    const outPath = join(outDir, `${slug}.png`);
    await renderPng(
      ogMarkup({ label: 'Writing', title }),
      outPath,
    );
    console.log(`  og/writing/${slug}.png`);
  }
}

async function generateWritingIndexCard() {
  const outPath = join(root, 'public/og/writing-index.png');
  await mkdir(join(root, 'public/og'), { recursive: true });
  await renderPng(
    ogMarkup({
      label: 'Writing',
      title: 'Writing',
      subtitle: 'Essays on design, product, and leadership.',
    }),
    outPath,
  );
  console.log('  og/writing-index.png');
}

console.log('Generating OG images…');
await generateArticleCards();
await generateWritingIndexCard();
console.log('Done.');

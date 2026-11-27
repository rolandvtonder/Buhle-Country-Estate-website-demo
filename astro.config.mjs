import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * The live site sits at the domain root. The client demo on GitHub Pages
 * lives under /<repo>/, so the deploy workflow sets BASE_PATH and every
 * root-relative link in the built HTML gets that prefix.
 */
const base = process.env.BASE_PATH || '/';

function prefixRootLinks() {
  return {
    name: 'prefix-root-links',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        if (base === '/') return;
        const b = base.replace(/\/$/, '');
        const walk = async (d) => {
          for (const e of await readdir(d, { withFileTypes: true })) {
            const p = join(d, e.name);
            if (e.isDirectory()) await walk(p);
            else if (e.name.endsWith('.html')) {
              const html = await readFile(p, 'utf8');
              const out = html.replace(/(href="|src="|url=)\/(?!\/)/g, (m, attr, offset) =>
                html.startsWith(`${b}/`, offset + attr.length) ? m : `${attr}${b}/`,
              );
              await writeFile(p, out);
            }
          }
        };
        await walk(fileURLToPath(dir));
      },
    },
  };
}

export default defineConfig({
  site: process.env.SITE_URL || 'https://www.buhleestate.co.za',
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Old WordPress URLs keep their Google ranking by pointing at the new pages.
  redirects: {
    '/home-2/': '/',
    '/conferances/': '/conferences/',
    '/tips/': '/tips-and-inspiration/',
    '/inspiration/': '/tips-and-inspiration/choosing-your-wedding-colours/',
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/(home-2|conferances|tips|inspiration)\/$/.test(page) && !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      serialize(item) {
        if (item.url === 'https://www.buhleestate.co.za/') item.priority = 1.0;
        if (/\/(weddings|conferences|private-functions)\/$/.test(item.url)) item.priority = 0.9;
        return item;
      },
    }),
    prefixRootLinks(),
  ],
  image: {
    responsiveStyles: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

# Buhle Country Estate website

A fast, SEO-ready static website for Buhle Country Estate, built with Astro, Tailwind CSS and Lenis smooth scrolling.

## Pages

| URL | Page |
| --- | --- |
| `/` | Home |
| `/about/` | About (our story) |
| `/weddings/` | Weddings |
| `/conferences/` | Conferences |
| `/private-functions/` | Private functions |
| `/catering/` | Catering & menus |
| `/gallery/` | Gallery (filters and lightbox) |
| `/tips-and-inspiration/` | Tips & Inspiration, plus 4 articles |
| `/faq/` | FAQ |
| `/contact/` | Contact, enquiry form and map |

The old WordPress URLs (`/home-2/`, `/conferances/`, `/tips/`, `/inspiration/`) redirect to the new pages.

## Before going live (owner to-do)

1. **Enquiry form:** create a free access key at <https://web3forms.com> using events@buhleestate.co.za and paste it into `web3formsKey` in `src/data/site.ts`. Until you do, the form opens the visitor's email app with the enquiry filled in.
2. **Prices:** check the "from" prices in `src/data/site.ts` (`prices`) are still current.
3. After launch, submit `https://www.buhleestate.co.za/sitemap-index.xml` in Google Search Console, and update your Google Business Profile's website link.

## Editing content

- Business details, phone numbers, prices and the menu: `src/data/site.ts`
- FAQs: `src/data/faq.ts`
- Articles: `src/data/articles.ts`
- Photos: `src/assets/photos/`. Add alt text and a gallery category in `src/data/photos.ts`.

## Commands

```bash
npm install       # once
npm run dev       # preview at http://localhost:4321
npm run build     # type-check and build the site into dist/
```

## Hosting

`npm run build` produces a plain static site in `dist/`. Upload the contents of `dist/` to any web host (cPanel/FTP, Netlify, Cloudflare Pages, Vercel). No server or database is needed.

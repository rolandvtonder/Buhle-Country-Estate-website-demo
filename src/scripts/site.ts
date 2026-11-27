import { clamp, lockScroll, onFrame, startScroll } from '../lib/scroll';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');
startScroll(reduced);

/* ------------------------------------------------------------------ Menu --
 * Three slabs wipe in from the right one after another (espresso, linen,
 * paper); the paper one holds the links. Hovering a link ripples it like
 * heat haze over the hills: an SVG turbulence + displacement filter whose
 * strength and phase are animated per frame, only while something is hovered.
 */
function initMenu() {
  const toggle = document.getElementById('menu-toggle') as HTMLButtonElement | null;
  const menu = document.getElementById('site-menu');
  if (!toggle || !menu) return;
  const label = toggle.querySelector('[data-menu-label]')!;
  const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>('.menu-link'));
  const turb = document.getElementById('ripple-turb');
  const disp = document.getElementById('ripple-disp');
  let open = false;

  const set = (next: boolean) => {
    open = next;
    menu.dataset.open = String(open);
    toggle.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Close' : 'Menu';
    document.body.dataset.menu = String(open);
    if (open) {
      menu.removeAttribute('inert');
      menu.setAttribute('aria-hidden', 'false');
      const target = links.find((l) => l.getAttribute('aria-current')) ?? links[0];
      window.setTimeout(() => target?.focus({ preventScroll: true }), reduced ? 0 : 450);
    } else {
      menu.setAttribute('inert', '');
      menu.setAttribute('aria-hidden', 'true');
    }
    lockScroll(open);
  };

  toggle.addEventListener('click', () => {
    const wasOpen = open;
    set(!open);
    if (wasOpen) toggle.focus();
  });
  menu.querySelector('[data-menu-close]')?.addEventListener('click', () => set(false));
  window.addEventListener('keydown', (e) => {
    if (!open) return;
    if (e.key === 'Escape') {
      set(false);
      toggle.focus();
    }
    // Keep Tab inside the open menu (plus the toggle that closes it).
    if (e.key === 'Tab') {
      const items = [toggle, ...Array.from(menu.querySelectorAll<HTMLElement>('a[href]'))];
      const i = items.indexOf(document.activeElement as HTMLElement);
      if (e.shiftKey && i <= 0) {
        e.preventDefault();
        items[items.length - 1].focus();
      } else if (!e.shiftKey && i === items.length - 1) {
        e.preventDefault();
        items[0].focus();
      }
    }
  });

  // Heat-haze ripple
  let raf = 0;
  const stop = () => {
    cancelAnimationFrame(raf);
    disp?.setAttribute('scale', '0');
    links.forEach((l) => l.classList.remove('is-hot'));
    menu.classList.remove('has-hot');
  };
  const start = (link: HTMLAnchorElement) => {
    stop();
    menu.classList.add('has-hot');
    link.classList.add('is-hot');
    if (reduced) return;
    let t = 0;
    let amp = 0;
    const loop = () => {
      t += 0.016;
      amp = Math.min(1, amp + 0.08);
      turb?.setAttribute('baseFrequency', `${(0.012 + Math.sin(t * 2.1) * 0.004).toFixed(4)} ${(0.06 + Math.cos(t * 1.7) * 0.02).toFixed(4)}`);
      turb?.setAttribute('seed', String(Math.floor(t * 12) % 50));
      disp?.setAttribute('scale', (amp * 8).toFixed(2));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  };
  links.forEach((l) => {
    l.addEventListener('mouseenter', () => start(l));
    // Ripple on keyboard focus only, not when the menu itself moves focus on open.
    l.addEventListener('focus', () => l.matches(':focus-visible') && start(l));
    l.addEventListener('blur', stop);
  });
  menu.querySelector('ul')?.addEventListener('mouseleave', stop);
}

/* --------------------------------------------------------------- Reveals -- */
function initReveals() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      }),
    { rootMargin: '0px 0px -8% 0px' },
  );
  els.forEach((el) => io.observe(el));
}

/* ------------------------------------------------------------------ Hero --
 * As you scroll past a hero, its photo blurs, dims and shrinks back, which
 * reads as the camera pulling away rather than a fade.
 */
function initHeroes() {
  document.querySelectorAll<HTMLElement>('[data-hero]').forEach((hero) => {
    const stage = hero.querySelector<HTMLElement>('[data-hero-stage]');
    if (!stage || reduced) return;
    onFrame(() => {
      const r = hero.getBoundingClientRect();
      if (r.bottom < 0) return;
      const h = window.innerHeight;
      const p = clamp(-r.top / r.height);
      stage.style.transform = `translate3d(0, ${(p * h * 0.4).toFixed(1)}px, 0) scale(${(1 - p * 0.08).toFixed(4)})`;
      stage.style.filter = p > 0.01 ? `blur(${(p * 14).toFixed(1)}px) brightness(${(1 - p * 0.5).toFixed(3)})` : 'none';
    });
  });

  // Photo slideshow (home). Stays on the first photo under reduced motion,
  // and rests while the tab is hidden.
  document.querySelectorAll<HTMLElement>('[data-slides]').forEach((wrap) => {
    const slides = Array.from(wrap.querySelectorAll<HTMLElement>('.hero-slide'));
    if (slides.length < 2 || reduced) return;
    let i = 0;
    let timer = 0;
    const next = () => {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      const img = slides[i].querySelector('img');
      if (img && img.loading === 'lazy') img.loading = 'eager';
      slides[i].classList.add('is-active');
    };
    const play = () => {
      window.clearInterval(timer);
      timer = window.setInterval(next, 6500);
    };
    play();
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) window.clearInterval(timer);
      else play();
    });
  });
}

/* ---------------------------------------------------------------- Panels --
 * Three tall panels slide in from the right one after another.
 */
function initPanels() {
  document.querySelectorAll<HTMLElement>('[data-panels]').forEach((el) => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        el.classList.add('is-shown');
        io.disconnect();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
  });
}

/* ------------------------------------------------------------- Enquiries -- */
function initForms() {
  document.querySelectorAll<HTMLFormElement>('form[data-enquiry]').forEach((form) => {
    const status = form.querySelector<HTMLElement>('[data-status]')!;
    const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
    const key = form.dataset.key ?? '';
    const email = form.dataset.email ?? '';

    const fieldError = (input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
      const err = form.querySelector<HTMLElement>(`#${input.id}-error`);
      let msg = '';
      if (input.validity.valueMissing) msg = 'Please fill in this field so we can get back to you.';
      else if (input.validity.typeMismatch && input.type === 'email') msg = 'That email address looks incomplete. Check it has an @ and a domain, like name@example.com.';
      else if (input.validity.patternMismatch) msg = 'Please enter a phone number using digits only, like 064 549 5380.';
      else if (input.validity.rangeUnderflow || input.validity.rangeOverflow) msg = `Please enter a guest number between ${(input as HTMLInputElement).min} and ${(input as HTMLInputElement).max}.`;
      if (err) err.textContent = msg;
      input.setAttribute('aria-invalid', String(Boolean(msg)));
      return msg;
    };

    const fields = Array.from(form.querySelectorAll<HTMLInputElement>('input:not([type=hidden]):not([name=botcheck]), textarea, select'));
    fields.forEach((f) => f.addEventListener('blur', () => f.value && fieldError(f)));

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const bad = fields.filter((f) => fieldError(f));
      if (bad.length) {
        status.textContent = `Please check ${bad.length === 1 ? 'the highlighted field' : `the ${bad.length} highlighted fields`} below.`;
        status.dataset.tone = 'error';
        bad[0].focus();
        return;
      }
      const data = new FormData(form);
      if (data.get('botcheck')) return;

      if (!key) {
        // No form service configured yet: hand the enquiry to the visitor's email app.
        const lines = [...data.entries()].filter(([k]) => !['access_key', 'subject', 'botcheck', 'from_name'].includes(k)).map(([k, v]) => `${k}: ${v}`);
        window.location.href = `mailto:${email}?subject=${encodeURIComponent('Event enquiry from the website')}&body=${encodeURIComponent(lines.join('\n'))}`;
        status.textContent = 'Your email app should open with your enquiry filled in. Just press send.';
        status.dataset.tone = 'ok';
        return;
      }

      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      const original = submit.innerHTML;
      submit.textContent = 'Sending…';
      status.textContent = '';
      try {
        const ctrl = new AbortController();
        const timeout = window.setTimeout(() => ctrl.abort(), 15000);
        const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data, signal: ctrl.signal, headers: { Accept: 'application/json' } });
        window.clearTimeout(timeout);
        const json = await res.json();
        if (!json.success) throw new Error(json.message);
        form.reset();
        status.textContent = 'Thank you, your enquiry has been sent. Our events team will be in touch within one working day.';
        status.dataset.tone = 'ok';
      } catch {
        status.innerHTML = `Sorry, we couldn’t send that just now. Please try again, or email <a class="underline" href="mailto:${email}">${email}</a>.`;
        status.dataset.tone = 'error';
      } finally {
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        submit.innerHTML = original;
      }
    });
  });
}

/* --------------------------------------------------------------- Gallery -- */
function initGallery() {
  const grid = document.querySelector<HTMLElement>('[data-gallery]');
  if (!grid) return;
  const items = Array.from(grid.querySelectorAll<HTMLElement>('[data-cat]'));
  const filters = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-filter]'));
  const count = document.querySelector<HTMLElement>('[data-gallery-count]');
  filters.forEach((btn) =>
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter!;
      filters.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
      let n = 0;
      items.forEach((it) => {
        const show = cat === 'all' || it.dataset.cat === cat;
        it.hidden = !show;
        if (show) n++;
      });
      if (count) count.textContent = `Showing ${n} photos${cat === 'all' ? '' : ` of ${btn.textContent?.trim().toLowerCase()}`}`;
    }),
  );

  const dialog = document.getElementById('lightbox') as HTMLDialogElement | null;
  if (!dialog) return;
  const img = dialog.querySelector('img')!;
  const cap = dialog.querySelector('[data-caption]')!;
  let current = 0;
  const visible = () => items.filter((i) => !i.hidden);
  const show = (idx: number) => {
    const list = visible();
    current = (idx + list.length) % list.length;
    const btn = list[current].querySelector<HTMLButtonElement>('button')!;
    img.src = btn.dataset.full!;
    img.alt = btn.dataset.alt!;
    cap.textContent = `${btn.dataset.alt} (${current + 1} of ${list.length})`;
  };
  let opener: HTMLElement | null = null;
  items.forEach((it) =>
    it.querySelector('button')?.addEventListener('click', (e) => {
      opener = e.currentTarget as HTMLElement;
      show(visible().indexOf(it));
      dialog.showModal();
      lockScroll(true);
    }),
  );
  dialog.querySelector('[data-prev]')?.addEventListener('click', () => show(current - 1));
  dialog.querySelector('[data-next]')?.addEventListener('click', () => show(current + 1));
  dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => e.target === dialog && dialog.close());
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });
  dialog.addEventListener('close', () => {
    lockScroll(false);
    opener?.focus();
  });
}

/* --------------------------------------------------------- Header tone --
 * The wordmark is paper over dark sections and cocoa over light ones.
 * Every section says which it is with data-tone.
 */
function initHeaderTone() {
  const brand = document.getElementById('brand');
  if (!brand) return;
  const sections = Array.from(document.querySelectorAll<HTMLElement>('main [data-tone], footer[data-tone]'));
  let last = '';
  let lastScrolled = '';
  onFrame(() => {
    const scrolled = String(window.scrollY > window.innerHeight * 0.6);
    if (scrolled !== lastScrolled) {
      brand.dataset.scrolled = scrolled;
      lastScrolled = scrolled;
    }
    const y = 44;
    let tone = 'dark';
    for (const s of sections) {
      const r = s.getBoundingClientRect();
      if (r.top <= y && r.bottom > y) tone = s.dataset.tone!;
    }
    if (tone !== last) {
      brand.dataset.tone = tone;
      last = tone;
    }
  });
}

initMenu();
initHeaderTone();
initReveals();
initHeroes();
initPanels();
initForms();
initGallery();

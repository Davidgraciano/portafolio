// Movimiento del sitio: aparece al hacer scroll, contadores, retícula del héroe,
// barra de lectura y enlace activo del menú. Todo respeta prefers-reduced-motion.

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveals() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (!('IntersectionObserver' in window) || reduced()) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      // Los que entran juntos aparecen en cascada, de izquierda a derecha y de arriba abajo.
      const batch = entries
        .filter((e) => e.isIntersecting)
        .map((e) => e.target as HTMLElement)
        .sort((a, b) => {
          const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect();
          return ra.top - rb.top || ra.left - rb.left;
        });
      batch.forEach((el, i) => {
        el.style.setProperty('--d', `${Math.min(i, 6) * 80}ms`);
        el.classList.add('in');
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

// Separa la cifra del texto que la rodea, p. ej. "~5×", "2.624 M", "+2.800".
function parseFigure(text: string, lang: string) {
  const m = text.match(/^([^\d]*)(\d[\d.,]*)(.*)$/);
  if (!m || /\d/.test(m[3])) return null;
  const [, pre, num, post] = m;
  const thousands = lang === 'es' ? '.' : ',';
  const decimal = lang === 'es' ? ',' : '.';
  const clean = num.split(thousands).join('');
  const parts = clean.split(decimal);
  const value = parseFloat(parts.join('.'));
  if (!isFinite(value) || value === 0) return null;
  const decimals = parts[1]?.length ?? 0;
  const grouped = num.includes(thousands);
  const format = (v: number) => {
    const [i, d] = v.toFixed(decimals).split('.');
    const int = grouped ? i.replace(/\B(?=(\d{3})+(?!\d))/g, thousands) : i;
    return d ? `${int}${decimal}${d}` : int;
  };
  return { pre, post, value, format };
}

function counters() {
  if (reduced() || !('IntersectionObserver' in window)) return;
  const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
  const els = Array.from(document.querySelectorAll<HTMLElement>('.metric-value'));
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        io.unobserve(el);
        const final = el.textContent ?? '';
        const fig = parseFigure(final.trim(), lang);
        if (!fig) return;
        el.setAttribute('aria-label', final.trim());
        const start = performance.now();
        const dur = 1400;
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = p < 1 ? `${fig.pre}${fig.format(fig.value * eased)}${fig.post}` : final;
          if (p < 1) requestAnimationFrame(tick);
          else el.removeAttribute('aria-label');
        };
        requestAnimationFrame(tick);
      });
    },
    { threshold: 0.6 },
  );
  els.forEach((el) => io.observe(el));
}

// Los puntos cercanos al cursor se encienden un poco: la retícula responde al dato que pasa.
function heroGrid() {
  const art = document.querySelector<HTMLElement>('.hero-art');
  const svg = art?.querySelector<SVGSVGElement>('svg.grid');
  if (!art || !svg || reduced() || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const dots = Array.from(svg.querySelectorAll<SVGRectElement>('.dot')).map((el) => ({
    el,
    x: Number(el.dataset.x),
    y: Number(el.dataset.y),
  }));
  let frame = 0;
  let px = -999, py = -999;
  const paint = () => {
    frame = 0;
    for (const d of dots) {
      const dist = Math.hypot(d.x - px, d.y - py);
      d.el.classList.toggle('lit', dist < 70);
      d.el.classList.toggle('near', dist >= 70 && dist < 110);
    }
  };
  art.addEventListener('pointermove', (e) => {
    const r = svg.getBoundingClientRect();
    px = ((e.clientX - r.left) / r.width) * 440;
    py = ((e.clientY - r.top) / r.height) * 440;
    if (!frame) frame = requestAnimationFrame(paint);
  });
  art.addEventListener('pointerleave', () => {
    px = py = -999;
    if (!frame) frame = requestAnimationFrame(paint);
  });
}

function flows() {
  const els = document.querySelectorAll<HTMLElement>('[data-flow]');
  if (reduced() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('run'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('run'); io.unobserve(e.target); }
    }),
    { threshold: 0.5 },
  );
  els.forEach((el) => io.observe(el));
}

function progress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
  };
  window.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  update();
}

function activeNav() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav-links a'));
  const map = new Map<Element, HTMLAnchorElement>();
  links.forEach((a) => {
    const id = a.hash.slice(1);
    const sec = id && a.pathname === location.pathname ? document.getElementById(id) : null;
    if (sec) map.set(sec, a);
  });
  if (!map.size || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      const a = map.get(e.target);
      if (!a) return;
      if (e.isIntersecting) {
        links.forEach((l) => l.removeAttribute('aria-current'));
        a.setAttribute('aria-current', 'true');
      }
    }),
    { rootMargin: '-45% 0px -50% 0px' },
  );
  map.forEach((_, sec) => io.observe(sec));
}

export function initMotion() {
  reveals();
  counters();
  heroGrid();
  flows();
  progress();
  activeNav();
}

import Lenis from 'lenis';

/**
 * One rAF loop for the whole site. Lenis advances first, then every
 * scroll-driven piece reads its own rect and writes styles directly, so
 * scrolling never touches the layout of anything else.
 */

type Tick = (time: number) => void;

const subscribers = new Set<Tick>();
let lenis: Lenis | null = null;

export function startScroll(reducedMotion: boolean) {
  if (!reducedMotion) {
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9, anchors: true });
  }
  const loop = (time: number) => {
    lenis?.raf(time);
    subscribers.forEach((fn) => fn(time));
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

export function onFrame(fn: Tick): () => void {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}

export function lockScroll(locked: boolean) {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? 'hidden' : '';
}

export const clamp = (v: number, min = 0, max = 1) => Math.min(max, Math.max(min, v));

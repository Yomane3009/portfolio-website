'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 0.9, lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.8 });
    let frame = 0;
    const onScroll = ({ progress, scroll, limit }: { progress: number; scroll: number; limit: number }) => {
      window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: { progress, scroll, limit } }));
    };
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    lenis.on('scroll', onScroll);
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.off('scroll', onScroll);
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;
}

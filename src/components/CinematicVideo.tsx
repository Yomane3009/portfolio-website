'use client';

import { useEffect, useRef } from 'react';

type LenisScrollEvent = CustomEvent<{ progress: number; scroll: number; limit: number }>;

export default function CinematicVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentRef = useRef(0);
  const targetRef = useRef(0);
  const readyRef = useRef(false);
  const lastSeekRef = useRef(0);
  const scrollRef = useRef(0);
  const pointerRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = (progress: number) => {
      const bar = document.querySelector<HTMLElement>('.progress-bar');
      if (bar) bar.style.transform = `scaleX(${Math.max(0.02, progress)})`;
    };
    const onReady = () => {
      if (readyRef.current) return;
      readyRef.current = true;
      video.pause();
      try { video.currentTime = 0; } catch {}
    };
    const onLenisScroll = (event: Event) => { scrollRef.current = (event as LenisScrollEvent).detail.progress; };
    const onMove = (event: MouseEvent) => {
      pointerRef.current = { x: Math.min(1, Math.max(0, event.clientX / innerWidth)), y: Math.min(1, Math.max(0, event.clientY / innerHeight)) };
      const { x, y } = pointerRef.current;
      document.getElementById('cine-stage')?.style.setProperty('transform', `scale(1.06) translate3d(${(x - 0.5) * -15}px, ${(y - 0.5) * -15}px, 0) rotateX(${(y - 0.5) * -2}deg) rotateY(${(x - 0.5) * 2}deg)`);
      const glow = document.getElementById('cine-glow');
      if (glow) glow.style.background = `radial-gradient(at ${x * 100}% ${y * 100}%, rgba(196,0,36,0.18), transparent 42%)`;
    };

    let frame = 0;
    const render = () => {
      const nativeMax = document.documentElement.scrollHeight - innerHeight;
      const fallbackProgress = nativeMax > 0 ? scrollY / nativeMax : 0;
      const progress = scrollRef.current || fallbackProgress;
      const input = Math.min(1, Math.max(0, progress * 0.7 + pointerRef.current.x * 0.3));
      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      targetRef.current = input * duration;
      updateProgress(progress);
      if (readyRef.current && duration > 0) {
        currentRef.current += (targetRef.current - currentRef.current) * 0.10;
        const now = performance.now();
        if (!video.seeking && now - lastSeekRef.current >= 24 && Math.abs(video.currentTime - currentRef.current) > 0.001) {
          lastSeekRef.current = now;
          try { video.currentTime = currentRef.current; } catch {}
        }
      }
      frame = requestAnimationFrame(render);
    };

    video.addEventListener('loadedmetadata', onReady);
    video.addEventListener('canplay', onReady);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('lenis-scroll', onLenisScroll);
    if (video.readyState >= 1) onReady();
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      video.removeEventListener('loadedmetadata', onReady);
      video.removeEventListener('canplay', onReady);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('lenis-scroll', onLenisScroll);
    };
  }, []);

  return <div className="cine-root" aria-hidden="true"><div id="cine-stage" className="cine-stage"><video ref={videoRef} playsInline muted preload="auto" src="/video/portfolio-background.mp4" /></div><div className="cine-vignette" /><div id="cine-glow" className="cine-glow" /><div className="cine-grain" /><div className="cine-scan" /></div>;
}

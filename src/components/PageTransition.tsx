import { useLayoutEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';

export default function PageTransition({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
  }, []);

  return <div ref={ref}>{children}</div>;
}

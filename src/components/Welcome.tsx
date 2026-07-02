import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Blocks, Users2, MousePointer2, type LucideIcon } from 'lucide-react';
import gsap from 'gsap';

type Tab = {
  title: string;
  path: string;
  icon: LucideIcon;
  description: string;
};

const tags = ['Full-Stack Engineer', 'Web3 Developer', 'Community Builder', 'Graphic Designer'];

const tabs: Tab[] = [
  {
    title: 'Web2',
    path: '/web2',
    icon: Globe,
    description: 'Full-stack applications, APIs, and cloud infrastructure built for scale and reliability.',
  },
  {
    title: 'Web3',
    path: '/web3',
    icon: Blocks,
    description: 'Native crypto wallets, Move-language smart contracts, and decentralized app architecture.',
  },
  {
    title: 'Community Development',
    path: '/community',
    icon: Users2,
    description: 'Mentorship, open-source contribution, and building tools that grow developer ecosystems.',
  },
];

export default function Welcome() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const transitioningRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const cursor = cursorRef.current;
    if (!container || !cursor) return;

    const moveTo = (index: number, animate: boolean) => {
      const card = cardRefs.current[index];
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const x = cardRect.left - containerRect.left + cardRect.width * 0.7;
      const y = cardRect.top - containerRect.top + cardRect.height * 0.6;
      gsap.to(cursor, { x, y, opacity: 1, duration: animate ? 1 : 0, ease: 'power2.inOut' });
    };

    let index = 0;
    moveTo(index, false);
    const interval = setInterval(() => {
      if (transitioningRef.current) return;
      index = (index + 1) % tabs.length;
      moveTo(index, true);
    }, 2200);

    const handleResize = () => moveTo(index, false);
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCardClick = (index: number) => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;

    const path = tabs[index].path;
    const page = document.querySelector<HTMLElement>('main');

    // Guaranteed fallback: if GSAP ever fails to fire onComplete, navigate anyway
    // so the UI never gets stuck mid-transition.
    const fallback = window.setTimeout(() => navigate(path), 900);
    const go = () => {
      window.clearTimeout(fallback);
      navigate(path);
    };

    if (!page) {
      go();
      return;
    }

    // the whole page slides out to the left, like a mobile app screen transition
    gsap.to(page, {
      x: -80,
      opacity: 0,
      duration: 0.45,
      ease: 'power2.in',
      onComplete: go,
    });
  };

  return (
    <section className="reveal" data-delay="0">
      <div ref={headingRef} className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Welcome to <span className="glow-text">Niles Portfolio</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-wide text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">Which do you want to explore?</p>
      </div>

      <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {tabs.map(({ title, icon: Icon, description }, index) => (
          <div
            key={title}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            role="button"
            tabIndex={0}
            onClick={() => handleCardClick(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleCardClick(index);
            }}
            className="glass-card p-8 flex flex-col gap-6 cursor-pointer"
          >
            <div className="glass-icon-square w-12 h-12 flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg text-white">{title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-medium">{description}</p>
          </div>
        ))}

        <div
          ref={cursorRef}
          className="pointer-events-none absolute left-0 top-0 z-10 opacity-0 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        >
          <MousePointer2 className="w-6 h-6 text-white fill-white" />
        </div>
      </div>
    </section>
  );
}

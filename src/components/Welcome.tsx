import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, Blocks, Users2, MousePointer2, type LucideIcon } from 'lucide-react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const transitioningRef = useRef(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { damping: 24, stiffness: 90, mass: 0.8 });
  const smoothY = useSpring(cursorY, { damping: 24, stiffness: 90, mass: 0.8 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let index = 0;

    const moveTo = (targetIndex: number) => {
      const card = cardRefs.current[targetIndex];
      const cont = containerRef.current;
      if (!card || !cont) return;
      const cardRect = card.getBoundingClientRect();
      const containerRect = cont.getBoundingClientRect();
      const x = cardRect.left - containerRect.left + cardRect.width * 0.72;
      const y = cardRect.top - containerRect.top + cardRect.height * 0.62;
      cursorX.set(x);
      cursorY.set(y);
    };

    const initialTimer = setTimeout(() => {
      moveTo(0);
    }, 120);

    const interval = setInterval(() => {
      if (transitioningRef.current) return;
      index = (index + 1) % tabs.length;
      moveTo(index);
    }, 2400);

    const handleResize = () => moveTo(index);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [cursorX, cursorY]);

  const handleCardClick = (index: number) => {
    if (transitioningRef.current) return;
    transitioningRef.current = true;
    navigate(tabs[index].path);
  };

  return (
    <motion.section initial={{ y: 20 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 120, damping: 22 }}>
      <div ref={headingRef} className="text-center mb-10 sm:mb-14">
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 sm:px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono uppercase tracking-wide text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 sm:mb-6">
          Build, teach, and ship useful digital experiences.
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium">Choose a track to explore.</p>
      </div>

      <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
        {tabs.map(({ title, icon: Icon, description }, index) => (
          <motion.div
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
            className="glass-card p-6 sm:p-8 flex flex-col gap-4 sm:gap-6 cursor-pointer"
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          >
            <div className="glass-icon-square w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-white">{title}</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">{description}</p>
          </motion.div>
        ))}

        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="pointer-events-none absolute left-0 top-0 z-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        >
          <MousePointer2 className="w-5 h-5 sm:w-6 sm:h-6 text-white fill-white" />
        </motion.div>
      </div>
    </motion.section>
  );
}


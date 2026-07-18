const items = [
  'React',
  'TypeScript',
  'Node.js',
  'Move',
  'Solidity',
  'Tailwind CSS',
  'GSAP',
  'Rust',
  'Next.js',
  'Web3',
  'Smart Contracts',
  'UI / UX',
  'Community',
  'Open Source',
];

type MarqueeProps = React.HTMLAttributes<HTMLDivElement>;

export default function Marquee({ className = '', ...rest }: MarqueeProps) {
  // Duplicate the list so the track can loop seamlessly at -50%.
  const loop = [...items, ...items];

  return (
    <div className={`marquee w-full ${className}`} aria-hidden="true" {...rest}>
      <div className="marquee__track">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="px-6 text-sm font-mono uppercase tracking-widest text-zinc-400">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-white/25" />
          </div>
        ))}
      </div>
    </div>
  );
}

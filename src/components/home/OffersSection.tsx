import { Blocks, Globe2, GraduationCap, MousePointerClick, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

type Offer = {
  title: string;
  icon: LucideIcon;
  description: string;
  highlights: string[];
};

const offers: Offer[] = [
  {
    title: 'Static Website Development',
    icon: Globe2,
    description:
      'Fast, responsive portfolio, business, event, and landing pages built with clean layouts and reliable deployment.',
    highlights: ['Portfolio sites', 'Business pages', 'Landing pages', 'Responsive design'],
  },
  {
    title: 'Interactive Website Development',
    icon: MousePointerClick,
    description:
      'Dynamic web experiences with animations, forms, dashboards, user flows, and smooth frontend interactions.',
    highlights: ['React interfaces', 'Forms and dashboards', 'Motion design', 'API integration'],
  },
  {
    title: 'Web3 Education',
    icon: Blocks,
    description:
      'Practical blockchain lessons focused on wallets, smart contracts, security, tokens, NFTs, and real-world Web3 use.',
    highlights: ['Wallet safety', 'Smart contract basics', 'Token literacy', 'Scam prevention'],
  },
  {
    title: 'Computer Education',
    icon: GraduationCap,
    description:
      'Beginner-friendly and career-focused computer training, from digital literacy to AI-assisted development.',
    highlights: ['Foundations', 'Office tools', 'AI literacy', 'Productivity systems'],
  },
];

export default function OffersSection() {
  return (
    <motion.section
      id="what-i-offer"
      className="mt-16 sm:mt-24 w-full scroll-mt-24 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16"
      initial={{ y: 48 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 105, damping: 24 }}
    >
      <div className="mb-8 sm:mb-10 grid gap-4 sm:gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 sm:mb-3">What I Offer</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Digital work built for clarity, speed, and trust.
          </h2>
        </div>
        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400 max-w-2xl md:justify-self-end">
          I combine website development, Web3 education, and hands-on computer training for people, brands, and
          communities that need practical digital results.
        </p>
      </div>


      <div>
        {offers.map(({ title, icon: Icon, description, highlights }, index) => (
          <motion.article
            key={title}
            className="grid gap-5 py-7 md:grid-cols-[5rem_1fr_1.15fr] md:items-start border-b border-white/10 last:border-b-0"
            initial={{ x: 26 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ type: 'spring', stiffness: 130, damping: 24 }}
          >
            <div className="flex items-center gap-4 md:block">
              <span className="block text-xs font-mono text-zinc-500">0{index + 1}</span>
              <div className="mt-0 md:mt-4 h-10 w-10 flex items-center justify-center border border-white/10 bg-white/[0.03]">
                <Icon className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 max-w-xl">{description}</p>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-zinc-300"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

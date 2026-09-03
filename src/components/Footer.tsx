import { Link } from 'react-router-dom';
import { Award, Blocks, Code2, Mail, Monitor, MoveUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SocialLinks from './socials/SocialLinks';

const footerLinks = [
  { label: 'Static Websites', detail: 'Clean business and portfolio pages', icon: Code2 },
  { label: 'Interactive Websites', detail: 'React UI, motion, forms, dashboards', icon: Monitor },
  { label: 'Web3 Education', detail: 'Wallets, smart contracts, safety', icon: Blocks },
];

export default function Footer() {
  return (
    <motion.footer
      className="mt-16 sm:mt-24 w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16"
      initial={{ y: 44 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ type: 'spring', stiffness: 105, damping: 24 }}
    >
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 sm:mb-3">Connect</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">Let us build something useful.</h2>
          <p className="mt-3 sm:mt-4 max-w-xl text-xs sm:text-sm leading-relaxed text-zinc-400">
            Available for static websites, interactive web projects, Web3 literacy sessions, and computer education.
          </p>
        </div>


        <div className="border-y border-white/10">
          <Link
            to="/achievements"
            className="group grid gap-3 py-5 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center border-b border-white/10"
          >
            <div className="h-9 w-9 flex items-center justify-center border border-white/10 bg-white/[0.03] text-zinc-300">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Achievement</div>
              <div className="mt-1 text-xs text-zinc-500">View verified milestones and project records.</div>
            </div>
            <MoveUpRight className="w-4 h-4 text-zinc-500 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white" />
          </Link>

          {footerLinks.map(({ label, detail, icon: Icon }) => (
            <div key={label} className="grid gap-3 py-5 sm:grid-cols-[2.5rem_1fr] sm:items-center border-b border-white/10 last:border-b-0">
              <div className="h-9 w-9 flex items-center justify-center border border-white/10 bg-white/[0.03] text-zinc-300">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{label}</div>
                <div className="mt-1 text-xs text-zinc-500">{detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <a
          href="mailto:josephakpansunday@gmail.com"
          className="inline-flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-sm font-semibold text-white transition-colors hover:border-white"
        >
          <Mail className="w-4 h-4 text-zinc-400" />
          <span>josephakpansunday@gmail.com</span>
        </a>
        <SocialLinks className="md:justify-end" />
      </div>
    </motion.footer>
  );
}

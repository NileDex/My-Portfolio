import { Blocks, Award, Briefcase, PenTool, ExternalLink } from 'lucide-react';
import Dock from '../components/Dock';
import PageTransition from '../components/PageTransition';
import SocialLinks from '../components/socials/SocialLinks';

const about =
  'I am a Web3 developer, QA Engineer, blockchain enthusiast, and creative designer with hands-on experience building decentralized applications (dApps) using React, Vite, and Move (Aptos/Cedra), alongside modern frontend technologies. My work spans smart contract-driven interfaces and full-stack dApp architecture, backed by strong technical proficiency across computers, development tooling, and smart devices. I am driven by the intersection of design and decentralized technology, focused on building secure, intuitive experiences for the next generation of Web3 products.';

const jobs = [
  { role: 'QA Engineer', org: 'Pocket Soc AI', href: 'https://pocketsoc.me/' },
  { role: 'Bounty Hunter', org: '', href: undefined },
];

const projects = [
  {
    title: 'Walk to Earn',
    description:
      'A Move-to-Earn dApp built on Movement Blockchain that rewards users for physical activity. Access is gated by ownership of the Arctic Penguin NFT collection, combining fitness incentives with on-chain utility.',
    href: 'https://frontend-puffer-walks.vercel.app/',
    image: '/projects/walk-to-earn.png',
  },
  {
    title: 'DAO',
    description:
      'A decentralized autonomous organization platform built on Movement Blockchain, enabling transparent, on-chain governance and community-driven decision-making.',
    href: 'https://move-dao-app.vercel.app/',
    image: '/projects/dao.png',
  },
  {
    title: 'City Bus',
    description:
      'Urban transit, reimagined. Connecting passengers and drivers across the city — seamlessly, safely, and in real time. The future of urban mobility starts here.',
    href: 'https://corgi-alpha.vercel.app/',
    image: '/projects/city-bus.png',
  },
  {
    title: 'Cross-Chain Transfer with Agent Tech',
    description:
      'A cross-chain asset transfer application powered by autonomous agent technology, enabling seamless interoperability between blockchain networks.',
    href: 'https://cross402-example.vercel.app/',
    image: '/projects/cross-chain-agent.png',
  },
  {
    title: 'Gym Membership Application',
    description: 'A digital gym membership management application streamlining sign-ups, plans, and member tracking.',
    href: 'https://gymmembership-seven.vercel.app/',
    image: '/projects/gym-membership.png',
  },
  {
    title: 'Help Desk for RSU',
    description:
      'A dedicated help desk platform providing a centralized system for submitting, tracking, and resolving support requests.',
    href: 'https://helpdesk-client-omega.vercel.app/',
    image: '/projects/help-desk-rsu.png',
  },
];

const roles = [
  { title: 'Regional Explorer', org: 'Movement Blockchain' },
  { title: 'Ambassador', org: 'Cedra' },
  { title: 'Envoy', org: '' },
  { title: 'Kingtech', org: '' },
  { title: 'Luminary', org: 'Arkadian' },
];

const illustration =
  'With over 5 years of experience in graphic design and illustration, I use Adobe Illustrator to craft custom icons, mascots, and brand identities for Web3 and tech-focused projects. My design process blends creative storytelling with technical precision, producing scalable vector assets that strengthen brand recognition, improve product clarity, and bring a distinct visual identity to decentralized products and communities.';

const illustrationSkills = [
  'Icon Design',
  'Mascot & Character Design',
  'Brand Identity & Logo Design',
  'Vector Illustration',
  'Adobe Illustrator (5+ years)',
];

export default function Web3Page() {
  return (
    <main className="relative min-h-screen pb-24">
      <Dock />

      <PageTransition>
        <div className="pl-16 sm:pl-24 md:pl-60 pr-6 sm:pr-12 pt-16 sm:pt-20 max-w-6xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="glass-icon-square w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
              <Blocks className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white glow-text">Web3</h1>
              <p className="text-xs sm:text-sm tracking-[0.3em] text-zinc-500 font-mono mt-1">
                Blockchain &amp; dApp Development
              </p>
            </div>
          </div>

          <section className="mb-10 pb-10 border-b border-white/10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-4">About</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">{about}</p>
          </section>

          <section className="mb-10 pb-10 border-b border-white/10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Jobs</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6">
              {jobs.map(({ role, org, href }) => (
                <div key={role} className="flex items-start gap-3">
                  <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{role}</div>
                    {org &&
                      (href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm text-zinc-400 hover:text-white transition-colors mt-0.5 underline underline-offset-2 decoration-white/20 inline-block"
                        >
                          {org}
                        </a>
                      ) : (
                        <div className="text-sm text-zinc-400 mt-0.5">{org}</div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10 pb-10 border-b border-white/10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl">
              {projects.map(({ title, description, href, image }) => (
                <a
                  key={title}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card group flex flex-col"
                >
                  <div className="aspect-video w-full overflow-hidden bg-white/5">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                      {title}
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="mb-10 pb-10 border-b border-white/10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Roles &amp; Community</h2>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6">
              {roles.map(({ title, org }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    {org && <div className="text-sm text-zinc-400 mt-0.5">{org}</div>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">
              Graphics &amp; Illustration
            </h2>
            <div className="flex items-start gap-3">
              <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                <PenTool className="w-4 h-4 text-white" />
              </div>
              <div className="min-w-0 max-w-2xl">
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{illustration}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {illustrationSkills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </PageTransition>

      <div className="px-6 mt-16">
        <SocialLinks />
      </div>
    </main>
  );
}

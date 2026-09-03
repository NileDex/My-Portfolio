import {
  Blocks,
  BrainCircuit,
  Code2,
  Cpu,
  FileSpreadsheet,
  GitBranch,
  MessagesSquare,
  Monitor,
  NotebookTabs,
  Palette,
  ShieldCheck,
  Terminal,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Gallery from '../Gallery';

type TeachingField = {
  title: string;
  icon: LucideIcon;
  topics: string[];
};

const teachingFields: TeachingField[] = [
  {
    title: 'Computer Appreciation',
    icon: Monitor,
    topics: [
      'Hardware vs software',
      'Files and folders',
      'Windows basics',
      'Internet, browsers, email',
      'Typing skills',
    ],
  },
  {
    title: 'Command Line Tools',
    icon: Terminal,
    topics: ['CMD navigation', 'File operations', 'PowerShell cmdlets', 'Scripts and variables'],
  },

  {
    title: 'Microsoft Office Suite',
    icon: FileSpreadsheet,
    topics: ['Word formatting', 'Excel formulas and charts', 'Pivot tables', 'PowerPoint design', 'Outlook basics'],
  },
  {
    title: 'AI Tools & Literacy',
    icon: BrainCircuit,
    topics: ['How LLMs work', 'ChatGPT and Claude', 'Prompt engineering', 'AI image/video tools', 'Ethics and limitations'],
  },
  {
    title: 'Vibe Coding',
    icon: Code2,
    topics: ['AI pair-programming', 'Claude Code, Cursor, Copilot', 'Build simple apps', 'Debug with AI', 'Verify AI output'],
  },
  {
    title: 'GitHub & Version Control',
    icon: GitBranch,
    topics: ['Why Git matters', 'GitHub setup', 'Repos and README files', 'Clone, commit, push, pull', 'Branching basics'],
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    topics: ['Color theory', 'Typography', 'Layout', 'Canva', 'Illustrator, logos, posters, social graphics'],
  },
  {
    title: 'Hardware Development',
    icon: Cpu,
    topics: ['Electronics basics', 'Circuits and breadboards', 'Arduino and ESP32', 'Sensor projects', 'Soldering basics'],
  },
  {
    title: 'Productivity Tools',
    icon: NotebookTabs,
    topics: ['Notion pages', 'Databases and templates', 'Google Workspace', 'Drive organization', 'Trello and Asana basics'],
  },
  {
    title: 'Digital Literacy Extras',
    icon: ShieldCheck,
    topics: ['Cloud storage', 'Zoom and Google Meet', 'OneDrive and Dropbox', 'Virtual collaboration', 'Troubleshooting'],
  },
  {
    title: 'Blockchain & Web3 Literacy',
    icon: Blocks,
    topics: ['MetaMask and wallets', 'Seed phrase security', 'Blockchains and smart contracts', 'NFTs and tokens', 'Avoiding scams'],
  },
  {
    title: 'No-Code / Low-Code Tools',
    icon: Workflow,
    topics: ['Zapier and n8n', 'Webflow', 'Wix', 'Framer', 'Airtable databases'],
  },
  {
    title: 'Digital Communication',
    icon: MessagesSquare,
    topics: ['Professional email writing', 'Slack norms', 'Discord norms', 'Teams etiquette', 'Virtual meetings'],
  },
];

const communityPhotos = [
  { src: '/community/community-1.jpg', label: 'Skills & Sourcing' },
  { src: '/community/community-2.jpg', label: 'Skills & Sourcing' },
  { src: '/community/community-3.jpg', label: 'Movement Community Event' },
  { src: '/community/community-4.jpg', label: 'JupDAO x Movement Meetup' },
  { src: '/community/community-5.jpg', label: 'Byte Onchain - Borderless 3.0' },
  { src: '/community/community-6.jpg', label: 'Byte Onchain - Borderless 3.0' },
  { src: '/community/community-7.jpg', label: 'Community Meetup' },
  { src: '/community/community-8.jpg', label: 'Byte Onchain - Borderless 3.0' },
  { src: '/community/community-9.jpg', label: 'Movement Community Event' },
  { src: '/community/WhatsApp Image 2024-11-09 at 14.38.00_94e1af22.jpg', label: 'Community Session' },
  { src: '/community/WhatsApp Image 2024-11-09 at 15.30.24_b210ce2c.jpg', label: 'Live Workshop' },
  { src: '/community/WhatsApp Image 2024-11-09 at 15.30.35_a9447bf7.jpg', label: 'Builder Meetup' },
];

export default function EducatorSection() {
  return (
    <section id="educator-fields" className="w-full scroll-mt-8 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-12 sm:py-16">
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 sm:gap-10 items-start">
        <motion.div
          className="lg:sticky lg:top-24"
          initial={{ y: 42 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 105, damping: 24 }}
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-2 sm:mb-3">Educator Fields</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Web3 Educator and Computer Educator.
          </h2>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base leading-relaxed text-zinc-400 max-w-xl">
            I teach practical digital skills across beginner computer literacy, productivity, design, AI-assisted
            building, hardware basics, and blockchain safety.
          </p>

          <div className="mt-8 grid grid-cols-3">
            {[
              ['13', 'Fields'],
              ['2', 'Core tracks'],
              ['Hands-on', 'Learning'],
            ].map(([value, label]) => (
              <div key={label} className="py-4 pr-4">
                <div className="text-xl font-bold text-white">{value}</div>
                <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col">
            {teachingFields.map(({ title, icon: Icon, topics }, index) => (
              <motion.article
                key={title}
                className="relative grid gap-4 py-6 sm:grid-cols-[4rem_1fr]"
                initial={{ x: 34 }}
                whileInView={{ x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ type: 'spring', stiffness: 120, damping: 24 }}
              >
                <div className="flex items-center gap-3 sm:block">
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center border border-white/10 bg-[#050505] text-[10px] font-mono text-zinc-500">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="mt-0 sm:mt-4 h-8 w-8 flex items-center justify-center text-zinc-300">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white leading-snug">{title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <span key={topic} className="border-l border-white/15 pl-2 text-xs leading-relaxed text-zinc-400">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="mt-20"
        initial={{ y: 44 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 105, damping: 24 }}
      >
        <div className="mb-8 grid gap-4 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-zinc-500 mb-3">Gallery</p>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white">Community learning in motion.</h3>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-zinc-400 md:justify-self-end">
            Moments from workshops, meetups, onboarding sessions, and ecosystem events.
          </p>
        </div>
        <Gallery images={communityPhotos} />
      </motion.div>
    </section>
  );
}

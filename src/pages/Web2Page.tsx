import {
  Globe,
  User,
  Flag,
  Mail,
  Languages,
  Link2,
  Briefcase,
  FolderGit2,
  Wrench,
  Heart,
  Contact,
} from 'lucide-react';
import Dock from '../components/Dock';
import PageTransition from '../components/PageTransition';



const personalInfo = [
  { label: 'Full Name', value: 'Joseph Akpan Sunday', icon: User },
  { label: 'Nationality', value: 'Nigerian', icon: Flag },
  { label: 'Email', value: 'josephakpansunday@gmail.com', icon: Mail },
  { label: 'Language', value: 'English', icon: Languages },
  { label: 'GitHub / Portfolio', value: 'nile_dex', href: 'https://github.com/NileDex', icon: Link2 },
];

const aboutMe =
  'I am an Engineering graduate with a strong foundation in technical problem-solving, system analysis, and applied engineering principles. Through my academic training, I developed skills in analytical thinking, design, troubleshooting, and project execution. I am detail-oriented, adaptable, and capable of applying engineering concepts to real-world challenges. I have a strong interest in continuous learning, technology-driven solutions, and delivering efficient, reliable results in professional engineering environments.';

const experience = [
  {
    role: 'P & P Computer Specialist',
    org: 'Ignatius Ajuru University of Education, Port Harcourt',
    type: 'Student Industrial Work Experience Scheme (SIWES)',
    period: '2020 – 2021',
    bullets: [
      'Carried out installation, troubleshooting, and maintenance of computer hardware systems.',
      'Assisted in diagnosing and repairing faulty electronic components and peripherals.',
      'Performed basic networking tasks including cable setup, system configuration, and connectivity testing.',
      'Supported software installation, system updates, and routine maintenance.',
      'Applied safety procedures and standard engineering practices during equipment handling.',
    ],
  },
  {
    role: 'GPrime Computer Specialist',
    org: 'Industrial Training',
    type: '',
    period: '2021 – 2022',
    bullets: [
      'Handled computer system assembly and preventive maintenance.',
      'Assisted in installation and configuration of operating systems and application software.',
      'Provided technical support and basic user assistance.',
      'Maintained proper documentation of maintenance activities and system issues.',
    ],
  },
];

type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: 'Installation of a Solar Power System for the EEE Examination Office',
    description:
      'Designed and implemented a standalone solar power system to provide reliable electricity for the Electrical & Electronics Engineering (EEE) Examination Office. The project involved system planning, component selection, installation, and testing to ensure stable power supply and efficient energy usage.',
  },
  {
    title: 'Movementlabsxyz / Moveindustries (Move Blockchain) — 2024 till date',
    description:
      'Host IRL events on blockchain education, cryptocurrency, and decentralized technology — the future of money movement.',
  },
];

const technicalSkills = [
  {
    category: 'Electrical & Electronics Maintenance',
    items: [
      'Troubleshooting electrical circuits and systems',
      'Installation and maintenance',
      'Testing components',
      'Preventive maintenance of electrical equipment',
      'Safety compliance',
    ],
  },
  {
    category: 'Computer & IT Maintenance',
    items: [
      'Computer hardware assembly',
      'Software installation and system updates',
      'Networking setup and troubleshooting',
      'Peripheral device maintenance (printers, scanners, etc.)',
      'Technical support and user assistance',
    ],
  },
];

const interests = ['Computer troubleshooting', 'Problem-solving'];

type Reference = {
  name: string;
  title: string;
  phone?: string;
  email?: string;
};

const references: Reference[] = [
  {
    name: 'Engr. Akpan Sunday Charles',
    title: 'Electrical Engineer/Technician',
  },
];

export default function Web2Page() {
  return (
    <main className="relative min-h-screen pb-24">
      <Dock />

      <PageTransition>
      <div className="w-full pl-16 sm:pl-24 md:pl-60 pr-4 sm:pr-8 lg:pr-16 xl:pr-20 2xl:pr-24 pt-12 sm:pt-16">
        <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">

          <div className="glass-icon-square w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
            <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white glow-text">Web2</h1>
          </div>
        </div>

        <section className="mb-10 pb-10">
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">
            Personal Information
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-10 gap-y-6">

            {personalInfo.map(({ label, value, href, icon: Icon }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-wider text-zinc-500 font-mono">{label}</div>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-zinc-200 hover:text-white transition-colors break-words underline underline-offset-2 decoration-white/20"
                    >
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm text-zinc-200 break-words">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 pb-10">
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-4">About Me</h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">{aboutMe}</p>
        </section>

        <section className="mb-10 pb-10">
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Experience</h2>
          <div className="flex flex-col gap-8">
            {experience.map(({ role, org, type, period, bullets }) => (
              <div key={role} className="flex items-start gap-3">
                <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{role}</div>
                  <div className="text-sm text-zinc-200 mt-0.5">{org}</div>
                  <div className="text-xs text-zinc-500 font-mono mt-1">
                    {type ? `${type} · ` : ''}
                    {period}
                  </div>
                  <ul className="mt-3 flex flex-col gap-1.5 max-w-2xl">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                        <span className="text-zinc-600 flex-shrink-0">&bull;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 pb-10">
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.map(({ title, description }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <FolderGit2 className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <p className="text-sm text-zinc-400 leading-relaxed mt-1 max-w-2xl">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-10 pb-10">
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {technicalSkills.map(({ category, items }) => (
              <div key={category} className="flex items-start gap-3">
                <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{category}</div>
                  <ul className="mt-2 flex flex-col gap-1.5">
                    {items.map((item) => (
                      <li key={item} className="text-sm text-zinc-400 leading-relaxed flex gap-2">
                        <span className="text-zinc-600 flex-shrink-0">&bull;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10 pb-10">
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">Interests / Hobbies</h2>
          <div className="flex items-start gap-3">
            <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">References</h2>
          <div className="flex flex-col gap-6">
            {references.map(({ name, title, phone, email }) => (
              <div key={name} className="flex items-start gap-3">
                <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                  <Contact className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-white">{name}</div>
                  <div className="text-sm text-zinc-200 mt-0.5">{title}</div>
                  {(phone || email) && (
                    <div className="text-xs text-zinc-500 font-mono mt-1">
                      {phone}
                      {phone && email && ' \u00B7 '}
                      {email}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      </PageTransition>

    </main>
  );
}

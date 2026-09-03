import { Award, ExternalLink, Trophy } from 'lucide-react';
import Dock from '../components/Dock';
import PageTransition from '../components/PageTransition';


const achievements = [
  {
    date: 'July 2026',
    title: 'QA & Security Auditing Bounty',
    project: 'Pocket Socrates',
    description:
      'Won the QA and security auditing bounty for Pocket Socrates after reviewing the project, testing behavior, and identifying issues that improved quality and reliability.',
    link: 'https://x.com/AkpanSunday193/status/2076598954498691502',
  },
];

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen pb-24">
      <Dock />

      <PageTransition>
        <div className="w-full pl-16 sm:pl-24 md:pl-60 pr-6 sm:pr-12 lg:pr-16 xl:pr-20 2xl:pr-24 pt-16 sm:pt-20">
          <div className="flex items-center gap-4 mb-10">

            <div className="glass-icon-square w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Achievements</h1>
              <p className="mt-2 text-sm text-zinc-500 font-mono uppercase tracking-wider">Verified milestones</p>
            </div>
          </div>

          <section className="mb-10 pb-6">
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              A focused record of public wins, shipped work, audits, recognitions, and community milestones.
            </p>
          </section>

          <section>
            <div>
              {achievements.map((item, index) => (
                <article
                  key={item.title}
                  className="grid gap-6 py-6 lg:grid-cols-[5rem_9rem_1fr_auto] lg:items-start"
                >
                  <div className="flex items-center gap-3 lg:block">
                    <span className="block text-xs font-mono text-zinc-500">{String(index + 1).padStart(2, '0')}</span>
                    <div className="mt-0 lg:mt-4 h-10 w-10 flex items-center justify-center border border-white/10 bg-white/[0.03] text-zinc-300">
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">{item.date}</div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{item.title}</h2>
                    <div className="mt-2 text-sm font-semibold text-zinc-300">{item.project}</div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border-b border-white/20 pb-1 text-sm font-semibold text-white transition-colors hover:border-white"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-4 h-4 text-zinc-400" />
                  </a>
                </article>
              ))}
            </div>
          </section>
        </div>
      </PageTransition>
    </main>
  );
}


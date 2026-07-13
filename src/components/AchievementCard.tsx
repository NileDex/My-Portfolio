import { Trophy, ExternalLink } from 'lucide-react';

interface AchievementCardProps {
  className?: string;
  'data-delay'?: string;
}

export default function AchievementCard({ className = '', 'data-delay': delay }: AchievementCardProps) {
  const achievements = [
    {
      date: 'July 2026',
      title: 'QA & Security Auditing Bounty',
      project: 'Pocket Socrates',
      description: 'Won the QA and security auditing bounty for Pocket Socrates! Digging deep into hunting down bugs, but seeing the hard work pay off is incredibly rewarding.',
      link: 'https://x.com/AkpanSunday193/status/2076598954498691502',
    }
  ];

  return (
    <div
      className={`glass-card p-6 md:p-8 max-w-4xl w-full mx-auto border border-amber-500/10 bg-gradient-to-b from-white/[0.02] to-transparent shadow-[0_12px_40px_rgba(0,0,0,0.5)] group transition-all duration-300 ${className}`}
      data-delay={delay}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="glass-icon-square w-10 h-10 flex items-center justify-center bg-amber-500/10 border-amber-500/30 text-amber-400">
          <Trophy className="w-5 h-5 animate-pulse" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight">Achievements & Milestones</h3>
          <p className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Verified Records</p>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-3 px-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider w-24">Date</th>
              <th className="py-3 px-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider">Achievement</th>
              <th className="py-3 px-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider w-40">Project / Org</th>
              <th className="py-3 px-4 text-xs font-mono font-bold text-zinc-500 uppercase tracking-wider text-right w-28">Proof</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map((item, index) => (
              <tr
                key={index}
                className="border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-200 group/row"
              >
                <td className="py-4 px-4 text-xs font-mono text-zinc-400 align-top">
                  {item.date}
                </td>
                <td className="py-4 px-4 align-top">
                  <div className="font-semibold text-sm text-white group-hover/row:text-amber-300 transition-colors duration-250 mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </td>
                <td className="py-4 px-4 text-sm font-semibold text-zinc-300 align-top">
                  {item.project}
                </td>
                <td className="py-4 px-4 text-right align-top">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 text-xs font-semibold text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400 group-hover/row:text-white transition-colors" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

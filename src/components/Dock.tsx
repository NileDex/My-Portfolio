import { Link, useLocation } from 'react-router-dom';
import { Home, Globe, Blocks, Users2, type LucideIcon } from 'lucide-react';

type DockItem = {
  label: string;
  path: string;
  icon: LucideIcon;
};

const items: DockItem[] = [
  { label: 'Web2', path: '/web2', icon: Globe },
  { label: 'Web3', path: '/web3', icon: Blocks },
  { label: 'Community Development', path: '/community', icon: Users2 },
];

export default function Dock() {
  const location = useLocation();

  return (
    <nav
      id="dock-nav"
      className="glass-pill glass-pill-dock fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-stretch gap-1 p-1.5"
    >
      <Link
        to="/"
        aria-label="Back to home"
        className="flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold whitespace-nowrap text-zinc-400 hover:text-white transition-colors mb-1 pb-4 border-b border-white/10"
      >
        <Home className="w-4 h-4 flex-shrink-0" />
        <span className="hidden md:inline">Home</span>
      </Link>
      {items.map(({ label, path, icon: Icon }) => {
        const active = location.pathname === path;
        return (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
              active ? 'bg-white/15 text-white' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4 flex-shrink-0" />
            <span className="hidden md:inline">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

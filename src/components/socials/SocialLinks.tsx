import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaSpotify, FaXTwitter } from 'react-icons/fa6';

const links = [
  { label: 'GitHub', href: 'https://github.com/NileDex', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-akpan-sunday-18537829b/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:josephakpansunday@gmail.com', icon: Mail },
  { label: 'Instagram', href: 'https://www.instagram.com/josephakpansunday', icon: FaInstagram },
  { label: 'X', href: 'https://x.com/AkpanSunday193', icon: FaXTwitter },
  { label: 'TikTok', href: 'https://www.tiktok.com/@nile_dex', icon: FaTiktok },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/31ww5yrwg6rqujb3cyny75qi36ve',
    icon: FaSpotify,
  },
];

export default function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center flex-wrap gap-4 reveal ${className}`} data-delay="0.3">
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noreferrer' : undefined}
          aria-label={label}
          className="glass-icon w-11 h-11 flex items-center justify-center text-zinc-400 hover:text-white"
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

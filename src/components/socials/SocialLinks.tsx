import { useState } from 'react';
import { Mail, QrCode } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok, FaSpotify, FaXTwitter } from 'react-icons/fa6';
import ShareModal from '../ShareModal';

const links = [
  { label: 'GitHub', href: 'https://github.com/NileDex', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joseph-akpan-sunday/', icon: FaLinkedin },
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
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <>
      <div className={`flex items-center justify-center flex-wrap gap-3 sm:gap-4 ${className}`}>
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            aria-label={label}
            className="glass-icon w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-zinc-400 hover:text-white"
          >
            <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        ))}

        <button
          type="button"
          onClick={() => setShareOpen(true)}
          aria-label="Share & QR Code"
          title="Share & QR Code"
          className="glass-icon w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-zinc-400 hover:text-white cursor-pointer"
        >
          <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  );
}


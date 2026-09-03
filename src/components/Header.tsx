import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, QrCode, Sun, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ShareModal from './ShareModal';

const navItems = [
  { label: 'What I Offer', href: '#what-i-offer' },
  { label: 'Educator Fields', href: '#educator-fields' },
  { label: 'Achievements', href: '/achievements', isRoute: true },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [shareOpen, setShareOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const light = theme === 'light';

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[var(--line-soft)] bg-[var(--page-bg-translucent)] backdrop-blur-md transition-colors duration-200">
        <div className="flex w-full items-center justify-between px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 py-3 sm:py-4">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base sm:text-lg font-black tracking-tight text-white transition-opacity hover:opacity-90 shrink-0"
          >
            NileDex
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-xs font-mono uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs font-mono uppercase tracking-wider text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Actions (Share, Theme, Mobile Menu Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setShareOpen(true)}
              aria-label="Share portfolio & QR Code"
              className="flex items-center gap-1.5 rounded-full border border-[var(--line-soft)] bg-[var(--surface-soft)] px-2.5 sm:px-3 py-1 text-xs font-mono uppercase tracking-wider text-zinc-300 transition-all hover:bg-[var(--surface-hover)] hover:text-white cursor-pointer"
            >
              <QrCode className="h-3.5 w-3.5 text-zinc-400" />
              <span className="hidden sm:inline">Share</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={`Switch to ${light ? 'dark' : 'light'} mode`}
              className="relative flex h-7 w-12 sm:w-13 cursor-pointer items-center rounded-full border border-[var(--line-soft)] bg-[var(--surface-soft)] p-0.5 transition-all hover:bg-[var(--surface-hover)]"
            >
              <motion.span
                className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-white text-zinc-950 shadow-sm"
                animate={{ x: light ? 20 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              >
                {light ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
              </motion.span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-lg border border-[var(--line-soft)] bg-[var(--surface-soft)] text-zinc-300 transition-colors hover:bg-[var(--surface-hover)] hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-[var(--line-soft)] bg-[var(--page-bg)] px-4 py-4"
            >
              <nav className="flex flex-col gap-2">
                {navItems.map((item) =>
                  item.isRoute ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-300 transition-colors hover:bg-[var(--surface-hover)] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-mono uppercase tracking-wider text-zinc-300 transition-colors hover:bg-[var(--surface-hover)] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-zinc-500" />
                    </a>
                  )
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ShareModal isOpen={shareOpen} onClose={() => setShareOpen(false)} />
    </>
  );
}




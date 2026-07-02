import { Users2, CalendarCheck, Award } from 'lucide-react';
import Dock from '../components/Dock';
import PageTransition from '../components/PageTransition';
import Gallery from '../components/Gallery';
import SocialLinks from '../components/socials/SocialLinks';

const about =
  'Beyond development, I am an active community builder, with experience onboarding and educating developers and enthusiasts through workshops, testnets, and live events. I also bring a creative edge as a 2D graphic designer, combining technical execution with design sensibility to help communities grow.';

const eventHosting =
  'I have hosted several in-person events for Movement Blockchain as a Regional Explorer in Port Harcourt, bringing together developers, enthusiasts, and newcomers for hands-on sessions, onboarding, and community meetups. I am open to hosting similar events for tech companies and Web2 or Web3 communities looking to engage and grow their local audience.';

const communityRoles = [{ title: 'Ambassador & Builder', org: 'Cedra Blockchain' }];

const contributions =
  'As an Ambassador and Builder for Cedra Blockchain, I represent the project within local and online developer circles, driving awareness, onboarding, and technical engagement. Beyond Cedra, I have contributed to the growth of several other Web3 communities — supporting content creation, engagement initiatives, and early-stage adoption efforts that help emerging projects build active, informed user bases.';

const communityPhotos = [
  { src: '/community/community-1.jpg', label: 'Skills & Sourcing' },
  { src: '/community/community-2.jpg', label: 'Skills & Sourcing' },
  { src: '/community/community-3.jpg', label: 'Movement Community Event' },
  { src: '/community/community-4.jpg', label: 'JupDAO x Movement Meetup' },
  { src: '/community/community-5.jpg', label: 'Byte Onchain — Borderless 3.0' },
  { src: '/community/community-6.jpg', label: 'Byte Onchain — Borderless 3.0' },
  { src: '/community/community-7.jpg', label: 'Community Meetup' },
  { src: '/community/community-8.jpg', label: 'Byte Onchain — Borderless 3.0' },
  { src: '/community/community-9.jpg', label: 'Movement Community Event' },
];

export default function CommunityPage() {
  return (
    <main className="relative min-h-screen pb-24">
      <Dock />

      <PageTransition>
        <div className="pl-16 sm:pl-24 md:pl-60 pr-6 sm:pr-12 pt-16 sm:pt-20 max-w-6xl">
          <div className="flex items-center gap-4 mb-10">
            <div className="glass-icon-square w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
              <Users2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white glow-text">
                Community Development
              </h1>
              <p className="text-xs sm:text-sm tracking-[0.3em] text-zinc-500 font-mono mt-1">
                Builder &amp; Educator
              </p>
            </div>
          </div>

          <div className="mb-10 pb-10 border-b border-white/10">
            <Gallery images={communityPhotos} />
          </div>

          <section className="mb-10 pb-10 border-b border-white/10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-4">About</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">{about}</p>
          </section>

          <section className="mb-10 pb-10 border-b border-white/10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-4">Event Hosting</h2>
            <div className="flex items-start gap-3">
              <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                <CalendarCheck className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">{eventHosting}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-6">
              Community Contributions
            </h2>
            <div className="flex flex-col gap-6">
              {communityRoles.map(({ title, org }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="glass-icon-square w-9 h-9 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white">{title}</div>
                    <div className="text-sm text-zinc-400 mt-0.5">{org}</div>
                  </div>
                </div>
              ))}
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">{contributions}</p>
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

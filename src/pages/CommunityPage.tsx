import { Users2, CalendarCheck, Award } from 'lucide-react';
import Dock from '../components/Dock';
import PageTransition from '../components/PageTransition';


const about =
  'Beyond development, I am an active community builder, with experience onboarding and educating developers and enthusiasts through workshops, testnets, and live events. I also bring a creative edge as a 2D graphic designer, combining technical execution with design sensibility to help communities grow.';

const eventHosting =
  'I have hosted several in-person events for Movement Blockchain as a Regional Explorer in Port Harcourt, bringing together developers, enthusiasts, and newcomers for hands-on sessions, onboarding, and community meetups. I am open to hosting similar events for tech companies and Web2 or Web3 communities looking to engage and grow their local audience.';

const communityRoles = [{ title: 'Ambassador & Builder', org: 'Cedra Blockchain' }];

const contributions =
  'As an Ambassador and Builder for Cedra Blockchain, I represent the project within local and online developer circles, driving awareness, onboarding, and technical engagement. Beyond Cedra, I have contributed to the growth of several other Web3 communities, supporting content creation, engagement initiatives, and early-stage adoption efforts that help emerging projects build active, informed user bases.';

export default function CommunityPage() {
  return (
    <main className="relative min-h-screen pb-24">
      <Dock />

      <PageTransition>
        <div className="w-full pl-16 sm:pl-24 md:pl-60 pr-4 sm:pr-8 lg:pr-16 xl:pr-20 2xl:pr-24 pt-12 sm:pt-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">


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

          <section className="mb-10 pb-10">
            <h2 className="text-xs tracking-[0.3em] text-zinc-500 font-mono font-bold mb-4">About</h2>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">{about}</p>
          </section>

          <section className="mb-10 pb-10">
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

    </main>
  );
}

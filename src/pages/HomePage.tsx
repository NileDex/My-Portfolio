import { useEffect } from 'react';
import gsap from 'gsap';
import Welcome from '../components/Welcome';
import SocialLinks from '../components/socials/SocialLinks';

export default function HomePage() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: parseFloat(el.dataset.delay ?? '0'),
        ease: 'expo.out',
      });
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col max-w-7xl mx-auto px-6 py-24">
      <div className="flex-1 flex flex-col justify-center">
        <Welcome />
      </div>
      <SocialLinks className="mt-16" />
    </main>
  );
}

import Welcome from '../components/Welcome';
import SocialLinks from '../components/socials/SocialLinks';
import ViewCounter from '../components/ViewCounter';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import Header from '../components/Header';
import OffersSection from '../components/home/OffersSection';
import EducatorSection from '../components/home/EducatorSection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col w-full pb-24">
      <Header />
      <div className="w-full px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 pt-6 sm:pt-10">
        <div className="flex-1 flex flex-col justify-center">
          <Welcome />
        </div>

        <SocialLinks className="mt-16" />
        <div className="flex flex-col items-center justify-center mt-6 gap-6">
          <ViewCounter />
        </div>
      </div>


      <Marquee className="mt-20" />
      <OffersSection />
      <EducatorSection />
      <Footer />
    </main>
  );
}

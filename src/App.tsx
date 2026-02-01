import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import Preference from '@/sections/Preference';
import HowItWorks from '@/sections/HowItWorks';
import Languages from '@/sections/Languages';
import Tutors from '@/sections/Tutors';
import Curriculum from '@/sections/Curriculum';
import Scenarios from '@/sections/Scenarios';
import Schedule from '@/sections/Schedule';
import Volunteer from '@/sections/Volunteer';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupGlobalSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;
            
            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    };

    const timer = setTimeout(setupGlobalSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <LanguageProvider>
      <div ref={mainRef} className="relative bg-cream min-h-screen grain-overlay">
        <Navigation />
        <main>
          <Hero />
          <Preference />
          <HowItWorks />
          <Languages />
          <Tutors />
          <Curriculum />
          <Scenarios />
          <Schedule />
          <Volunteer />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

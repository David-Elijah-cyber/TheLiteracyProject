import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, BookOpen, Mic } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  'conversation': MessageCircle,
  'reading': BookOpen,
  'pronunciation': Mic,
};

export default function Preference() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const { t } = useLanguage();

  const preferences = [
    { id: 'conversation', icon: iconMap.conversation },
    { id: 'reading', icon: iconMap.reading },
    { id: 'pronunciation', icon: iconMap.pronunciation },
  ];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl.fromTo(
        imageRef.current,
        { x: '-60vw', rotate: -6, scale: 0.92, opacity: 0 },
        { x: 0, rotate: 0, scale: 1, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: '40vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.05
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        scrollTl.fromTo(
          cards[0],
          { x: '55vw', rotate: 2, opacity: 0 },
          { x: 0, rotate: 0, opacity: 1, ease: 'none' },
          0.08
        );
        scrollTl.fromTo(
          cards[1],
          { x: '55vw', rotate: 2, opacity: 0 },
          { x: 0, rotate: 0, opacity: 1, ease: 'none' },
          0.12
        );
        scrollTl.fromTo(
          cards[2],
          { x: '55vw', rotate: 2, opacity: 0 },
          { x: 0, rotate: 0, opacity: 1, ease: 'none' },
          0.16
        );
      }

      scrollTl.fromTo(
        polaroidRef.current,
        { y: '40vh', rotate: 8, opacity: 0 },
        { y: 0, rotate: 0, opacity: 1, ease: 'none' },
        0.12
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: 0, rotate: 0, opacity: 1 },
        { x: '-18vw', rotate: -3, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        contentRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        scrollTl.fromTo(
          cards,
          { y: 0, opacity: 1 },
          { y: '10vh', opacity: 0, ease: 'power2.in', stagger: 0.02 },
          0.7
        );
      }

      scrollTl.fromTo(
        polaroidRef.current,
        { y: 0, rotate: 0, opacity: 1 },
        { y: '18vh', rotate: 6, opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-cream overflow-hidden z-20"
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 lg:px-[7vw]">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div
              ref={imageRef}
              className="hidden lg:block relative w-[40vw] aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg"
            >
              <img
                src="/preference_image.jpg"
                alt="Learning preferences"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:pl-8">
              <div ref={contentRef} className="mb-8">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
                  {t.preference.title}
                </h2>
                <p className="text-text-dark/70 text-lg">
                  {t.preference.subtitle}
                </p>
              </div>

              <div ref={cardsRef} className="space-y-4 mb-8">
                {t.preference.options.map((pref, index) => {
                  const Icon = preferences[index].icon;
                  const isSelected = selected === preferences[index].id;
                  return (
                    <button
                      key={preferences[index].id}
                      onClick={() => setSelected(preferences[index].id)}
                      className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? 'bg-gold text-primary-blue shadow-paper-lg'
                          : 'bg-white text-primary-blue shadow-paper hover:shadow-paper-lg hover:-translate-y-1'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-full ${
                            isSelected ? 'bg-primary-blue/10' : 'bg-gold/20'
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              isSelected ? 'text-primary-blue' : 'text-gold'
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">
                            {pref.title}
                          </h3>
                          <p
                            className={`text-sm ${
                              isSelected ? 'text-primary-blue/70' : 'text-text-dark/50'
                            }`}
                          >
                            {pref.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <p className="text-sm text-text-dark/50">
                {t.preference.helper}
              </p>
            </div>
          </div>

          <div
            ref={polaroidRef}
            className="hidden lg:block absolute bottom-[8vh] right-[8vw]"
          >
            <div className="polaroid w-[18vw] aspect-square" style={{ transform: 'rotate(2deg)' }}>
              <img
                src="/preference_polaroid.jpg"
                alt="Group discussion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

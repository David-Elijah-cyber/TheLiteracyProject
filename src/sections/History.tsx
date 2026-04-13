import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function History() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { x: '-8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { x: '8vw', opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="history"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div ref={contentRef}>
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-primary-blue text-sm font-semibold rounded-full mb-6">
              {t.history.badge}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
              {t.history.title}
            </h2>
            <p className="text-text-dark/70 text-lg leading-relaxed mb-6">
              {t.history.paragraph1}
            </p>
            <p className="text-text-dark/70 text-lg leading-relaxed">
              {t.history.paragraph2}
            </p>
          </div>

          {/* Right: Image */}
          <div
            ref={imageRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg"
          >
            <img
              src="/tutor_portrait.jpg"
              alt="Nargiz Muhammadiyeva - Founder"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-blue/80 to-transparent p-6">
              <p className="text-white font-serif text-xl font-bold">Nargiz Muhammadiyeva</p>
              <p className="text-white/80 text-sm">{t.history.founderTitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
    </section>
  );
}

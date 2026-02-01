import { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const langPillsRef = useRef<HTMLDivElement>(null);
  const { t, getLanguagePath } = useLanguage();

  // Auto-play entrance animation on load
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.9 },
        0
      );

      tl.fromTo(
        imageCardRef.current,
        { opacity: 0, x: '10vw', rotate: 2, scale: 0.98 },
        { opacity: 1, x: 0, rotate: -1, scale: 1, duration: 1 },
        0.12
      );

      tl.fromTo(
        polaroidRef.current,
        { opacity: 0, y: '10vh', rotate: 4 },
        { opacity: 1, y: 0, rotate: 0, duration: 0.9 },
        0.22
      );

      if (langPillsRef.current) {
        const pills = langPillsRef.current.children;
        tl.fromTo(
          pills,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.06 },
          0.35
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
          onLeaveBack: () => {
            gsap.set([headlineRef.current, imageCardRef.current, polaroidRef.current, langPillsRef.current], {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: (i) => (i === 1 ? -1 : 0),
              scale: 1,
            });
          },
        },
      });

      scrollTl.fromTo(
        headlineRef.current,
        { x: 0, opacity: 1 },
        { x: '-18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageCardRef.current,
        { x: 0, rotate: -1, scale: 1, opacity: 1 },
        { x: '18vw', rotate: 2, scale: 0.98, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        polaroidRef.current,
        { y: 0, rotate: 0, opacity: 1 },
        { y: '12vh', rotate: 6, opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        langPillsRef.current,
        { y: 0, opacity: 1 },
        { y: '10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-cream overflow-hidden z-10"
    >
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 lg:px-[7vw] py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Headline and CTAs */}
            <div ref={headlineRef} className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/20 text-primary-blue px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                {t.hero.badge}
              </div>

              {/* Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-blue leading-[1.05] tracking-tight mb-6">
                {t.hero.headline1}
                <br />
                {t.hero.headline2}
                <br />
                <span className="text-secondary-blue">{t.hero.headline3}</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg lg:text-xl text-text-dark/70 max-w-md mb-8 leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-gold hover:bg-gold/90 text-primary-blue rounded-full px-8 py-6 text-base font-semibold group"
                >
                  {t.hero.ctaPrimary}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <button
                  onClick={() => scrollToSection('#schedule')}
                  className="flex items-center gap-2 text-primary-blue font-medium hover:text-gold transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  {t.hero.ctaSecondary}
                </button>
              </div>

              {/* Language selector */}
              <div ref={langPillsRef} className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <a
                    key={lang.code}
                    href={getLanguagePath(lang.code)}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-text-dark shadow-paper hover:shadow-paper-lg hover:-translate-y-0.5 transition-all"
                  >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Image collage */}
            <div className="relative hidden lg:block">
              <div
                ref={imageCardRef}
                className="relative ml-auto w-[37vw] aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg"
                style={{ transform: 'rotate(-1deg)' }}
              >
                <img
                  src="/hero_main.jpg"
                  alt="Woman learning English on laptop"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                ref={polaroidRef}
                className="absolute -bottom-8 left-0 w-[30vw]"
              >
                <div className="relative">
                  <div
                    className="polaroid absolute w-[14vw] aspect-square"
                    style={{ transform: 'rotate(-3deg)' }}
                  >
                    <img
                      src="/hero_polaroid_1.jpg"
                      alt="Students collaborating"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="polaroid absolute w-[14vw] aspect-square left-[12vw]"
                    style={{ transform: 'rotate(2deg)' }}
                  >
                    <img
                      src="/hero_polaroid_2.jpg"
                      alt="Writing notes"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-blue/5 rounded-full blur-3xl" />
    </section>
  );
}

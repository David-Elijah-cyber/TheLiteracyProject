import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const languageData: { code: Language; flag: string; tutors: number }[] = [
  { code: 'es', flag: '🇪🇸', tutors: 3 },
  { code: 'ru', flag: '🇷🇺', tutors: 2 },
  { code: 'ko', flag: '🇰🇷', tutors: 2 },
  { code: 'fr', flag: '🇫🇷', tutors: 1 },
  { code: 'uz', flag: '🇺🇿', tutors: 2 },
  { code: 'en', flag: '🇬🇧', tutors: 4 },
];

export default function Languages() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t, getLanguagePath } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 40, scale: 0.98, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSchedule = () => {
    const element = document.querySelector('#schedule');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Get language names from translations based on current language
  const getLanguageName = (code: Language) => {
    const names: Record<Language, Record<Language, string>> = {
      en: { en: 'English Only', es: 'Spanish', ru: 'Russian', ko: 'Korean', fr: 'French', uz: 'Uzbek' },
      es: { en: 'Solo inglés', es: 'Español', ru: 'Ruso', ko: 'Coreano', fr: 'Francés', uz: 'Uzbeko' },
      ru: { en: 'Только английский', es: 'Испанский', ru: 'Русский', ko: 'Корейский', fr: 'Французский', uz: 'Узбекский' },
      ko: { en: '영어만', es: '스페인어', ru: '러시아어', ko: '한국어', fr: '프랑스어', uz: '우즈베크어' },
      fr: { en: 'Anglais seulement', es: 'Espagnol', ru: 'Russe', ko: 'Coréen', fr: 'Français', uz: 'Ouzbek' },
      uz: { en: 'Faqat ingliz tili', es: 'Ispan tili', ru: 'Rus tili', ko: 'Koreys tili', fr: 'Fransuz tili', uz: "O'zbek tili" },
    };
    return names[code]?.[code] || code;
  };

  return (
    <section
      ref={sectionRef}
      id="languages"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        <div ref={headingRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            {t.languages.title}
          </h2>
          <p className="text-text-dark/70 text-lg max-w-2xl mx-auto">
            {t.languages.subtitle}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {languageData.map((lang) => (
            <a
              key={lang.code}
              href={getLanguagePath(lang.code)}
              className="group bg-white rounded-2xl p-6 shadow-paper hover:shadow-paper-lg transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{lang.flag}</span>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-primary-blue mb-1">
                    {getLanguageName(lang.code)}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gold font-medium">
                      {lang.tutors} {lang.tutors > 1 ? t.languages.tutorsAvailablePlural : t.languages.tutorsAvailable}
                    </span>
                    <ArrowRight className="w-4 h-4 text-text-dark/30 group-hover:text-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToSchedule}
            className="inline-flex items-center gap-2 text-primary-blue font-medium hover:text-gold transition-colors"
          >
            {t.languages.notSure}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-blue/5 rounded-full blur-2xl" />
    </section>
  );
}

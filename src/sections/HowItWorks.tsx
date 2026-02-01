import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  learn: BookOpen,
  practice: Users,
  grow: TrendingUp,
};

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.6,
        },
      });

      scrollTl.fromTo(
        headlineRef.current,
        { y: '-30vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: '50vw', scale: 0.96, opacity: 0 },
        { x: 0, scale: 1, opacity: 1, ease: 'none' },
        0.05
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        scrollTl.fromTo(
          cards[0],
          { y: '60vh', rotate: -2, opacity: 0 },
          { y: 0, rotate: 0, opacity: 1, ease: 'none' },
          0.08
        );
        scrollTl.fromTo(
          cards[1],
          { y: '60vh', rotate: -2, opacity: 0 },
          { y: 0, rotate: 0, opacity: 1, ease: 'none' },
          0.12
        );
        scrollTl.fromTo(
          cards[2],
          { y: '60vh', rotate: -2, opacity: 0 },
          { y: 0, rotate: 0, opacity: 1, ease: 'none' },
          0.16
        );
      }

      scrollTl.fromTo(
        headlineRef.current,
        { y: 0, opacity: 1 },
        { y: '-10vh', opacity: 0, ease: 'power2.in' },
        0.7
      );

      scrollTl.fromTo(
        imageRef.current,
        { x: 0, opacity: 1 },
        { x: '18vw', opacity: 0, ease: 'power2.in' },
        0.7
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        scrollTl.fromTo(
          cards,
          { y: 0, opacity: 1 },
          { y: '18vh', opacity: 0, ease: 'power2.in', stagger: 0.02 },
          0.7
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToCurriculum = () => {
    const element = document.querySelector('#curriculum');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const icons = [iconMap.learn, iconMap.practice, iconMap.grow];

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative w-full h-screen bg-primary-blue overflow-hidden z-30"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="navyNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" />
          </filter>
          <rect width="100%" height="100%" filter="url(#navyNoise)" />
        </svg>
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 lg:px-[7vw]">
          <div ref={headlineRef} className="mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {t.howItWorks.title}
            </h2>
            <p className="text-white/70 text-lg max-w-md">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div
            ref={imageRef}
            className="hidden lg:block absolute top-[18vh] right-[7vw] w-[37vw] aspect-[21/9] rounded-xl overflow-hidden"
          >
            <img
              src="/howitworks_image.jpg"
              alt="Online tutoring session"
              className="w-full h-full object-cover"
            />
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {t.howItWorks.steps.map((step, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={step.title}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gold font-serif text-2xl font-bold">
                      0{index + 1}
                    </span>
                    <div className="p-3 bg-gold/20 rounded-full">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <button
              onClick={scrollToCurriculum}
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              {t.howItWorks.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
    </section>
  );
}

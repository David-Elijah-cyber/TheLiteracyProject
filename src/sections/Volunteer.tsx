import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Globe, Monitor, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const iconMap = [Globe, Monitor, Clock];

export default function Volunteer() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: '-12vw', rotate: -2, opacity: 0 },
        {
          x: 0,
          rotate: 0,
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
        contentRef.current,
        { x: '12vw', opacity: 0 },
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

      if (listRef.current) {
        const items = listRef.current.children;
        gsap.fromTo(
          items,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="volunteer"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={imageRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg"
          >
            <img
              src="/volunteer_image.jpg"
              alt="Volunteer team"
              className="w-full h-full object-cover"
            />
          </div>

          <div ref={contentRef} className="lg:pl-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
              {t.volunteer.title}
            </h2>
            <p className="text-text-dark/70 text-lg mb-8 leading-relaxed">
              {t.volunteer.description}
            </p>

            <div ref={listRef} className="space-y-4 mb-8">
              {t.volunteer.requirements.map((req, index) => {
                const Icon = iconMap[index];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-paper"
                  >
                    <div className="p-2 bg-gold/20 rounded-full">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-medium text-primary-blue">{req}</span>
                    <Check className="w-5 h-5 text-green-500 ml-auto flex-shrink-0" />
                  </div>
                );
              })}
            </div>

            <Button
              onClick={() => window.open('https://forms.gle/BAG1XL7SzDtirvDA7', '_blank')}
              className="bg-gold hover:bg-gold/90 text-primary-blue rounded-full px-8 py-6 text-base font-semibold group"
            >
              {t.volunteer.cta}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute top-20 right-20 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
    </section>
  );
}

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Calendar, 
  Pill, 
  Mail, 
  School, 
  Briefcase, 
  HelpCircle 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const iconMap = [Calendar, Pill, Mail, School, Briefcase, HelpCircle];

export default function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
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
        { x: '8vw', scale: 0.98, opacity: 0 },
        {
          x: 0,
          scale: 1,
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

      if (pillsRef.current) {
        const pills = pillsRef.current.children;
        gsap.fromTo(
          pills,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillsRef.current,
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
      id="curriculum"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={contentRef}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-6">
              {t.curriculum.title}
            </h2>
            <p className="text-text-dark/70 text-lg mb-8 leading-relaxed">
              {t.curriculum.description}
            </p>

            <div ref={pillsRef} className="flex flex-wrap gap-3">
              {t.curriculum.topics.map((topic, index) => {
                const Icon = iconMap[index];
                return (
                  <div
                    key={topic}
                    className="inline-flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-paper hover:shadow-paper-lg hover:-translate-y-0.5 transition-all cursor-default"
                  >
                    <Icon className="w-4 h-4 text-gold" />
                    <span className="text-sm font-medium text-primary-blue">{topic}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg"
          >
            <img
              src="/curriculum_image.jpg"
              alt="Learning English for daily life"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-20 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
    </section>
  );
}

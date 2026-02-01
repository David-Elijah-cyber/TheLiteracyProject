import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Board members with correct roles from the provided images
const boardMembers = [
  {
    name: 'Nargiz Muhammadiyeva',
    role: 'Founder',
    languages: ['Uzbek', 'English'],
    description: 'English Tutor for Uzbek-speakers',
    image: '/team/nargiz.jpg',
  },
  {
    name: 'Evie White',
    role: 'Co-Founder',
    languages: ['English'],
    description: 'Lesson Planner',
    image: '/team/evie.jpg',
  },
  {
    name: 'Ailana Yeshmanova',
    role: 'Co-Founder',
    languages: ['Russian', 'Kazakh', 'English'],
    description: 'English Tutor for Russian/Kazakh Speakers',
    image: '/team/ailana.jpg',
  },
  {
    name: 'Camila Garcia',
    role: 'Co-Founder',
    languages: ['Spanish', 'English'],
    description: 'English Tutor for Spanish Speakers',
    image: '/team/camila.jpg',
  },
  {
    name: 'Janny Kang',
    role: 'Co-Founder',
    languages: ['Korean', 'English'],
    description: 'English Tutor for Korean Speakers',
    image: '/team/janny.jpg',
  },
  {
    name: 'Rhaylee White',
    role: 'Social Media Manager',
    languages: ['French', 'English'],
    description: 'Manages Media + French Tutor',
    image: '/team/rhaylee.jpg',
  },
  {
    name: 'Reniyah Sanders',
    role: 'Social Media Manager',
    languages: ['English'],
    description: 'Assists with Managing Media',
    image: '/team/reniyah.jpg',
  },
];

export default function Tutors() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.1,
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

  const scrollToVolunteer = () => {
    const element = document.querySelector('#volunteer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="tutors"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            {t.tutors.title}
          </h2>
          <p className="text-text-dark/70 text-lg max-w-2xl mx-auto">
            {t.tutors.description}
          </p>
        </div>

        {/* Board members grid */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-2xl overflow-hidden shadow-paper hover:shadow-paper-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-gold/20 text-primary-blue text-xs font-semibold rounded-full mb-2">
                  {member.role}
                </span>
                <h3 className="font-serif text-lg font-bold text-primary-blue mb-1">
                  {member.name}
                </h3>
                <p className="text-text-dark/60 text-sm mb-2">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {member.languages.map((lang) => (
                    <span
                      key={lang}
                      className="text-xs text-secondary-blue bg-secondary-blue/10 px-2 py-0.5 rounded"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={scrollToVolunteer}
            variant="outline"
            className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white rounded-full px-8 group"
          >
            {t.tutors.cta}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
    </section>
  );
}

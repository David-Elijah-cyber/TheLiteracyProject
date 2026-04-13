import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
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

      gsap.fromTo(
        accordionRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 75%',
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
      id="faq"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/20 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary-blue" />
            <span className="text-sm font-semibold text-primary-blue">{t.faq.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            {t.faq.title}
          </h2>
          <p className="text-text-dark/70 text-lg">
            {t.faq.subtitle}
          </p>
        </div>

        <div ref={accordionRef} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.questions.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-paper border-none overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-5 text-left hover:no-underline group">
                  <span className="font-semibold text-primary-blue text-lg group-hover:text-gold transition-colors">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 text-text-dark/70 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-text-dark/60 mb-4">{t.faq.moreQuestions}</p>
          <a
            href="mailto:TheLiteracyProject5@gmail.com"
            className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
          >
            TheLiteracyProject5@gmail.com
          </a>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary-blue/5 rounded-full blur-2xl" />
    </section>
  );
}

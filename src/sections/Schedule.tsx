import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Clock, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const scheduleData = [
  { day: 'Saturday', time: '8:00 PM PST', language: 'Uzbek', tutor: 'Nargiz', zoomLink: 'https://meet.google.com/jwp-amod-ezd' },
  { day: 'Sunday', time: '10:00 AM PST', language: 'Spanish', tutor: 'Ana', zoomLink: 'https://meet.google.com/igu-xgtk-rkp' },
  { day: 'Tuesday', time: '6:00 PM PST', language: 'Russian', tutor: 'Dmitri', zoomLink: 'https://meet.google.com/zxy-sakw-tbh' },
  { day: 'Wednesday', time: '7:00 PM PST', language: 'Korean', tutor: 'Hana', zoomLink: 'https://meet.google.com/abc-defg-hij' },
  { day: 'Friday', time: '5:00 PM PST', language: 'French', tutor: 'Camille', zoomLink: 'https://meet.google.com/klm-nopq-rst' },
];

export default function Schedule() {
  const sectionRef = useRef<HTMLElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        tableRef.current,
        { x: '-10vw', opacity: 0 },
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
        { x: '10vw', opacity: 0 },
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
        ctaRef.current,
        { scale: 0.98, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
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
      id="schedule"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-8">
              {t.schedule.title}
            </h2>

            <div
              ref={tableRef}
              className="bg-white rounded-2xl shadow-paper overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary-blue text-white">
                    <tr>
                      <th className="text-left px-4 py-3 text-sm font-medium">{t.schedule.columns.day}</th>
                      <th className="text-left px-4 py-3 text-sm font-medium">{t.schedule.columns.time}</th>
                      <th className="text-left px-4 py-3 text-sm font-medium">{t.schedule.columns.language}</th>
                      <th className="text-left px-4 py-3 text-sm font-medium">{t.schedule.columns.link}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheduleData.map((session, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-4 text-sm font-medium text-primary-blue">
                          {session.day}
                        </td>
                        <td className="px-4 py-4 text-sm text-text-dark/70">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gold" />
                            {session.time}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-text-dark/70">
                          {session.language}
                        </td>
                        <td className="px-4 py-4">
                          <a
                            href={session.zoomLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-gold hover:underline font-medium"
                          >
                            <Video className="w-4 h-4" />
                            {t.schedule.join}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-text-dark/50 mt-4 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {t.schedule.timezone}
            </p>

            <div ref={ctaRef} className="mt-8 flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white rounded-full"
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t.schedule.addToCalendar}
              </Button>
            </div>
          </div>

          <div>
            <div
              ref={imageRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg mb-8"
            >
              <img
                src="/closing_main.jpg"
                alt="Online class session"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-paper">
              <h3 className="font-serif text-xl font-bold text-primary-blue mb-3">
                {t.schedule.questions}
              </h3>
              <a
                href="mailto:TheLiteracyProject5@gmail.com"
                className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
              >
                <Mail className="w-4 h-4" />
                TheLiteracyProject5@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

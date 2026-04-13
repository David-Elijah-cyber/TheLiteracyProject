import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Instagram, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    language: '',
    message: '',
  });
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        collageRef.current,
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
        contentRef.current,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDialog(true);
    setFormData({ name: '', email: '', language: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[7vw]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div ref={collageRef} className="relative">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-2xl overflow-hidden shadow-paper-lg">
              <img
                src="/closing_main.jpg"
                alt="Ready to start"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 lg:left-8">
              <div className="polaroid w-40 lg:w-48 aspect-square" style={{ transform: 'rotate(3deg)' }}>
                <img
                  src="/closing_polaroid.jpg"
                  alt="Learning notes"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div ref={contentRef} className="lg:pl-8 pt-12 lg:pt-0">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
              {t.contact.title}
            </h2>
            <p className="text-text-dark/70 text-lg mb-8">
              {t.contact.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 mb-8">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder={t.contact.form.name}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border-gray-200 focus:border-gold focus:ring-gold"
                  required
                />
                <Input
                  type="email"
                  placeholder={t.contact.form.email}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border-gray-200 focus:border-gold focus:ring-gold"
                  required
                />
              </div>
              <Input
                type="text"
                placeholder={t.contact.form.language}
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-gold focus:ring-gold"
              />
              <Textarea
                placeholder={t.contact.form.message}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl border-gray-200 focus:border-gold focus:ring-gold min-h-[120px]"
                rows={4}
              />
              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-primary-blue rounded-full py-6 text-base font-semibold group"
              >
                {t.contact.form.submit}
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="flex flex-wrap gap-6 text-sm">
              <a
                href="mailto:TheLiteracyProject5@gmail.com"
                className="flex items-center gap-2 text-text-dark/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                TheLiteracyProject5@gmail.com
              </a>
              <a
                href="https://instagram.com/the_literacy_project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-dark/60 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @the_literacy_project
              </a>
              <a
                href="tel:9514281568"
                className="flex items-center gap-2 text-text-dark/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                951-428-1568
              </a>
            </div>

            <p className="mt-8 text-sm text-text-dark/40 font-medium tracking-wide">
              {t.contact.tagline}
            </p>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl text-primary-blue">
              {t.contact.dialog.title}
            </DialogTitle>
            <DialogDescription className="text-text-dark/70">
              {t.contact.dialog.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-4">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <Send className="w-8 h-8 text-gold" />
            </div>
          </div>
          <Button
            onClick={() => setShowDialog(false)}
            className="w-full bg-gold hover:bg-gold/90 text-primary-blue rounded-full"
          >
            {t.contact.dialog.button}
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

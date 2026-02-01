import { Heart, Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = [
    {
      title: t.footer.learn,
      links: [
        { label: t.nav.languages, href: '#languages' },
        { label: t.howItWorks.title, href: '#how-it-works' },
        { label: t.curriculum.title, href: '#curriculum' },
      ],
    },
    {
      title: t.footer.join,
      links: [
        { label: t.nav.schedule, href: '#schedule' },
        { label: t.tutors.cta, href: '#volunteer' },
        { label: t.nav.contact, href: '#contact' },
      ],
    },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full bg-primary-blue text-white py-16 lg:py-20">
      <div className="w-full px-6 lg:px-[7vw]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12">
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4">
              {t.nav.logo}
            </h3>
            <p className="text-white/70 max-w-md mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-gold">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{t.footer.free}</span>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/50">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/60">
              <a
                href="mailto:TheLiteracyProject5@gmail.com"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                TheLiteracyProject5@gmail.com
              </a>
              <a
                href="https://instagram.com/the_literacy_project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @the_literacy_project
              </a>
              <a
                href="tel:9514281568"
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                951-428-1568
              </a>
            </div>

            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} {t.nav.logo}. {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const languages: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'uz', name: 'Uzbek', nativeName: "O'zbek" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentLanguage, setLanguage, t, getLanguagePath } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    // Navigate to the language-specific URL
    const newPath = getLanguagePath(lang);
    window.location.href = newPath;
  };

  const navLinks = [
    { label: t.nav.languages, href: '#languages' },
    { label: t.nav.schedule, href: '#schedule' },
    { label: t.nav.volunteer, href: '#volunteer' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-paper py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href={getLanguagePath(currentLanguage)}
            className="font-serif text-xl lg:text-2xl font-bold text-primary-blue tracking-tight"
          >
            {t.nav.logo}
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-text-dark/70 hover:text-gold transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language selector */}
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4 text-text-dark/50" />
              <select
                value={currentLanguage}
                onChange={(e) => handleLanguageChange(e.target.value as Language)}
                className="text-xs font-medium bg-transparent border-none outline-none text-text-dark/70 cursor-pointer"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.nativeName}
                  </option>
                ))}
              </select>
            </div>

            <Button
              onClick={() => scrollToSection('#contact')}
              className="bg-gold hover:bg-gold/90 text-primary-blue rounded-full px-6 text-sm font-semibold"
            >
              {t.nav.joinClass}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-blue"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-24 px-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-2xl font-serif text-primary-blue text-left"
            >
              {link.label}
            </button>
          ))}

          <div className="mt-8 pt-8 border-t border-primary-blue/10">
            <p className="text-sm text-text-dark/50 mb-4">Select language / Seleccionar idioma</p>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <a
                  key={lang.code}
                  href={getLanguagePath(lang.code)}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLanguageChange(lang.code);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    currentLanguage === lang.code
                      ? 'bg-gold text-primary-blue'
                      : 'bg-primary-blue/10 text-primary-blue'
                  }`}
                >
                  {lang.nativeName}
                </a>
              ))}
            </div>
          </div>

          <Button
            onClick={() => scrollToSection('#contact')}
            className="mt-8 bg-gold hover:bg-gold/90 text-primary-blue rounded-full py-6 text-lg font-semibold"
          >
            {t.nav.joinClass}
          </Button>
        </div>
      </div>
    </>
  );
}

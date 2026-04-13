import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Stethoscope, 
  School, 
  Phone, 
  Briefcase,
  ChevronDown,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const iconMap = [Stethoscope, School, Phone, Briefcase];

// Scenario options for each language
const scenarioOptions: Record<string, string[][]> = {
  en: [
    ['I come for my medicine. It is ready?', 'Hi, I\'m here to pick up my prescription. Can you tell me about any side effects?', 'I need pills. Give me pills.'],
    ['My child good?', 'I want know how my kid doing.', 'I\'d like to schedule a meeting to discuss my child\'s progress. What times are you available?'],
    ['I need see doctor. When?', 'Hello, I\'d like to schedule an appointment with Dr. Smith. Do you have any availability next week?', 'Doctor office? I come tomorrow.'],
    ['I work hard. I need job.', 'I am person. I do work good.', 'I have five years of experience in customer service. I\'m organized, reliable, and I enjoy helping people.'],
  ],
  es: [
    ['Vengo por mi medicina. ¿Está lista?', 'Hola, estoy aquí para recoger mi receta. ¿Puede decirme sobre los efectos secundarios?', 'Necesito pastillas. Dame pastillas.'],
    ['¿Mi hijo está bien?', 'Quiero saber cómo le va a mi hijo.', 'Me gustaría programar una reunión para hablar sobre el progreso de mi hijo. ¿En qué horarios está disponible?'],
    ['Necesito ver al doctor. ¿Cuándo?', 'Hola, me gustaría programar una cita con el Dr. Smith. ¿Tiene disponibilidad la próxima semana?', '¿Oficina del doctor? Vengo mañana.'],
    ['Trabajo duro. Necesito trabajo.', 'Soy persona. Hago buen trabajo.', 'Tengo cinco años de experiencia en servicio al cliente. Soy organizada, confiable y disfruto ayudando a las personas.'],
  ],
  ru: [
    ['Я пришел за лекарством. Оно готово?', 'Здравствуйте, я здесь, чтобы забрать свой рецепт. Можете ли вы рассказать мне о побочных эффектах?', 'Мне нужны таблетки. Дайте мне таблетки.'],
    ['Мой ребенок хорошо?', 'Я хочу знать, как дела у моего ребенка.', 'Я бы хотел назначить встречу, чтобы обсудить прогресс моего ребенка. В какое время вы свободны?'],
    ['Мне нужно к врачу. Когда?', 'Здравствуйте, я бы хотел записаться на прием к доктору Смиту. Есть ли у вас свободное время на следующей неделе?', 'Кабинет врача? Я приду завтра.'],
    ['Я много работаю. Мне нужна работа.', 'Я человек. Я хорошо работаю.', 'У меня пять лет опыта работы в обслуживании клиентов. Я организованная, надежная и люблю помогать людям.'],
  ],
  ko: [
    ['약 받으러 왔어요. 준비됐어요?', '안녕하세요, 처방전을 받으러 왔습니다. 부작용에 대해 알려주실 수 있나요?', '알약이 필요해요. 알약 주세요.'],
    ['우리 아이 잘하나요?', '우리 아이가 어떻게 지내는지 알고 싶어요.', '아이의 진행 상황에 대해 논의할 회의를 잡고 싶습니다. 언제 시간이 되시나요?'],
    ['의사 만나야 해요. 언제요?', '안녕하세요, 스미스 박사와 예약을 잡고 싶습니다. 다음 주에 가능한 시간이 있나요?', '의사실이에요? 내일 갈게요.'],
    ['열심히 일해요. 일이 필요해요.', '저는 사람이에요. 일을 잘해요.', '고객 서비스 분야에서 5년의 경험이 있습니다. 저는 체계적이고 신뢰할 수 있으며 사람들을 돕는 것을 즐깁니다.'],
  ],
  fr: [
    ['Je viens pour mon médicament. Il est prêt?', 'Bonjour, je suis ici pour récupérer mon ordonnance. Pouvez-vous me parler des effets secondaires?', 'J\'ai besoin de pilules. Donnez-moi des pilules.'],
    ['Mon enfant va bien?', 'Je veux savoir comment va mon enfant.', 'J\'aimerais planifier une réunion pour discuter des progrès de mon enfant. À quelles heures êtes-vous disponible?'],
    ['J\'ai besoin de voir le médecin. Quand?', 'Bonjour, j\'aimerais prendre rendez-vous avec le Dr. Smith. Avez-vous des disponibilités la semaine prochaine?', 'Cabinet médical? Je viens demain.'],
    ['Je travaille dur. J\'ai besoin d\'un emploi.', 'Je suis une personne. Je fais du bon travail.', 'J\'ai cinq ans d\'expérience dans le service client. Je suis organisée, fiable et j\'aime aider les gens.'],
  ],
  uz: [
    ['Dori uchun keldim. Tayyormi?', 'Salom, men retseptni olish uchun keldim. Yon ta\'sirlari haqida gapira olasizmi?', 'Menga dori kerak. Menga dori bering.'],
    ['Mening bolam yaxshimi?', 'Bolam qanday ekanligini bilmoqchiman.', 'Farzandimning rivojlanishi haqida gaplashish uchun uchrashuv belgilamoqchiman. Qaysi vaqtda bo\'shsiz?'],
    ['Shifokor ko\'rishi kerak. Qachon?', 'Salom, men Dr. Smith bilan uchrashuv belgilamoqchiman. Keyingi haftada bo\'sh vaqtingiz bormi?', 'Shifokor kabineti? Ertaga kelaman.'],
    ['Men qattiq ishlayman. Menga ish kerak.', 'Men odamman. Men yaxshi ishlayman.', 'Mijozlarga xizmat ko\'rsatish sohasida 5 yillik tajribam bor. Men tartibli, ishonchli va odamlarga yordam berishni yaxshi ko\'raman.'],
  ],
};

export default function Scenarios() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number | null>>({});
  const { t, currentLanguage } = useLanguage();

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
          { y: 36, rotate: 1, opacity: 0 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            duration: 0.7,
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

  const handleOptionSelect = (scenarioId: number, optionIndex: number) => {
    setSelectedOptions((prev) => ({ ...prev, [scenarioId]: optionIndex }));
  };

  const options = scenarioOptions[currentLanguage] || scenarioOptions.en;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-28 bg-cream overflow-hidden"
    >
      <div className="w-full px-6 lg:px-[8vw]">
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-blue mb-4">
            {t.scenarios.title}
          </h2>
          <p className="text-text-dark/70 text-lg">
            {t.scenarios.subtitle}
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {t.scenarios.scenarios.map((scenario, index) => {
            const Icon = iconMap[index];
            const isExpanded = expandedId === index;
            const selectedOption = selectedOptions[index];
            const scenarioOptionsList = options[index];

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-paper hover:shadow-paper-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gold/20 rounded-full">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-blue mb-1">
                      {scenario.title}
                    </h3>
                    <p className="text-text-dark/70 text-sm">{scenario.situation}</p>
                  </div>
                </div>

                <button
                  onClick={() => setExpandedId(isExpanded ? null : index)}
                  className="w-full flex items-center justify-between text-gold font-medium text-sm hover:underline"
                >
                  {isExpanded ? t.scenarios.hideOptions : t.scenarios.tryResponse}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isExpanded ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
                    {(() => {
                      const showResult = selectedOption !== undefined && selectedOption !== null;
                      return (
                        <>
                          {scenarioOptionsList.map((option, optIndex) => {
                            const isSelected = selectedOption === optIndex;
                            const isCorrect = optIndex === 1; // Middle option is always correct

                            return (
                              <button
                                key={optIndex}
                                onClick={() => handleOptionSelect(index, optIndex)}
                                disabled={showResult}
                                className={`w-full text-left p-4 rounded-xl text-sm transition-all ${
                                  showResult
                                    ? isCorrect
                                      ? 'bg-green-50 border border-green-200'
                                      : isSelected
                                      ? 'bg-gold/10 border border-gold/30'
                                      : 'bg-gray-50'
                                    : 'bg-gray-50 hover:bg-gray-100'
                                }`}
                              >
                                <div className="flex items-start gap-3">
                                  {showResult && isCorrect && (
                                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  )}
                                  <span>{option}</span>
                                </div>
                              </button>
                            );
                          })}

                          {showResult && (
                            <p className="text-sm text-text-dark/70 mt-4">
                              {selectedOption === 1
                                ? t.scenarios.greatJob
                                : t.scenarios.goodTry}
                            </p>
                          )}
                        </>
                      );
                    })()}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

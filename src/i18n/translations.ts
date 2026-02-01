export type Language = 'en' | 'es' | 'ru' | 'ko' | 'fr' | 'uz';

export const translations = {
  en: {
    // Navigation
    nav: {
      logo: 'The Literacy Project',
      languages: 'Languages',
      schedule: 'Schedule',
      volunteer: 'Volunteer',
      contact: 'Contact',
      joinClass: 'Join a Class',
    },
    // Hero
    hero: {
      badge: 'Nonprofit · Completely Free',
      headline1: 'Learn English.',
      headline2: 'Build Confidence.',
      headline3: 'Take Charge of Your Health.',
      subheadline: 'Free Zoom classes for immigrant women. Bilingual tutors. Real-life skills.',
      ctaPrimary: 'Join a Class',
      ctaSecondary: 'See the schedule',
    },
    // Preference
    preference: {
      title: 'How do you prefer to learn?',
      subtitle: 'Pick what feels right. You can change your mind anytime.',
      options: [
        {
          title: 'I want to practice real conversations.',
          description: 'Speaking practice with native speakers',
        },
        {
          title: 'I prefer reading and writing first.',
          description: 'Build vocabulary through texts',
        },
        {
          title: 'I need help with pronunciation.',
          description: 'Focus on speaking clearly',
        },
      ],
      helper: 'Your choice helps us match you with the right tutor.',
    },
    // How It Works
    howItWorks: {
      title: 'How It Works',
      subtitle: 'Three simple steps to confident English.',
      steps: [
        { title: 'Learn', description: 'Short lessons built around real-life tasks.' },
        { title: 'Practice', description: 'Speak and write with a bilingual tutor.' },
        { title: 'Grow', description: 'Use your skills at appointments, work, and home.' },
      ],
      cta: 'See the full curriculum',
    },
    // Languages
    languages: {
      title: 'Choose your first language',
      subtitle: 'Our bilingual tutors speak your language. Select yours to get matched with the right support.',
      notSure: 'Not sure? Join an open session',
      tutorsAvailable: 'tutor available',
      tutorsAvailablePlural: 'tutors available',
    },
    // Tutors
    tutors: {
      title: 'Meet the tutors',
      description: 'Our tutors are high school students trained to teach English—and to translate when you need it. They understand the challenges of learning a new language because many have been there themselves.',
      cta: 'Become a tutor',
      speaks: 'speaks',
    },
    // Curriculum
    curriculum: {
      title: 'Built for real life',
      description: 'We focus on the words and situations you use most—appointments, school, work, and home. Our curriculum is designed around practical, everyday conversations that help you navigate life with confidence.',
      topics: [
        'Making appointments',
        'Reading medicine labels',
        'Writing emails',
        'Talking to teachers',
        'Job interviews',
        'Asking for help',
      ],
    },
    // Scenarios
    scenarios: {
      title: 'Practice with confidence scenarios',
      subtitle: 'Read a short situation. Choose what you would say. Get gentle feedback.',
      tryResponse: 'Try a response',
      hideOptions: 'Hide options',
      greatJob: 'Great job! This response is clear and polite.',
      goodTry: 'Good try! The correct answer is more formal and complete.',
      scenarios: [
        {
          title: 'At the pharmacy',
          situation: 'You need to pick up a prescription and ask about side effects.',
        },
        {
          title: "At your child's school",
          situation: "You need to talk to the teacher about your child's progress.",
        },
        {
          title: 'On the phone',
          situation: "You need to make a doctor's appointment over the phone.",
        },
        {
          title: 'At a job interview',
          situation: 'The interviewer asks you to tell them about yourself.',
        },
      ],
    },
    // Schedule
    schedule: {
      title: 'Weekly schedule',
      timezone: 'All times are in Pacific Standard Time (PST)',
      addToCalendar: 'Add to Calendar',
      questions: 'Questions?',
      emailUs: 'Email us at',
      columns: {
        day: 'Day',
        time: 'Time',
        language: 'Language',
        link: 'Link',
      },
      join: 'Join',
    },
    // Volunteer
    volunteer: {
      title: 'Join the team',
      description: "We're looking for bilingual students who want to tutor, translate, or help organize classes. Make a real difference in someone's life while building your own skills.",
      requirements: [
        'Fluent in English + another language',
        'Comfortable with Zoom and email',
        'Able to commit 2–4 hours per week',
      ],
      cta: 'Apply to volunteer',
    },
    // Contact
    contact: {
      title: 'Ready to start?',
      subtitle: "Send us a message. We'll reply within 24 hours with your first steps.",
      form: {
        name: 'Your name',
        email: 'Your email',
        language: 'Your native language',
        message: 'Tell us about your goals...',
        submit: 'Join a Class',
      },
      tagline: 'Free. Friendly. Built for you.',
      dialog: {
        title: 'Thank you!',
        description: "We've received your message and will get back to you within 24 hours with your next steps.",
        button: 'Got it',
      },
    },
    // Footer
    footer: {
      description: 'Empowering immigrant women by strengthening their English skills, giving them confidence, independence, and a stronger voice in their health and everyday lives.',
      free: 'Completely free nonprofit',
      learn: 'Learn',
      join: 'Join',
      copyright: 'All rights reserved.',
    },
  },

  es: {
    nav: {
      logo: 'The Literacy Project',
      languages: 'Idiomas',
      schedule: 'Horario',
      volunteer: 'Ser Voluntario',
      contact: 'Contacto',
      joinClass: 'Unirse a una Clase',
    },
    hero: {
      badge: 'Sin fines de lucro · Completamente gratis',
      headline1: 'Aprende Inglés.',
      headline2: 'Genera Confianza.',
      headline3: 'Toma Control de tu Salud.',
      subheadline: 'Clases gratuitas por Zoom para mujeres inmigrantes. Tutores bilingües. Habilidades para la vida real.',
      ctaPrimary: 'Unirse a una Clase',
      ctaSecondary: 'Ver el horario',
    },
    preference: {
      title: '¿Cómo prefieres aprender?',
      subtitle: 'Elige lo que te parezca correcto. Puedes cambiar de opinión en cualquier momento.',
      options: [
        {
          title: 'Quiero practicar conversaciones reales.',
          description: 'Práctica de conversación con hablantes nativos',
        },
        {
          title: 'Prefiero leer y escribir primero.',
          description: 'Construye vocabulario a través de textos',
        },
        {
          title: 'Necesito ayuda con la pronunciación.',
          description: 'Enfócate en hablar claramente',
        },
      ],
      helper: 'Tu elección nos ayuda a emparejarte con el tutor adecuado.',
    },
    howItWorks: {
      title: 'Cómo Funciona',
      subtitle: 'Tres pasos simples para un inglés con confianza.',
      steps: [
        { title: 'Aprende', description: 'Lecciones cortas basadas en tareas de la vida real.' },
        { title: 'Practica', description: 'Habla y escribe con un tutor bilingüe.' },
        { title: 'Crece', description: 'Usa tus habilidades en citas, trabajo y hogar.' },
      ],
      cta: 'Ver el plan de estudios completo',
    },
    languages: {
      title: 'Elige tu primer idioma',
      subtitle: 'Nuestros tutores bilingües hablan tu idioma. Selecciona el tuyo para obtener la ayuda adecuada.',
      notSure: '¿No estás segura? Únete a una sesión abierta',
      tutorsAvailable: 'tutor disponible',
      tutorsAvailablePlural: 'tutores disponibles',
    },
    tutors: {
      title: 'Conoce a los tutores',
      description: 'Nuestros tutores son estudiantes de secundaria capacitados para enseñar inglés, y para traducir cuando lo necesites. Entienden los desafíos de aprender un nuevo idioma porque muchos han pasado por eso.',
      cta: 'Ser tutor',
      speaks: 'habla',
    },
    curriculum: {
      title: 'Diseñado para la vida real',
      description: 'Nos enfocamos en las palabras y situaciones que más usas: citas, escuela, trabajo y hogar. Nuestro plan de estudios está diseñado alrededor de conversaciones prácticas y cotidianas que te ayudan a navegar la vida con confianza.',
      topics: [
        'Hacer citas',
        'Leer etiquetas de medicinas',
        'Escribir correos electrónicos',
        'Hablar con maestros',
        'Entrevistas de trabajo',
        'Pedir ayuda',
      ],
    },
    scenarios: {
      title: 'Practica con escenarios de confianza',
      subtitle: 'Lee una situación corta. Elige lo que dirías. Recibe retroalimentación amable.',
      tryResponse: 'Probar una respuesta',
      hideOptions: 'Ocultar opciones',
      greatJob: '¡Excelente trabajo! Esta respuesta es clara y cortés.',
      goodTry: '¡Buen intento! La respuesta correcta es más formal y completa.',
      scenarios: [
        {
          title: 'En la farmacia',
          situation: 'Necesitas recoger una receta y preguntar sobre efectos secundarios.',
        },
        {
          title: 'En la escuela de tu hijo',
          situation: 'Necesitas hablar con el maestro sobre el progreso de tu hijo.',
        },
        {
          title: 'Por teléfono',
          situation: 'Necesitas hacer una cita médica por teléfono.',
        },
        {
          title: 'En una entrevista de trabajo',
          situation: 'El entrevistador te pide que hables sobre ti misma.',
        },
      ],
    },
    schedule: {
      title: 'Horario semanal',
      timezone: 'Todos los horarios son en Hora del Pacífico (PST)',
      addToCalendar: 'Agregar al Calendario',
      questions: '¿Preguntas?',
      emailUs: 'Escríbenos a',
      columns: {
        day: 'Día',
        time: 'Hora',
        language: 'Idioma',
        link: 'Enlace',
      },
      join: 'Unirse',
    },
    volunteer: {
      title: 'Únete al equipo',
      description: 'Buscamos estudiantes bilingües que quieran dar tutoría, traducir o ayudar a organizar clases. Haz una diferencia real en la vida de alguien mientras desarrollas tus propias habilidades.',
      requirements: [
        'Fluido en inglés + otro idioma',
        'Cómodo con Zoom y correo electrónico',
        'Puede comprometerse 2–4 horas por semana',
      ],
      cta: 'Aplicar para ser voluntario',
    },
    contact: {
      title: '¿Lista para comenzar?',
      subtitle: 'Envíanos un mensaje. Te responderemos dentro de 24 horas con tus primeros pasos.',
      form: {
        name: 'Tu nombre',
        email: 'Tu correo electrónico',
        language: 'Tu idioma nativo',
        message: 'Cuéntanos sobre tus metas...',
        submit: 'Unirse a una Clase',
      },
      tagline: 'Gratis. Amigable. Hecho para ti.',
      dialog: {
        title: '¡Gracias!',
        description: 'Hemos recibido tu mensaje y te responderemos dentro de 24 horas con tus siguientes pasos.',
        button: 'Entendido',
      },
    },
    footer: {
      description: 'Empoderando a mujeres inmigrantes fortaleciendo sus habilidades en inglés, dándoles confianza, independencia y una voz más fuerte en su salud y vida cotidiana.',
      free: 'Sin fines de lucro completamente gratis',
      learn: 'Aprender',
      join: 'Unirse',
      copyright: 'Todos los derechos reservados.',
    },
  },

  ru: {
    nav: {
      logo: 'The Literacy Project',
      languages: 'Языки',
      schedule: 'Расписание',
      volunteer: 'Волонтерство',
      contact: 'Контакты',
      joinClass: 'Присоединиться к занятию',
    },
    hero: {
      badge: 'Некоммерческая · Полностью бесплатно',
      headline1: 'Выучите английский.',
      headline2: 'Обретите уверенность.',
      headline3: 'Возьмите свое здоровье под контроль.',
      subheadline: 'Бесплатные занятия по Zoom для иммигранток. Двуязычные репетиторы. Навыки для реальной жизни.',
      ctaPrimary: 'Присоединиться к занятию',
      ctaSecondary: 'Посмотреть расписание',
    },
    preference: {
      title: 'Как вы предпочитаете учиться?',
      subtitle: 'Выберите то, что вам подходит. Вы можете изменить свое мнение в любое время.',
      options: [
        {
          title: 'Я хочу практиковать реальные разговоры.',
          description: 'Практика разговорной речи с носителями языка',
        },
        {
          title: 'Я предпочитаю сначала читать и писать.',
          description: 'Развивайте словарный запас через тексты',
        },
        {
          title: 'Мне нужна помощь с произношением.',
          description: 'Сосредоточьтесь на четкой речи',
        },
      ],
      helper: 'Ваш выбор помогает нам подобрать вам подходящего репетитора.',
    },
    howItWorks: {
      title: 'Как это работает',
      subtitle: 'Три простых шага к уверенному английскому.',
      steps: [
        { title: 'Учитесь', description: 'Короткие уроки, основанные на реальных задачах.' },
        { title: 'Практикуйтесь', description: 'Говорите и пишите с двуязычным репетитором.' },
        { title: 'Растите', description: 'Используйте свои навыки на приемах, работе и дома.' },
      ],
      cta: 'Посмотреть полную программу',
    },
    languages: {
      title: 'Выберите свой родной язык',
      subtitle: 'Наши двуязычные репетиторы говорят на вашем языке. Выберите свой, чтобы получить подходящую поддержку.',
      notSure: 'Не уверены? Присоединяйтесь к открытому занятию',
      tutorsAvailable: 'репетитор доступен',
      tutorsAvailablePlural: 'репетитора доступно',
    },
    tutors: {
      title: 'Познакомьтесь с репетиторами',
      description: 'Наши репетиторы — старшеклассники, обученные преподаванию английского и переводу, когда это нужно. Они понимают трудности изучения нового языка, потому что многие сами прошли через это.',
      cta: 'Стать репетитором',
      speaks: 'говорит на',
    },
    curriculum: {
      title: 'Создано для реальной жизни',
      description: 'Мы фокусируемся на словах и ситуациях, которые вы используете чаще всего: приемы, школа, работа и дом. Наша программа разработана вокруг практических повседневных разговоров, которые помогают вам уверенно navigating жизнь.',
      topics: [
        'Запись на прием',
        'Чтение этикеток лекарств',
        'Написание писем',
        'Разговор с учителями',
        'Собеседования',
        'Просьба о помощи',
      ],
    },
    scenarios: {
      title: 'Практикуйтесь с сценариями уверенности',
      subtitle: 'Прочитайте короткую ситуацию. Выберите, что бы вы сказали. Получите мягкую обратную связь.',
      tryResponse: 'Попробовать ответ',
      hideOptions: 'Скрыть варианты',
      greatJob: 'Отличная работа! Этот ответ ясен и вежлив.',
      goodTry: 'Хорошая попытка! Правильный ответ более формальный и полный.',
      scenarios: [
        {
          title: 'В аптеке',
          situation: 'Вам нужно забрать рецепт и спросить о побочных эффектах.',
        },
        {
          title: 'В школе вашего ребенка',
          situation: 'Вам нужно поговорить с учителем о прогрессе вашего ребенка.',
        },
        {
          title: 'По телефону',
          situation: 'Вам нужно записаться на прием к врачу по телефону.',
        },
        {
          title: 'На собеседовании',
          situation: 'Интервьюер просит вас рассказать о себе.',
        },
      ],
    },
    schedule: {
      title: 'Расписание на неделю',
      timezone: 'Все время указано по Тихоокеанскому стандартному времени (PST)',
      addToCalendar: 'Добавить в календарь',
      questions: 'Вопросы?',
      emailUs: 'Напишите нам на',
      columns: {
        day: 'День',
        time: 'Время',
        language: 'Язык',
        link: 'Ссылка',
      },
      join: 'Присоединиться',
    },
    volunteer: {
      title: 'Присоединяйтесь к команде',
      description: 'Мы ищем двуязычных студентов, которые хотят давать репетиторство, переводить или помогать организовывать занятия. Сделайте реальную разницу в чьей-то жизни, развивая свои собственные навыки.',
      requirements: [
        'Свободно владеете английским + другим языком',
        'Умеете работать с Zoom и электронной почтой',
        'Можете уделять 2–4 часа в неделю',
      ],
      cta: 'Подать заявку на волонтерство',
    },
    contact: {
      title: 'Готовы начать?',
      subtitle: 'Отправьте нам сообщение. Мы ответим в течение 24 часов с вашими первыми шагами.',
      form: {
        name: 'Ваше имя',
        email: 'Ваш email',
        language: 'Ваш родной язык',
        message: 'Расскажите нам о ваших целях...',
        submit: 'Присоединиться к занятию',
      },
      tagline: 'Бесплатно. Дружелюбно. Создано для вас.',
      dialog: {
        title: 'Спасибо!',
        description: 'Мы получили ваше сообщение и ответим в течение 24 часов с вашими следующими шагами.',
        button: 'Понятно',
      },
    },
    footer: {
      description: 'Расширение прав и возможностей иммигранток путем укрепления их навыков английского языка, придания им уверенности, независимости и более сильного голоса в их здоровье и повседневной жизни.',
      free: 'Полностью бесплатная некоммерческая организация',
      learn: 'Учиться',
      join: 'Присоединиться',
      copyright: 'Все права защищены.',
    },
  },

  ko: {
    nav: {
      logo: 'The Literacy Project',
      languages: '언어',
      schedule: '일정',
      volunteer: '자원봉사',
      contact: '연락처',
      joinClass: '수업 참여하기',
    },
    hero: {
      badge: '비영리 · 완전히 물',
      headline1: '영어를 배우세요.',
      headline2: '자신감을 키우세요.',
      headline3: '건강을 관리하세요.',
      subheadline: '이민 여성을 위한 물 Zoom 수업. 이중언어 튜터. 실생활 기술.',
      ctaPrimary: '수업 참여하기',
      ctaSecondary: '일정 보기',
    },
    preference: {
      title: '어떻게 배우는 것을 선호하시나요?',
      subtitle: '마음에 드는 것을 선택하세요. 언제든지 마음을 바꿀 수 있어요.',
      options: [
        {
          title: '실제 대화를 연습하고 싶어요.',
          description: '원어민과의 회화 연습',
        },
        {
          title: '먼저 읽고 쓰는 것을 선호해요.',
          description: '텍스트를 통해 어휘 구축',
        },
        {
          title: '발음 도움이 필요해요.',
          description: '명확하게 말하는 데 집중',
        },
      ],
      helper: '귀하의 선택이 적합한 튜터와 매칭하는 데 도움이 됩니다.',
    },
    howItWorks: {
      title: '작동 방식',
      subtitle: '자신감 있는 영어를 위한 세 가지 간단한 단계.',
      steps: [
        { title: '배우기', description: '실생활 과제를 중심으로 한 짧은 수업.' },
        { title: '연습하기', description: '이중언어 튜터와 말하고 쓰기.' },
        { title: '성장하기', description: '약속, 직장, 집에서 기술을 사용하세요.' },
      ],
      cta: '전체 커리큘럼 보기',
    },
    languages: {
      title: '첫 번째 언어를 선택하세요',
      subtitle: '우리의 이중언어 튜터는 귀하의 언어를 구사합니다. 적절한 지원을 받으려면 귀하의 언어를 선택하세요.',
      notSure: '잘 모르겠나요? 공개 세션에 참여하세요',
      tutorsAvailable: '명의 튜터 이용 가능',
      tutorsAvailablePlural: '명의 튜터 이용 가능',
    },
    tutors: {
      title: '튜터 만나기',
      description: '우리의 튜터는 영어를 가르치도록 훈련받은 고등학생들이며, 필요할 때 번역도 도와드립니다. 그들은 새로운 언어를 배우는 어려움을 이해합니다.',
      cta: '튜터 되기',
      speaks: '구사',
    },
    curriculum: {
      title: '실생활을 위해 설계됨',
      description: '우리는 약속, 학교, 직장, 집에서 가장 많이 사용하는 단어와 상황에 중점을 둡니다. 우리의 커리큘럼은 자신감 있게 삶을 navigating하는 데 도움이 되는 실용적인 일상 대화를 중심으로 설계되었습니다.',
      topics: [
        '예약하기',
        '약 라벨 읽기',
        '이메일 쓰기',
        '선생님과 대화하기',
        '면접',
        '도움 요청하기',
      ],
    },
    scenarios: {
      title: '자신감 시나리오로 연습하기',
      subtitle: '짧은 상황을 읽으세요. 무엇이라고 말할지 선택하세요. 부드러운 피드백을 받으세요.',
      tryResponse: '답변 시도하기',
      hideOptions: '옵션 숨기기',
      greatJob: '잘했어요! 이 답변은 명확하고 예의 바릅니다.',
      goodTry: '좋은 시도예요! 정답은 더 공식적이고 완전합니다.',
      scenarios: [
        {
          title: '약국에서',
          situation: '처방전을 받고 부작용에 대해 물어봐야 합니다.',
        },
        {
          title: '아이 학교에서',
          situation: '선생님과 아이의 진행 상황에 대해 이야기해야 합니다.',
        },
        {
          title: '전화로',
          situation: '전화로 의사 예약을 해야 합니다.',
        },
        {
          title: '면접에서',
          situation: '면접관이 자신에 대해 말해달라고 합니다.',
        },
      ],
    },
    schedule: {
      title: '주간 일정',
      timezone: '모든 시간은 태평양 표준시(PST)입니다',
      addToCalendar: '캘린더에 추가',
      questions: '질문이 있으신가요?',
      emailUs: '이메일 본내주세요',
      columns: {
        day: '요일',
        time: '시간',
        language: '언어',
        link: '링크',
      },
      join: '참여하기',
    },
    volunteer: {
      title: '팀에 참여하기',
      description: '과외, 번역 또는 수업 조직을 돕고 싶은 이중언어 학생을 찾고 있습니다. 자신의 기술을 개발하면서 누군가의 삶에 실질적인 변화를 만드세요.',
      requirements: [
        '영어 + 다른 언어 유창',
        'Zoom과 이메일 사용 가능',
        '주당 2-4시간 가능',
      ],
      cta: '자원봉사 지원하기',
    },
    contact: {
      title: '시작할 준비가 되셨나요?',
      subtitle: '메시지를 본내주세요. 24시간 이내에 첫 단계를 안내해 드리겠습니다.',
      form: {
        name: '이름',
        email: '이메일',
        language: '모국어',
        message: '목표에 대해 알려주세요...',
        submit: '수업 참여하기',
      },
      tagline: '물. 친근함. 당신을 위해 만들어졌습니다.',
      dialog: {
        title: '감사합니다!',
        description: '메시지를 받았으며 24시간 이내에 다음 단계를 안내해 드리겠습니다.',
        button: '알겠습니다',
      },
    },
    footer: {
      description: '이민 여성의 영어 실력을 키워주고, 자신감과 독립심을 심어주며, 건강과 일상생활에서 더 큰 목소리를 낼 수 있도록 힘을 실어줍니다.',
      free: '완전히 물 비영리 단체',
      learn: '배우기',
      join: '참여하기',
      copyright: '판권 소유.',
    },
  },

  fr: {
    nav: {
      logo: 'The Literacy Project',
      languages: 'Langues',
      schedule: 'Horaire',
      volunteer: 'Bénévolat',
      contact: 'Contact',
      joinClass: 'Rejoindre un cours',
    },
    hero: {
      badge: 'Non lucratif · Complètement gratuit',
      headline1: 'Apprenez l\'anglais.',
      headline2: 'Développez votre confiance.',
      headline3: 'Prenez soin de votre santé.',
      subheadline: 'Cours gratuits sur Zoom pour les femmes immigrantes. Tuteurs bilingues. Compétences pour la vie réelle.',
      ctaPrimary: 'Rejoindre un cours',
      ctaSecondary: 'Voir l\'horaire',
    },
    preference: {
      title: 'Comment préférez-vous apprendre?',
      subtitle: 'Choisissez ce qui vous convient. Vous pouvez changer d\'avis à tout moment.',
      options: [
        {
          title: 'Je veux pratiquer de vraies conversations.',
          description: 'Pratique de la conversation avec des locuteurs natifs',
        },
        {
          title: 'Je préfère d\'abord lire et écrire.',
          description: 'Développez votre vocabulaire à travers des textes',
        },
        {
          title: 'J\'ai besoin d\'aide avec la prononciation.',
          description: 'Concentrez-vous sur parler clairement',
        },
      ],
      helper: 'Votre choix nous aide à vous associer avec le bon tuteur.',
    },
    howItWorks: {
      title: 'Comment ça marche',
      subtitle: 'Trois étapes simples vers un anglais confiant.',
      steps: [
        { title: 'Apprendre', description: 'Courtes leçons basées sur des tâches de la vie réelle.' },
        { title: 'Pratiquer', description: 'Parlez et écrivez avec un tuteur bilingue.' },
        { title: 'Grandir', description: 'Utilisez vos compétences aux rendez-vous, au travail et à la maison.' },
      ],
      cta: 'Voir le programme complet',
    },
    languages: {
      title: 'Choisissez votre première langue',
      subtitle: 'Nos tuteurs bilingues parlent votre langue. Sélectionnez la vôtre pour obtenir le bon soutien.',
      notSure: 'Pas sûre? Rejoignez une session ouverte',
      tutorsAvailable: 'tuteur disponible',
      tutorsAvailablePlural: 'tuteurs disponibles',
    },
    tutors: {
      title: 'Rencontrez les tuteurs',
      description: 'Nos tuteurs sont des lycéens formés pour enseigner l\'anglais et traduire quand vous en avez besoin. Ils comprennent les défis d\'apprendre une nouvelle langue.',
      cta: 'Devenir tuteur',
      speaks: 'parle',
    },
    curriculum: {
      title: 'Conçu pour la vie réelle',
      description: 'Nous nous concentrons sur les mots et les situations que vous utilisez le plus : rendez-vous, école, travail et maison. Notre programme est conçu autour de conversations pratiques quotidiennes qui vous aident à naviguer la vie avec confiance.',
      topics: [
        'Prendre des rendez-vous',
        'Lire les étiquettes de médicaments',
        'Écrire des emails',
        'Parler aux enseignants',
        'Entretiens d\'embauche',
        'Demander de l\'aide',
      ],
    },
    scenarios: {
      title: 'Pratiquez avec des scénarios de confiance',
      subtitle: 'Lisez une courte situation. Choisissez ce que vous diriez. Recevez des commentaires bienveillants.',
      tryResponse: 'Essayer une réponse',
      hideOptions: 'Masquer les options',
      greatJob: 'Excellent travail! Cette réponse est claire et polie.',
      goodTry: 'Bonne tentative! La bonne réponse est plus formelle et complète.',
      scenarios: [
        {
          title: 'À la pharmacie',
          situation: 'Vous devez récupérer une ordonnance et demander des effets secondaires.',
        },
        {
          title: 'À l\'école de votre enfant',
          situation: 'Vous devez parler à l\'enseignant des progrès de votre enfant.',
        },
        {
          title: 'Au téléphone',
          situation: 'Vous devez prendre un rendez-vous médical par téléphone.',
        },
        {
          title: 'Lors d\'un entretien d\'embauche',
          situation: 'L\'intervieweur vous demande de parler de vous.',
        },
      ],
    },
    schedule: {
      title: 'Horaire hebdomadaire',
      timezone: 'Tous les horaires sont en heure du Pacifique (PST)',
      addToCalendar: 'Ajouter au calendrier',
      questions: 'Des questions?',
      emailUs: 'Écrivez-nous à',
      columns: {
        day: 'Jour',
        time: 'Heure',
        language: 'Langue',
        link: 'Lien',
      },
      join: 'Rejoindre',
    },
    volunteer: {
      title: 'Rejoignez l\'équipe',
      description: 'Nous recherchons des étudiants bilingues qui souhaitent donner des cours particuliers, traduire ou aider à organiser des cours. Faites une vraie différence dans la vie de quelqu\'un tout en développant vos propres compétences.',
      requirements: [
        'Couramment en anglais + une autre langue',
        'À l\'aise avec Zoom et email',
        'Peut s\'engager 2-4 heures par semaine',
      ],
      cta: 'Postuler pour le bénévolat',
    },
    contact: {
      title: 'Prête à commencer?',
      subtitle: 'Envoyez-nous un message. Nous vous répondrons dans les 24 heures avec vos premières étapes.',
      form: {
        name: 'Votre nom',
        email: 'Votre email',
        language: 'Votre langue maternelle',
        message: 'Parlez-nous de vos objectifs...',
        submit: 'Rejoindre un cours',
      },
      tagline: 'Gratuit. Amical. Fait pour vous.',
      dialog: {
        title: 'Merci!',
        description: 'Nous avons reçu votre message et vous répondrons dans les 24 heures avec vos prochaines étapes.',
        button: 'D\'accord',
      },
    },
    footer: {
      description: 'Autonomisation des femmes immigrantes en renforçant leurs compétences en anglais, leur donnant confiance, indépendance et une voix plus forte dans leur santé et leur vie quotidienne.',
      free: 'Organisation à but non lucratif complètement gratuite',
      learn: 'Apprendre',
      join: 'Rejoindre',
      copyright: 'Tous droits réservés.',
    },
  },

  uz: {
    nav: {
      logo: 'The Literacy Project',
      languages: 'Tillar',
      schedule: 'Jadval',
      volunteer: 'Ko\'ngilli',
      contact: 'Aloqa',
      joinClass: 'Darsga qo\'shilish',
    },
    hero: {
      badge: 'Notijorat · To\'liq bepul',
      headline1: 'Ingliz tilini o\'rganing.',
      headline2: 'Ishonch hosil qiling.',
      headline3: 'Salomatligingizni nazorat qiling.',
      subheadline: 'Muhojir ayollar uchun bepul Zoom darslari. Ikki tilli repetitorlar. Haqiqiy hayot ko\'nikmalari.',
      ctaPrimary: 'Darsga qo\'shilish',
      ctaSecondary: 'Jadvalni ko\'rish',
    },
    preference: {
      title: 'Qanday o\'rganishni afzal ko\'rasiz?',
      subtitle: 'O\'zingizga mos keladiganini tanlang. Istagan vaqtingizda fikringizni o\'zgartirishingiz mumkin.',
      options: [
        {
          title: 'Haqiqiy suhbatlarni mashq qilishni xohlayman.',
          description: 'Ona tilida gaplovchilar bilan suhbat mashqi',
        },
        {
          title: 'Avval o\'qish va yozishni afzal ko\'raman.',
          description: 'Matnlar orqali lug\'at boyligini yaratish',
        },
        {
          title: 'Talaffuzda yordam kerak.',
          description: 'Aniq gapirishga e\'tibor qarating',
        },
      ],
      helper: 'Sizning tanlovingiz to\'g\'ri repetitor bilan juftlashtirishga yordam beradi.',
    },
    howItWorks: {
      title: 'Bu qanday ishlaydi',
      subtitle: 'Ishonchli ingliz tiliga uchta oddiy qadam.',
      steps: [
        { title: 'O\'rganing', description: 'Haqiqiy hayot vazifalariga asoslangan qisqa darslar.' },
        { title: 'Mashq qiling', description: 'Ikki tilli repetitor bilan gapiring va yozing.' },
        { title: 'O\'sish', description: 'Ko\'nikmalaringizni uchrashuvlarda, ishda va uyda qo\'llang.' },
      ],
      cta: 'To\'liq o\'quv dasturini ko\'rish',
    },
    languages: {
      title: 'Birinchi tilingizni tanlang',
      subtitle: 'Bizning ikki tilli repetitorlar sizning tilingizda gaplashadi. To\'g\'ri qo\'llab-quvvatlash olish uchun o\'zingiznikini tanlang.',
      notSure: 'Ishonchingiz komil emasmi? Ochiq sessiyaga qo\'shiling',
      tutorsAvailable: 'ta repetitor mavjud',
      tutorsAvailablePlural: 'ta repetitor mavjud',
    },
    tutors: {
      title: 'Repetitorlar bilan tanishing',
      description: 'Bizning repetitorlar ingliz tilini o\'qitishga tayyorlangan o\'rta maktab o\'quvchilari va kerak bo\'lganda tarjima qilishadi. Ular yangi til o\'rganishning qiyinchiliklarini tushunishadi.',
      cta: 'Repetitor bo\'lish',
      speaks: 'gapiradi',
    },
    curriculum: {
      title: 'Haqiqiy hayot uchun yaratilgan',
      description: 'Biz siz eng ko\'p ishlatadigan so\'zlar va vaziyatlarga e\'tibor qaratamiz: uchrashuvlar, maktab, ish va uy. Bizning o\'quv dasturimiz hayotga ishonch bilan navigating qilishga yordam beradigan amaliy kundalik suhbatlar atrofida qurilgan.',
      topics: [
        'Uchrashuvlar belgilash',
        'Dori yorliqlarini o\'qish',
        'Elektron pochta yozish',
        'O\'qituvchilar bilan gaplashish',
        'Ish suhbatlari',
        'Yordam so\'rash',
      ],
    },
    scenarios: {
      title: 'Ishonch senariylari bilan mashq qiling',
      subtitle: 'Qisqa vaziyatni o\'qing. Nima deyishingizni tanlang. Muloyim fikr-mulohaza oling.',
      tryResponse: 'Javobni sinab ko\'rish',
      hideOptions: 'Variantlarni yashirish',
      greatJob: 'Ajoyib ish! Bu javob aniq va muloyim.',
      goodTry: 'Yaxshi urinish! To\'g\'ri javob yanada rasmiy va to\'liq.',
      scenarios: [
        {
          title: 'Dorixonada',
          situation: 'Sizga retseptni olish va yon ta\'sirlari haqida so\'rash kerak.',
        },
        {
          title: 'Farzandingiz maktabida',
          situation: 'O\'qituvchi bilan farzandingizning rivojlanishi haqida gaplashishingiz kerak.',
        },
        {
          title: 'Telefonda',
          situation: 'Telefonda shifokor bilan uchrashuv belgilashingiz kerak.',
        },
        {
          title: 'Ish suhbatida',
          situation: 'Suhbatdan o\'tuvchi sizdan o\'zingiz haqingizda gapirishni so\'raydi.',
        },
      ],
    },
    schedule: {
      title: 'Haftalik jadval',
      timezone: 'Barcha vaqtlar Tinch okeani standart vaqti (PST) bo\'yicha',
      addToCalendar: 'Kalendarga qo\'shish',
      questions: 'Savollaringiz bormi?',
      emailUs: 'Bizga elektron pochta orqali yozing',
      columns: {
        day: 'Kun',
        time: 'Vaqt',
        language: 'Til',
        link: 'Havola',
      },
      join: 'Qo\'shilish',
    },
    volunteer: {
      title: 'Jamoada qo\'shiling',
      description: 'Biz repetitorlik qilishni, tarjima qilishni yoki darslarni tashkil qilishga yordam berishni xohlagan ikki tilli talabalarni qidirmoqdamiz. O\'z mahoratingizni rivojlantirish bilan birga kimningdir hayotida haqiqiy o\'zgarish yarating.',
      requirements: [
        'Ingliz tili + boshqa tilni erkin bilish',
        'Zoom va elektron pochta bilan ishlashga qulay',
        'Haftasiga 2-4 soat ajratish mumkin',
      ],
      cta: 'Ko\'ngilli bo\'lish uchun ariza topshirish',
    },
    contact: {
      title: 'Boshlashga tayyormisiz?',
      subtitle: 'Bizga xabar yuboring. 24 soat ichida birinchi qadamlaringiz bilan javob beramiz.',
      form: {
        name: 'Ismingiz',
        email: 'Elektron pochtangiz',
        language: 'Ona tilingiz',
        message: 'Maqsadlaringiz haqida bizga gapirib bering...',
        submit: 'Darsga qo\'shilish',
      },
      tagline: 'Bepul. Do\'stona. Siz uchun yaratilgan.',
      dialog: {
        title: 'Rahmat!',
        description: 'Xabaringizni qabul qildik va 24 soat ichida keyingi qadamlaringiz bilan javob beramiz.',
        button: 'Tushundim',
      },
    },
    footer: {
      description: 'Muhojir ayollarning ingliz tilidagi ko\'nikmalarini mustahkamlash, ularga ishonch, mustaqillik va salomatlik hamda kundalik hayotlarida kuchliroq ovoz berish orqali kuch berish.',
      free: 'To\'liq bepul notijorat tashkilot',
      learn: 'O\'rganish',
      join: 'Qo\'shilish',
      copyright: 'Barcha huquqlar himoyalangan.',
    },
  },
};

export type Translations = typeof translations.en;

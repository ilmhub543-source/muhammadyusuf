import { Language } from '../types.ts';

export const translations: Record<Language, {
  nav: {
    about: string;
    projects: string;
    skills: string;
    robotics: string;
    pythonLab: string;
    journey: string;
    guestbook: string;
    deployGuide: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title: string;
    highlightName: string;
    subtitle: string;
    tagline: string;
    viewProjects: string;
    openPromptGuide: string;
    statAge: string;
    statAgeLabel: string;
    statExp: string;
    statExpLabel: string;
    statFields: string;
    statFieldsLabel: string;
    statGoal: string;
    statGoalLabel: string;
    instagramFollow: string;
  };
  about: {
    sectionTitle: string;
    sectionSubtitle: string;
    storyParagraph1: string;
    storyParagraph2: string;
    storyParagraph3: string;
    currentFocusTitle: string;
    currentFocusText: string;
    ilmhubBadgeTitle: string;
    ilmhubBadgeText: string;
    cardSchool: string;
    cardSchoolVal: string;
    cardCenter: string;
    cardCenterVal: string;
    cardGoal: string;
    cardGoalVal: string;
    cardInsta: string;
    cardInstaVal: string;
  };
  skills: {
    sectionTitle: string;
    sectionSubtitle: string;
    scratchTitle: string;
    scratchDesc: string;
    roboticsTitle: string;
    roboticsDesc: string;
    androidTitle: string;
    androidDesc: string;
    promptTitle: string;
    promptDesc: string;
    pythonTitle: string;
    pythonDesc: string;
    hardwareTitle: string;
    hardwareDesc: string;
    englishTitle: string;
    englishDesc: string;
    statusMastered: string;
    statusActive: string;
    statusTarget: string;
  };
  roboticsLab: {
    sectionTitle: string;
    sectionSubtitle: string;
    roverStatus: string;
    statusIdle: string;
    statusMoving: string;
    statusScanning: string;
    batteryLevel: string;
    obstacleDistance: string;
    heading: string;
    forward: string;
    backward: string;
    turnLeft: string;
    turnRight: string;
    scanSensor: string;
    soundBeep: string;
    resetRover: string;
    telemetryTitle: string;
    telemetryDesc: string;
    lastActionLog: string;
  };
  pythonLab: {
    sectionTitle: string;
    sectionSubtitle: string;
    editorHeader: string;
    runBtn: string;
    runningBtn: string;
    resetBtn: string;
    consoleOutput: string;
    chooseSnippet: string;
    snippetIntro: string;
    snippetRover: string;
    snippetIlmhub: string;
    snippetAgeDays: string;
    pythonMotivation: string;
  };
  projects: {
    sectionTitle: string;
    sectionSubtitle: string;
    filterAll: string;
    filterScratch: string;
    filterRobotics: string;
    filterAndroid: string;
    filterPrompt: string;
    filterPython: string;
    viewDetails: string;
    closeModal: string;
    technologiesUsed: string;
    keyFeatures: string;
    myLearnings: string;
  };
  journey: {
    sectionTitle: string;
    sectionSubtitle: string;
    year2024Title: string;
    year2024Subtitle: string;
    year2024Desc: string;
    year2025Title: string;
    year2025Subtitle: string;
    year2025Desc: string;
    year2025lateTitle: string;
    year2025lateSubtitle: string;
    year2025lateDesc: string;
    year2026Title: string;
    year2026Subtitle: string;
    year2026Desc: string;
  };
  deployModal: {
    modalTitle: string;
    modalSubtitle: string;
    tabPrompt: string;
    tabGithub: string;
    tabVercel: string;
    tabReadme: string;
    copyPromptBtn: string;
    copied: string;
    promptExplanation: string;
    githubStepsTitle: string;
    vercelStepsTitle: string;
    downloadGuideBtn: string;
  };
  guestbook: {
    sectionTitle: string;
    sectionSubtitle: string;
    inputName: string;
    inputMessage: string;
    submitBtn: string;
    thankYou: string;
    emptyList: string;
    likeCount: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    dedication: string;
    backToTop: string;
  };
}> = {
  uz: {
    nav: {
      about: "Men haqimda",
      projects: "Loyihalar",
      skills: "Ko'nikmalar",
      robotics: "Robot Lab",
      pythonLab: "Python Lab",
      journey: "Ilmhub Yo'li",
      guestbook: "Fikr qoldirish",
      deployGuide: "AI Promt & Deploy",
      contact: "Aloqa",
    },
    hero: {
      kicker: "11 yoshli dasturchi va robototexnik",
      title: "Salom! Men",
      highlightName: "Abdullayev Muhammadyusuf",
      subtitle: "Maktab o'quvchisi, Ilmhubda 2 yildan beri ingliz tili va dasturlashni o'rganmoqdaman. Hozirda Python tilini mukammal o'rganishni boshladim!",
      tagline: "Texnologiyalar, robotlar va aqlli dasturlar orqali kelajakni quramiz.",
      viewProjects: "Loyihalarni ko'rish",
      openPromptGuide: "AI Promt & GitHub / Vercel",
      statAge: "11 yosh",
      statAgeLabel: "Maktab o'quvchisi",
      statExp: "2 yil+",
      statExpLabel: "Ilmhubda ta'lim",
      statFields: "5 ta yo'nalish",
      statFieldsLabel: "Scratch, Robot, Android, AI, Python",
      statGoal: "Python Pro",
      statGoalLabel: "Katta maqsad sari",
      instagramFollow: "Instagramda kuzating",
    },
    about: {
      sectionTitle: "Men haqimda",
      sectionSubtitle: "Yosh dasturchining texnologiyalar olamiga qiziqishi va Ilmhubdagi sarguzashtlari",
      storyParagraph1: "Men Abdullayev Muhammadyusuf, 11 yoshdaman va maktab o'quvchisiman. Texnologiyalarga, kompyuterlarga va robotlarga juda qiziqaman. Bo'sh vaqtimda doim yangi narsalarni o'rganishga va sinab ko'rishga intilaman.",
      storyParagraph2: "2 yildan beri 'Ilmhub' ta'lim markazida ingliz tilini o'rganib, bir vaqtning o'zida dasturlash asoslarini o'zlashtirib kelmoqdaman. Dastlab Scratch orqali o'yinlar fizikasi va blokli mantiqni o'rgandim, keyin robototexnika vositasida sensorlar va motorlar bilan ishlovchi aqlli mashinalarni yasadim.",
      storyParagraph3: "Shuningdek, Android platformasida mobil ilovalar yaratish va zamonaviy AI vositalari uchun samarali Promptlar yozishni sinab ko'rdim. Endi esa eng mashhur dasturlash tillaridan biri — Python tilini o'rganishni boshladim va uni chuqur, mukammal o'zlashtirishni eng katta maqsadim qilib qo'yganman!",
      currentFocusTitle: "Hozirgi bosh maqsad",
      currentFocusText: "Python tili sintaksisi, algoritmlar va sun'iy intellekt kutubxonalarini amaliy loyihalar orqali to'liq o'rganib chiqish.",
      ilmhubBadgeTitle: "Ilmhub o'quvchisi (2 yil)",
      ilmhubBadgeText: "Ingliz tili (so'zlashuv va texnik atamalar) hamda dasturlash intizomi.",
      cardSchool: "Maqomi",
      cardSchoolVal: "Maktab o'quvchisi (11 yosh)",
      cardCenter: "O'quv markazi",
      cardCenterVal: "Ilmhub (2 yillik tajriba)",
      cardGoal: "Yangi marra",
      cardGoalVal: "Pythonni mukammal o'rganish",
      cardInsta: "Instagram",
      cardInstaVal: "@muhammad_571_yusuf",
    },
    skills: {
      sectionTitle: "Bilim va Ko'nikmalar",
      sectionSubtitle: "Nazariya va amaliyot uyg'unlashgan tajribalarim",
      scratchTitle: "Scratch Dasturlash",
      scratchDesc: "Algoritmik tafakkur, 2D o'yinlar fizikasi, qahramonlar animatsiyasi va mantiqiy bloklar.",
      roboticsTitle: "Robototexnika",
      roboticsDesc: "Ultratovushli va infraqizil sensorlar, mikrokontrollerlar, aqlli harakatlanuvchi roverlar.",
      androidTitle: "Android & Mobil",
      androidDesc: "Mobil foydalanuvchi interfeysi (UI), ilova tuzilmasi va interaktiv prototiplash.",
      promptTitle: "Prompt Engineering",
      promptDesc: "Google Gemini, ChatGPT va boshqa sun'iy intellekt modellariga aniq buyruqlar berish.",
      pythonTitle: "Python (Boshlangan)",
      pythonDesc: "O'zgaruvchilar, sikllar, funksiyalar, shart operatorlari va algoritmlarni mukammal o'rganish.",
      hardwareTitle: "Kompyuter Savodxonligi",
      hardwareDesc: "Kompyuter apparat ta'minoti, operatsion tizimlar, fayl boshqaruvi va internet xavfsizligi.",
      englishTitle: "Ingliz Tili (Ilmhub)",
      englishDesc: "2 yillik uzluksiz o'rganish: xalqaro texnik hujjatlar va dasturlash atamalarini tushunish.",
      statusMastered: "Mukammal",
      statusActive: "O'rganilmoqda",
      statusTarget: "Bosh maqsad",
    },
    roboticsLab: {
      sectionTitle: "Virtual Robototexnika Laboratoriyasi",
      sectionSubtitle: "Men o'rgangan robot roverini onlayn boshqarib ko'ring!",
      roverStatus: "Rover Holati",
      statusIdle: "Kutish rejimida (Tayyor)",
      statusMoving: "Harakatlanmoqda...",
      statusScanning: "To'siqlar skanerlanmoqda...",
      batteryLevel: "Batareya quvvati",
      obstacleDistance: "To'siqqacha masofa",
      heading: "Yo'nalish burchagi",
      forward: "Oldinga",
      backward: "Orqaga",
      turnLeft: "Chapga",
      turnRight: "O'ngga",
      scanSensor: "Sensor Scan",
      soundBeep: "Signal (Beep)",
      resetRover: "Roverni qaytarish",
      telemetryTitle: "Sensor Telemetriyasi",
      telemetryDesc: "Ultratovush datchik to'lqinlari va kompas yo'nalishi real vaqtda yangilanadi.",
      lastActionLog: "Oxirgi buyruq",
    },
    pythonLab: {
      sectionTitle: "Python Mini Terminal & Playground",
      sectionSubtitle: "Python dasturlash tilidagi kodlarimni shu yerning o'zida ishga tushiring",
      editorHeader: "Python 3.12 Terminal Console",
      runBtn: "Kodni Ishga Tushirish (Run)",
      runningBtn: "Bajarilmoqda...",
      resetBtn: "Tozalash",
      consoleOutput: "Terminal Natijasi",
      chooseSnippet: "Tayyor kod namunasini tanlang:",
      snippetIntro: "1. Shaxsiy karta & Maqsadlarim",
      snippetRover: "2. Robot Sensor Tekshiruvi",
      snippetIlmhub: "3. Ilmhub 2 Yillik Statistikasi",
      snippetAgeDays: "4. 11 Yoshni Kunga O'girish",
      pythonMotivation: "'Dasturlash — bu faqat kod emas, balki fikrlash san'atidir.' — Muhammadyusuf",
    },
    projects: {
      sectionTitle: "Mening Loyihalarim",
      sectionSubtitle: "Scratch, Robototexnika, Android, Promptlar va Python bo'yicha ishlangan namunalar",
      filterAll: "Barchasi",
      filterScratch: "Scratch",
      filterRobotics: "Robototexnika",
      filterAndroid: "Android",
      filterPrompt: "AI Prompt",
      filterPython: "Python",
      viewDetails: "Batafsil ma'lumot",
      closeModal: "Yopish",
      technologiesUsed: "Texnologiyalar:",
      keyFeatures: "Asosiy imkoniyatlar:",
      myLearnings: "O'rgangan bilimlarim:",
    },
    journey: {
      sectionTitle: "Ilmhub va Rivojlanish Yo'li",
      sectionSubtitle: "2024-yildan bugungacha bo'lgan qiziqarli ta'lim bosqichlari",
      year2024Title: "Ilmhubga Qadam & Asoslar",
      year2024Subtitle: "Kompyuter savodxonligi va Ingliz tili",
      year2024Desc: "Ilmhub ta'lim markazida o'qishni boshladim. Ingliz tilini faol o'rganib, kompyuterning tuzilishi va dastlabki mantiqiy algoritmlarni o'zlashtirdim.",
      year2025Title: "Scratch va Robototexnika",
      year2025Subtitle: "O'yinlar yaratish va Sensorlar",
      year2025Desc: "Scratch muhitida murakkab o'yin mexanikalarini yasadim. Robototexnika kurslarida mikrokontrollerlar, motor drayverlari va datchiklar bilan mustaqil robot mashinalar yig'dim.",
      year2025lateTitle: "Android & Prompt Engineering",
      year2025lateSubtitle: "Mobil interfeys va AI dunyosi",
      year2025lateDesc: "Mobil qurilmalar uchun ilovalar dizaynini tushunib yetdim. Sun'iy intellekt (LLM) modellaridan to'g'ri foydalanish uchun kuchli promtlar yozishni o'rgandim.",
      year2026Title: "Python Davri — Katta Marra",
      year2026Subtitle: "Dasturlashni mukammal egallash",
      year2026Desc: "Ayni paytda Python tilini boshladim. Maqsadim: sintaksis, ma'lumotlar tuzilmalari, backend asoslari va sun'iy intellekt integratsiyalarini professional darajada o'rganish!",
    },
    deployModal: {
      modalTitle: "Google AI Studio Promt & GitHub / Vercel Qo'llanmasi",
      modalSubtitle: "Ushbu vebsaytni GitHub ga yuklash, Vercel ga bepul deploy qilish va Studio promti nusxasi",
      tabPrompt: "Google AI Studio Promt",
      tabGithub: "GitHub Push Qo'llanmasi",
      tabVercel: "Vercel Deploy Qadamlari",
      tabReadme: "README.md Namuna",
      copyPromptBtn: "Promtni Nusxalash",
      copied: "Nusxalandi!",
      promptExplanation: "Ushbu to'liq va professional promt Google AI Studio Build tizimi uchun maxsus ishlab chiqilgan bo'lib, xuddi shu vebsaytni qayta yaratish yoki rivojlantirish imkonini beradi.",
      githubStepsTitle: "GitHub ga loyihani joylash bo'yicha buyruqlar",
      vercelStepsTitle: "Vercel orqali dunyoga bepul e'lon qilish",
      downloadGuideBtn: "Qo'llanmani ko'chirish",
    },
    guestbook: {
      sectionTitle: "Muhammadyusufga Tilaklar",
      sectionSubtitle: "Yosh dasturchiga o'z fikringiz va dalda so'zlaringizni qoldiring!",
      inputName: "Ismingiz:",
      inputMessage: "Xabaringiz yoki tilagingiz:",
      submitBtn: "Fikr qoldirish",
      thankYou: "Tilagingiz uchun katta rahmat!",
      emptyList: "Hali fikrlar yo'q. Birinchi bo'lib yozing!",
      likeCount: "Yoqdi",
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
      builtWith: "Abdullaev Muhammadyusuf — Ilmhub o'quvchisi, 11 yoshli Coder Boy.",
      dedication: "Dasturlash va robototexnika kelajagimiz poydevoridir!",
      backToTop: "Tepaga qaytish",
    },
  },
  uz_cyr: {
    nav: {
      about: "Мен ҳақимда",
      projects: "Лойиҳалар",
      skills: "Кўникмалар",
      robotics: "Робот Лаб",
      pythonLab: "Python Лаб",
      journey: "Илмҳуб Йўли",
      guestbook: "Фикр қолдириш",
      deployGuide: "AI Промт & Deploy",
      contact: "Алоқа",
    },
    hero: {
      kicker: "11 ёшли дастурчи ва робототехник",
      title: "Салом! Мен",
      highlightName: "Абдуллаев Муҳаммадюсуф",
      subtitle: "Мактаб ўқувчиси, Ilmhub'да 2 йилдан бери инглиз тили ва дастурлашни ўрганмоқдаман. Ҳозирда Python тилини мукаммал ўрганишни бошладим!",
      tagline: "Технологиялар, роботлар ва ақлли дастурлар орқали келажакни қурамиз.",
      viewProjects: "Лойиҳаларни кўриш",
      openPromptGuide: "AI Промт & GitHub / Vercel",
      statAge: "11 ёш",
      statAgeLabel: "Мактаб ўқувчиси",
      statExp: "2 йил+",
      statExpLabel: "Ilmhub'да таълим",
      statFields: "5 та йўналиш",
      statFieldsLabel: "Scratch, Робот, Android, AI, Python",
      statGoal: "Python Pro",
      statGoalLabel: "Катта мақсад сари",
      instagramFollow: "Instagram'да кузатинг",
    },
    about: {
      sectionTitle: "Мен ҳақимда",
      sectionSubtitle: "Ёш дастурчининг технологиялар оламига қизиқиши ва Ilmhub'даги саргузаштлари",
      storyParagraph1: "Мен Абдуллаев Муҳаммадюсуф, 11 ёшдаман ва мактаб ўқувчисиман. Технологияларга, компьютерларга ва роботларга жуда қизиқаман. Бўш вақтимда доим янги нарсаларни ўрганишга ва синаб кўришга интиламан.",
      storyParagraph2: "2 йилдан бери 'Ilmhub' таълим марказида инглиз тилини ўрганиб, бир вақтнинг ўзида дастурлаш асосларини ўзлаштириб келмоқдаман. Дастлаб Scratch орқали ўйинлар физикаси ва блокли мантиқни ўргандим, кейин робототехника воситасида сенсорлар ва моторлар билан ишловчи ақлли машиналарни ясадим.",
      storyParagraph3: "Шунингдек, Android платформасида мобиль иловалар яратиш ва замонавий AI воситалари учун самарали Промптлар ёзишни синаб кўрдим. Энди эса энг машҳур дастурлаш тилларидан бири — Python тилини ўрганишни бошладим ва уни чуқур, мукаммал ўзлаштиришни энг катта мақсадим қилиб қўйганман!",
      currentFocusTitle: "Ҳозирги бош мақсад",
      currentFocusText: "Python тили синтаксиси, алгоритмлар ва сунъий интеллект кутубхоналарини амалий лойиҳалар орқали тўлиқ ўрганиб чиқиш.",
      ilmhubBadgeTitle: "Ilmhub ўқувчиси (2 йил)",
      ilmhubBadgeText: "Инглиз тили (сўзлашув ва техник атамалар) ҳамда дастурлаш интизоми.",
      cardSchool: "Мақоми",
      cardSchoolVal: "Мактаб ўқувчиси (11 ёш)",
      cardCenter: "Ўқув маркази",
      cardCenterVal: "Ilmhub (2 йиллик тажриба)",
      cardGoal: "Янги марра",
      cardGoalVal: "Python'ни мукаммал ўрганиш",
      cardInsta: "Instagram",
      cardInstaVal: "@muhammad_571_yusuf",
    },
    skills: {
      sectionTitle: "Билим ва Кўникмалар",
      sectionSubtitle: "Назария ва амалиёт уйғунлашган тажрибаларим",
      scratchTitle: "Scratch Дастурлаш",
      scratchDesc: "Алгоритмик тафаккур, 2D ўйинлар физикаси, қаҳрамонлар анимацияси ва мантиқий блоклар.",
      roboticsTitle: "Робототехника",
      roboticsDesc: "Ультратовушли ва инфрақизил сенсорлар, микроконтроллерлар, ақлли ҳаракатланувчи роверлар.",
      androidTitle: "Android & Мобиль",
      androidDesc: "Мобиль фойдаланувчи интерфейси (UI), илова тузилмаси ва интерактив прототиплаш.",
      promptTitle: "Prompt Engineering",
      promptDesc: "Google Gemini, ChatGPT ва бошқа сунъий интеллект моделларига аниқ буйруқлар бериш.",
      pythonTitle: "Python (Бошланган)",
      pythonDesc: "Ўзгарувчилар, цикллари, функциялар, шарт операторлари ва алгоритмларни мукаммал ўрганиш.",
      hardwareTitle: "Компьютер Саводхонлиги",
      hardwareDesc: "Компьютер аппарат таъминоти, операцион тизимлар, файл бошқаруви ва интернет хавфсизлиги.",
      englishTitle: "Инглиз Тили (Ilmhub)",
      englishDesc: "2 йиллик узлуксиз ўрганиш: халқаро техник ҳужжатлар ва дастурлаш атамаларини тушуниш.",
      statusMastered: "Мукаммал",
      statusActive: "Ўрганилмоқда",
      statusTarget: "Бош мақсад",
    },
    roboticsLab: {
      sectionTitle: "Виртуал Робототехника Лабораторияси",
      sectionSubtitle: "Мен ўрганган робот роверини онлайн бошқариб кўринг!",
      roverStatus: "Ровер Ҳолати",
      statusIdle: "Кутиш режимида (Тайёр)",
      statusMoving: "Ҳаракатланмоқда...",
      statusScanning: "Тўсиқлар сканерланмоқда...",
      batteryLevel: "Батарея қуввати",
      obstacleDistance: "Тўсиққача масофа",
      heading: "Йўналиш бурчаги",
      forward: "Олдинга",
      backward: "Орқага",
      turnLeft: "Чапга",
      turnRight: "Ўнгга",
      scanSensor: "Сенсор Скан",
      soundBeep: "Сигнал (Beep)",
      resetRover: "Роверни қайтариш",
      telemetryTitle: "Сенсор Телеметрияси",
      telemetryDesc: "Ультратовуш датчик тўлқинлари ва компас йўналиши реал вақтда янгиланади.",
      lastActionLog: "Охирги буйруқ",
    },
    pythonLab: {
      sectionTitle: "Python Мини Терминал & Playground",
      sectionSubtitle: "Python дастурлаш тилидаги кодларимни шу ернинг ўзида ишга туширинг",
      editorHeader: "Python 3.12 Terminal Console",
      runBtn: "Кодни Ишга Тушириш (Run)",
      runningBtn: "Бажарилмоқда...",
      resetBtn: "Тозалаш",
      consoleOutput: "Терминал Натижаси",
      chooseSnippet: "Тайёр код намунасини танланг:",
      snippetIntro: "1. Шахсий карта & Мақсадларим",
      snippetRover: "2. Робот Сенсор Текшируви",
      snippetIlmhub: "3. Ilmhub 2 Йиллик Статистикаси",
      snippetAgeDays: "4. 11 Ёшни Кунга Ўгириш",
      pythonMotivation: "'Дастурлаш — бу фақат код эмас, балки фикрлаш санъатидир.' — Муҳаммадюсуф",
    },
    projects: {
      sectionTitle: "Менинг Лойиҳаларим",
      sectionSubtitle: "Scratch, Робототехника, Android, Промтлар ва Python бўйича ишланган намуналар",
      filterAll: "Барчаси",
      filterScratch: "Scratch",
      filterRobotics: "Робототехника",
      filterAndroid: "Android",
      filterPrompt: "AI Промт",
      filterPython: "Python",
      viewDetails: "Батафсил маълумот",
      closeModal: "Ёпиш",
      technologiesUsed: "Технологиялар:",
      keyFeatures: "Асосий имкониятлар:",
      myLearnings: "Ўрганган билимларим:",
    },
    journey: {
      sectionTitle: "Ilmhub ва Ривожланиш Йўли",
      sectionSubtitle: "2024-йилдан бугунгача бўлган қизиқарли таълим босқичлари",
      year2024Title: "Ilmhub'га Қадам & Асослар",
      year2024Subtitle: "Компьютер саводхонлиги ва Инглиз тили",
      year2024Desc: "Ilmhub таълим марказида ўқишни бошладим. Инглиз тилини фаол ўрганиб, компьютернинг тузилиши ва дастлабки мантиқий алгоритмларни ўзлаштирдим.",
      year2025Title: "Scratch ва Робототехника",
      year2025Subtitle: "Ўйинлар яратиш ва Сенсорлар",
      year2025Desc: "Scratch муҳитида мураккаб ўйин механикаларини ясадим. Робототехника курсларида микроконтроллерлар, мотор драйверлари ва датчиклар билан мустақил робот машиналар йиғдим.",
      year2025lateTitle: "Android & Prompt Engineering",
      year2025lateSubtitle: "Мобиль интерфейс ва AI дунёси",
      year2025lateDesc: "Мобиль қурилмалар учун иловалар дизайнини тушуниб етдим. Сунъий интеллект (LLM) моделларидан тўғри фойдаланиш учун кучли промтлар ёзишни ўргандим.",
      year2026Title: "Python Даври — Катта Марра",
      year2026Subtitle: "Дастурлашни мукаммал эгаллаш",
      year2026Desc: "Айни пайтда Python тилини бошладим. Мақсадим: синтаксис, маълумотлар тузилмалари, backend асослари ва сунъий интеллект интеграцияларини профессионал даражада ўрганиш!",
    },
    deployModal: {
      modalTitle: "Google AI Studio Промт & GitHub / Vercel Қўлланмаси",
      modalSubtitle: "Ушбу вебсайтни GitHub'га юклаш, Vercel'га бепул деплой қилиш ва Студио промти нусхаси",
      tabPrompt: "Google AI Studio Промт",
      tabGithub: "GitHub Push Қўлланмаси",
      tabVercel: "Vercel Deploy Қадамлари",
      tabReadme: "README.md Намуна",
      copyPromptBtn: "Промтни Нусхалаш",
      copied: "Нусхаланди!",
      promptExplanation: "Ушбу тўлиқ ва профессионал промт Google AI Studio Build тизими учун махсус ишлаб чиқилган бўлиб, худди шу вебсайтни қайта яратиш ёки ривожлантириш имконини беради.",
      githubStepsTitle: "GitHub'га лойиҳани жойлаш бўйича буйруқлар",
      vercelStepsTitle: "Vercel орқали дунёга бепул эълон қилиш",
      downloadGuideBtn: "Қўлланмани кўчириш",
    },
    guestbook: {
      sectionTitle: "Муҳаммадюсуфга Тилаклар",
      sectionSubtitle: "Ёш дастурчига ўз фикрингиз ва далда сўзларингизни қолдиринг!",
      inputName: "Исмингиз:",
      inputMessage: "Хабарингиз ёки тилагингиз:",
      submitBtn: "Фикр қолдириш",
      thankYou: "Тилагингиз учун катта раҳмат!",
      emptyList: "Ҳали фикрлар йўқ. Биринчи бўлиб ёзинг!",
      likeCount: "Ёқди",
    },
    footer: {
      rights: "Барча ҳуқуқлар ҳимояланган.",
      builtWith: "Абдуллаев Муҳаммадюсуф — Ilmhub ўқувчиси, 11 ёшли Coder Boy.",
      dedication: "Дастурлаш ва робототехника келажагимиз пойдеворидир!",
      backToTop: "Тепага қайтиш",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      projects: "Проекты",
      skills: "Навыки",
      robotics: "Робототехника",
      pythonLab: "Python Lab",
      journey: "Путь в Ilmhub",
      guestbook: "Пожелания",
      deployGuide: "AI Промпт & Деплой",
      contact: "Контакты",
    },
    hero: {
      kicker: "11-летний программист и робототехник",
      title: "Привет! Я",
      highlightName: "Абдуллаев Мухаммадюсуф",
      subtitle: "Школьник, уже 2 года изучаю английский язык и программирование в Ilmhub. Сейчас начал углубленно изучать Python и поставил цель освоить его в совершенстве!",
      tagline: "Создаем будущее с помощью технологий, умных роботов и алгоритмов.",
      viewProjects: "Смотреть проекты",
      openPromptGuide: "AI Промпт & GitHub / Vercel",
      statAge: "11 лет",
      statAgeLabel: "Школьник-программист",
      statExp: "2+ года",
      statExpLabel: "Обучение в Ilmhub",
      statFields: "5 направлений",
      statFieldsLabel: "Scratch, Роботы, Android, AI, Python",
      statGoal: "Python Pro",
      statGoalLabel: "К большой цели",
      instagramFollow: "Подписаться в Instagram",
    },
    about: {
      sectionTitle: "Обо мне",
      sectionSubtitle: "Путь юного разработчика в мире современных IT-технологий и робототехники",
      storyParagraph1: "Меня зовут Абдуллаев Мухаммадюсуф, мне 11 лет, я учусь в школе. С раннего детства я увлечен компьютерами, созданием алгоритмов и робототехникой. В свободное время я постоянно тестирую новые технологии.",
      storyParagraph2: "Вот уже 2 года я занимаюсь в образовательном центре 'Ilmhub', изучая английский язык и основы программирования. Начал с визуального языка Scratch, разрабатывая 2D-игры и анимации, а затем погрузился в робототехнику, создавая мобильных колесных роботов с датчиками.",
      storyParagraph3: "Также я осваивал основы разработки приложений под Android и искусство составления точных промптов (Prompt Engineering) для больших языковых моделей. Сейчас мой главный приоритет — глубокое и всестороннее изучение языка Python!",
      currentFocusTitle: "Главная цель сейчас",
      currentFocusText: "Изучение синтаксиса Python, структур данных, алгоритмов и библиотек искусственного интеллекта на реальных проектах.",
      ilmhubBadgeTitle: "Студент Ilmhub (2 года)",
      ilmhubBadgeText: "Английский язык (разговорный и технический) и культура чистого кода.",
      cardSchool: "Статус",
      cardSchoolVal: "Школьник (11 лет)",
      cardCenter: "Учебный центр",
      cardCenterVal: "Ilmhub (2 года обучения)",
      cardGoal: "Новая вершина",
      cardGoalVal: "Совершенное владение Python",
      cardInsta: "Instagram",
      cardInstaVal: "@muhammad_571_yusuf",
    },
    skills: {
      sectionTitle: "Знания и Навыки",
      sectionSubtitle: "Гармония практического опыта и теоретических основ",
      scratchTitle: "Scratch Программирование",
      scratchDesc: "Алгоритмическое мышление, физика в играх, анимация персонажей и блочная логика.",
      roboticsTitle: "Робототехника",
      roboticsDesc: "Ультразвуковые и инфракрасные датчики, микроконтроллеры, мобильные шасси и обход препятствий.",
      androidTitle: "Android & Мобильные ОС",
      androidDesc: "Понимание структуры мобильных ОС, проектирование пользовательских интерфейсов.",
      promptTitle: "Prompt Engineering",
      promptDesc: "Составление системных и точных запросов к Google Gemini, ChatGPT и LLM для генерации идей.",
      pythonTitle: "Python (Изучается)",
      pythonDesc: "Переменные, ветвления, циклы, функции, модули и алгоритмические задачи.",
      hardwareTitle: "Компьютерная грамотность",
      hardwareDesc: "Архитектура ПК, операционные системы, работа с терминалом и файловыми структурами.",
      englishTitle: "Английский язык (Ilmhub)",
      englishDesc: "2 года непрерывного изучения: чтение технической документации и терминов программирования.",
      statusMastered: "Освоено",
      statusActive: "В процессе",
      statusTarget: "Главная цель",
    },
    roboticsLab: {
      sectionTitle: "Виртуальная Лаборатория Робототехники",
      sectionSubtitle: "Интерактивный симулятор робота-ровера, вдохновленный моими проектами",
      roverStatus: "Статус Ровера",
      statusIdle: "Режим ожидания (Готов)",
      statusMoving: "В движении...",
      statusScanning: "Сканирование препятствий...",
      batteryLevel: "Заряд аккумулятора",
      obstacleDistance: "Дистанция до преграды",
      heading: "Курс ровера",
      forward: "Вперед",
      backward: "Назад",
      turnLeft: "Влево",
      turnRight: "Вправо",
      scanSensor: "Скан сенсора",
      soundBeep: "Звуковой сигнал",
      resetRover: "Сбросить позицию",
      telemetryTitle: "Телеметрия Сенсоров",
      telemetryDesc: "Ультразвуковые волны и электронный компас обновляются в реальном времени.",
      lastActionLog: "Последняя команда",
    },
    pythonLab: {
      sectionTitle: "Python Интерактивный Терминал",
      sectionSubtitle: "Запустите мои примеры кода на Python прямо в браузере",
      editorHeader: "Python 3.12 Terminal Console",
      runBtn: "Запустить код (Run)",
      runningBtn: "Выполняется...",
      resetBtn: "Сброс",
      consoleOutput: "Вывод консоли",
      chooseSnippet: "Выберите готовый фрагмент:",
      snippetIntro: "1. Визитная карточка Мухаммадюсуфа",
      snippetRover: "2. Алгоритм сенсора робота",
      snippetIlmhub: "3. 2 Года учебы в Ilmhub",
      snippetAgeDays: "4. Перевод 11 лет в дни",
      pythonMotivation: "'Программирование — это не просто код, это способность мыслить логично.' — Мухаммадюсуф",
    },
    projects: {
      sectionTitle: "Мои Проекты",
      sectionSubtitle: "Практические работы по Scratch, робототехнике, Android, промптам и Python",
      filterAll: "Все",
      filterScratch: "Scratch",
      filterRobotics: "Робототехника",
      filterAndroid: "Android",
      filterPrompt: "AI Промпты",
      filterPython: "Python",
      viewDetails: "Подробнее",
      closeModal: "Закрыть",
      technologiesUsed: "Технологии:",
      keyFeatures: "Ключевые возможности:",
      myLearnings: "Чему я научился:",
    },
    journey: {
      sectionTitle: "Путь в Ilmhub и Достижения",
      sectionSubtitle: "Хронология развития от первых шагов в 2024 году до настоящих дней",
      year2024Title: "Первый шаг в Ilmhub",
      year2024Subtitle: "Компьютерная грамотность и английский",
      year2024Desc: "Начало обучения в центре Ilmhub. Углубленный английский язык, устройство компьютера и логика алгоритмов.",
      year2025Title: "Scratch и Робототехника",
      year2025Subtitle: "Разработка игр и сборка роботов",
      year2025Desc: "Создание собственных игр в Scratch, изучение датчиков, электромоторов и сборка подвижных роботов на микроконтроллерах.",
      year2025lateTitle: "Android & Prompt Engineering",
      year2025lateSubtitle: "Интерфейсы приложений и ИИ",
      year2025lateDesc: "Знакомство с архитектурой мобильных приложений и составление эффективных промптов для современных нейросетей.",
      year2026Title: "Эра Python — Большая цель",
      year2026Subtitle: "Глубокое изучение программирования",
      year2026Desc: "Старт изучения языка Python с амбициозной целью: освоить синтаксис, алгоритмы и стать профессиональным инженером!",
    },
    deployModal: {
      modalTitle: "Google AI Studio Промпт & Руководство GitHub / Vercel",
      modalSubtitle: "Как выгрузить этот проект на GitHub, бесплатно задеплоить на Vercel и скопировать супер-промпт",
      tabPrompt: "Промпт Google AI Studio",
      tabGithub: "Инструкция GitHub",
      tabVercel: "Деплой на Vercel",
      tabReadme: "Шаблон README.md",
      copyPromptBtn: "Скопировать промпт",
      copied: "Скопировано!",
      promptExplanation: "Этот детальный промпт создан специально для Google AI Studio Build, чтобы сгенерировать данный портфолио-сайт от 'А' до 'Я'.",
      githubStepsTitle: "Команды для публикации в GitHub",
      vercelStepsTitle: "Бесплатная публикация в сети через Vercel",
      downloadGuideBtn: "Скачать руководство",
    },
    guestbook: {
      sectionTitle: "Пожелания Мухаммадюсуфу",
      sectionSubtitle: "Оставьте теплое слово, совет или напутствие юному разработчику!",
      inputName: "Ваше имя:",
      inputMessage: "Ваше сообщение или пожелание:",
      submitBtn: "Отправить пожелание",
      thankYou: "Огромное спасибо за ваши добрые слова!",
      emptyList: "Пока сообщений нет. Станьте первым!",
      likeCount: "Нравится",
    },
    footer: {
      rights: "Все права защищены.",
      builtWith: "Абдуллаев Мухаммадюсуф — студент Ilmhub, 11-летний Coder Boy.",
      dedication: "Программирование и робототехника строят наше завтра!",
      backToTop: "Наверх",
    },
  },
  en: {
    nav: {
      about: "About Me",
      projects: "Projects",
      skills: "Skills",
      robotics: "Robot Lab",
      pythonLab: "Python Lab",
      journey: "Ilmhub Journey",
      guestbook: "Guestbook",
      deployGuide: "AI Prompt & Deploy",
      contact: "Contact",
    },
    hero: {
      kicker: "11-Year-Old Developer & Robotics Builder",
      title: "Hi! I am",
      highlightName: "Abdullaev Muhammadyusuf",
      subtitle: "School student, learning English and programming at Ilmhub for 2 years. I have now started learning Python with the big goal of mastering it thoroughly!",
      tagline: "Building the future through creative code, smart robotics, and algorithms.",
      viewProjects: "View Projects",
      openPromptGuide: "AI Prompt & GitHub / Vercel",
      statAge: "11 Yrs Old",
      statAgeLabel: "School student coder",
      statExp: "2+ Years",
      statExpLabel: "Studying at Ilmhub",
      statFields: "5 Domains",
      statFieldsLabel: "Scratch, Robotics, Android, AI, Python",
      statGoal: "Python Pro",
      statGoalLabel: "Aiming for perfection",
      instagramFollow: "Follow on Instagram",
    },
    about: {
      sectionTitle: "About Me",
      sectionSubtitle: "The exciting journey of a young tech explorer at Ilmhub learning programming and robotics",
      storyParagraph1: "My name is Abdullaev Muhammadyusuf. I am 11 years old and a dedicated school student. I have a huge passion for computers, programming logic, and smart robotics. In my free time, I am always experimenting and building new things.",
      storyParagraph2: "For the past 2 years, I have been studying English and software development fundamentals at the 'Ilmhub' educational center. I began with Scratch, mastering game physics and visual block logic, then advanced into Robotics, building obstacle-avoiding rovers with ultrasonic sensors and motors.",
      storyParagraph3: "I have also explored mobile user experiences on Android and crafted precise Prompt Engineering workflows for modern LLMs. Right now, I have embarked on learning Python, and my primary goal is to master it thoroughly from data structures to real-world applications!",
      currentFocusTitle: "Current Major Goal",
      currentFocusText: "Mastering Python syntax, algorithms, data structures, and AI integrations through hands-on practical projects.",
      ilmhubBadgeTitle: "Ilmhub Student (2 Years)",
      ilmhubBadgeText: "English proficiency (technical & spoken) alongside structured computer science thinking.",
      cardSchool: "Status",
      cardSchoolVal: "School Student (11 yrs old)",
      cardCenter: "Academy",
      cardCenterVal: "Ilmhub (2 years experience)",
      cardGoal: "Next Milestone",
      cardGoalVal: "Master Python thoroughly",
      cardInsta: "Instagram",
      cardInstaVal: "@muhammad_571_yusuf",
    },
    skills: {
      sectionTitle: "Skills & Knowledge",
      sectionSubtitle: "A solid foundation combining hardware, block programming, and text code",
      scratchTitle: "Scratch Programming",
      scratchDesc: "Algorithmic thinking, 2D game physics, sprite animations, and interactive event loops.",
      roboticsTitle: "Robotics & Hardware",
      roboticsDesc: "Ultrasonic & infrared sensors, microcontrollers, motor drivers, and smart rover navigation.",
      androidTitle: "Android & Mobile Tech",
      androidDesc: "Mobile interface fundamentals, touch UX layout, and app prototype structure.",
      promptTitle: "Prompt Engineering",
      promptDesc: "Crafting structured system prompts for Google Gemini and ChatGPT for problem-solving.",
      pythonTitle: "Python (In Progress)",
      pythonDesc: "Variables, loops, conditionals, functions, data structures, and algorithmic logic.",
      hardwareTitle: "Computer Literacy",
      hardwareDesc: "Hardware architecture, operating systems, file systems, and safe internet practices.",
      englishTitle: "English (Ilmhub)",
      englishDesc: "2 years of continuous study: reading technical documentation and coding fluently.",
      statusMastered: "Mastered",
      statusActive: "Learning",
      statusTarget: "Prime Goal",
    },
    roboticsLab: {
      sectionTitle: "Virtual Robotics Lab",
      sectionSubtitle: "Control an interactive simulation of my smart obstacle-detecting rover!",
      roverStatus: "Rover Status",
      statusIdle: "Standby (Ready)",
      statusMoving: "Driving...",
      statusScanning: "Scanning for obstacles...",
      batteryLevel: "Battery Level",
      obstacleDistance: "Obstacle Distance",
      heading: "Compass Heading",
      forward: "Forward",
      backward: "Backward",
      turnLeft: "Turn Left",
      turnRight: "Turn Right",
      scanSensor: "Scan Sensor",
      soundBeep: "Beep Horn",
      resetRover: "Reset Rover",
      telemetryTitle: "Sensor Telemetry",
      telemetryDesc: "Ultrasonic sensor distance feedback and digital compass updated in real-time.",
      lastActionLog: "Last Command",
    },
    pythonLab: {
      sectionTitle: "Python Interactive Playground",
      sectionSubtitle: "Run my Python code examples right inside your browser",
      editorHeader: "Python 3.12 Terminal Console",
      runBtn: "Execute Code (Run)",
      runningBtn: "Running...",
      resetBtn: "Clear Console",
      consoleOutput: "Console Output",
      chooseSnippet: "Choose a code snippet:",
      snippetIntro: "1. Muhammadyusuf Bio & Goals",
      snippetRover: "2. Robot Sensor Logic",
      snippetIlmhub: "3. 2 Years at Ilmhub Stats",
      snippetAgeDays: "4. Convert 11 Years to Days",
      pythonMotivation: "'Programming is not just about writing code; it is the art of logical thinking.' — Muhammadyusuf",
    },
    projects: {
      sectionTitle: "Featured Projects",
      sectionSubtitle: "Hands-on projects across Scratch, Robotics, Android, AI Prompts, and Python",
      filterAll: "All",
      filterScratch: "Scratch",
      filterRobotics: "Robotics",
      filterAndroid: "Android",
      filterPrompt: "AI Prompts",
      filterPython: "Python",
      viewDetails: "View Details",
      closeModal: "Close",
      technologiesUsed: "Tech Stack:",
      keyFeatures: "Key Features:",
      myLearnings: "What I Learned:",
    },
    journey: {
      sectionTitle: "Ilmhub Learning Journey",
      sectionSubtitle: "Milestones from starting in 2024 to mastering Python today",
      year2024Title: "Step into Ilmhub & Basics",
      year2024Subtitle: "Computer Literacy and English",
      year2024Desc: "Joined the Ilmhub academy. Started active English language training and learned computer fundamentals and basic logic.",
      year2025Title: "Scratch & Robotics",
      year2025Subtitle: "Game Development & Sensors",
      year2025Desc: "Created interactive 2D games with Scratch. Assembled robotic rovers with ultrasonic sensors, motors, and microcontrollers.",
      year2025lateTitle: "Android & Prompt Engineering",
      year2025lateSubtitle: "Mobile UI and AI Models",
      year2025lateDesc: "Learned mobile application structure and mastered crafting effective prompts for modern LLMs.",
      year2026Title: "Python Era — Big Ambition",
      year2026Subtitle: "Deep Programming Mastery",
      year2026Desc: "Embarked on Python with the goal of mastering core syntax, data structures, backend logic, and AI integrations!",
    },
    deployModal: {
      modalTitle: "Google AI Studio Prompt & GitHub / Vercel Deploy Guide",
      modalSubtitle: "Step-by-step instructions to push to GitHub, deploy to Vercel, and copy the full AI prompt",
      tabPrompt: "Google AI Studio Prompt",
      tabGithub: "GitHub Push Guide",
      tabVercel: "Vercel Deploy Steps",
      tabReadme: "README.md Template",
      copyPromptBtn: "Copy Master Prompt",
      copied: "Copied!",
      promptExplanation: "This comprehensive, production-grade prompt is tailored for Google AI Studio Build to generate or extend this exact portfolio website.",
      githubStepsTitle: "Terminal commands to push code to GitHub",
      vercelStepsTitle: "Publish live on the web for free using Vercel",
      downloadGuideBtn: "Download Guide",
    },
    guestbook: {
      sectionTitle: "Leave a Note for Muhammadyusuf",
      sectionSubtitle: "Share some encouragement or advice for this 11-year-old coder boy!",
      inputName: "Your Name:",
      inputMessage: "Your message or wish:",
      submitBtn: "Post Note",
      thankYou: "Thank you so much for your kind words!",
      emptyList: "No notes yet. Be the first to leave one!",
      likeCount: "Likes",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Abdullaev Muhammadyusuf — Ilmhub student, 11-year-old Coder Boy.",
      dedication: "Coding and robotics are the foundations of our future!",
      backToTop: "Back to Top",
    },
  },
};

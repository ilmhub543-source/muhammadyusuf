import { ProjectItem } from '../types.ts';

export const projectsList: ProjectItem[] = [
  {
    id: 'scratch-space-defender',
    category: 'scratch',
    titleKey: 'Space Defender 2D',
    descKey: 'Scratch muhitida blokli dasturlash asosida yasalgan fazoviy lazer o\'yini. Ballar to\'plash, to\'siqlar va o\'yinchi hayotlari tizimi bilan ta\'minlangan.',
    fullDescKey: 'Ushbu loyiha Scratch platformasida to\'liq blokli mantiq asosida ishlab chiqilgan. Fazoviy kema klaviatura tugmalari orqali boshqariladi, dushman asteroidlari tasodifiy koordinatalarda paydo bo\'ladi. O\'yinda to\'qnashuv fizikasi, lazer nurlarining vaqtli otilishi va rekord ballar hisobi mavjud.',
    featuresKey: [
      'Klaviatura boshqaruvi va silliq harakat animatsiyasi',
      'Tasodifiy dushmanlar paydo bo\'lish algoritmi (Random spawn)',
      'Ovoz effektlari va fon musiqasi integratsiyasi',
      'Rekordlar jadvali va 3 ta jon tizimi'
    ],
    techStack: ['Scratch 3.0', 'Blokli dasturlash', '2D Fizika', 'Game Design'],
    date: '2025',
    iconName: 'Gamepad2',
    image: '/src/assets/images/showcase_robotics_1790568495563.jpg',
    badgeKey: 'Top Scratch Game'
  },
  {
    id: 'robotics-ultrasonic-rover',
    category: 'robotics',
    titleKey: 'Smart Obstacle-Avoiding Rover',
    descKey: 'Ultratovush datchigi (HC-SR04) va L298N motor drayveri yordamida harakatlanuvchi, to\'siqlarni ko\'rib yo\'lini o\'zgartiruvchi aqlli 4 g\'ildirakli robot.',
    fullDescKey: 'Robototexnika mashg\'ulotlarida yaratilgan ushbu avtonom mashina oldidagi har qanday to\'siqni 20 sm masofadan oldindan sezadi. Agar to\'siq aniqlansa, robot to\'xtaydi, o\'ng va chap tomonni skaner qiladi va bo\'sh yo\'nalishni tanlab harakatini davom ettiradi.',
    featuresKey: [
      'HC-SR04 ultratovush to\'lqinlari orqali masofani aniqlash',
      '4 ta DC reduktorli motor va L298N quvvat moduli',
      'To\'siqdan qochish mantiqiy algoritmi (Obstacle Avoidance)',
      'Avtonom Li-ion batareyali quvvatlanish tizimi'
    ],
    techStack: ['Robotics Kit', 'HC-SR04 Sensor', 'L298N Motor Driver', 'C++ / Block Logic'],
    date: '2025',
    iconName: 'Bot',
    image: '/src/assets/images/showcase_robotics_1790568495563.jpg',
    badgeKey: 'Hardware Project'
  },
  {
    id: 'python-terminal-toolkit',
    category: 'python',
    titleKey: 'Python Console Toolkit & Games',
    descKey: 'Python tilini o\'rganish jarayonida yozilgan interaktiv konsol dasturi: kalkulyator, taxmin qilish o\'yini va shaxsiy ma\'lumotlar tahlilchisi.',
    fullDescKey: 'Python sintaksisi va mantiqiy shartlarini o\'zlashtirish uchun ishlab chiqilgan konsol ilovasi. Unda foydalanuvchidan ma\'lumot qabul qilish (`input`), sikllar (`while`, `for`) orqali takrorlash va xatolarni tekshirish funksiyalari mavjud.',
    featuresKey: [
      'Tasodifiy sonni topish interaktiv o\'yini',
      'Yosh va kun hisoblagich matematik moduli',
      'Toza va tartibli konsol interfeysi',
      'Modulli funksiyalar (`def`) tizimi'
    ],
    techStack: ['Python 3.12', 'CLI', 'Math Module', 'Algorithms'],
    date: '2026',
    iconName: 'Code2',
    image: '/src/assets/images/showcase_python_1790568510060.jpg',
    badgeKey: 'Python Journey'
  },
  {
    id: 'prompt-study-mentor',
    category: 'prompt',
    titleKey: 'AI Study & English Mentor Prompts',
    descKey: 'Maktab darslari, ingliz tili grammatikasi va dasturlashni tez o\'rganish uchun ishlab chiqilgan maxsus tuzilmali tizimli promptlar to\'plami.',
    fullDescKey: 'Google Gemini va LLM modellaridan samarali foydalanish uchun tizimli prompt muhandisligi (Prompt Engineering). Har bir prompt vazifa, kontekst, cheklovlar va misollar bilan boyitilgan bo\'lib, 11 yoshli o\'quvchi uchun eng yaxshi repetitor vazifasini bajaradi.',
    featuresKey: [
      'Ingliz tili dialoglarini mashq qilish uchun rolli promptlar',
      'Murakkab matematik masalalarni oddiy tushuntirish shablonlari',
      'Kod xatolarini tahlil qilish uchun "Junior Debugger" ko\'rsatmasi',
      'Vaqtni rejalashtirish va dars jadvali tuzish buyruqlari'
    ],
    techStack: ['Prompt Engineering', 'Gemini AI', 'Context Framing', 'Role-Playing System'],
    date: '2025',
    iconName: 'Sparkles',
    badgeKey: 'AI Master'
  },
  {
    id: 'scratch-maze-quest',
    category: 'scratch',
    titleKey: 'Maze Runner: Smart Cat',
    descKey: 'Murakkab labirintdan chiqish, kalitlarni yig\'ish va tuzoqlardan qochishga asoslangan 2D Scratch jumboq o\'yini.',
    fullDescKey: 'Ushbu o\'yinda o\'yinchi devorlarga tegmasdan finish bayrog\'iga yetib borishi kerak. Devorga tegilganda o\'yinchi boshlang\'ich nuqtaga qaytadi. O\'yin davomida ochiladigan eshiklar va vaqt hisoblagichi o\'rnatilgan.',
    featuresKey: [
      'Devor to\'qnashuvi (Collision detection) algoritmi',
      'Rangli kalitlar va yopiq eshiklar mexanikasi',
      'Bosqichma-bosqich qiyinlashuvchi darajalar',
      'Interaktiv taymer va qadamlar hisobi'
    ],
    techStack: ['Scratch 3.0', 'Level Design', 'Logic Gates', 'Variables'],
    date: '2025',
    iconName: 'Boxes',
    badgeKey: 'Logic Game'
  },
  {
    id: 'android-student-companion',
    category: 'android',
    titleKey: 'Android Student Companion UI',
    descKey: 'Maktab o\'quvchilari uchun kundalik darslar jadvali, uyga vazifalar va pomodoro dars taymerining mobil konsepti.',
    fullDescKey: 'Android platformasida mobil ilovalar arxitekturasini o\'rganish doirasida ishlab chiqilgan prototip. Katta va qulay tugmalar, oson navigatsiya va dars vaqtlarini eslatuvchi bildirishnomalar konsepsiyasi kiritilgan.',
    featuresKey: [
      'Mobil ekranlar uchun moslashtirilgan toza interfeys',
      'Darslar jadvali va fanlar bo\'yicha vazifalar ro\'yxati',
      '25 daqiqalik Pomodoro diqqat taymeri',
      'Yorqin va tushunarli piktogrammalar'
    ],
    techStack: ['Android Basics', 'Mobile UX', 'Wireframing', 'Student Tools'],
    date: '2025',
    iconName: 'Smartphone',
    badgeKey: 'Mobile Concept'
  },
  {
    id: 'robotics-line-follower',
    category: 'robotics',
    titleKey: 'High-Speed Line Follower',
    descKey: 'Ikki tomonlama infraqizil (IR) sensorlari yordamida qora chiziq bo\'ylab avtomatik buriluvchi tezkor poyga roboti.',
    fullDescKey: 'Traektoriya bo\'ylab harakatlanuvchi robot loyihasi. Chap va o\'ng sensorlar yorug\'lik qaytishini o\'lchaydi: agar chap sensor oq yuzaga chiqsa, chap motor tezlashadi, natijada robot chiziqdan chiqib ketmaydi.',
    featuresKey: [
      'Infraqizil yorug\'lik sensorlari kalibratsiyasi',
      'Differensial burilish boshqaruvi',
      'Tezkor javob berish va barqaror trayektoriya',
      'Sport robototexnikasi talablari'
    ],
    techStack: ['IR Sensors', 'Differential Drive', 'Hardware Tuning', 'PWM Speed Control'],
    date: '2025',
    iconName: 'Cpu',
    badgeKey: 'Racing Bot'
  },
  {
    id: 'python-vocabulary-trainer',
    category: 'python',
    titleKey: 'Ilmhub English-Uzbek Vocab Trainer',
    descKey: 'Ilmhubda o\'rganilgan yangi inglizcha so\'zlarni takrorlash va bilimlarni tekshirish uchun Python lug\'at dasturi.',
    fullDescKey: 'Muhammadyusufning Ilmhubdagi ingliz tili darslarini Python dasturlash amaliyoti bilan bog\'lagan loyihasi. Dastur so\'zlarni tasodifiy tartibda so\'raydi, foydalanuvchi javobini tekshiradi va yakuniy ballni hisoblab beradi.',
    featuresKey: [
      'Lug\'at ma\'lumotlar bazasi (`dict` lug\'at tuzilmasi)',
      'Tasodifiy so\'zlar tanlash algoritmi',
      'To\'g\'ri va noto\'g\'ri javoblar statistikasi',
      'Test natijasini tahlil qiluvchi yakuniy hisobot'
    ],
    techStack: ['Python 3.12', 'Dictionaries', 'Random Module', 'Educational Tech'],
    date: '2026',
    iconName: 'GraduationCap',
    badgeKey: 'Active Learning'
  }
];

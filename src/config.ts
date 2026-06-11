export interface SiteConfig {
  language: string
  siteTitle: string
  siteDescription: string
}

export interface NavigationLink {
  label: string
  href: string
}

export interface NavigationConfig {
  brandName: string
  logoPath?: string
  links: NavigationLink[]
}

export interface ProofStripItem {
  value: string
  label: string
}

export interface ProofStripConfig {
  items: ProofStripItem[]
}

export interface HeroConfig {
  eyebrow: string
  title: string
  leadText: string
  supportingNotes: string[]
}

export interface HeroCard {
  label: string
  image: string
  description: string
}

export interface ManifestoConfig {
  videoPath: string
  text: string
}

export interface FacilityArticle {
  title: string
  paragraphs: string[]
}

export interface FacilityItem {
  slug: string
  name: string
  code: string
  address: string
  status: string
  email: string
  phone: string
  ctaText: string
  ctaHref: string
  image: string
  utcOffset: number
  article: FacilityArticle
}

export interface FacilitiesConfig {
  sectionLabel: string
  detailBackText: string
  detailNotFoundText: string
  detailReturnText: string
  items: FacilityItem[]
}

export interface ObservationConfig {
  sectionLabel: string
  videoPath: string
  statusText: string
  latLabel: string
  lonLabel: string
  initialLat: number
  initialLon: number
}

export interface ArchiveItem {
  src: string
  label: string
}

export interface ArchivesConfig {
  sectionLabel: string
  vaultTitle: string
  closeText: string
  items: ArchiveItem[]
}

export interface FooterConfig {
  copyrightText: string
  statusText: string
}

export interface CompanyStat {
  value: number
  suffix: string
  prefix?: string
  headline: string
  label: string
  decimals?: number
  accent?: 'green' | 'white'
}

export interface CompanyStatsConfig {
  sectionLabel: string
  title: string
  description: string
  items: CompanyStat[]
}

export interface ProductStoryScene {
  title: string
  subtitle: string
  image: string
  audienceTag: string
}

export interface ProductStoryConfig {
  sectionLabel: string
  title: string
  description: string
  ctaText: string
  scenes: ProductStoryScene[]
}

export interface OutcomeItem {
  title: string
  description: string
}

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export interface AboutConfig {
  sectionLabel: string
  title: string
  hook: string
  proof: string
  trustLine: string
  badges: string[]
  outcomes: OutcomeItem[]
  story: string[]
  mission: string
  vision: string
  values: { title: string; description: string }[]
  timeline: TimelineItem[]
}

export interface TechItem {
  title: string
  description: string
  tag: string
}

export interface TechnologyConfig {
  sectionLabel: string
  title: string
  description: string
  items: TechItem[]
}

export interface FinanceHighlight {
  title: string
  metric: string
  description: string
}

export interface FinanceConfig {
  sectionLabel: string
  title: string
  description: string
  highlights: FinanceHighlight[]
}

export interface ContactChannel {
  type: 'phone' | 'telegram' | 'email' | 'instagram'
  label: string
  value: string
  href: string
}

export interface ContactConfig {
  sectionLabel: string
  title: string
  description: string
  channels: ContactChannel[]
  address: string
  hours: string
}

export interface ShowcaseItem {
  label: string
  image: string
  height: number
  url: string
}

export interface ShowcaseConfig {
  sectionLabel: string
  title: string
  description: string
  items: ShowcaseItem[]
}

export interface DemoConfig {
  sectionLabel: string
  title: string
  description: string
  videoPath: string
  poster: string
}

export const siteConfig: SiteConfig = {
  language: "ru",
  siteTitle: "GainTech — CRM для учебных центров",
  siteDescription: "GainTech — комплексная система управления учебными центрами. Финансы, персонал, ученики, расписание, склад и аналитика в одной платформе. Кабинеты для директора, преподавателя и ученика.",
}

export const proofStripConfig: ProofStripConfig = {
  items: [
    { value: "120+", label: "учебных центров" },
    { value: "5.6M UZS", label: "касса на дашборде" },
    { value: "9 модулей", label: "в одной системе" },
    { value: "15 мин", label: "ответ в Telegram" },
  ],
}

export const navigationConfig: NavigationConfig = {
  brandName: "GainTech",
  logoPath: "/images/logo-gaintech.png",
  links: [
    { label: "Как работает", href: "#story" },
    { label: "Модули", href: "/modules" },
    { label: "О нас", href: "#about" },
    { label: "Контакты", href: "#contact" },
  ],
}

export const demoConfig: DemoConfig = {
  sectionLabel: "ДЕМО",
  title: "Интерфейс, который директор узнает с первого взгляда",
  description: "Реальные скриншоты GainTech — тёмная и светлая тема, кабинет директора, преподавателя и ученика.",
  videoPath: "/videos/crm-demo.mp4",
  poster: "/images/panels/panel-dashboard.png",
}

export const productStoryConfig: ProductStoryConfig = {
  sectionLabel: "КАК ЭТО РАБОТАЕТ",
  title: "",
  description: "",
  ctaText: "Обсудить для моего центра",
  scenes: [
    {
      title: "Дашборд директора — касса, долги и зарплаты",
      subtitle: "Общий баланс, задолженность, зарплаты к выплате и прогноз — на одном экране. Финансовая аналитика по неделе, месяцу и году. Список должников с телефонами — без Excel и сводных таблиц.",
      image: "/images/panels/panel-dashboard.png",
      audienceTag: "Для директора",
    },
    {
      title: "Ученики и баланс занятий",
      subtitle: "Вся база с фильтрами по группам, филиалам и статусам. Зелёный — всё ок, оранжевый — заканчивается абонемент, красный — долг. Преподаватель, группа и телефон в одной строке.",
      image: "/images/panels/panel-students.png",
      audienceTag: "Для администратора",
    },
    {
      title: "Расписание без Excel",
      subtitle: "Календарь по дням недели: время, группа, преподаватель и кабинет. Переключение недель, счётчик слотов. Клик на занятие — карточка группы.",
      image: "/images/panels/panel-schedule.png",
      audienceTag: "Для администратора",
    },
    {
      title: "Воронка набора и отчёты",
      subtitle: "Воронка: заявки → зачисление → пробный урок → активные ученики. Статусы заявок в реальном времени. Экспорт в Excel и фильтр по филиалу и периоду.",
      image: "/images/panels/panel-reports.png",
      audienceTag: "Для маркетинга",
    },
  ],
}

export const showcaseConfig: ShowcaseConfig = {
  sectionLabel: "ИНТЕРФЕЙС",
  title: "Тот же экран, что откроете после входа",
  description: "Реальные панели Gain CRM — покажите директору, и он сразу узнает свой будущий рабочий день.",
  items: [
    { label: "Финансы · обзор", image: "/images/panels/dashboard.png", height: 380, url: "/facility/finances" },
    { label: "Категории приходов", image: "/images/panels/finance-income.png", height: 360, url: "/facility/finances" },
    { label: "Аренда по филиалам", image: "/images/panels/finance-expense.png", height: 400, url: "/facility/finances" },
    { label: "Склад · остатки", image: "/images/panels/inventory.png", height: 320, url: "/facility/inventory" },
    { label: "Персонал", image: "/images/panels/personnel.png", height: 340, url: "/facility/personnel" },
    { label: "Ученики", image: "/images/panels/students.png", height: 360, url: "/facility/students" },
    { label: "Группы", image: "/images/panels/groups.png", height: 380, url: "/facility/schedule" },
    { label: "Расписание", image: "/images/panels/schedule.png", height: 340, url: "/facility/schedule" },
    { label: "Отчёты · воронка", image: "/images/panels/reports.png", height: 320, url: "/facility/deals" },
    { label: "Кабинет преподавателя", image: "/images/panels/teacher.png", height: 360, url: "/facility/personnel" },
    { label: "Кабинет ученика", image: "/images/panels/student-home.png", height: 360, url: "/facility/students" },
    { label: "Домашние задания", image: "/images/panels/student-homework.png", height: 340, url: "/facility/students" },
    { label: "Оценки и рейтинг", image: "/images/panels/student-grades.png", height: 360, url: "/facility/students" },
  ],
}

export const heroCardsConfig: HeroCard[] = [
  { label: "Дашборд", image: "/images/panels/panel-dashboard.png", description: "Касса, приход, долги и зарплаты" },
  { label: "Ученики", image: "/images/panels/panel-students.png", description: "Баланс занятий и статусы оплаты" },
  { label: "Расписание", image: "/images/panels/panel-schedule.png", description: "Календарь занятий по неделям" },
  { label: "Отчёты", image: "/images/panels/panel-reports.png", description: "Воронка набора и аналитика" },
]

export const heroConfig: HeroConfig = {
  eyebrow: "CRM для учебных центров · Узбекистан",
  title: "Весь центр — в одном окне. Без Excel и хаоса.",
  leadText: "Финансы, ученики и заявки в одной системе. Директор видит кассу сразу — администратор не теряет лиды.",
  supportingNotes: [
    "Касса, долги и зарплаты — на дашборде в реальном времени",
    "Заявки из Instagram и Telegram — в CRM автоматически",
  ],
}

export const contactConfig: ContactConfig = {
  sectionLabel: "СВЯЗЬ",
  title: "Свяжитесь с нами",
  description: "По запросам и вопросам — пишите в Telegram, звоните или отправьте email. Ответим в рабочее время.",
  channels: [
    { type: "phone", label: "Телефон", value: "+998 88 541 98 89", href: "tel:+998885419889" },
    { type: "telegram", label: "Telegram", value: "@krm_kmb", href: "https://t.me/krm_kmb" },
    { type: "email", label: "Email", value: "gaintech.uz@gmail.uz", href: "mailto:gaintech.uz@gmail.uz" },
    { type: "instagram", label: "Instagram", value: "gaintech.uz", href: "https://instagram.com/gaintech.uz" },
  ],
  address: "Ташкент, Узбекистан",
  hours: "Пн–Сб, 09:00–18:00",
}

export const manifestoConfig: ManifestoConfig = {
  videoPath: "/videos/crm-demo.mp4",
  text: "Gain CRM создана для владельцев учебных центров, которые хотят видеть полную картину своего бизнеса в одном окне. Мы объединили финансовый учет, управление персоналом, базу учеников, расписание занятий, складской учет и CRM-процессы в единой экосистеме. Каждому клиенту прикреплен персональный менеджер по развитию бизнеса, который анализирует показатели и помогает принимать решения для роста. Интеграция с Instagram и Telegram позволяет собирать лиды напрямую из социальных сетей.",
}

export const facilitiesConfig: FacilitiesConfig = {
  sectionLabel: "МОДУЛИ",
  detailBackText: "← К МОДУЛЯМ",
  detailNotFoundText: "МОДУЛЬ НЕ НАЙДЕН",
  detailReturnText: "ВЕРНУТЬСЯ К МОДУЛЯМ",
  items: [
    {
      slug: "finances",
      name: "ФИНАНСЫ",
      code: "FIN-01",
      address: "Учет доходов, расходов, зарплат и аренды",
      status: "АКТИВЕН",
      email: "finance@gaincrm.uz",
      phone: "+998 90 000 00 01",
      ctaText: "ПОДРОБНЕЕ",
      ctaHref: "#",
      image: "/images/panels/panel-finance.png",
      utcOffset: 5,
      article: {
        title: "Финансовый модуль",
        paragraphs: [
          "Полный контроль над финансами учебного центра. Модуль включает учет касс, категории приходов и расходов, расчет зарплат персонала, управление арендой помещений с привязкой к карте и учет маркетинговых затрат.",
          "Автоматическая генерация финансовых отчетов: прибыль и убытки, движение средств, задолженности учеников. Все данные доступны в реальном времени на дашборде.",
          "Поддержка многовалютности, фильтрация по филиалам и датам, экспорт данных в Excel для бухгалтерии.",
        ],
      },
    },
    {
      slug: "personnel",
      name: "ПЕРСОНАЛ",
      code: "HR-02",
      address: "Управление сотрудниками и ролями",
      status: "АКТИВЕН",
      email: "hr@gaincrm.uz",
      phone: "+998 90 000 00 02",
      ctaText: "ПОДРОБНЕЕ",
      ctaHref: "#",
      image: "/images/panels/panel-personnel.png",
      utcOffset: 5,
      article: {
        title: "Управление персоналом",
        paragraphs: [
          "Учет всех сотрудников учебного центра: преподавателей, администраторов, директоров и менеджеров. Гибкая система ролей и прав доступа позволяет настраивать видимость разделов для каждой должности.",
          "Расчет зарплат по трем типам: фиксированная сумма, процент от дохода и почасовая оплата. Автоматические напоминания о выплатах.",
          "Профили сотрудников с фото, контактами, предметами и историей активности в системе.",
        ],
      },
    },
    {
      slug: "students",
      name: "УЧЕНИКИ",
      code: "STU-03",
      address: "База учеников, группы, расписание",
      status: "АКТИВЕН",
      email: "students@gaincrm.uz",
      phone: "+998 90 000 00 03",
      ctaText: "ПОДРОБНЕЕ",
      ctaHref: "#",
      image: "/images/panels/panel-students.png",
      utcOffset: 5,
      article: {
        title: "Управление учениками",
        paragraphs: [
          "Полная база учеников с фильтрами по статусам: активные, не на курсе, неактивные. Быстрый поиск по ФИО, группе или телефону.",
          "Создание учебных групп по предметам (Python, JavaScript и др.), назначение преподавателей и кабинетов. Автоматическое формирование расписания с учетом загрузки аудиторий.",
          "Контроль оплаты: баланс каждого ученика, оставшиеся занятия, уроки в месяц. Автоматические уведомления о задолженностях.",
        ],
      },
    },
    {
      slug: "inventory",
      name: "СКЛАД",
      code: "INV-04",
      address: "Учет товаров, инвентаризация, поставки",
      status: "АКТИВЕН",
      email: "inventory@gaincrm.uz",
      phone: "+998 90 000 00 04",
      ctaText: "ПОДРОБНЕЕ",
      ctaHref: "#",
      image: "/images/panels/panel-inventory.png",
      utcOffset: 5,
      article: {
        title: "Складской учет",
        paragraphs: [
          "Управление запасами учебного центра: учебные материалы, канцелярия, оборудование. Отслеживание остатков по филиалам с минимальными порогами.",
          "Инвентаризация с автоматическим списанием, приходы от поставщиков с документооборотом. Импорт и экспорт данных в Excel.",
          "Уведомления о низких остатках, история движения товаров, категоризация для удобного учета.",
        ],
      },
    },
    {
      slug: "deals",
      name: "СДЕЛКИ",
      code: "CRM-05",
      address: "CRM: лиды, продажи, воронка",
      status: "АКТИВЕН",
      email: "sales@gaincrm.uz",
      phone: "+998 90 000 00 05",
      ctaText: "ПОДРОБНЕЕ",
      ctaHref: "#",
      image: "/images/panels/panel-reports.png",
      utcOffset: 5,
      article: {
        title: "CRM и сделки",
        paragraphs: [
          "Воронка продаж для учебного центра: от новой заявки до закрытия сделки. Стадии: Новые, Контакт, Предложение, Выиграно, Потеряно.",
          "Интеграция с Instagram и Telegram для автоматического сбора лидов. Все заявки попадают в CRM без ручного ввода.",
          "Аналитика по менеджерам, конверсии, источникам лидов. Прогноз выручки на основе активных сделок.",
        ],
      },
    },
    {
      slug: "schedule",
      name: "РАСПИСАНИЕ",
      code: "SCH-06",
      address: "Календарь, занятость, группы",
      status: "АКТИВЕН",
      email: "schedule@gaincrm.uz",
      phone: "+998 90 000 00 06",
      ctaText: "ПОДРОБНЕЕ",
      ctaHref: "#",
      image: "/images/panels/panel-schedule.png",
      utcOffset: 5,
      article: {
        title: "Расписание и группы",
        paragraphs: [
          "Визуальное расписание занятий на неделю с цветовой кодировкой групп. Быстрая проверка загрузки кабинетов в любое время.",
          "Создание групп с указанием предмета, преподавателя, кабинета, дней недели и времени. Автоматический расчет стоимости курса.",
          "Учет посещаемости, прогулов и заморозок. Уведомления ученикам и преподавателям о занятиях.",
        ],
      },
    },
  ],
}

export const observationConfig: ObservationConfig = {
  sectionLabel: "[ ЖИВОЕ ДЕМО ]",
  videoPath: "",
  statusText: "Система онлайн — доступна для тестирования",
  latLabel: "Версия",
  lonLabel: "Статус",
  initialLat: 2.1,
  initialLon: 41.3,
}

export const archivesConfig: ArchivesConfig = {
  sectionLabel: "[ ВОЗМОЖНОСТИ ]",
  vaultTitle: "Записаться на консультацию",
  closeText: "Закрыть",
  items: [
    {
      src: "/images/archive-1.png",
      label: "Категории приходов и расходов",
    },
    {
      src: "/images/archive-2.png",
      label: "Панель преподавателя",
    },
    {
      src: "/images/archive-3.png",
      label: "Личный кабинет ученика",
    },
    {
      src: "/images/archive-4.png",
      label: "Оценки и рейтинг группы",
    },
  ],
}

export const footerConfig: FooterConfig = {
  copyrightText: "© 2025 GAIN CRM. Все права защищены.",
  statusText: "Система активна — поддержка 24/7",
}

export const companyStatsConfig: CompanyStatsConfig = {
  sectionLabel: "ПОЧЕМУ НАМ ДОВЕРЯЮТ",
  title: "Цифры, которые снимают вопрос «а вы точно работаете?»",
  description: "Живые клиенты, реальные обороты и поддержка, которая отвечает за минуты — не на словах.",
  items: [
    {
      headline: "Уже в работе",
      value: 120,
      suffix: "+",
      label: "учебных центров ведут бизнес в Gain CRM",
      accent: "green",
    },
    {
      headline: "Оборот в системе",
      value: 2.4,
      suffix: " млрд",
      label: "UZS прошло через платформу — деньги, не слайды",
      decimals: 1,
    },
    {
      headline: "Стабильность",
      value: 99.9,
      suffix: "%",
      label: "uptime — система доступна, когда центр открыт",
      decimals: 1,
    },
    {
      headline: "Живая поддержка",
      value: 15,
      suffix: " мин",
      label: "в среднем до ответа — пишите в Telegram, не в тикет",
    },
  ],
}

export const aboutConfig: AboutConfig = {
  sectionLabel: "О КОМПАНИИ",
  title: "Сделано директорами центров, а не «ещё одной IT-компанией»",
  hook: "Мы начинали с боли: финансы в таблицах, ученики в чатах, расписание на бумаге. Gain CRM — ответ на вопрос «как управлять центром, когда филиалов уже два, а головы одна».",
  proof: "Команда — разработчики и бывшие директора учебных центров. Каждому клиенту — менеджер, который знает EdTech в Узбекистане, а не читает скрипт.",
  trustLine: "С 2023 года · Ташкент · 120+ центров на платформе",
  badges: ["Telegram-интеграция", "Instagram-лиды", "Мультифилиальность"],
  outcomes: [
    {
      title: "Меньше рутины — больше контроля",
      description: "Расписание, оплаты, зарплаты и склад в одном месте — не пять программ и не десять чатов.",
    },
    {
      title: "Финансы, которым можно верить",
      description: "Каждая операция с датой и комментарием — как в настоящей кассе, не в таблице.",
    },
  ],
  story: [
    "Gain CRM родилась в 2023 году в Ташкенте — из реальной боли владельцев учебных центров. Финансы в Excel, ученики в WhatsApp, расписание на бумаге. Мы видели, как директора тратят 60% времени на рутину вместо развития бизнеса.",
    "Наша команда — разработчики, аналитики и бывшие директора учебных центров. Мы не делаем «ещё одну CRM». Мы строим операционную систему для образовательного бизнеса — с финансовым ядром, технической надёжностью и человеческой поддержкой.",
    "Сегодня Gain CRM помогает сотням центров по всему Узбекистану управлять выручкой, персоналом и ростом из единого дашборда. Каждому клиенту — персональный менеджер, который знает специфику EdTech-рынка.",
  ],
  mission: "Дать каждому учебному центру инструменты уровня крупной сети — без сложности и без бюрократии.",
  vision: "Стать стандартом управления образовательным бизнесом в Центральной Азии к 2028 году.",
  values: [
    { title: "Прозрачность", description: "Каждая цифра в системе — проверяемая. Никаких чёрных ящиков в финансах." },
    { title: "Инженерная честность", description: "Строим надёжную архитектуру, а не маркетинговые обещания." },
    { title: "Партнёрство", description: "Растём вместе с клиентами. Ваш успех — наш KPI." },
  ],
  timeline: [
    { year: "2023", title: "Основание", description: "Запуск MVP для 5 пилотных центров в Ташкенте" },
    { year: "2024", title: "Масштабирование", description: "50+ клиентов, модули CRM и склада, интеграция Telegram" },
    { year: "2025", title: "Платформа 2.0", description: "120+ центров, Instagram-интеграция, финансовая аналитика v2" },
    { year: "2026", title: "Регион", description: "Выход на рынки СНГ, API для партнёров" },
  ],
}

export const technologyConfig: TechnologyConfig = {
  sectionLabel: "ТЕХНОЛОГИИ",
  title: "Инженерная платформа enterprise-уровня",
  description: "Микросервисная архитектура, шифрование данных, real-time аналитика и 99.9% uptime — без компромиссов.",
  items: [
    { title: "Real-time дашборды", description: "WebSocket-синхронизация финансовых показателей без перезагрузки страницы", tag: "LIVE" },
    { title: "Финансовое ядро", description: "Двойная запись транзакций, аудит-лог каждой операции, экспорт в 1С/Excel", tag: "FIN" },
    { title: "RBAC & безопасность", description: "Ролевая модель доступа, шифрование AES-256, резервное копирование каждые 6 часов", tag: "SEC" },
    { title: "API & интеграции", description: "REST API, webhooks, нативные коннекторы Instagram, Telegram, SMS-шлюзы", tag: "API" },
    { title: "Мультифилиальность", description: "Единая база с изоляцией данных по филиалам и консолидированной отчётностью", tag: "SCALE" },
    { title: "ML-прогнозы", description: "Прогноз выручки, churn-анализ учеников, рекомендации по загрузке групп", tag: "AI" },
  ],
}

export const financeConfig: FinanceConfig = {
  sectionLabel: "ФИНАНСОВАЯ МОДЕЛЬ",
  title: "Полный контроль над деньгами центра",
  description: "Gain CRM — это не просто CRM. Это финансовая операционная система с P&L, cashflow, зарплатами и прогнозами в реальном времени.",
  highlights: [
    { title: "P&L в реальном времени", metric: "Δ 0 сек", description: "Прибыль и убытки обновляются с каждой транзакцией — касса, зарплата, аренда, маркетинг" },
    { title: "Контроль дебиторки", metric: "−38%", description: "Среднее снижение просроченных оплат учеников после внедрения автоматических напоминаний" },
    { title: "ROI клиентов", metric: "4.2x", description: "Средний возврат инвестиций в подписку за первые 6 месяцев использования" },
    { title: "Точность отчётов", metric: "99.7%", description: "Сверка с бухгалтерией клиентов — менее 0.3% расхождений по итогам квартала" },
  ],
}

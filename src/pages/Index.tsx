import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/35975ce9-5665-4a18-9f7b-213ae3f6de2a/files/00806214-cd8f-45b6-a712-e73841a17d96.jpg";
const GYM_IMG = "https://cdn.poehali.dev/projects/35975ce9-5665-4a18-9f7b-213ae3f6de2a/files/8438f6c3-509f-4643-9756-fb4a56a25e62.jpg";
const MARKET_IMG = "https://cdn.poehali.dev/projects/35975ce9-5665-4a18-9f7b-213ae3f6de2a/files/6e881e96-4821-40b3-a2a3-ba9643411fa4.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная", icon: "Home" },
  { id: "workouts", label: "Тренировки", icon: "Dumbbell" },
  { id: "tickets", label: "Билеты", icon: "Ticket" },
  { id: "marketplace", label: "Маркетплейс", icon: "ShoppingBag" },
  { id: "consultations", label: "Консультации", icon: "MessageCircle" },
  { id: "community", label: "Сообщества", icon: "Users" },
  { id: "live", label: "Эфиры", icon: "Radio" },
  { id: "rental", label: "Аренда", icon: "Package" },
  { id: "profile", label: "Профиль", icon: "User" },
  { id: "contacts", label: "Контакты", icon: "Phone" },
];

const WORKOUTS = [
  { title: "HIIT-кардио: жиросжигание", trainer: "Алексей Волков", duration: "45 мин", level: "Средний", category: "Кардио", match: 98, image: GYM_IMG },
  { title: "Силовая: ноги и ягодицы", trainer: "Марина Орлова", duration: "60 мин", level: "Продвинутый", category: "Сила", match: 95, image: GYM_IMG },
  { title: "Йога: утреннее пробуждение", trainer: "Светлана Нова", duration: "30 мин", level: "Начинающий", category: "Йога", match: 91, image: GYM_IMG },
  { title: "Кроссфит: тотальная нагрузка", trainer: "Дмитрий Крат", duration: "50 мин", level: "Продвинутый", category: "Кроссфит", match: 87, image: GYM_IMG },
  { title: "Бег: интервальная тренировка", trainer: "Сергей Быстров", duration: "40 мин", level: "Средний", category: "Кардио", match: 84, image: GYM_IMG },
  { title: "Растяжка после тренировки", trainer: "Анна Мягкова", duration: "20 мин", level: "Начинающий", category: "Растяжка", match: 80, image: GYM_IMG },
  { title: "Бокс: базовая техника ударов", trainer: "Павел Стальной", duration: "55 мин", level: "Средний", category: "Бокс", match: 77, image: GYM_IMG },
  { title: "Силовая: грудь и спина", trainer: "Игорь Громов", duration: "60 мин", level: "Продвинутый", category: "Сила", match: 74, image: GYM_IMG },
  { title: "Йога: вечернее расслабление", trainer: "Светлана Нова", duration: "35 мин", level: "Начинающий", category: "Йога", match: 72, image: GYM_IMG },
  { title: "Кроссфит: Murph Challenge", trainer: "Дмитрий Крат", duration: "70 мин", level: "Продвинутый", category: "Кроссфит", match: 69, image: GYM_IMG },
  { title: "Велотренировка: выносливость", trainer: "Ольга Скорова", duration: "50 мин", level: "Средний", category: "Кардио", match: 66, image: GYM_IMG },
  { title: "Бокс: работа на мешке", trainer: "Павел Стальной", duration: "45 мин", level: "Начинающий", category: "Бокс", match: 63, image: GYM_IMG },
];

const CATEGORIES = ["Все", "Кардио", "Сила", "Йога", "Кроссфит", "Растяжка", "Бокс"];
const LEVELS = ["Любой уровень", "Начинающий", "Средний", "Продвинутый"];

const TICKETS = [
  { event: "Чемпионат по боксу", date: "24 апр", venue: "Лужники", city: "Москва", price: "от 1 500 ₽", category: "Бокс", hot: true },
  { event: "UFC Fight Night", date: "2 мая", venue: "VTB Арена", city: "Москва", price: "от 3 000 ₽", category: "MMA", hot: true },
  { event: "Волейбол: Зенит — Динамо", date: "5 мая", venue: "СКА Арена", city: "СПб", price: "от 800 ₽", category: "Волейбол", hot: false },
  { event: "Марафон Белых ночей", date: "12 мая", venue: "Дворцовая пл.", city: "СПб", price: "от 1 200 ₽", category: "Бег", hot: false },
  { event: "Баскетбол: ЦСКА — Химки", date: "18 мая", venue: "МСА Лужники", city: "Москва", price: "от 900 ₽", category: "Баскетбол", hot: false },
  { event: "Теннисный турнир ITF", date: "25 мая", venue: "Сокольники", city: "Москва", price: "от 500 ₽", category: "Теннис", hot: false },
];

const MARKETPLACE = [
  { name: "Кроссовки Nike Air Max 720", price: "12 900 ₽", oldPrice: "18 500 ₽", rating: 4.8, reviews: 234, tag: "Хит", image: MARKET_IMG },
  { name: "Спортивный костюм Adidas", price: "8 400 ₽", oldPrice: null, rating: 4.6, reviews: 89, tag: "Новинка", image: MARKET_IMG },
  { name: "Гантели разборные 20 кг", price: "4 200 ₽", oldPrice: "5 800 ₽", rating: 4.9, reviews: 412, tag: "Скидка", image: MARKET_IMG },
  { name: "Беговая дорожка Pro-Form", price: "89 000 ₽", oldPrice: null, rating: 4.7, reviews: 67, tag: "Топ", image: MARKET_IMG },
];

const CONSULTANTS = [
  { name: "Игорь Петров", spec: "Персональный тренер", exp: "12 лет", rating: 4.9, sessions: 2840, price: "2 500 ₽/час", available: true },
  { name: "Анна Соколова", spec: "Нутрициолог-диетолог", exp: "8 лет", rating: 4.8, sessions: 1560, price: "1 800 ₽/час", available: true },
  { name: "Павел Лисин", spec: "Спортивный психолог", exp: "10 лет", rating: 4.7, sessions: 980, price: "3 000 ₽/час", available: false },
  { name: "Татьяна Быкова", spec: "Реабилитолог", exp: "15 лет", rating: 5.0, sessions: 3200, price: "2 200 ₽/час", available: true },
];

const COMMUNITIES = [
  { name: "Беговой клуб Москвы", members: "12.4K", posts: "340/нед", sport: "Бег", active: true, color: "#FF6B1A" },
  { name: "CrossFit Warriors", members: "8.7K", posts: "520/нед", sport: "Кроссфит", active: true, color: "#00D4FF" },
  { name: "Йога и медитация", members: "21.2K", posts: "180/нед", sport: "Йога", active: false, color: "#A855F7" },
  { name: "Велосипедисты СПб", members: "5.1K", posts: "210/нед", sport: "Велоспорт", active: true, color: "#22C55E" },
  { name: "Пловцы Masters", members: "3.8K", posts: "120/нед", sport: "Плавание", active: false, color: "#EAB308" },
  { name: "Боевые искусства РФ", members: "14.9K", posts: "670/нед", sport: "Единоборства", active: true, color: "#EF4444" },
];

const LIVE_STREAMS = [
  { title: "Утренняя функциональная тренировка", host: "Максим Громов", viewers: "2.4K", duration: "00:34:12", category: "Тренировка", live: true },
  { title: "Разбор техники приседа", host: "Ольга Светлова", viewers: "892", duration: "00:12:05", category: "Техника", live: true },
  { title: "Питание перед стартом: Q&A", host: "Кирилл Нутри", viewers: "1.1K", duration: "ЗАПИСЬ", category: "Нутриция", live: false },
  { title: "Вечерняя растяжка и расслабление", host: "Дарья Мягкова", viewers: "3.2K", duration: "ЗАПИСЬ", category: "Стретч", live: false },
];

const RENTALS = [
  { name: "Велосипед горный Trek", perDay: "800 ₽/день", deposit: "5 000 ₽", available: 3, category: "Велосипеды" },
  { name: "SUP-доска BIC Sport", perDay: "1 200 ₽/день", deposit: "8 000 ₽", available: 2, category: "Водный спорт" },
  { name: "Лыжный комплект Rossignol", perDay: "1 500 ₽/день", deposit: "15 000 ₽", available: 5, category: "Горные лыжи" },
  { name: "Теннисная ракетка Wilson", perDay: "300 ₽/день", deposit: "2 000 ₽", available: 8, category: "Теннис" },
  { name: "Комплект для скалолазания", perDay: "600 ₽/день", deposit: "4 000 ₽", available: 1, category: "Альпинизм" },
  { name: "Каяк двухместный", perDay: "2 000 ₽/день", deposit: "12 000 ₽", available: 4, category: "Каякинг" },
];

const USER_INTERESTS = ["Бег", "Кроссфит", "HIIT", "Велоспорт"];

function SectionHeader({ tag, title, subtitle, accent }: { tag: string; title: string; subtitle: string; accent: "orange" | "blue" }) {
  const color = accent === "orange" ? "var(--neon-orange)" : "var(--neon-blue)";
  const bg = accent === "orange" ? "rgba(255,107,26,0.15)" : "rgba(0,212,255,0.15)";
  return (
    <div className="mb-10">
      <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: bg, color }}>
        {tag}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-white uppercase mb-3">{title}</h2>
      <p className="text-gray-400 max-w-xl">{subtitle}</p>
    </div>
  );
}

export default function SportPass() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState("Все");
  const [filterLevel, setFilterLevel] = useState("Любой уровень");

  const filteredWorkouts = WORKOUTS.filter((w) => {
    const catOk = filterCategory === "Все" || w.category === filterCategory;
    const lvlOk = filterLevel === "Любой уровень" || w.level === filterLevel;
    return catOk && lvlOk;
  });

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-bg)", fontFamily: "'Rubik', sans-serif" }}>

      {/* TICKER */}
      <div className="ticker-wrap py-2" style={{ background: "var(--neon-orange)" }}>
        <div className="ticker text-xs font-semibold text-white tracking-widest uppercase">
          {Array(4).fill("🔥 Новый сезон SportPass — тысячи тренировок • Эксклюзивные скидки для членов клуба • Прямые эфиры каждый день • Аренда экипировки онлайн • Топ-тренеры России • ").join("")}
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/5" style={{ background: "rgba(11,14,20,0.95)", backdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("home")}>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-sm text-white" style={{ background: "var(--neon-orange)" }}>SP</div>
            <span className="font-display text-lg font-semibold tracking-wide text-white">SPORT<span style={{ color: "var(--neon-orange)" }}>PASS</span></span>
          </div>

          <nav className="hidden xl:flex items-center gap-6">
            {NAV_ITEMS.slice(0, 8).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-item text-xs font-semibold uppercase tracking-widest transition-colors ${activeSection === item.id ? "text-white active" : "text-gray-400 hover:text-white"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("profile")}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--neon-orange)" }}
            >
              <Icon name="User" size={14} />
              Войти
            </button>
            <button className="xl:hidden text-gray-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/5 py-4" style={{ background: "rgba(11,14,20,0.98)" }}>
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors text-left"
                >
                  <Icon name={item.icon} size={15} />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO ===== */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMG})`, filter: "brightness(0.25) saturate(1.5)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,14,20,0.9) 0%, rgba(11,14,20,0.5) 50%, rgba(255,107,26,0.1) 100%)" }} />
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-20 blur-3xl" style={{ background: "var(--neon-orange)" }} />
        <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-15 blur-3xl" style={{ background: "var(--neon-blue)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-white" style={{ background: "var(--neon-orange)" }}>🔥 Сезон 2026</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-gray-300 border border-white/20">Персональные рекомендации</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold leading-none mb-6 uppercase">
              <span className="text-white">ТВОЙ</span><br />
              <span className="gradient-text">СПОРТИВНЫЙ</span><br />
              <span className="text-white">МИР</span>
            </h1>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-md">
              Тренировки, билеты, экипировка и сообщество — всё в одном месте. Умные рекомендации на основе твоих интересов.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => scrollTo("workouts")}
                className="px-8 py-4 rounded-xl font-bold text-white text-lg uppercase tracking-wide transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, var(--neon-orange), #FF3D00)" }}
              >
                Начать тренировку
              </button>
              <button
                onClick={() => scrollTo("live")}
                className="px-8 py-4 rounded-xl font-bold text-white text-lg uppercase tracking-wide border border-white/20 hover:border-white/40 transition-all hover:bg-white/5 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full inline-block live-badge" />
                Эфиры сейчас
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              {[{ val: "50K+", label: "Тренировок" }, { val: "1.2M", label: "Атлетов" }, { val: "4.9★", label: "Рейтинг" }].map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-bold" style={{ color: "var(--neon-orange)" }}>{s.val}</div>
                  <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="rounded-2xl border border-white/10 p-6" style={{ background: "rgba(17,21,32,0.9)", backdropFilter: "blur(20px)" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--neon-blue)" }}>🎯 Рекомендовано для тебя</span>
                <span className="text-xs text-gray-500">На основе 42 тренировок</span>
              </div>
              <div className="space-y-3">
                {WORKOUTS.slice(0, 3).map((w) => (
                  <div key={w.title} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={w.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white truncate">{w.title}</div>
                      <div className="text-xs text-gray-400">{w.trainer} • {w.duration}</div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-xs font-bold" style={{ color: "var(--neon-orange)" }}>{w.match}%</div>
                      <div className="text-xs text-gray-500">совпадение</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {USER_INTERESTS.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border" style={{ borderColor: "var(--neon-orange)", color: "var(--neon-orange)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WORKOUTS ===== */}
      <section id="workouts" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="💪 Тренировки" title="Программы под тебя" subtitle="ИИ подбирает занятия на основе твоей истории и интересов" accent="orange" />

          {/* Filters */}
          <div className="rounded-2xl border border-white/5 p-4 mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center" style={{ background: "var(--card-bg)" }}>
            {/* Category filter */}
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Категория</p>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => {
                  const active = filterCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFilterCategory(cat)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                      style={active
                        ? { background: "var(--neon-orange)", color: "#fff" }
                        : { border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" }
                      }
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-white/5" />

            {/* Level filter */}
            <div className="flex-shrink-0">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-2">Уровень</p>
              <div className="flex flex-wrap gap-2">
                {LEVELS.map((lvl) => {
                  const active = filterLevel === lvl;
                  const lvlColor: Record<string, string> = { "Начинающий": "#22C55E", "Средний": "#EAB308", "Продвинутый": "#EF4444" };
                  const color = lvlColor[lvl] ?? "var(--neon-orange)";
                  return (
                    <button
                      key={lvl}
                      onClick={() => setFilterLevel(lvl)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                      style={active
                        ? { background: color, color: "#fff" }
                        : { border: "1px solid rgba(255,255,255,0.1)", color: "#9ca3af" }
                      }
                    >
                      {lvl}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reset + counter */}
            {(filterCategory !== "Все" || filterLevel !== "Любой уровень") && (
              <button
                onClick={() => { setFilterCategory("Все"); setFilterLevel("Любой уровень"); }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all flex-shrink-0"
              >
                <Icon name="X" size={11} />
                Сбросить
              </button>
            )}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-gray-400">
              Найдено: <span className="font-semibold text-white">{filteredWorkouts.length}</span> тренировок
            </p>
            {filteredWorkouts.length > 0 && (
              <p className="text-xs text-gray-500">
                Сортировка: <span style={{ color: "var(--neon-orange)" }}>по совпадению</span>
              </p>
            )}
          </div>

          {/* Grid */}
          {filteredWorkouts.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {filteredWorkouts.map((w) => {
                const lvlColor: Record<string, string> = { "Начинающий": "#22C55E", "Средний": "#EAB308", "Продвинутый": "#EF4444" };
                return (
                  <div key={w.title} className="rounded-2xl overflow-hidden border border-white/5 card-hover cursor-pointer" style={{ background: "var(--card-bg)" }}>
                    <div className="relative h-40">
                      <img src={w.image} alt="" className="w-full h-full object-cover" />
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,14,20,0.9) 0%, transparent 60%)" }} />
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "var(--neon-orange)" }}>{w.match}% совпадение</span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border border-white/20 text-white">{w.category}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white mb-1 leading-tight">{w.title}</h3>
                      <p className="text-xs text-gray-400 mb-3">{w.trainer}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-400 flex items-center gap-1"><Icon name="Clock" size={12} />{w.duration}</span>
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: `${lvlColor[w.level]}22`, color: lvlColor[w.level] }}>{w.level}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl border border-white/5" style={{ background: "var(--card-bg)" }}>
              <div className="text-4xl mb-3">🔍</div>
              <p className="text-white font-semibold mb-1">Тренировок не найдено</p>
              <p className="text-gray-400 text-sm mb-4">Попробуй изменить фильтры</p>
              <button
                onClick={() => { setFilterCategory("Все"); setFilterLevel("Любой уровень"); }}
                className="px-5 py-2 rounded-xl text-sm font-semibold text-white transition-all"
                style={{ background: "var(--neon-orange)" }}
              >
                Сбросить фильтры
              </button>
            </div>
          )}

          <div className="mt-8 text-center">
            <button className="px-8 py-3 rounded-xl font-semibold border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all">
              Смотреть все 50 000+ тренировок
            </button>
          </div>
        </div>
      </section>

      {/* ===== TICKETS ===== */}
      <section id="tickets" className="py-20 diagonal-stripe" style={{ background: "#0E1118" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="🎟 Билеты" title="Спортивные события" subtitle="Лучшие матчи и соревнования России — покупай билеты онлайн" accent="blue" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {TICKETS.map((t) => (
              <div key={t.event} className="rounded-2xl border border-white/5 p-5 card-hover cursor-pointer flex flex-col gap-4" style={{ background: "var(--card-bg)" }}>
                <div className="flex items-start justify-between">
                  <div>
                    {t.hot && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white mb-2 live-badge">🔥 Горячий</span>}
                    <h3 className="font-semibold text-white leading-tight">{t.event}</h3>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1"><Icon name="MapPin" size={11} />{t.venue}, {t.city}</p>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs border border-white/10 text-gray-400 flex-shrink-0">{t.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm font-semibold" style={{ color: "var(--neon-blue)" }}>
                    <Icon name="Calendar" size={14} />{t.date}
                  </div>
                  <div className="text-lg font-bold text-white">{t.price}</div>
                </div>
                <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, var(--neon-orange), #FF3D00)" }}>
                  Купить билет
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MARKETPLACE ===== */}
      <section id="marketplace" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="🛒 Маркетплейс" title="Экипировка и снаряжение" subtitle="Оригинальные товары от ведущих брендов с доставкой по России" accent="orange" />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {MARKETPLACE.map((item) => {
              const tagColor = item.tag === "Хит" ? "var(--neon-orange)" : item.tag === "Скидка" ? "#EF4444" : item.tag === "Новинка" ? "var(--neon-blue)" : "#8B5CF6";
              const tagTextColor = item.tag === "Новинка" ? "#000" : "#fff";
              return (
                <div key={item.name} className="rounded-2xl overflow-hidden border border-white/5 card-hover cursor-pointer" style={{ background: "var(--card-bg)" }}>
                  <div className="relative h-48">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: tagColor, color: tagTextColor }}>{item.tag}</span>
                    </div>
                    <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors">
                      <Icon name="Heart" size={14} className="text-white" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-white text-sm mb-2 leading-tight">{item.name}</h3>
                    <div className="flex items-center gap-1 mb-3">
                      <Icon name="Star" size={12} className="text-yellow-400" />
                      <span className="text-xs font-semibold text-white">{item.rating}</span>
                      <span className="text-xs text-gray-400">({item.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-white">{item.price}</span>
                        {item.oldPrice && <span className="text-xs text-gray-500 line-through ml-2">{item.oldPrice}</span>}
                      </div>
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all hover:opacity-90" style={{ background: "var(--neon-orange)" }}>
                        <Icon name="ShoppingCart" size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== CONSULTATIONS ===== */}
      <section id="consultations" className="py-20" style={{ background: "#0E1118" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="💬 Консультации" title="Эксперты в твоём распоряжении" subtitle="Онлайн-консультации с сертифицированными тренерами и специалистами" accent="blue" />
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {CONSULTANTS.map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/5 p-5 card-hover cursor-pointer" style={{ background: "var(--card-bg)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl font-bold text-white" style={{ background: "linear-gradient(135deg, var(--neon-orange), #FF3D00)" }}>
                    {c.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className={`w-2 h-2 rounded-full ${c.available ? "bg-green-400 pulse-dot" : "bg-gray-500"}`} />
                    <span className={`text-xs ${c.available ? "text-green-400" : "text-gray-500"}`}>{c.available ? "Онлайн" : "Офлайн"}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-1">{c.name}</h3>
                <p className="text-xs text-gray-400 mb-3">{c.spec}</p>
                <div className="space-y-1.5 mb-4 text-xs text-gray-400">
                  <div className="flex justify-between"><span>Опыт</span><span className="text-white font-medium">{c.exp}</span></div>
                  <div className="flex justify-between"><span>Сессий</span><span className="text-white font-medium">{c.sessions.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span>Рейтинг</span><span className="font-bold" style={{ color: "var(--neon-orange)" }}>★ {c.rating}</span></div>
                </div>
                <div className="mb-4"><span className="font-bold text-white">{c.price}</span></div>
                <button
                  disabled={!c.available}
                  className="w-full py-2.5 rounded-xl text-sm font-bold transition-all"
                  style={c.available ? { background: "var(--neon-orange)", color: "#fff" } : { background: "rgba(255,255,255,0.05)", color: "#6b7280", cursor: "not-allowed" }}
                >
                  {c.available ? "Записаться" : "Недоступен"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMMUNITIES ===== */}
      <section id="community" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="👥 Сообщества" title="Найди своих" subtitle="Присоединяйся к тысячам атлетов по твоему виду спорта" accent="orange" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {COMMUNITIES.map((c) => (
              <div key={c.name} className="rounded-2xl border border-white/5 p-5 card-hover cursor-pointer" style={{ background: "var(--card-bg)" }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: `${c.color}22`, border: `1.5px solid ${c.color}44` }}>🏅</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white leading-tight">{c.name}</h3>
                      {c.active && <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" /><span className="text-xs text-green-400">Активно</span></div>}
                    </div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: `${c.color}22`, color: c.color }}>{c.sport}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-1.5 text-gray-400"><Icon name="Users" size={14} /><span className="font-semibold text-white">{c.members}</span> участников</div>
                  <div className="flex items-center gap-1.5 text-gray-400"><Icon name="MessageSquare" size={14} /><span>{c.posts}</span></div>
                </div>
                <div className="h-1 rounded-full bg-white/5 overflow-hidden mb-4">
                  <div className="h-full rounded-full" style={{ width: "70%", background: c.color }} />
                </div>
                <button className="w-full py-2 rounded-xl text-sm font-semibold border transition-all hover:opacity-80" style={{ borderColor: c.color, color: c.color }}>Вступить</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LIVE ===== */}
      <section id="live" className="py-20" style={{ background: "#0E1118" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="📡 Прямые эфиры" title="Смотри и участвуй" subtitle="Тренировки, мастер-классы и Q&A в прямом эфире каждый день" accent="blue" />
          <div className="grid md:grid-cols-2 gap-5">
            {LIVE_STREAMS.map((s) => (
              <div key={s.title} className="rounded-2xl overflow-hidden border border-white/5 card-hover cursor-pointer flex" style={{ background: "var(--card-bg)" }}>
                <div className="relative w-40 flex-shrink-0">
                  <img src={GYM_IMG} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.4)" }}>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon name="Play" size={18} className="text-white" />
                    </div>
                  </div>
                  {s.live && <div className="absolute top-2 left-2"><span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white live-badge">LIVE</span></div>}
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <span className="text-xs font-mono text-white bg-black/50 px-2 py-0.5 rounded">{s.duration}</span>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ background: "rgba(0,212,255,0.15)", color: "var(--neon-blue)" }}>{s.category}</span>
                    <h3 className="font-semibold text-white text-sm leading-tight mb-1">{s.title}</h3>
                    <p className="text-xs text-gray-400">{s.host}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 mt-3"><Icon name="Eye" size={12} /><span>{s.viewers} смотрят</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RENTAL ===== */}
      <section id="rental" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="📦 Аренда экипировки" title="Возьми в аренду" subtitle="Профессиональное снаряжение без покупки — удобно и выгодно" accent="orange" />
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {RENTALS.map((r) => (
              <div key={r.name} className="rounded-2xl border border-white/5 p-5 card-hover cursor-pointer" style={{ background: "var(--card-bg)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold mb-2" style={{ background: "rgba(255,107,26,0.15)", color: "var(--neon-orange)" }}>{r.category}</span>
                    <h3 className="font-semibold text-white">{r.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Доступно</div>
                    <div className="font-bold text-white">{r.available} шт.</div>
                  </div>
                </div>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between"><span className="text-gray-400">Стоимость</span><span className="font-bold text-white">{r.perDay}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Залог</span><span className="text-gray-300">{r.deposit}</span></div>
                </div>
                <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, var(--neon-orange), #FF3D00)" }}>
                  Забронировать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROFILE ===== */}
      <section id="profile" className="py-20" style={{ background: "#0E1118" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="👤 Профиль" title="Личный кабинет" subtitle="Отслеживай прогресс, управляй подпиской и настраивай рекомендации" accent="blue" />
          <div className="grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-white/5 p-6" style={{ background: "var(--card-bg)" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white" style={{ background: "linear-gradient(135deg, var(--neon-orange), #FF3D00)" }}>АМ</div>
                <div>
                  <h3 className="font-semibold text-white">Алексей Морозов</h3>
                  <p className="text-xs text-gray-400">PRO участник с 2024</p>
                  <div className="flex items-center gap-1 mt-1"><span className="w-2 h-2 rounded-full bg-green-400" /><span className="text-xs text-green-400">Активен</span></div>
                </div>
              </div>
              <div className="space-y-3">
                {[{ label: "Тренировок выполнено", val: "127" }, { label: "Часов активности", val: "94.5" }, { label: "Сожжено калорий", val: "48 200" }].map((s) => (
                  <div key={s.label} className="flex justify-between text-sm">
                    <span className="text-gray-400">{s.label}</span><span className="font-bold text-white">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 p-6" style={{ background: "var(--card-bg)" }}>
              <h3 className="font-semibold text-white mb-4">Активность за 7 дней</h3>
              <div className="flex items-end gap-2 h-24">
                {[60, 85, 40, 90, 70, 95, 55].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 5 ? "var(--neon-orange)" : "rgba(255,107,26,0.3)" }} />
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => <span key={d}>{d}</span>)}
              </div>
              <div className="mt-4 p-3 rounded-xl" style={{ background: "rgba(255,107,26,0.1)" }}>
                <p className="text-xs text-gray-300">🎯 Цель: <span className="font-bold text-white">5 тренировок в неделю</span></p>
                <div className="h-1 rounded-full bg-white/10 mt-2 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "71%", background: "linear-gradient(90deg, var(--neon-orange), var(--neon-blue))" }} />
                </div>
                <p className="text-xs text-gray-400 mt-1">5 из 7 дней выполнено</p>
              </div>
            </div>

            <div className="rounded-2xl border p-6" style={{ background: "var(--card-bg)", borderColor: "rgba(255,107,26,0.3)" }}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Подписка PRO</h3>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ background: "var(--neon-orange)" }}>Активна</span>
              </div>
              <div className="space-y-3 mb-6">
                {["Безлимитные тренировки", "Приоритетные консультации", "Скидки в маркетплейсе 15%", "Закрытые эфиры", "Персональные рекомендации"].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <Icon name="Check" size={14} className="text-green-400 flex-shrink-0" />{f}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-4">Действует до 18 мая 2026</p>
              <button className="w-full py-2.5 rounded-xl text-sm font-bold text-white border border-white/10 hover:border-white/30 transition-all">Управлять подпиской</button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACTS ===== */}
      <section id="contacts" className="py-20" style={{ background: "var(--dark-bg)" }}>
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader tag="📞 Контакты" title="Свяжись с нами" subtitle="Служба поддержки работает 24/7 — мы всегда на связи" accent="orange" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон", val: "+7 (800) 555-SPORT", note: "Бесплатно по России" },
                { icon: "Mail", label: "Email", val: "hello@sportpass.ru", note: "Ответим в течение 2 часов" },
                { icon: "MessageCircle", label: "Telegram", val: "@sportpass_support", note: "Быстрый ответ" },
                { icon: "MapPin", label: "Офис", val: "Москва, ул. Спортивная, 1", note: "Пн–Пт, 10:00–19:00" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors" style={{ background: "var(--card-bg)" }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,107,26,0.15)" }}>
                    <Icon name={c.icon} size={18} style={{ color: "var(--neon-orange)" }} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{c.label}</div>
                    <div className="font-semibold text-white">{c.val}</div>
                    <div className="text-xs text-gray-500">{c.note}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-white/5 p-6" style={{ background: "var(--card-bg)" }}>
              <h3 className="font-semibold text-white mb-5">Напиши нам</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Твоё имя" className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none border border-white/10 focus:border-orange-500/50 transition-colors placeholder-gray-600" style={{ background: "rgba(255,255,255,0.05)" }} />
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none border border-white/10 focus:border-orange-500/50 transition-colors placeholder-gray-600" style={{ background: "rgba(255,255,255,0.05)" }} />
                <textarea placeholder="Сообщение" rows={4} className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none border border-white/10 focus:border-orange-500/50 transition-colors resize-none placeholder-gray-600" style={{ background: "rgba(255,255,255,0.05)" }} />
                <button className="w-full py-3 rounded-xl font-bold text-white transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, var(--neon-orange), #FF3D00)" }}>
                  Отправить сообщение
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10" style={{ background: "#080B10" }}>
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs text-white" style={{ background: "var(--neon-orange)" }}>SP</div>
            <span className="font-display text-base font-semibold text-white">SPORT<span style={{ color: "var(--neon-orange)" }}>PASS</span></span>
          </div>
          <p className="text-xs text-gray-600">© 2026 SportPass. Все права защищены.</p>
          <div className="flex items-center gap-4">
            {["Telegram", "Instagram", "YouTube"].map((s) => (
              <button key={s} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">{s}</button>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}
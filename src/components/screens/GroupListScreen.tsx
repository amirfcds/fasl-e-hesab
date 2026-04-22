import { Search, Plus, Users, Home, User, Settings, Receipt } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

const groups = [
  { name: "سفر شمال", members: "۵ نفر", total: "۳,۲۴۰,۰۰۰", state: "بدهکار", amount: "۴۸۰,۰۰۰", color: "from-primary to-primary/60", danger: true },
  { name: "هم‌خانه‌ای‌ها", members: "۳ نفر", total: "۱,۸۰۰,۰۰۰", state: "طلبکار", amount: "۲۱۰,۰۰۰", color: "from-accent to-accent/60", danger: false },
  { name: "شام جمعه", members: "۷ نفر", total: "۹۸۰,۰۰۰", state: "تسویه", amount: "۰", color: "from-muted to-muted/60", danger: null },
  { name: "تولد سارا", members: "۶ نفر", total: "۲,۱۵۰,۰۰۰", state: "بدهکار", amount: "۱۲۰,۰۰۰", color: "from-primary to-accent", danger: true },
];

export const GroupListScreen = () => (
  <div className="min-h-full relative pb-24">
    <StatusBar />
    <div className="app-header">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold">ع</div>
        <div>
          <p className="text-[11px] text-muted-foreground">سلام 👋</p>
          <p className="text-sm font-bold">علی رضایی</p>
        </div>
      </div>
      <button className="icon-btn"><Search className="h-4 w-4" /></button>
    </div>

    <div className="px-5 mt-2">
      <div className="app-card p-5 hero-bg">
        <p className="text-xs text-muted-foreground">جمع کل مانده</p>
        <p className="text-2xl font-extrabold mt-1 fa-num">۳۹۰,۰۰۰ <span className="text-sm font-medium text-muted-foreground">تومان</span></p>
        <div className="flex gap-4 mt-4">
          <div className="flex-1 rounded-xl bg-accent/15 p-3">
            <p className="text-[11px] text-accent">طلب شما</p>
            <p className="text-sm font-bold mt-1 fa-num">۶۱۰,۰۰۰</p>
          </div>
          <div className="flex-1 rounded-xl bg-destructive/15 p-3">
            <p className="text-[11px] text-destructive">بدهی شما</p>
            <p className="text-sm font-bold mt-1 fa-num">۲۲۰,۰۰۰</p>
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center justify-between px-5 mt-6 mb-3">
      <h2 className="text-sm font-bold">گروه‌های من</h2>
      <span className="text-[11px] text-muted-foreground fa-num">۴ گروه فعال</span>
    </div>

    <div className="px-5 space-y-3">
      {groups.map((g) => (
        <div key={g.name} className="app-card p-4 flex items-center gap-3">
          <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${g.color} flex items-center justify-center`}>
            <Users className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold truncate">{g.name}</p>
              <span className="text-[11px] text-muted-foreground fa-num">{g.members}</span>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <p className="text-[11px] text-muted-foreground fa-num">جمع: {g.total} ت</p>
              {g.danger === null ? (
                <span className="chip chip-accent">تسویه شده</span>
              ) : g.danger ? (
                <span className="text-xs font-bold text-destructive fa-num">- {g.amount}</span>
              ) : (
                <span className="text-xs font-bold text-accent fa-num">+ {g.amount}</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    <button className="fab right-5">
      <Plus className="h-5 w-5" /> ایجاد گروه جدید
    </button>

    <nav className="bottom-nav">
      {[
        { icon: Home, label: "خانه", active: true },
        { icon: Receipt, label: "هزینه‌ها" },
        { icon: Users, label: "گروه‌ها" },
        { icon: User, label: "پروفایل" },
        { icon: Settings, label: "تنظیمات" },
      ].map((t) => (
        <button key={t.label} className={`flex flex-col items-center gap-1 text-[10px] ${t.active ? "text-primary" : "text-muted-foreground"}`}>
          <t.icon className="h-5 w-5" /> {t.label}
        </button>
      ))}
    </nav>
  </div>
);

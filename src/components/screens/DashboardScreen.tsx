import { Bell, Plus, TrendingDown, TrendingUp } from "lucide-react";
import { StatusBar } from "../PhoneFrame";
import { BottomNav } from "../BottomNav";

export const DashboardScreen = () => (
  <div className="min-h-full pb-24">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="اعلان‌ها">
        <Bell className="h-5 w-5" />
      </button>
      <div className="text-center">
        <p className="text-[10px] text-muted-foreground">سلام</p>
        <h1 className="text-sm font-bold">علی رضایی 👋</h1>
      </div>
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
        ع
      </div>
    </div>

    <div className="px-5">
      {/* Balance summary */}
      <div className="app-card hero-bg p-5">
        <p className="text-[11px] text-muted-foreground">خلاصه وضعیت</p>
        <p className="text-2xl font-extrabold mt-1 fa-num text-accent">
          + ۳۲۰,۰۰۰ <span className="text-xs font-medium text-muted-foreground">تومان</span>
        </p>
        <p className="text-[10px] text-muted-foreground mt-1">در مجموع طلبکار هستید</p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="rounded-xl bg-destructive/15 p-3">
            <div className="flex items-center gap-1.5 text-destructive">
              <TrendingDown className="h-3.5 w-3.5" />
              <p className="text-[11px]">بدهی شما</p>
            </div>
            <p className="text-sm font-bold mt-1 fa-num">۱۸۰,۰۰۰ ت</p>
          </div>
          <div className="rounded-xl bg-accent/15 p-3">
            <div className="flex items-center gap-1.5 text-accent">
              <TrendingUp className="h-3.5 w-3.5" />
              <p className="text-[11px]">طلب شما</p>
            </div>
            <p className="text-sm font-bold mt-1 fa-num">۵۰۰,۰۰۰ ت</p>
          </div>
        </div>
      </div>

      {/* Quick groups */}
      <div className="flex items-center justify-between mt-6 mb-3">
        <h3 className="text-sm font-bold">گروه‌های فعال</h3>
        <button className="btn-text text-xs">همه</button>
      </div>
      <div className="space-y-2.5">
        {[
          { t: "سفر شمال", s: "۵ عضو • ۱۲ هزینه", a: "- ۴۸۰,۰۰۰", cls: "text-destructive", g: "from-primary to-accent" },
          { t: "خانواده", s: "۴ عضو • ۴۳ هزینه", a: "+ ۲۲۰,۰۰۰", cls: "text-accent", g: "from-accent to-primary" },
          { t: "دوستان دانشگاه", s: "۸ عضو • ۷ هزینه", a: "+ ۵۸۰,۰۰۰", cls: "text-accent", g: "from-primary to-[hsl(var(--warning))]" },
        ].map((x, i) => (
          <div key={i} className="app-card p-3.5 flex items-center gap-3">
            <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${x.g}`} />
            <div className="flex-1">
              <p className="text-sm font-bold">{x.t}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 fa-num">{x.s}</p>
            </div>
            <p className={`text-xs font-bold fa-num ${x.cls}`}>{x.a}</p>
          </div>
        ))}
      </div>
    </div>

    {/* FAB */}
    <button className="fab left-5">
      <Plus className="h-5 w-5" />
      گروه جدید
    </button>

    <BottomNav active="home" />
  </div>
);

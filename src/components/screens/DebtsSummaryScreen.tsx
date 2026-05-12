import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const owes = [
  { n: "سارا کریمی", g: "سفر شمال", a: "۴۸۰,۰۰۰" },
  { n: "نگار سلطانی", g: "خانواده", a: "۲۲۰,۰۰۰" },
];
const owed = [
  { n: "رضا محمدی", g: "همخانه", a: "۳۲۰,۰۰۰" },
  { n: "مریم احمدی", g: "سفر شمال", a: "۱۸۰,۰۰۰" },
  { n: "محسن طاهری", g: "دفتر کار", a: "۹۵,۰۰۰" },
];

export const DebtsSummaryScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="خلاصه بدهی‌ها" />
    <div className="px-5 pb-8">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="app-card p-4 bg-destructive/10 border-destructive/30">
          <div className="flex items-center gap-1.5 text-destructive">
            <ArrowUpRight className="h-3.5 w-3.5" />
            <p className="text-[10px] font-bold">بدهکار به شما</p>
          </div>
          <p className="text-lg font-extrabold fa-num mt-2">۵۹۵,۰۰۰</p>
          <p className="text-[10px] text-muted-foreground mt-1 fa-num">از ۳ نفر</p>
        </div>
        <div className="app-card p-4 bg-accent/10 border-accent/30">
          <div className="flex items-center gap-1.5 text-accent">
            <ArrowDownLeft className="h-3.5 w-3.5" />
            <p className="text-[10px] font-bold">شما بدهکار</p>
          </div>
          <p className="text-lg font-extrabold fa-num mt-2">۷۰۰,۰۰۰</p>
          <p className="text-[10px] text-muted-foreground mt-1 fa-num">به ۲ نفر</p>
        </div>
      </div>

      <p className="screen-label mt-5 mb-2">شما باید بدهید</p>
      <div className="space-y-2">
        {owes.map((p, i) => (
          <div key={i} className="app-card p-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-destructive to-[hsl(var(--warning))] flex items-center justify-center text-xs font-bold">{p.n[0]}</div>
            <div className="flex-1">
              <p className="text-sm font-bold">{p.n}</p>
              <p className="text-[10px] text-muted-foreground">{p.g}</p>
            </div>
            <p className="text-sm font-bold text-destructive fa-num">{p.a}</p>
          </div>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">به شما بدهکارند</p>
      <div className="space-y-2">
        {owed.map((p, i) => (
          <div key={i} className="app-card p-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xs font-bold">{p.n[0]}</div>
            <div className="flex-1">
              <p className="text-sm font-bold">{p.n}</p>
              <p className="text-[10px] text-muted-foreground">{p.g}</p>
            </div>
            <p className="text-sm font-bold text-accent fa-num">{p.a}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

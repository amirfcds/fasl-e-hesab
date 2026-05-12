import { BarChart3, PieChart } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const months = [
  { m: "مرداد", v: 35 },
  { m: "شهریور", v: 55 },
  { m: "مهر", v: 42 },
  { m: "آبان", v: 78 },
  { m: "آذر", v: 64 },
  { m: "دی", v: 90 },
];

export const SpendingAnalyticsScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تحلیل خرج" />
    <div className="px-5 pb-8">
      <div className="flex gap-2 mb-4">
        {["هفته", "ماه", "سال"].map((t, i) => (
          <button key={i} className={`flex-1 py-2 rounded-xl text-xs font-bold transition ${i === 1 ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{t}</button>
        ))}
      </div>

      <div className="app-card p-4">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold flex items-center gap-1.5"><BarChart3 className="h-3.5 w-3.5 text-primary" /> روند ۶ ماه گذشته</p>
          <p className="text-[10px] text-muted-foreground fa-num">به تومان</p>
        </div>
        <div className="flex items-end justify-between gap-2 h-32">
          {months.map((m, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
              <div className="w-full rounded-t-lg bg-gradient-to-t from-primary to-accent" style={{ height: `${m.v}%` }} />
              <p className="text-[9px] text-muted-foreground">{m.m}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="app-card p-4 mt-4">
        <p className="text-xs font-bold flex items-center gap-1.5 mb-3"><PieChart className="h-3.5 w-3.5 text-accent" /> سهم گروه‌ها</p>
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 rounded-full" style={{ background: "conic-gradient(hsl(var(--primary)) 0 45%, hsl(var(--accent)) 45% 75%, hsl(var(--warning)) 75% 90%, hsl(var(--destructive)) 90% 100%)" }}>
            <div className="h-full w-full rounded-full bg-card scale-[0.55] m-auto" />
          </div>
          <div className="flex-1 space-y-2 text-[11px]">
            {[
              { c: "bg-primary", n: "سفر شمال", p: "۴۵٪" },
              { c: "bg-accent", n: "خانواده", p: "۳۰٪" },
              { c: "bg-[hsl(var(--warning))]", n: "همخانه", p: "۱۵٪" },
              { c: "bg-destructive", n: "سایر", p: "۱۰٪" },
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`h-2.5 w-2.5 rounded-sm ${r.c}`} />
                <span className="flex-1">{r.n}</span>
                <span className="font-bold fa-num">{r.p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {[
          { l: "بیشترین روز", v: "پنجشنبه" },
          { l: "تعداد تراکنش", v: "۸۴" },
          { l: "میانگین", v: "۲۱۰ک" },
        ].map((s, i) => (
          <div key={i} className="app-card p-3 text-center">
            <p className="text-[9px] text-muted-foreground">{s.l}</p>
            <p className="text-sm font-bold fa-num mt-1">{s.v}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

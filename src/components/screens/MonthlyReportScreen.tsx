import { TrendingUp, TrendingDown, Download } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const cats = [
  { n: "غذا و رستوران", a: "۲,۴۸۰,۰۰۰", p: 42, c: "from-primary to-accent" },
  { n: "حمل و نقل", a: "۹۸۰,۰۰۰", p: 18, c: "from-accent to-[hsl(var(--warning))]" },
  { n: "خرید", a: "۷۲۰,۰۰۰", p: 14, c: "from-[hsl(var(--warning))] to-destructive" },
  { n: "تفریح", a: "۵۸۰,۰۰۰", p: 11, c: "from-primary to-[hsl(var(--warning))]" },
  { n: "سایر", a: "۸۴۰,۰۰۰", p: 15, c: "from-accent to-primary" },
];

export const MonthlyReportScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="گزارش ماهانه" right={<button className="icon-btn"><Download className="h-4 w-4" /></button>} />
    <div className="px-5 pb-8">
      <div className="app-card p-5 bg-gradient-to-br from-primary/20 to-accent/15">
        <p className="text-xs text-muted-foreground">آبان ۱۴۰۳</p>
        <p className="text-3xl font-extrabold fa-num mt-1">۵,۶۰۰,۰۰۰ ت</p>
        <div className="flex items-center gap-3 mt-3 text-[11px]">
          <span className="inline-flex items-center gap-1 text-destructive"><TrendingUp className="h-3 w-3" /><span className="fa-num">۱۲٪+</span></span>
          <span className="text-muted-foreground">نسبت به مهر ماه</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2.5 mt-4">
        <div className="app-card p-3">
          <p className="text-[10px] text-muted-foreground">میانگین روزانه</p>
          <p className="text-base font-bold fa-num mt-1">۱۸۶,۰۰۰</p>
        </div>
        <div className="app-card p-3">
          <p className="text-[10px] text-muted-foreground">بیشترین هزینه</p>
          <p className="text-base font-bold fa-num mt-1">۸۴۰,۰۰۰</p>
        </div>
      </div>

      <p className="screen-label mt-5 mb-2">دسته‌بندی هزینه‌ها</p>
      <div className="space-y-2.5">
        {cats.map((c, i) => (
          <div key={i} className="app-card p-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-bold">{c.n}</p>
              <p className="text-xs font-bold fa-num">{c.a}</p>
            </div>
            <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${c.c} rounded-full`} style={{ width: `${c.p}%` }} />
            </div>
            <p className="text-[10px] text-muted-foreground fa-num mt-1.5">{c.p}٪</p>
          </div>
        ))}
      </div>

      <div className="app-card p-4 mt-5 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
          <TrendingDown className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold">پیشنهاد صرفه‌جویی</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">با کاهش ۱۵٪ غذای بیرون، ۳۷۲ هزار تومان صرفه‌جویی کنید</p>
        </div>
      </div>
    </div>
  </div>
);

import { Search, Filter, X } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const results = [
  { who: "سارا کریمی", g: "سفر شمال", t: "هزینهٔ ", h: "ویلا", t2: " رو حساب کردم", d: "امروز ۱۴:۲۲" },
  { who: "رضا", g: "همخانه", t: "اجارهٔ این ماه ", h: "ویلا", t2: " رو پرداخت کن", d: "دیروز" },
  { who: "نگار", g: "سفر شمال", t: "آدرس ", h: "ویلا", t2: ": نوشهر…", d: "۲۸ مهر" },
];

export const SearchMessagesScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="جستجوی پیام‌ها" />
    <div className="px-5 pb-8">
      <div className="relative">
        <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input className="app-input pr-10 pl-10" defaultValue="ویلا" />
        <button className="absolute left-3 top-1/2 -translate-y-1/2"><X className="h-4 w-4 text-muted-foreground" /></button>
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
        {[
          { l: "همه گفتگوها", a: true },
          { l: "فرستنده", a: false },
          { l: "تاریخ", a: false },
          { l: "فقط رسانه", a: false },
        ].map((f, i) => (
          <button key={i} className={`px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap inline-flex items-center gap-1 ${f.a ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"}`}>
            <Filter className="h-3 w-3" /> {f.l}
          </button>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2 fa-num">۳ نتیجه برای «ویلا»</p>
      <div className="space-y-2">
        {results.map((r, i) => (
          <div key={i} className="app-card p-3">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-bold">{r.who}</p>
              <p className="text-[10px] text-muted-foreground fa-num">{r.d}</p>
            </div>
            <p className="text-[10px] text-muted-foreground mb-1">{r.g}</p>
            <p className="text-xs leading-6">
              {r.t}<mark className="bg-primary/30 text-primary-foreground rounded px-0.5">{r.h}</mark>{r.t2}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

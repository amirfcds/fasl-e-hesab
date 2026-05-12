import { Pin, X } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const pins = [
  { who: "سارا کریمی", t: "آدرس ویلا: نوشهر، خیابان دریا، کوچه ۱۲", d: "۲۸ مهر", c: "from-primary to-accent" },
  { who: "رضا محمدی", t: "حساب کارت: ۶۰۳۷-۹۹۱۸-xxxx-۲۲۴۸", d: "۲ آبان", c: "from-accent to-[hsl(var(--warning))]" },
  { who: "نگار سلطانی", t: "ساعت حرکت ۸ صبح پنجشنبه‌ست. لطفاً سر وقت آماده باشید 🚗", d: "۵ آبان", c: "from-primary to-[hsl(var(--warning))]" },
];

export const PinnedMessagesScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="پیام‌های پین‌شده" />
    <div className="px-5 pb-8">
      <p className="text-xs text-muted-foreground leading-7 mb-4 fa-num">
        ۳ پیام در گروه «سفر شمال» پین شده است.
      </p>

      <div className="space-y-3">
        {pins.map((p, i) => (
          <div key={i} className="app-card p-3 border-r-2 border-primary">
            <div className="flex items-center gap-2 mb-2">
              <div className={`h-7 w-7 rounded-full bg-gradient-to-br ${p.c} flex items-center justify-center text-[10px] font-bold`}>{p.who[0]}</div>
              <p className="text-xs font-bold flex-1">{p.who}</p>
              <Pin className="h-3 w-3 text-primary" />
              <button className="text-muted-foreground"><X className="h-3.5 w-3.5" /></button>
            </div>
            <p className="text-xs leading-6">{p.t}</p>
            <p className="text-[10px] text-muted-foreground mt-2 fa-num">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

import { Users, Plus, Sparkles } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

export const EmptyStateScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="گروه‌ها" />
    <div className="px-5 pt-12 pb-8 text-center">
      <div className="relative inline-block">
        <div className="h-28 w-28 rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center mx-auto">
          <Users className="h-12 w-12 text-primary" />
        </div>
        <Sparkles className="h-5 w-5 text-accent absolute -top-1 -right-1" />
        <Sparkles className="h-3 w-3 text-primary absolute bottom-2 -left-2" />
      </div>

      <h2 className="text-lg font-bold mt-6">هنوز گروهی نداری</h2>
      <p className="text-xs text-muted-foreground leading-7 mt-2">
        برای شروع یک گروه بساز و دوستان یا خانواده‌ات را اضافه کن.
        <br />تقسیم هزینه هیچ‌وقت این‌قدر ساده نبوده.
      </p>

      <button className="btn-primary mt-7 inline-flex items-center justify-center gap-2">
        <Plus className="h-4 w-4" /> ساختن اولین گروه
      </button>
      <button className="btn-secondary mt-3">پیوستن با کد دعوت</button>

      <div className="app-card p-4 mt-6 text-right">
        <p className="text-xs font-bold mb-3">💡 نمونه‌های پرکاربرد</p>
        <div className="space-y-2">
          {["🏖 سفر گروهی", "🏠 همخانه‌ای", "👨‍👩‍👧 خانواده", "💼 دفتر کار"].map((s, i) => (
            <button key={i} className="w-full text-right p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary text-xs">{s}</button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

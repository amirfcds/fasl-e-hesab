import { Plus, Wallet, UserPlus, Edit3, MessageCircle } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const activities = [
  { i: Plus, t: "primary", title: "هزینهٔ جدید اضافه شد", d: "رستوران دریا — ۴۲۰ هزار", who: "سارا", when: "هم‌اکنون" },
  { i: Wallet, t: "accent", title: "تسویه شد", d: "رضا با شما تسویه کرد", who: "رضا", when: "۲۰ دقیقه پیش" },
  { i: UserPlus, t: "primary", title: "عضو جدید", d: "نگار به گروه «سفر شمال» پیوست", who: "نگار", when: "۲ ساعت پیش" },
  { i: Edit3, t: "warning", title: "هزینه ویرایش شد", d: "تاکسی فرودگاه — مبلغ تغییر کرد", who: "محسن", when: "دیروز" },
  { i: MessageCircle, t: "primary", title: "پیام جدید در گروه", d: "۳ پیام جدید در «همخانه»", who: "گروه", when: "دیروز" },
];

const tone: Record<string, string> = {
  primary: "bg-primary/15 text-primary",
  accent: "bg-accent/15 text-accent",
  warning: "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]",
};

export const ActivityScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="فعالیت‌ها" />
    <div className="px-5 pb-8">
      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {["همه", "هزینه‌ها", "تسویه‌ها", "گروه‌ها", "گفتگو"].map((t, i) => (
          <button key={i} className={`px-3 py-1.5 rounded-full text-[11px] font-bold whitespace-nowrap ${i === 0 ? "bg-gradient-to-r from-primary to-accent text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>{t}</button>
        ))}
      </div>

      <p className="screen-label mb-2">امروز</p>
      <div className="space-y-2 mb-4">
        {activities.slice(0, 2).map((a, i) => (
          <div key={i} className="app-card p-3 flex gap-3">
            <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${tone[a.t]}`}>
              <a.i className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{a.title}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{a.d}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{a.who} • {a.when}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="screen-label mb-2">قبل‌تر</p>
      <div className="space-y-2">
        {activities.slice(2).map((a, i) => (
          <div key={i} className="app-card p-3 flex gap-3">
            <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${tone[a.t]}`}>
              <a.i className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{a.title}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{a.d}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{a.who} • {a.when}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

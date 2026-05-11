import { ArrowRight, CheckCheck, Wallet, MessageCircle, Users, Bell, DollarSign } from "lucide-react";
import { StatusBar } from "../PhoneFrame";
import { BottomNav } from "../BottomNav";

const items = [
  { icon: DollarSign, color: "primary", t: "هزینهٔ جدید در «سفر شمال»", d: "علی رضایی هزینهٔ ۸۲۰,۰۰۰ تومان «شام رستوران» را اضافه کرد.", time: "همین حالا", unread: true },
  { icon: Wallet, color: "accent", t: "تسویه‌حساب موفق", d: "سارا کریمی ۳۲۰,۰۰۰ تومان به شما پرداخت کرد.", time: "۱۰ دقیقه پیش", unread: true },
  { icon: Users, color: "warning", t: "دعوت به گروه جدید", d: "نگار سلطانی شما را به گروه «همکاران» اضافه کرد.", time: "۱ ساعت پیش", unread: true },
  { icon: MessageCircle, color: "primary", t: "پیام جدید از مریم", d: "می‌تونی فردا حساب رو چک کنی؟", time: "دیروز", unread: false },
  { icon: Bell, color: "muted", t: "یادآوری تسویه", d: "شما ۱۸۰,۰۰۰ تومان به رضا بدهکار هستید.", time: "۲ روز پیش", unread: false },
];

const tone = (c: string) =>
  c === "accent" ? "bg-accent/15 text-accent"
  : c === "warning" ? "bg-[hsl(var(--warning))]/15 text-[hsl(var(--warning))]"
  : c === "muted" ? "bg-secondary text-muted-foreground"
  : "bg-primary/15 text-primary";

export const NotificationListScreen = () => (
  <div className="min-h-full pb-24">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <h1 className="text-base font-bold">اعلان‌ها</h1>
      <button className="icon-btn" aria-label="همه را خوانده">
        <CheckCheck className="h-4 w-4" />
      </button>
    </div>

    <div className="px-5">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {["همه", "هزینه‌ها", "تسویه", "پیام‌ها", "گروه‌ها"].map((f, i) => (
          <button key={f} className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold ${i === 0 ? "chip chip-primary" : "chip"}`}>
            {f}
          </button>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">جدید</p>
      <div className="space-y-2">
        {items.filter(i => i.unread).map((it, i) => (
          <div key={i} className="app-card p-3.5 flex gap-3 relative">
            <span className="absolute top-3 left-3 h-2 w-2 rounded-full bg-primary" />
            <div className={`h-10 w-10 rounded-2xl flex items-center justify-center shrink-0 ${tone(it.color)}`}>
              <it.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold">{it.t}</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-6 fa-num">{it.d}</p>
              <p className="text-[10px] text-muted-foreground mt-1.5 fa-num">{it.time}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">قبلی</p>
      <div className="space-y-2 opacity-80">
        {items.filter(i => !i.unread).map((it, i) => (
          <div key={i} className="app-card p-3.5 flex gap-3">
            <div className={`h-10 w-10 rounded-2xl flex items-center justify-center shrink-0 ${tone(it.color)}`}>
              <it.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-bold">{it.t}</p>
              <p className="text-[11px] text-muted-foreground mt-1 leading-6 fa-num">{it.d}</p>
              <p className="text-[10px] text-muted-foreground mt-1.5 fa-num">{it.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <BottomNav active="home" />
  </div>
);

import { ScreenHeader } from "../ScreenHeader";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const settlements = [
  { from: "علی", to: "رضا", a: "۱۲۰,۰۰۰", done: false },
  { from: "نگین", to: "سارا", a: "۲۴۰,۰۰۰", done: false },
  { from: "مریم", to: "علی", a: "۸۰,۰۰۰", done: false },
  { from: "رضا", to: "سارا", a: "۳۱۰,۰۰۰", done: true },
];

export const SettlementScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تسویه‌حساب" />
    <div className="px-5 pb-8">
      <div className="app-card hero-bg p-5 text-center">
        <p className="text-xs text-muted-foreground">کمترین تعداد تراکنش برای تسویه</p>
        <p className="text-2xl font-extrabold mt-1 fa-num">۳ پرداخت</p>
        <p className="text-[11px] text-muted-foreground mt-2">با انجام این پرداخت‌ها، گروه کاملاً تسویه می‌شود.</p>
      </div>

      <h3 className="text-sm font-bold mt-6 mb-3">چه کسی به چه کسی بدهکار است؟</h3>

      <div className="space-y-3">
        {settlements.map((s, i) => (
          <div key={i} className={`app-card p-4 ${s.done ? "opacity-60" : ""}`}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-destructive to-destructive/60 flex items-center justify-center text-xs font-bold">
                {s.from[0]}
              </div>
              <ArrowLeft className="h-4 w-4 text-muted-foreground" />
              <p className="text-xs font-bold text-destructive fa-num whitespace-nowrap">{s.a} ت</p>
              <ArrowLeft className="h-4 w-4 text-muted-foreground" />
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center text-xs font-bold text-accent-foreground">
                {s.to[0]}
              </div>
            </div>
            <p className="text-xs mt-3 text-muted-foreground">
              <span className="font-bold text-foreground">{s.from}</span> به{" "}
              <span className="font-bold text-foreground">{s.to}</span> مبلغ{" "}
              <span className="font-bold text-foreground fa-num">{s.a}</span> تومان بدهکار است.
            </p>

            {s.done ? (
              <div className="mt-3 flex items-center gap-2 text-accent text-xs font-semibold">
                <CheckCircle2 className="h-4 w-4" /> پرداخت شد
              </div>
            ) : (
              <button className="btn-accent mt-3 !py-2.5 text-xs">پرداخت شد</button>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

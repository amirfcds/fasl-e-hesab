import { Wallet, Users, TrendingUp } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const WelcomeScreen = () => (
  <div className="min-h-full hero-bg flex flex-col">
    <StatusBar />
    <div className="flex-1 px-6 pt-10 pb-8 flex flex-col">
      <div className="flex flex-col items-center text-center gap-4 mt-6">
        <div
          className="h-20 w-20 rounded-[28px] flex items-center justify-center"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elev)" }}
        >
          <Wallet className="h-10 w-10 text-primary-foreground" />
        </div>
        <h2 className="text-3xl font-extrabold mt-2">خرجم</h2>
        <p className="text-sm text-muted-foreground leading-7 max-w-[240px]">
          هزینه‌های مشترک با دوستان و خانواده را ساده، منصفانه و شفاف تقسیم کنید.
        </p>
      </div>

      <div className="mt-10 space-y-3">
        {[
          { icon: Users, t: "گروه‌های نامحدود", d: "با دوستان، همسفران و خانواده" },
          { icon: TrendingUp, t: "محاسبه هوشمند", d: "کمترین تعداد تراکنش برای تسویه" },
          { icon: Wallet, t: "تقسیم دلخواه", d: "مساوی، درصدی یا سهم‌به‌سهم" },
        ].map((f, i) => (
          <div key={i} className="app-card p-3.5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
              <f.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold">{f.t}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{f.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8 space-y-3">
        <button className="btn-primary">ورود</button>
        <button className="btn-secondary">ثبت‌نام</button>
        <p className="text-center text-[11px] text-muted-foreground mt-2">
          با ادامه، <span className="text-primary">قوانین و شرایط</span> را می‌پذیرید.
        </p>
      </div>
    </div>
  </div>
);

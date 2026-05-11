import { Mail, KeyRound, ArrowRight } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const ForgotPasswordScreen = () => (
  <div className="min-h-full hero-bg">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <h1 className="text-base font-bold">فراموشی رمز عبور</h1>
      <span className="w-10" />
    </div>

    <div className="px-6 pt-2 pb-10">
      <div className="flex flex-col items-center text-center gap-3 mt-2">
        <div className="h-16 w-16 rounded-3xl flex items-center justify-center"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elev)" }}>
          <KeyRound className="h-7 w-7 text-primary-foreground" />
        </div>
        <h2 className="text-xl font-extrabold mt-2">رمز عبور خود را فراموش کرده‌اید؟</h2>
        <p className="text-xs text-muted-foreground leading-7 max-w-[260px]">
          ایمیل حساب خود را وارد کنید تا لینک بازنشانی رمز عبور برایتان ارسال شود.
        </p>
      </div>

      <div className="mt-7 space-y-3">
        <div className="relative">
          <Mail className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input className="app-input pr-11" placeholder="ایمیل شما" defaultValue="ali@kharjam.app" />
        </div>
      </div>

      <button className="btn-primary mt-4">ارسال لینک بازنشانی</button>
      <button className="btn-secondary mt-3">ارسال کد به موبایل</button>

      <div className="mt-6 rounded-2xl p-3 bg-primary/10 border border-primary/25 text-[11px] text-primary leading-6 text-center">
        ✉️ اگر ایمیلی دریافت نکردید، پوشهٔ اسپم را بررسی کنید.
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6">
        به یاد آوردید؟ <span className="text-primary font-semibold">بازگشت به ورود</span>
      </p>
    </div>
  </div>
);

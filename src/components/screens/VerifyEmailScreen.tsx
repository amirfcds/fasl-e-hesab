import { Mail, RefreshCcw } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

export const VerifyEmailScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تأیید ایمیل" />
    <div className="px-5 pb-8 text-center">
      <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mt-6 shadow-lg">
        <Mail className="h-9 w-9 text-primary-foreground" />
      </div>
      <h2 className="text-lg font-bold mt-5">ایمیل خود را بررسی کنید</h2>
      <p className="text-xs text-muted-foreground mt-2 leading-7">
        یک لینک تأیید به آدرس
        <br />
        <span className="text-foreground font-bold">user@kharjam.app</span>
        <br />
        ارسال شد. روی لینک کلیک کنید تا حساب فعال شود.
      </p>

      <div className="app-card p-4 mt-6 text-right">
        <p className="text-[11px] text-muted-foreground mb-2">کد تأیید (اختیاری)</p>
        <div className="flex gap-2 justify-center fa-num" dir="ltr">
          {["۲", "۸", "۴", "۱", "۰", "۹"].map((d, i) => (
            <div key={i} className="h-12 w-9 rounded-xl bg-input border border-border flex items-center justify-center font-bold">{d}</div>
          ))}
        </div>
      </div>

      <button className="btn-primary mt-6">باز کردن اپ ایمیل</button>
      <button className="btn-text mt-3 inline-flex items-center gap-1.5 mx-auto">
        <RefreshCcw className="h-3.5 w-3.5" /> ارسال مجدد لینک
      </button>
    </div>
  </div>
);

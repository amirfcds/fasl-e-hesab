import { Mail, Phone, Lock, Wallet } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const LoginScreen = () => (
  <div className="min-h-full hero-bg">
    <StatusBar />
    <div className="px-6 pt-6 pb-10">
      <div className="flex flex-col items-center text-center gap-3 mt-6">
        <div
          className="h-16 w-16 rounded-3xl flex items-center justify-center"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elev)" }}
        >
          <Wallet className="h-8 w-8 text-primary-foreground" />
        </div>
        <h2 className="text-2xl font-extrabold mt-2">خوش آمدید به دِنگ</h2>
        <p className="text-sm text-muted-foreground leading-7 max-w-[240px]">
          هزینه‌های گروهی‌تان را ساده، شفاف و منصفانه تقسیم کنید.
        </p>
      </div>

      <div className="mt-8 p-1 rounded-2xl grid grid-cols-2 gap-1 bg-secondary">
        <button className="py-2.5 rounded-xl text-xs font-semibold bg-card text-foreground flex items-center justify-center gap-1.5">
          <Mail className="h-4 w-4" /> ورود با ایمیل
        </button>
        <button className="py-2.5 rounded-xl text-xs font-semibold text-muted-foreground flex items-center justify-center gap-1.5">
          <Phone className="h-4 w-4" /> شماره موبایل
        </button>
      </div>

      <div className="mt-6 space-y-3">
        <div className="relative">
          <Mail className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input className="app-input pr-11" placeholder="ایمیل" defaultValue="ali@deng.app" />
        </div>
        <div className="relative">
          <Lock className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input type="password" className="app-input pr-11" placeholder="رمز عبور" defaultValue="********" />
        </div>
        <div className="flex justify-start">
          <button className="btn-text text-xs">فراموشی رمز عبور؟</button>
        </div>
      </div>

      <button className="btn-primary mt-4">ادامه</button>

      <div className="flex items-center gap-3 my-6">
        <span className="h-px flex-1 bg-border" />
        <span className="text-[11px] text-muted-foreground">یا</span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <button className="btn-secondary">ورود با گوگل</button>

      <p className="text-center text-xs text-muted-foreground mt-8">
        حساب ندارید؟ <span className="text-primary font-semibold">ثبت‌نام</span>
      </p>
    </div>
  </div>
);

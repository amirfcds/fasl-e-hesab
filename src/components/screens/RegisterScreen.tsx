import { Mail, Phone, Lock, User, UserPlus } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const RegisterScreen = () => (
  <div className="min-h-full hero-bg">
    <StatusBar />
    <div className="px-6 pt-6 pb-10">
      <div className="flex flex-col items-center text-center gap-3 mt-4">
        <div
          className="h-14 w-14 rounded-2xl flex items-center justify-center"
          style={{ background: "var(--gradient-accent)", boxShadow: "var(--shadow-accent)" }}
        >
          <UserPlus className="h-7 w-7 text-accent-foreground" />
        </div>
        <h2 className="text-xl font-extrabold mt-1">ساخت حساب جدید</h2>
        <p className="text-xs text-muted-foreground leading-6 max-w-[240px]">
          در چند ثانیه عضو شوید و اولین گروه خود را بسازید.
        </p>
      </div>

      <div className="mt-6 p-1 rounded-2xl grid grid-cols-2 gap-1 bg-secondary">
        <button className="py-2.5 rounded-xl text-xs font-semibold bg-card text-foreground flex items-center justify-center gap-1.5">
          <Mail className="h-4 w-4" /> ایمیل
        </button>
        <button className="py-2.5 rounded-xl text-xs font-semibold text-muted-foreground flex items-center justify-center gap-1.5">
          <Phone className="h-4 w-4" /> شماره موبایل
        </button>
      </div>

      <div className="mt-5 space-y-3">
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">نام کاربری</label>
          <div className="relative">
            <User className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
            <input className="app-input pr-11" placeholder="مثلاً علی رضایی" defaultValue="علی رضایی" />
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">ایمیل</label>
          <div className="relative">
            <Mail className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
            <input className="app-input pr-11" placeholder="you@example.com" defaultValue="ali@kharjam.app" />
          </div>
        </div>
        <div>
          <label className="text-xs text-muted-foreground mb-1.5 block">رمز عبور</label>
          <div className="relative">
            <Lock className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
            <input type="password" className="app-input pr-11" defaultValue="********" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5">حداقل ۸ کاراکتر، شامل حرف و عدد.</p>
        </div>
      </div>

      <button className="btn-primary mt-6">ثبت‌نام</button>

      <p className="text-center text-xs text-muted-foreground mt-6">
        حساب دارید؟ <span className="text-primary font-semibold">ورود</span>
      </p>
    </div>
  </div>
);

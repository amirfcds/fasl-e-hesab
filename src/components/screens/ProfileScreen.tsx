import { ScreenHeader } from "../ScreenHeader";
import { Edit3, KeyRound, Bell, LogOut, ChevronLeft } from "lucide-react";

export const ProfileScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="پروفایل" />
    <div className="px-5 pb-8">
      <div className="flex flex-col items-center text-center">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-extrabold text-primary-foreground">
          ع
        </div>
        <h2 className="text-lg font-extrabold mt-3">علی رضایی</h2>
        <p className="text-xs text-muted-foreground mt-1">ali@deng.app • <span className="fa-num">۰۹۱۲۳۴۵۶۷۸۹</span></p>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="app-card p-3 text-center">
          <p className="text-[10px] text-muted-foreground">گروه‌ها</p>
          <p className="text-base font-extrabold mt-1 fa-num">۸</p>
        </div>
        <div className="app-card p-3 text-center">
          <p className="text-[10px] text-muted-foreground">هزینه‌ها</p>
          <p className="text-base font-extrabold mt-1 fa-num">۴۶</p>
        </div>
        <div className="app-card p-3 text-center">
          <p className="text-[10px] text-accent">تسویه</p>
          <p className="text-base font-extrabold mt-1 fa-num">۳۹۰ک</p>
        </div>
      </div>

      <h3 className="text-sm font-bold mt-6 mb-3">حساب کاربری</h3>
      <div className="app-card divide-y divide-border">
        {[
          { icon: Edit3, label: "ویرایش پروفایل", sub: "نام، تصویر، ایمیل" },
          { icon: KeyRound, label: "تغییر رمز عبور", sub: "آخرین تغییر ۳ ماه پیش" },
          { icon: Bell, label: "اعلان‌ها", sub: "فعال" },
        ].map((r, i) => (
          <button key={i} className="flex items-center gap-3 p-4 w-full text-right">
            <div className="h-9 w-9 rounded-xl bg-secondary flex items-center justify-center">
              <r.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{r.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{r.sub}</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <button className="btn-destructive mt-6 flex items-center justify-center gap-2">
        <LogOut className="h-4 w-4" /> خروج از حساب
      </button>
    </div>
  </div>
);

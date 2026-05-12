import { Send, Bell, Link2, Check } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const features = [
  "دریافت اعلان هزینه‌های جدید",
  "یادآوری تسویه‌حساب‌ها",
  "گزارش هفتگی خرج‌ها",
  "افزودن سریع هزینه از طریق ربات",
];

export const MessengerIntegrationsScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="اتصال به پیام‌رسان‌ها" />
    <div className="px-5 pb-8">
      <p className="text-xs text-muted-foreground leading-7 mb-4">
        دِنگ را به پیام‌رسان دلخواه خود متصل کنید تا اعلان‌ها و گزارش‌ها را آنجا دریافت کنید.
      </p>

      {/* Bale */}
      <div className="app-card p-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[hsl(195_100%_45%)] to-[hsl(210_100%_55%)] flex items-center justify-center text-lg font-extrabold text-primary-foreground">
            ب
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold">بله Bale</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">پیام‌رسان ایرانی</p>
          </div>
          <span className="chip chip-accent text-[10px] inline-flex items-center gap-1"><Check className="h-3 w-3" /> متصل</span>
        </div>
        <div className="flex items-center gap-2 mt-3 p-2.5 rounded-xl bg-input border border-border">
          <Send className="h-3.5 w-3.5 text-primary" />
          <p className="text-[11px] flex-1 fa-num" dir="ltr">@KharjamBot</p>
          <button className="text-[10px] font-bold text-destructive">قطع</button>
        </div>
      </div>

      {/* Telegram */}
      <div className="app-card p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[hsl(200_90%_55%)] to-[hsl(210_85%_45%)] flex items-center justify-center">
            <Send className="h-5 w-5 text-primary-foreground -rotate-45" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold">تلگرام Telegram</p>
            <p className="text-[11px] text-muted-foreground mt-0.5">پیام‌رسان جهانی</p>
          </div>
          <button className="rounded-xl px-3 py-1.5 text-[11px] font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground inline-flex items-center gap-1">
            <Link2 className="h-3 w-3" /> اتصال
          </button>
        </div>
        <p className="text-[10px] text-muted-foreground mt-3 leading-6">
          برای اتصال، روی دکمه بالا کلیک کنید و در تلگرام به ربات پیام «start» بدهید.
        </p>
      </div>

      <p className="screen-label mb-2">امکانات اتصال</p>
      <div className="app-card p-4 space-y-2.5">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="h-6 w-6 rounded-lg bg-accent/15 text-accent flex items-center justify-center">
              <Check className="h-3 w-3" />
            </div>
            <p className="text-xs flex-1">{f}</p>
          </div>
        ))}
      </div>

      <div className="app-card p-3 mt-4 flex items-center gap-3">
        <Bell className="h-4 w-4 text-primary" />
        <p className="text-[11px] flex-1">دریافت اعلان‌ها در پیام‌رسان</p>
        <div className="w-10 h-6 rounded-full bg-primary relative">
          <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-primary-foreground" />
        </div>
      </div>
    </div>
  </div>
);

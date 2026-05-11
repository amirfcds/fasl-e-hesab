import { ArrowRight, Check, Globe } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

const langs = [
  { code: "fa", label: "فارسی", sub: "Persian", flag: "🇮🇷", active: true },
  { code: "en", label: "English", sub: "انگلیسی", flag: "🇬🇧" },
  { code: "ar", label: "العربية", sub: "عربی", flag: "🇸🇦" },
  { code: "tr", label: "Türkçe", sub: "ترکی", flag: "🇹🇷" },
];

export const LanguageScreen = () => (
  <div className="min-h-full">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <h1 className="text-base font-bold">زبان برنامه</h1>
      <span className="w-10" />
    </div>

    <div className="px-5 pb-8">
      <div className="app-card p-4 flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
          <Globe className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-bold">انتخاب زبان</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">پشتیبانی کامل از RTL و LTR</p>
        </div>
      </div>

      <p className="screen-label mt-6 mb-2">زبان فعلی</p>
      <div className="app-card divide-y divide-border">
        {langs.map((l) => (
          <button key={l.code} className="w-full flex items-center gap-3 p-4 text-right">
            <span className="text-2xl">{l.flag}</span>
            <div className="flex-1">
              <p className="text-sm font-bold">{l.label}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{l.sub}</p>
            </div>
            {l.active ? (
              <span className="h-7 w-7 rounded-full flex items-center justify-center text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}>
                <Check className="h-3.5 w-3.5" />
              </span>
            ) : (
              <span className="h-7 w-7 rounded-full border border-border" />
            )}
          </button>
        ))}
      </div>

      <p className="text-[11px] text-muted-foreground text-center mt-5 leading-6">
        با تغییر زبان، چیدمان صفحه به‌صورت خودکار به RTL یا LTR تنظیم می‌شود.
      </p>
    </div>
  </div>
);

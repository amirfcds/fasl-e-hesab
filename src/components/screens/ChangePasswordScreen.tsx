import { ArrowRight, Lock, Eye, ShieldCheck, Check } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

const Field = ({ label, value, ok }: { label: string; value: string; ok?: boolean }) => (
  <div>
    <label className="text-[11px] text-muted-foreground mb-1.5 block">{label}</label>
    <div className="relative">
      <Lock className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
      <input type="password" className={`app-input pr-11 pl-11 ${ok ? "" : ""}`} defaultValue={value} />
      <button className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" aria-label="نمایش">
        <Eye className="h-4 w-4" />
      </button>
    </div>
  </div>
);

const Rule = ({ ok, text }: { ok: boolean; text: string }) => (
  <div className="flex items-center gap-2 text-[11px]">
    <span className={`h-4 w-4 rounded-full flex items-center justify-center ${ok ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground"}`}>
      <Check className="h-2.5 w-2.5" />
    </span>
    <span className={ok ? "text-foreground" : "text-muted-foreground"}>{text}</span>
  </div>
);

export const ChangePasswordScreen = () => (
  <div className="min-h-full">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <h1 className="text-base font-bold">تغییر رمز عبور</h1>
      <span className="w-10" />
    </div>

    <div className="px-5 pb-8 space-y-5">
      <div className="app-card p-4 flex items-start gap-3">
        <div className="h-10 w-10 rounded-2xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-bold">امنیت حساب شما</p>
          <p className="text-[11px] text-muted-foreground leading-6 mt-1">
            رمز جدید باید با رمز قبلی متفاوت بوده و حداقل ۸ کاراکتر داشته باشد.
          </p>
        </div>
      </div>

      <div className="space-y-3.5">
        <Field label="رمز عبور فعلی" value="********" />
        <Field label="رمز عبور جدید" value="********" ok />
        <Field label="تکرار رمز عبور جدید" value="********" ok />
      </div>

      {/* Strength meter */}
      <div>
        <div className="flex items-center justify-between text-[11px] mb-1.5">
          <span className="text-muted-foreground">قدرت رمز</span>
          <span className="text-accent font-semibold">قوی</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 flex-1 rounded-full bg-accent" />
          <span className="h-1.5 flex-1 rounded-full bg-accent" />
          <span className="h-1.5 flex-1 rounded-full bg-accent" />
          <span className="h-1.5 flex-1 rounded-full bg-secondary" />
        </div>
      </div>

      <div className="app-card p-4 space-y-2">
        <p className="text-[11px] font-bold mb-1">رمز شما باید شامل:</p>
        <Rule ok text="حداقل ۸ کاراکتر" />
        <Rule ok text="یک حرف بزرگ انگلیسی (A-Z)" />
        <Rule ok text="یک عدد (۰-۹)" />
        <Rule ok={false} text="یک کاراکتر ویژه (!@#$)" />
      </div>

      <button className="btn-primary">ذخیرهٔ رمز جدید</button>
      <button className="btn-text w-full text-center text-xs">انصراف</button>
    </div>
  </div>
);

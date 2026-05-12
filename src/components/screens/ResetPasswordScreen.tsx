import { Lock, Eye, Check } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

export const ResetPasswordScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="رمز عبور جدید" />
    <div className="px-5 pb-8">
      <div className="h-16 w-16 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mx-auto mt-4">
        <Lock className="h-7 w-7" />
      </div>
      <h2 className="text-lg font-bold text-center mt-4">انتخاب رمز جدید</h2>
      <p className="text-xs text-muted-foreground text-center mt-1.5 leading-6">
        رمز جدید خود را وارد کنید. این رمز در دفعات بعدی برای ورود استفاده خواهد شد.
      </p>

      <div className="space-y-3 mt-6">
        <div className="relative">
          <input type="password" className="app-input pl-10" placeholder="رمز عبور جدید" />
          <Eye className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="relative">
          <input type="password" className="app-input pl-10" placeholder="تکرار رمز عبور" />
          <Eye className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        </div>
      </div>

      <div className="app-card p-3 mt-4 space-y-1.5">
        {["حداقل ۸ کاراکتر", "حداقل یک حرف بزرگ", "حداقل یک عدد"].map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-[11px]">
            <Check className="h-3.5 w-3.5 text-accent" />
            <span>{r}</span>
          </div>
        ))}
      </div>

      <button className="btn-primary mt-6">ذخیره و ورود</button>
    </div>
  </div>
);

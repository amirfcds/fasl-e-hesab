import { AlertTriangle, X } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const consequences = [
  "حذف کامل اطلاعات حساب کاربری",
  "حذف تمامی گروه‌ها و هزینه‌های شخصی",
  "خروج از گروه‌های مشترک با دوستان",
  "حذف پیام‌ها و تاریخچهٔ گفتگوها",
];

export const DeleteAccountScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="حذف حساب کاربری" />
    <div className="px-5 pb-8">
      <div className="h-16 w-16 rounded-2xl bg-destructive/15 text-destructive flex items-center justify-center mx-auto mt-4">
        <AlertTriangle className="h-7 w-7" />
      </div>
      <h2 className="text-lg font-bold text-center mt-4">آیا مطمئن هستید؟</h2>
      <p className="text-xs text-muted-foreground text-center mt-2 leading-7">
        با حذف حساب، تمام اطلاعات شما برای همیشه پاک می‌شود و قابل بازیابی نیست.
      </p>

      <div className="app-card p-4 mt-5 space-y-2.5">
        <p className="text-xs font-bold text-destructive mb-2">پس از حذف:</p>
        {consequences.map((c, i) => (
          <div key={i} className="flex items-center gap-2 text-[12px]">
            <X className="h-3.5 w-3.5 text-destructive" />
            <span>{c}</span>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <label className="text-xs text-muted-foreground mb-2 block">برای تأیید کلمه «حذف» را تایپ کنید</label>
        <input className="app-input" placeholder="حذف" />
      </div>

      <div className="flex items-start gap-2 mt-4">
        <input type="checkbox" className="mt-1" />
        <p className="text-[11px] text-muted-foreground leading-6">
          متوجه‌ام که این عملیات غیرقابل بازگشت است و تمام اطلاعاتم حذف خواهد شد.
        </p>
      </div>

      <button className="btn-destructive mt-6">حذف دائمی حساب</button>
      <button className="btn-secondary mt-3">انصراف</button>
    </div>
  </div>
);

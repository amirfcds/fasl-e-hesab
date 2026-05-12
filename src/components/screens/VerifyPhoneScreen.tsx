import { Smartphone, Edit2 } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

export const VerifyPhoneScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تأیید شماره موبایل" />
    <div className="px-5 pb-8 text-center">
      <div className="h-20 w-20 rounded-3xl bg-accent/15 text-accent flex items-center justify-center mx-auto mt-6">
        <Smartphone className="h-9 w-9" />
      </div>
      <h2 className="text-lg font-bold mt-5">کد را وارد کنید</h2>
      <p className="text-xs text-muted-foreground mt-2 leading-7">
        کد تأیید به شماره ارسال شد:
      </p>
      <div className="inline-flex items-center gap-2 mt-2 px-3 py-1.5 rounded-full bg-secondary">
        <span className="fa-num text-sm">۰۹۱۲ ۳۴۵ ۶۷۸۹</span>
        <Edit2 className="h-3.5 w-3.5 text-primary" />
      </div>

      <div className="flex gap-2 justify-center mt-6 fa-num" dir="ltr">
        {["۵", "۸", "۲", "۱"].map((d, i) => (
          <div key={i} className="h-14 w-12 rounded-2xl bg-input border-2 border-primary/40 flex items-center justify-center text-xl font-bold">{d}</div>
        ))}
      </div>

      <p className="text-[11px] text-muted-foreground mt-5 fa-num">ارسال مجدد تا ۰۰:۴۸</p>
      <button className="btn-primary mt-6">تأیید و ادامه</button>
      <button className="btn-text mt-3 mx-auto block">تماس صوتی به جای پیامک</button>
    </div>
  </div>
);

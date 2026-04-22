import { ScreenHeader } from "../ScreenHeader";
import { MessageSquare } from "lucide-react";

export const OtpScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تأیید شماره" />
    <div className="px-6 pt-4 pb-8">
      <div className="flex justify-center">
        <div className="h-14 w-14 rounded-2xl bg-primary/15 flex items-center justify-center">
          <MessageSquare className="h-6 w-6 text-primary" />
        </div>
      </div>
      <h2 className="text-center text-lg font-bold mt-4">کد تأیید برای شما ارسال شد</h2>
      <p className="text-center text-xs text-muted-foreground mt-2 leading-6">
        کد ۵ رقمی ارسال‌شده به شمارهٔ <span className="fa-num text-foreground">۰۹۱۲۳۴۵۶۷۸۹</span> را وارد کنید.
      </p>

      <div className="flex justify-center gap-2 mt-8 fa-num" dir="ltr">
        {["۴", "۷", "۲", "۹", "۱"].map((d, i) => (
          <div
            key={i}
            className={`h-14 w-11 rounded-2xl flex items-center justify-center text-lg font-bold border-2 ${
              i === 4 ? "border-primary bg-primary/10" : "border-border bg-card"
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-6">
        ارسال مجدد کد تا <span className="text-primary fa-num font-semibold">۰۰:۴۲</span>
      </p>

      <button className="btn-primary mt-8">تأیید کد</button>
      <button className="btn-text w-full mt-3 text-center">تغییر شماره</button>
    </div>
  </div>
);

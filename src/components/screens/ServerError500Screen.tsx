import { ServerCrash, RefreshCw } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const ServerError500Screen = () => (
  <div className="min-h-full flex flex-col">
    <StatusBar />
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      <p className="text-7xl font-extrabold fa-num text-destructive">۵۰۰</p>
      <div className="h-12 w-12 rounded-2xl bg-destructive/15 text-destructive flex items-center justify-center mt-4">
        <ServerCrash className="h-6 w-6" />
      </div>
      <h1 className="text-lg font-bold mt-4">خطای سرور</h1>
      <p className="text-xs text-muted-foreground mt-2 leading-7">
        مشکلی در سرورها پیش آمد. تیم ما در جریان است و در حال رفع مشکل هستیم.
      </p>

      <div className="app-card p-3 mt-5 w-full text-right">
        <p className="text-[10px] text-muted-foreground">کد خطا</p>
        <p className="text-xs font-bold fa-num mt-1" dir="ltr">ERR_5031_KHRJ_220486</p>
      </div>

      <button className="btn-primary mt-6 inline-flex items-center justify-center gap-2">
        <RefreshCw className="h-4 w-4" /> تلاش مجدد
      </button>
      <button className="btn-secondary mt-3">گزارش به پشتیبانی</button>
    </div>
  </div>
);

import { WifiOff, RefreshCw } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const OfflineScreen = () => (
  <div className="min-h-full flex flex-col">
    <StatusBar />
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      <div className="h-24 w-24 rounded-3xl bg-secondary flex items-center justify-center mb-6">
        <WifiOff className="h-11 w-11 text-muted-foreground" />
      </div>
      <h1 className="text-xl font-bold">اتصال اینترنت نیست</h1>
      <p className="text-xs text-muted-foreground mt-3 leading-7">
        ارتباط با شبکه برقرار نیست. لطفاً Wi-Fi یا داده‌ی همراه را بررسی کنید و دوباره تلاش کنید.
      </p>

      <div className="app-card p-4 mt-6 w-full text-right">
        <p className="text-xs font-bold mb-2">حالت آفلاین فعال است</p>
        <p className="text-[11px] text-muted-foreground leading-6">
          تغییرات شما به‌صورت محلی ذخیره می‌شوند و پس از اتصال مجدد همگام‌سازی خواهند شد.
        </p>
      </div>

      <button className="btn-primary mt-6 inline-flex items-center justify-center gap-2">
        <RefreshCw className="h-4 w-4" /> تلاش مجدد
      </button>
    </div>
  </div>
);

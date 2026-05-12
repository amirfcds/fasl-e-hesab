import { Compass, Home } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const NotFound404Screen = () => (
  <div className="min-h-full flex flex-col">
    <StatusBar />
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      <p className="text-7xl font-extrabold fa-num bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>۴۰۴</p>
      <div className="h-12 w-12 rounded-2xl bg-secondary flex items-center justify-center mt-4">
        <Compass className="h-6 w-6 text-muted-foreground" />
      </div>
      <h1 className="text-lg font-bold mt-4">صفحه پیدا نشد</h1>
      <p className="text-xs text-muted-foreground mt-2 leading-7">
        به نظر می‌رسد آدرسی که دنبال آن بودید وجود ندارد یا حذف شده است.
      </p>
      <button className="btn-primary mt-6 inline-flex items-center justify-center gap-2">
        <Home className="h-4 w-4" /> بازگشت به خانه
      </button>
      <button className="btn-text mt-3">گزارش خطا</button>
    </div>
  </div>
);

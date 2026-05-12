import { Wrench, Clock } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const MaintenanceScreen = () => (
  <div className="min-h-full flex flex-col">
    <StatusBar />
    <div className="flex-1 flex flex-col items-center justify-center px-8 text-center">
      <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-[hsl(var(--warning))] to-primary flex items-center justify-center mb-6 shadow-lg">
        <Wrench className="h-11 w-11 text-background" />
      </div>
      <h1 className="text-xl font-bold">در حال به‌روزرسانی</h1>
      <p className="text-xs text-muted-foreground mt-3 leading-7">
        سرورهای دِنگ در حال انجام تعمیرات برنامه‌ریزی‌شده هستند. به‌زودی برمی‌گردیم.
      </p>

      <div className="app-card p-4 mt-6 w-full">
        <div className="flex items-center justify-center gap-2 text-sm font-bold">
          <Clock className="h-4 w-4 text-primary" />
          <span className="fa-num">تخمین زمان: ۱۵ دقیقه</span>
        </div>
        <div className="h-1.5 bg-secondary rounded-full mt-3 overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>
        <p className="text-[10px] text-muted-foreground text-center mt-2 fa-num">۶۸٪ تکمیل‌شده</p>
      </div>

      <p className="text-[10px] text-muted-foreground mt-6">
        وضعیت سیستم را در <span className="text-primary font-bold">status.kharjam.app</span> دنبال کنید
      </p>
    </div>
  </div>
);

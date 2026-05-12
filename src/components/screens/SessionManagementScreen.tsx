import { Smartphone, Monitor, Tablet, LogOut } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const sessions = [
  { i: Smartphone, n: "iPhone 15 Pro", l: "تهران، ایران", t: "هم‌اکنون فعال", cur: true },
  { i: Monitor, n: "Chrome — macOS", l: "تهران، ایران", t: "۲ ساعت پیش" },
  { i: Tablet, n: "iPad Air", l: "اصفهان، ایران", t: "دیروز ۱۸:۲۰" },
  { i: Smartphone, n: "Samsung A52", l: "مشهد، ایران", t: "۳ روز پیش" },
];

export const SessionManagementScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="مدیریت دستگاه‌ها" />
    <div className="px-5 pb-8">
      <p className="text-xs text-muted-foreground leading-7 mb-4">
        دستگاه‌هایی که با حساب شما وارد شده‌اند را مشاهده و خروج بزنید.
      </p>

      <div className="space-y-2.5">
        {sessions.map((s, i) => (
          <div key={i} className="app-card p-4 flex items-center gap-3">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${s.cur ? "bg-accent/15 text-accent" : "bg-secondary text-muted-foreground"}`}>
              <s.i className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-sm font-bold">{s.n}</p>
                {s.cur && <span className="chip chip-accent text-[9px] py-0.5 px-2">این دستگاه</span>}
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">{s.l} • {s.t}</p>
            </div>
            {!s.cur && (
              <button className="icon-btn h-9 w-9 text-destructive">
                <LogOut className="h-4 w-4" />
              </button>
            )}
          </div>
        ))}
      </div>

      <button className="btn-destructive mt-6">خروج از تمام دستگاه‌ها</button>
    </div>
  </div>
);

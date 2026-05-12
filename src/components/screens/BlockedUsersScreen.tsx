import { ShieldOff, UserX, Plus } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const blocked = [
  { n: "کاربر ناشناس", d: "۲ هفته پیش بلاک شد" },
  { n: "علی قاسمی", d: "ماه گذشته بلاک شد" },
  { n: "اسپم اکانت", d: "آبان ۱۴۰۳ بلاک شد" },
];

export const BlockedUsersScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="کاربران بلاک‌شده" right={<button className="icon-btn"><Plus className="h-4 w-4" /></button>} />
    <div className="px-5 pb-8">
      <div className="app-card p-4 flex items-start gap-3 bg-destructive/5 border-destructive/20">
        <div className="h-10 w-10 rounded-xl bg-destructive/15 text-destructive flex items-center justify-center">
          <ShieldOff className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="text-xs font-bold">کاربران بلاک‌شده</p>
          <p className="text-[11px] text-muted-foreground mt-1 leading-6">
            این افراد نمی‌توانند به شما پیام دهند یا شما را به گروه اضافه کنند.
          </p>
        </div>
      </div>

      <p className="screen-label mt-5 mb-2 fa-num">۳ کاربر</p>
      <div className="space-y-2">
        {blocked.map((b, i) => (
          <div key={i} className="app-card p-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground">
              <UserX className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{b.n}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{b.d}</p>
            </div>
            <button className="text-[11px] font-bold text-primary">آنبلاک</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

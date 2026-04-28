import { Image as ImageIcon, Mic, Bell, LogOut, UserPlus, Play } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const members = [
  { n: "علی رضایی", r: "ادمین", g: "from-primary to-accent" },
  { n: "سارا کریمی", r: "عضو", g: "from-accent to-primary" },
  { n: "نگار سلطانی", r: "عضو", g: "from-accent to-[hsl(var(--warning))]" },
  { n: "رضا محمدی", r: "عضو", g: "from-primary to-[hsl(var(--warning))]" },
  { n: "مریم احمدی", r: "عضو", g: "from-primary to-accent" },
];

export const ChatGroupInfoScreen = () => (
  <div className="min-h-full pb-6">
    <ScreenHeader title="اطلاعات گروه" />

    <div className="px-5">
      <div className="app-card hero-bg p-5 flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-extrabold">س</div>
        <p className="text-base font-bold mt-3">سفر شمال</p>
        <p className="text-[11px] text-muted-foreground fa-num mt-0.5">۵ عضو • ساخته‌شده در ۱۲ مهر ۱۴۰۳</p>
        <div className="flex gap-2 mt-4 w-full">
          <button className="btn-secondary flex-1 py-2.5 text-xs flex items-center justify-center gap-1.5">
            <Bell className="h-3.5 w-3.5" /> اعلان‌ها
          </button>
          <button className="btn-secondary flex-1 py-2.5 text-xs flex items-center justify-center gap-1.5">
            <UserPlus className="h-3.5 w-3.5" /> افزودن
          </button>
        </div>
      </div>

      {/* Shared media */}
      <h3 className="text-[11px] font-bold mt-5 mb-2 screen-label">رسانه‌های مشترک</h3>
      <div className="app-card p-3">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-bold">تصاویر</p>
          <button className="btn-text text-[11px]">همه</button>
        </div>
        <div className="grid grid-cols-4 gap-1.5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-primary/30 via-accent/25 to-[hsl(var(--warning))]/30 flex items-center justify-center">
              <ImageIcon className="h-4 w-4 text-foreground/60" />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-4 mb-2">
          <p className="text-xs font-bold">پیام‌های صوتی</p>
          <span className="text-[10px] text-muted-foreground fa-num">۸ مورد</span>
        </div>
        <div className="space-y-1.5">
          {[
            { n: "نگار", t: "۰:۲۴" },
            { n: "رضا", t: "۰:۱۲" },
          ].map((v, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-xl bg-secondary/60">
              <button className="h-7 w-7 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                <Play className="h-3 w-3 fill-current" />
              </button>
              <div className="flex items-end gap-0.5 h-4 flex-1">
                {[4, 8, 6, 10, 7, 11, 5, 9, 6, 8, 5, 9, 7, 10, 6].map((h, j) => (
                  <span key={j} className="w-0.5 rounded-full bg-muted-foreground/70" style={{ height: h }} />
                ))}
              </div>
              <span className="text-[10px] text-muted-foreground fa-num">{v.n} • {v.t}</span>
              <Mic className="h-3 w-3 text-muted-foreground" />
            </div>
          ))}
        </div>
      </div>

      {/* Members */}
      <h3 className="text-[11px] font-bold mt-5 mb-2 screen-label">اعضا (۵)</h3>
      <div className="app-card divide-y divide-border">
        {members.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3">
            <div className={`h-9 w-9 rounded-full bg-gradient-to-br ${m.g} flex items-center justify-center text-[11px] font-bold`}>{m.n[0]}</div>
            <div className="flex-1">
              <p className="text-xs font-bold">{m.n}</p>
              <p className="text-[10px] text-muted-foreground">{m.r}</p>
            </div>
            {m.r === "ادمین" && <span className="chip chip-primary text-[10px]">ادمین</span>}
          </div>
        ))}
      </div>

      <button className="btn-destructive mt-5 flex items-center justify-center gap-2">
        <LogOut className="h-4 w-4" /> خروج از گروه
      </button>
    </div>
  </div>
);

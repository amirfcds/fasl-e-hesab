import { Search, Users, UserPlus } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const recents = [
  { n: "سارا کریمی", s: "آنلاین", g: "from-accent to-primary" },
  { n: "رضا محمدی", s: "۲ ساعت پیش", g: "from-primary to-accent" },
  { n: "نگار سلطانی", s: "آنلاین", g: "from-accent to-[hsl(var(--warning))]" },
  { n: "مریم احمدی", s: "دیروز", g: "from-primary to-[hsl(var(--warning))]" },
];
const groups = [
  { n: "سفر شمال", m: "۵ عضو", g: "from-primary to-accent" },
  { n: "خانواده", m: "۴ عضو", g: "from-accent to-primary" },
  { n: "دوستان دانشگاه", m: "۸ عضو", g: "from-primary to-[hsl(var(--warning))]" },
];

export const NewChatScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="شروع گفتگو" />
    <div className="px-5">
      <div className="relative">
        <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input className="app-input pr-10" placeholder="جستجوی کاربر یا شماره…" />
      </div>

      <div className="grid grid-cols-2 gap-2.5 mt-4">
        <button className="app-card p-3 flex flex-col items-start gap-2">
          <div className="h-9 w-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
            <UserPlus className="h-4 w-4" />
          </div>
          <p className="text-xs font-bold">گفتگوی جدید</p>
        </button>
        <button className="app-card p-3 flex flex-col items-start gap-2">
          <div className="h-9 w-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
            <Users className="h-4 w-4" />
          </div>
          <p className="text-xs font-bold">گروه جدید</p>
        </button>
      </div>

      <h3 className="text-[11px] font-bold mt-5 mb-2 screen-label">گفتگوهای اخیر</h3>
      <div className="space-y-1.5">
        {recents.map((r, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-2xl hover:bg-secondary/40">
            <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${r.g} flex items-center justify-center text-xs font-bold`}>{r.n[0]}</div>
            <div className="flex-1">
              <p className="text-sm font-bold">{r.n}</p>
              <p className="text-[10px] text-muted-foreground">{r.s}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-[11px] font-bold mt-5 mb-2 screen-label">گروه‌ها</h3>
      <div className="space-y-1.5 pb-6">
        {groups.map((r, i) => (
          <div key={i} className="flex items-center gap-3 p-2 rounded-2xl hover:bg-secondary/40">
            <div className={`h-10 w-10 rounded-2xl bg-gradient-to-br ${r.g}`} />
            <div className="flex-1">
              <p className="text-sm font-bold">{r.n}</p>
              <p className="text-[10px] text-muted-foreground fa-num">{r.m}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

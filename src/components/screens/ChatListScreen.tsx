import { Search, Plus, MessageCircle, Home, Users, Wallet, User } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

const filters = ["همه", "گروه‌ها", "شخصی"];
const chats = [
  { name: "سفر شمال", last: "علی: فاکتور هتل رو فرستادم", time: "۹:۴۲", unread: 3, group: true, g: "from-primary to-accent" },
  { name: "سارا کریمی", last: "مرسی، فردا حساب می‌کنم 🙏", time: "۹:۱۵", unread: 1, group: false, g: "from-accent to-primary" },
  { name: "خانواده", last: "مامان: شام خونه ما", time: "دیروز", unread: 0, group: true, g: "from-primary to-[hsl(var(--warning))]" },
  { name: "رضا محمدی", last: "🎤 پیام صوتی · ۰:۲۴", time: "دیروز", unread: 0, group: false, g: "from-accent to-primary" },
  { name: "دوستان دانشگاه", last: "نگار: کی میاد جمعه؟", time: "۲ روز", unread: 5, group: true, g: "from-primary to-accent" },
  { name: "مریم احمدی", last: "📷 تصویر", time: "۲ روز", unread: 0, group: false, g: "from-accent to-[hsl(var(--warning))]" },
];

export const ChatListScreen = () => (
  <div className="min-h-full pb-20">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="جستجو">
        <Search className="h-5 w-5" />
      </button>
      <h1 className="text-base font-bold">گفتگوها</h1>
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">ع</div>
    </div>

    <div className="px-5">
      <div className="relative">
        <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input className="app-input pr-10" placeholder="جستجو در گفتگوها…" />
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto">
        {filters.map((f, i) => (
          <button key={f} className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold ${i === 0 ? "chip chip-primary" : "chip"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="mt-4 space-y-1.5">
        {chats.map((c, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-secondary/40 transition-colors">
            <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${c.g} flex items-center justify-center text-sm font-bold`}>
              {c.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold truncate">{c.name}</p>
                <span className="text-[10px] text-muted-foreground fa-num shrink-0 mr-2">{c.time}</span>
              </div>
              <div className="flex items-center justify-between mt-0.5">
                <p className="text-[11px] text-muted-foreground truncate">{c.last}</p>
                {c.unread > 0 && (
                  <span className="shrink-0 mr-2 h-5 min-w-5 px-1.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center fa-num">
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <button className="fab left-5">
      <Plus className="h-5 w-5" />
      گفتگوی جدید
    </button>

    <nav className="bottom-nav">
      {[
        { i: Home, l: "خانه" },
        { i: Users, l: "گروه‌ها" },
        { i: Wallet, l: "تسویه" },
        { i: MessageCircle, l: "گفتگوها", active: true },
        { i: User, l: "پروفایل" },
      ].map((n, i) => (
        <button key={i} className="flex flex-col items-center gap-1">
          <n.i className={`h-5 w-5 ${n.active ? "text-primary" : "text-muted-foreground"}`} />
          <span className={`text-[10px] ${n.active ? "text-primary font-bold" : "text-muted-foreground"}`}>{n.l}</span>
        </button>
      ))}
    </nav>
  </div>
);

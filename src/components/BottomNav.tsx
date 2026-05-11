import { Home, Users, Wallet, MessageCircle, User, LucideIcon } from "lucide-react";

type Item = { i: LucideIcon; l: string; key: string; badge?: boolean };

const items: Item[] = [
  { i: Home, l: "خانه", key: "home" },
  { i: Users, l: "گروه‌ها", key: "groups" },
  { i: Wallet, l: "تسویه", key: "settle" },
  { i: MessageCircle, l: "گفتگوها", key: "chats", badge: true },
  { i: User, l: "پروفایل", key: "profile" },
];

export const BottomNav = ({ active = "home" }: { active?: string }) => (
  <nav className="bottom-nav-pill" dir="rtl">
    {items.map((n) => {
      const isActive = n.key === active;
      return (
        <button key={n.key} className={`bn-item ${isActive ? "active" : ""}`}>
          <n.i className="h-[18px] w-[18px]" />
          {isActive && <span>{n.l}</span>}
          {!isActive && n.badge && <span className="bn-dot" />}
        </button>
      );
    })}
  </nav>
);

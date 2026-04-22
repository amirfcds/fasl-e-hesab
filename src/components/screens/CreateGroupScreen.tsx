import { ScreenHeader } from "../ScreenHeader";
import { X, Plus, Users, Wifi, WifiOff, UserPlus, Home } from "lucide-react";
import { useState } from "react";

const emojis = ["🏖️", "🏠", "🍽️", "🎉", "✈️", "⚽"];

type GroupType = "friends" | "family";
type GroupMode = "online" | "offline";

const friendMembers = ["علی رضایی", "سارا کریمی", "رضا محمدی", "نگین احمدی"];
const familyMembers = [
  { name: "خانواده رضایی", count: 3 },
  { name: "خانواده کریمی", count: 2 },
  { name: "خانواده محمدی", count: 4 },
];

export const CreateGroupScreen = () => {
  const [groupType, setGroupType] = useState<GroupType>("friends");
  const [groupMode, setGroupMode] = useState<GroupMode>("online");

  return (
    <div className="min-h-full">
      <ScreenHeader title="ایجاد گروه جدید" />
      <div className="px-6 pb-8">
        {/* Icon */}
        <div className="flex justify-center mt-2">
          <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl">
            🏖️
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">انتخاب آیکن گروه</p>
        <div className="flex justify-center gap-2 mt-3">
          {emojis.map((e, i) => (
            <button
              key={i}
              className={`h-9 w-9 rounded-xl flex items-center justify-center text-lg ${
                i === 0 ? "bg-primary/15 border border-primary/40" : "bg-secondary"
              }`}
            >
              {e}
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          {/* Group Title */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">عنوان گروه</label>
            <input className="app-input" placeholder="مثلاً سفر شمال" defaultValue="سفر شمال" />
          </div>

          {/* Group Type Selector */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">نوع گروه</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setGroupType("friends")}
                className={`app-card p-3 flex flex-col items-center gap-2 transition-all ${
                  groupType === "friends"
                    ? "border-primary/60 bg-primary/10"
                    : "border-border"
                }`}
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                  groupType === "friends" ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                }`}>
                  <UserPlus className="h-5 w-5" />
                </div>
                <p className={`text-xs font-bold ${groupType === "friends" ? "text-primary" : "text-muted-foreground"}`}>
                  دوستان
                </p>
                <p className="text-[10px] text-muted-foreground leading-4">هر عضو یک نفر</p>
              </button>

              <button
                onClick={() => setGroupType("family")}
                className={`app-card p-3 flex flex-col items-center gap-2 transition-all ${
                  groupType === "family"
                    ? "border-accent/60 bg-accent/10"
                    : "border-border"
                }`}
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
                  groupType === "family" ? "bg-accent/20 text-accent" : "bg-secondary text-muted-foreground"
                }`}>
                  <Home className="h-5 w-5" />
                </div>
                <p className={`text-xs font-bold ${groupType === "family" ? "text-accent" : "text-muted-foreground"}`}>
                  خانوادگی
                </p>
                <p className="text-[10px] text-muted-foreground leading-4">تعداد نفرات هر خانواده</p>
              </button>
            </div>
          </div>

          {/* Group Mode Selector */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">حالت گروه</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setGroupMode("online")}
                className={`app-card p-3 flex items-center gap-2.5 transition-all ${
                  groupMode === "online"
                    ? "border-primary/60 bg-primary/10"
                    : "border-border"
                }`}
              >
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                  groupMode === "online" ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"
                }`}>
                  <Wifi className="h-4 w-4" />
                </div>
                <div className="text-right">
                  <p className={`text-xs font-bold ${groupMode === "online" ? "text-primary" : "text-muted-foreground"}`}>
                    آنلاین
                  </p>
                  <p className="text-[10px] text-muted-foreground">کاربران واقعی</p>
                </div>
              </button>

              <button
                onClick={() => setGroupMode("offline")}
                className={`app-card p-3 flex items-center gap-2.5 transition-all ${
                  groupMode === "offline"
                    ? "border-accent/60 bg-accent/10"
                    : "border-border"
                }`}
              >
                <div className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                  groupMode === "offline" ? "bg-accent/20 text-accent" : "bg-secondary text-muted-foreground"
                }`}>
                  <WifiOff className="h-4 w-4" />
                </div>
                <div className="text-right">
                  <p className={`text-xs font-bold ${groupMode === "offline" ? "text-accent" : "text-muted-foreground"}`}>
                    آفلاین
                  </p>
                  <p className="text-[10px] text-muted-foreground">فقط محاسبه محلی</p>
                </div>
              </button>
            </div>
          </div>

          {/* Members Section — adapts based on type & mode */}
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-2 block">
              {groupType === "family" ? "افزودن خانواده‌ها" : "افزودن اعضا"}
            </label>

            {/* Input */}
            <div className="relative">
              <input
                className="app-input pl-11"
                placeholder={
                  groupMode === "offline"
                    ? "نام دستی وارد کنید…"
                    : groupType === "family"
                    ? "نام خانواده…"
                    : "نام یا شماره عضو…"
                }
              />
              <button className="absolute top-1/2 -translate-y-1/2 left-2 h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                <Plus className="h-4 w-4 text-primary-foreground" />
              </button>
            </div>

            {/* Members chips / cards */}
            {groupType === "friends" ? (
              <div className="flex flex-wrap gap-2 mt-3">
                {friendMembers.map((m, i) => (
                  <span key={i} className="chip chip-primary">
                    <Users className="h-3 w-3" /> {m}
                    <X className="h-3 w-3 opacity-60" />
                  </span>
                ))}
              </div>
            ) : (
              <div className="space-y-2 mt-3">
                {familyMembers.map((f, i) => (
                  <div key={i} className="app-card p-3 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
                      <Home className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold">{f.name}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {groupMode === "offline" ? "عضو دستی" : "کاربر ثبت‌شده"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-muted-foreground">تعداد نفرات:</span>
                      <span className="h-7 w-7 rounded-lg bg-accent/20 text-accent flex items-center justify-center text-xs font-bold fa-num">
                        {f.count}
                      </span>
                    </div>
                    <X className="h-3.5 w-3.5 text-muted-foreground" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="app-card p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold fa-num">
              {groupType === "family" ? "۹" : "۴"}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">
                {groupType === "family" ? "۳ خانواده — ۹ نفر" : "۴ عضو اضافه شد"}
              </p>
              <p className="text-[11px] text-muted-foreground">
                {groupMode === "offline"
                  ? "گروه آفلاین — فقط محاسبه محلی"
                  : "می‌توانید بعداً اعضای بیشتری اضافه کنید."}
              </p>
            </div>
          </div>
        </div>

        <button className="btn-primary mt-4 mx-6 mb-6">ساخت گروه</button>
      </div>
    </div>
  );
};

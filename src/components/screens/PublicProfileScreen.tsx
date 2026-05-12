import { MessageCircle, UserPlus, Users, Calendar, MoreVertical } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const PublicProfileScreen = () => (
  <div className="min-h-full">
    <StatusBar />
    <div className="relative h-32 bg-gradient-to-br from-primary via-accent to-[hsl(var(--warning))]">
      <button className="icon-btn absolute top-3 right-3 h-9 w-9 bg-background/30 backdrop-blur"><MoreVertical className="h-4 w-4" /></button>
    </div>
    <div className="px-5 -mt-12 pb-8">
      <div className="flex items-end justify-between">
        <div className="h-24 w-24 rounded-3xl bg-gradient-to-br from-primary to-accent border-4 border-background flex items-center justify-center text-3xl font-extrabold">س</div>
        <div className="flex gap-2 mb-2">
          <button className="rounded-2xl px-4 py-2 text-xs font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground inline-flex items-center gap-1.5">
            <UserPlus className="h-3.5 w-3.5" /> دنبال کردن
          </button>
          <button className="icon-btn"><MessageCircle className="h-4 w-4" /></button>
        </div>
      </div>

      <h1 className="text-xl font-extrabold mt-3">سارا کریمی</h1>
      <p className="text-xs text-muted-foreground mt-0.5">@sara.k</p>
      <p className="text-xs leading-7 mt-3">دوستدار سفر و طبیعت • تهران 🇮🇷</p>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {[
          { l: "گروه‌ها", v: "۱۲" },
          { l: "دنبال‌کننده", v: "۸۴" },
          { l: "دنبال‌شده", v: "۶۱" },
        ].map((s, i) => (
          <div key={i} className="app-card p-3 text-center">
            <p className="text-base font-extrabold fa-num">{s.v}</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.l}</p>
          </div>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">گروه‌های مشترک</p>
      <div className="space-y-2">
        {["سفر شمال", "همخانه", "دفتر کار"].map((g, i) => (
          <div key={i} className="app-card p-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-accent" />
            <div className="flex-1">
              <p className="text-sm font-bold">{g}</p>
              <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                <Users className="h-3 w-3" /><span className="fa-num">۵ عضو</span>
                <Calendar className="h-3 w-3 mr-1" /><span>فعال</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

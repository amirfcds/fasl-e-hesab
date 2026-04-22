import { ScreenHeader } from "../ScreenHeader";
import { X, Plus, Users } from "lucide-react";

const emojis = ["🏖️", "🏠", "🍽️", "🎉", "✈️", "⚽"];
const members = ["علی رضایی", "سارا کریمی", "رضا محمدی", "نگین احمدی"];

export const CreateGroupScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="ایجاد گروه جدید" />
    <div className="px-6 pb-8">
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

      <div className="mt-8 space-y-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 block">عنوان گروه</label>
          <input className="app-input" placeholder="مثلاً سفر شمال" defaultValue="سفر شمال" />
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 block">افزودن اعضا</label>
          <div className="relative">
            <input className="app-input pl-11" placeholder="نام عضو…" />
            <button className="absolute top-1/2 -translate-y-1/2 left-2 h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
              <Plus className="h-4 w-4 text-primary-foreground" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {members.map((m, i) => (
              <span key={i} className="chip chip-primary">
                <Users className="h-3 w-3" /> {m}
                <X className="h-3 w-3 opacity-60" />
              </span>
            ))}
          </div>
        </div>

        <div className="app-card p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-bold fa-num">۴</div>
          <div className="flex-1">
            <p className="text-sm font-bold">۴ عضو اضافه شد</p>
            <p className="text-[11px] text-muted-foreground">می‌توانید بعداً اعضای بیشتری اضافه کنید.</p>
          </div>
        </div>
      </div>

      <button className="btn-primary mt-8">ساخت گروه</button>
    </div>
  </div>
);

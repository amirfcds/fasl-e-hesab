import { ScreenHeader } from "../ScreenHeader";
import { Plus, MapPin, Utensils, Home, Plane, MoreVertical } from "lucide-react";

export const GroupDetailScreen = () => (
  <div className="min-h-full">
    <ScreenHeader
      title="خانواده"
      right={
        <button className="icon-btn">
          <MoreVertical className="h-4 w-4" />
        </button>
      }
    />
    <div className="px-5 pb-8">
      {/* Members */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold">اعضا</h3>
        <span className="text-[11px] text-muted-foreground fa-num">۴ نفر</span>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5">
        {[
          { n: "شما", c: "bg-primary/20 text-primary" },
          { n: "مادر", c: "bg-accent/20 text-accent" },
          { n: "پدر", c: "bg-secondary text-foreground" },
          { n: "سارا", c: "bg-secondary text-foreground" },
          { n: "افزودن", c: "bg-card border border-dashed border-border text-muted-foreground" },
        ].map((m, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-shrink-0">
            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center font-bold text-sm ${m.c}`}>
              {i === 4 ? <Plus className="h-5 w-5" /> : m.n[0]}
            </div>
            <p className="text-[10px] text-muted-foreground">{m.n}</p>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="flex items-center justify-between mt-6 mb-3">
        <h3 className="text-sm font-bold">دسته‌بندی‌ها</h3>
        <button className="btn-text text-xs flex items-center gap-1">
          <Plus className="h-3.5 w-3.5" /> افزودن
        </button>
      </div>

      <div className="space-y-2.5">
        {[
          { i: Plane, t: "سفر اردبیل", s: "۸ هزینه", a: "۲,۴۰۰,۰۰۰", cls: "bg-primary/15 text-primary" },
          { i: MapPin, t: "سفر اصفهان", s: "۱۲ هزینه", a: "۴,۸۵۰,۰۰۰", cls: "bg-accent/15 text-accent" },
          { i: Utensils, t: "دورهمی‌ها", s: "۵ هزینه", a: "۹۲۰,۰۰۰", cls: "bg-warning/15 text-[hsl(var(--warning))]" },
          { i: Home, t: "مخارج خانه", s: "۱۸ هزینه", a: "۳,۱۵۰,۰۰۰", cls: "bg-destructive/15 text-destructive" },
        ].map((c, i) => (
          <div key={i} className="app-card p-3.5 flex items-center gap-3">
            <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${c.cls}`}>
              <c.i className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{c.t}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 fa-num">{c.s}</p>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold fa-num">{c.a}</p>
              <p className="text-[10px] text-muted-foreground">تومان</p>
            </div>
          </div>
        ))}

        <button className="app-card w-full p-3.5 flex items-center justify-center gap-2 border-dashed text-muted-foreground">
          <Plus className="h-4 w-4" />
          <span className="text-xs font-semibold">افزودن دسته‌بندی جدید</span>
        </button>
      </div>
    </div>
  </div>
);

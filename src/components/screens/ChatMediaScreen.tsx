import { Image as ImageIcon, FileText, Mic, Link2, Play } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const tabs = [
  { i: ImageIcon, l: "تصاویر", c: "۲۴" },
  { i: FileText, l: "فایل‌ها", c: "۸" },
  { i: Mic, l: "صدا", c: "۱۲" },
  { i: Link2, l: "لینک‌ها", c: "۵" },
];

export const ChatMediaScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="رسانه‌ها و فایل‌ها" />
    <div className="px-5 pb-8">
      <div className="grid grid-cols-4 gap-1.5 mb-4">
        {tabs.map((t, i) => (
          <button key={i} className={`p-2.5 rounded-2xl flex flex-col items-center gap-1 ${i === 0 ? "bg-gradient-to-br from-primary to-accent text-primary-foreground" : "bg-secondary text-muted-foreground"}`}>
            <t.i className="h-4 w-4" />
            <p className="text-[9px] font-bold">{t.l}</p>
            <p className="text-[9px] fa-num opacity-80">{t.c}</p>
          </button>
        ))}
      </div>

      <p className="screen-label mb-2">آبان ماه</p>
      <div className="grid grid-cols-3 gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary/30 via-accent/20 to-[hsl(var(--warning))]/20 relative overflow-hidden">
            {i === 2 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Play className="h-6 w-6 text-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">صوتی‌ها</p>
      <div className="space-y-2">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="app-card p-3 flex items-center gap-3">
            <button className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Play className="h-4 w-4 text-primary-foreground" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-1 h-6">
                {Array.from({ length: 24 }).map((_, j) => (
                  <span key={j} className="w-0.5 bg-primary/60 rounded-full" style={{ height: `${30 + Math.abs(Math.sin(j + i) * 60)}%` }} />
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-1 fa-num">۰۰:۲۸ • سارا کریمی</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

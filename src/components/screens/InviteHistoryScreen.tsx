import { Check, X, Clock, Send, Copy } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const sent = [
  { n: "سارا کریمی", g: "سفر شمال", s: "accepted" },
  { n: "رضا محمدی", g: "همخانه", s: "pending" },
  { n: "نگار سلطانی", g: "دفتر کار", s: "declined" },
];

const stat: Record<string, { i: any; c: string; t: string }> = {
  accepted: { i: Check, c: "text-accent", t: "پذیرفته شد" },
  pending: { i: Clock, c: "text-[hsl(var(--warning))]", t: "در انتظار" },
  declined: { i: X, c: "text-destructive", t: "رد شد" },
};

export const InviteHistoryScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تاریخچه دعوت‌ها" />
    <div className="px-5 pb-8">
      <div className="app-card p-4 bg-gradient-to-br from-primary/15 to-accent/10">
        <p className="text-xs font-bold flex items-center gap-1.5"><Send className="h-3.5 w-3.5 text-primary" /> لینک دعوت شما</p>
        <div className="flex items-center gap-2 mt-3 bg-input rounded-xl p-2.5 border border-border">
          <p className="flex-1 text-[11px] truncate fa-num" dir="ltr">kharjam.app/i/sa48xz</p>
          <button className="icon-btn h-8 w-8"><Copy className="h-3.5 w-3.5 text-primary" /></button>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-3 text-center">
          <div><p className="text-base font-extrabold fa-num">۱۲</p><p className="text-[9px] text-muted-foreground">ارسال</p></div>
          <div><p className="text-base font-extrabold fa-num text-accent">۸</p><p className="text-[9px] text-muted-foreground">پذیرفته</p></div>
          <div><p className="text-base font-extrabold fa-num text-[hsl(var(--warning))]">۳</p><p className="text-[9px] text-muted-foreground">در انتظار</p></div>
        </div>
      </div>

      <p className="screen-label mt-5 mb-2">دعوت‌های اخیر</p>
      <div className="space-y-2">
        {sent.map((s, i) => {
          const S = stat[s.s];
          return (
            <div key={i} className="app-card p-3 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">{s.n[0]}</div>
              <div className="flex-1">
                <p className="text-sm font-bold">{s.n}</p>
                <p className="text-[10px] text-muted-foreground">{s.g}</p>
              </div>
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold ${S.c}`}>
                <S.i className="h-3 w-3" /> {S.t}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

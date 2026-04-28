import { ArrowRight, Phone, Image as ImageIcon, Smile, Mic, Send, Play } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

/** RTL bubbles: current user → right (me), other user → left (them). */
const Bubble = ({
  side,
  children,
  time,
  tail = true,
}: {
  side: "me" | "them";
  children: React.ReactNode;
  time: string;
  tail?: boolean;
}) => {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[78%] px-3.5 py-2.5 text-[12px] leading-6 ${
          me
            ? "rounded-2xl rounded-tr-md text-primary-foreground"
            : "rounded-2xl rounded-tl-md bg-secondary text-foreground"
        } ${tail ? "" : "rounded-2xl"}`}
        style={me ? { background: "var(--gradient-primary)" } : undefined}
      >
        {children}
        <div className={`text-[9px] mt-1 fa-num ${me ? "text-primary-foreground/70 text-left" : "text-muted-foreground text-right"}`}>
          {time}
        </div>
      </div>
    </div>
  );
};

export const PrivateChatScreen = () => (
  <div className="min-h-full flex flex-col">
    <StatusBar />
    <div className="app-header border-b border-border">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2.5 flex-1 justify-center">
        <div>
          <p className="text-sm font-bold">سارا کریمی</p>
          <p className="text-[10px] text-accent">آنلاین</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xs font-bold">س</div>
      </div>
      <button className="icon-btn" aria-label="تماس">
        <Phone className="h-4 w-4" />
      </button>
    </div>

    <div className="flex-1 px-4 py-4 space-y-2.5 hero-bg">
      <div className="text-center"><span className="chip text-[10px]">امروز</span></div>

      <Bubble side="them" time="۹:۱۲">سلام سارا، حساب رستوران دیشب رو زدم 😊</Bubble>
      <Bubble side="me" time="۹:۱۳">عالیه! سهم من چقدر شد؟</Bubble>

      {/* Image bubble */}
      <div className="flex justify-end">
        <div className="max-w-[78%] p-1 rounded-2xl rounded-tl-md bg-secondary">
          <div className="h-28 w-44 rounded-xl bg-gradient-to-br from-primary/40 via-accent/30 to-[hsl(var(--warning))]/30 flex items-center justify-center">
            <ImageIcon className="h-6 w-6 text-foreground/70" />
          </div>
          <div className="text-[9px] mt-1 mr-2 text-muted-foreground fa-num text-right">۹:۱۴</div>
        </div>
      </div>

      <Bubble side="me" time="۹:۱۵">۲۱۰ هزار تومان، فردا کارت به کارت می‌کنم 🙏</Bubble>

      {/* Voice bubble */}
      <div className="flex justify-start">
        <div className="max-w-[78%] px-3 py-2.5 rounded-2xl rounded-tr-md text-primary-foreground flex items-center gap-2.5" style={{ background: "var(--gradient-primary)" }}>
          <button className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
            <Play className="h-3.5 w-3.5 fill-current" />
          </button>
          <div className="flex items-end gap-0.5 h-6">
            {[6, 10, 14, 8, 18, 12, 16, 9, 14, 7, 11, 15].map((h, i) => (
              <span key={i} className="w-0.5 rounded-full bg-white/80" style={{ height: h }} />
            ))}
          </div>
          <span className="text-[10px] fa-num text-primary-foreground/80">۰:۱۲</span>
        </div>
      </div>

      {/* Sticker */}
      <div className="flex justify-end">
        <div className="text-4xl">🎉</div>
      </div>

      <Bubble side="them" time="۹:۲۰">مرسی! 🌹</Bubble>

      <div className="flex justify-end">
        <div className="bg-secondary rounded-2xl rounded-tl-md px-3 py-2.5 flex items-center gap-1">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-1.5 w-1.5 rounded-full bg-muted-foreground/70" />
          ))}
        </div>
      </div>
    </div>

    <div className="px-3 py-2.5 border-t border-border bg-surface">
      <div className="flex items-center gap-2">
        <button className="icon-btn h-9 w-9" aria-label="صدا"><Mic className="h-4 w-4" /></button>
        <div className="flex-1 relative">
          <input className="app-input py-2.5 pl-20" placeholder="پیام بنویس…" />
          <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5 text-muted-foreground">
            <button aria-label="استیکر"><Smile className="h-4 w-4" /></button>
            <button aria-label="تصویر"><ImageIcon className="h-4 w-4" /></button>
          </div>
        </div>
        <button className="h-10 w-10 rounded-full flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }} aria-label="ارسال">
          <Send className="h-4 w-4 -scale-x-100" />
        </button>
      </div>
    </div>
  </div>
);

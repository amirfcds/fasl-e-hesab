import { ArrowRight, Info, Image as ImageIcon, Smile, Mic, Send, Check, CheckCheck, Paperclip } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

type Status = "sent" | "delivered" | "read";

const Ticks = ({ s }: { s: Status }) => {
  if (s === "sent") return <Check className="h-3 w-3 text-primary-foreground/70" />;
  if (s === "delivered") return <CheckCheck className="h-3 w-3 text-primary-foreground/70" />;
  return <CheckCheck className="h-3 w-3" style={{ color: "hsl(195 100% 80%)" }} />;
};

/** Each message shows: avatar + name on top, bubble with text below. */
const Msg = ({
  side, name, text, time, color, g, status,
}: {
  side: "me" | "them";
  name: string; text: string; time: string;
  color?: string; g?: string; status?: Status;
}) => {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-start" : "justify-end"}`}>
      <div className="max-w-[82%]">
        {/* Header: avatar + name (above the message) */}
        <div className={`flex items-center gap-2 mb-1 ${me ? "flex-row-reverse justify-end" : "justify-end"}`}>
          <span className="text-[10px] font-bold" style={{ color: me ? "hsl(var(--primary))" : color }}>
            {me ? "شما" : name}
          </span>
          <div
            className={`h-6 w-6 rounded-full bg-gradient-to-br ${g || "from-primary to-accent"} flex items-center justify-center text-[9px] font-bold`}
          >
            {name[0]}
          </div>
        </div>

        {/* Bubble below the header */}
        <div
          className={`px-3.5 py-2 text-[12px] leading-6 ${
            me
              ? "rounded-2xl rounded-tr-md text-primary-foreground"
              : "rounded-2xl rounded-tl-md bg-secondary text-foreground"
          }`}
          style={me ? { background: "var(--gradient-primary)" } : undefined}
        >
          <div>{text}</div>
          <div className="flex items-center justify-end gap-1 mt-1">
            <span className={`text-[9px] fa-num ${me ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{time}</span>
            {me && status && <Ticks s={status} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export const GroupChatScreen = () => (
  <div className="min-h-full flex flex-col">
    <StatusBar />
    <div className="app-header border-b border-border">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2.5 flex-1 justify-center">
        <div className="text-right">
          <p className="text-sm font-bold">سفر شمال</p>
          <p className="text-[10px] text-muted-foreground fa-num">۵ عضو • ۳ آنلاین</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">س</div>
      </div>
      <button className="icon-btn" aria-label="اطلاعات گروه">
        <Info className="h-4 w-4" />
      </button>
    </div>

    <div className="flex-1 px-4 py-4 space-y-3 hero-bg">
      <div className="text-center"><span className="chip text-[10px]">امروز</span></div>

      <Msg side="them" name="نگار سلطانی" color="hsl(var(--accent))" g="from-accent to-primary"
        text="بچه‌ها فاکتور هتل رو فرستادم تو گروه 📎" time="۹:۰۲" />
      <Msg side="them" name="رضا محمدی" color="hsl(var(--warning))" g="from-[hsl(var(--warning))] to-primary"
        text="مرسی نگار، من سهمم رو زدم" time="۹:۰۵" />
      <Msg side="me" name="علی" text="منم پرداخت کردم ✅ Paid in full." time="۹:۰۷" status="read" />

      {/* Expense system message */}
      <div className="flex justify-center">
        <div className="rounded-xl bg-accent/15 border border-accent/30 px-3 py-2 text-[11px] text-accent text-center">
          💸 علی هزینهٔ «شام رستوران» به مبلغ <span className="fa-num">۸۲۰,۰۰۰</span> اضافه کرد
        </div>
      </div>

      <Msg side="them" name="سارا کریمی" color="hsl(var(--primary))" g="from-primary to-accent"
        text="عالی! کی میاد فردا صبحانه بیرون؟ ☕" time="۹:۲۰" />
      <Msg side="me" name="علی" text="من هستم 🙋‍♂️ I'm in!" time="۹:۲۲" status="delivered" />
      <Msg side="them" name="مریم احمدی" color="hsl(0 84% 62%)" g="from-[hsl(0_84%_62%)] to-primary"
        text="منم میام 💕" time="۹:۲۴" />
    </div>

    <div className="px-3 py-2.5 border-t border-border bg-surface">
      <div className="flex items-center gap-2">
        <button className="icon-btn h-9 w-9" aria-label="پیوست"><Paperclip className="h-4 w-4" /></button>
        <div className="flex-1 relative">
          <input className="app-input py-2.5 pl-16" placeholder="پیام بنویس…" />
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

import { ArrowRight, Info, Image as ImageIcon, Smile, Mic, Send } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

const Msg = ({
  side,
  name,
  text,
  time,
  color,
}: {
  side: "me" | "them";
  name?: string;
  text: string;
  time: string;
  color?: string;
}) => {
  const me = side === "me";
  return (
    <div className={`flex ${me ? "justify-start" : "justify-end"}`}>
      <div className="max-w-[80%]">
        {!me && name && (
          <p className="text-[10px] font-bold mb-1 mr-1" style={{ color }}>
            {name}
          </p>
        )}
        <div
          className={`px-3.5 py-2.5 text-[12px] leading-6 ${
            me
              ? "rounded-2xl rounded-tr-md text-primary-foreground"
              : "rounded-2xl rounded-tl-md bg-secondary text-foreground"
          }`}
          style={me ? { background: "var(--gradient-primary)" } : undefined}
        >
          {text}
          <div className={`text-[9px] mt-1 fa-num ${me ? "text-primary-foreground/70 text-left" : "text-muted-foreground text-right"}`}>
            {time}
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

    <div className="flex-1 px-4 py-4 space-y-2.5 hero-bg">
      <div className="text-center"><span className="chip text-[10px]">امروز</span></div>

      <Msg side="them" name="نگار سلطانی" color="hsl(var(--accent))" text="بچه‌ها فاکتور هتل رو فرستادم تو گروه 📎" time="۹:۰۲" />
      <Msg side="them" name="رضا محمدی" color="hsl(var(--warning))" text="مرسی نگار، من سهمم رو زدم" time="۹:۰۵" />
      <Msg side="me" text="منم پرداخت کردم ✅" time="۹:۰۷" />

      {/* System / expense added */}
      <div className="flex justify-center">
        <div className="rounded-xl bg-accent/15 border border-accent/30 px-3 py-2 text-[11px] text-accent">
          💸 علی هزینهٔ «شام رستوران» به مبلغ <span className="fa-num">۸۲۰,۰۰۰</span> اضافه کرد
        </div>
      </div>

      <Msg side="them" name="سارا کریمی" color="hsl(var(--primary))" text="عالی! کی میاد فردا صبحانه بیرون؟" time="۹:۲۰" />
      <Msg side="me" text="من هستم 🙋‍♂️" time="۹:۲۲" />
      <Msg side="them" name="مریم احمدی" color="hsl(0 84% 62%)" text="منم میام ☕" time="۹:۲۴" />
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

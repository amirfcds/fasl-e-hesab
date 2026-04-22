import { ScreenHeader } from "../ScreenHeader";
import { MoreVertical, Receipt, Wallet, Users } from "lucide-react";

export const GroupOverviewScreen = () => (
  <div className="min-h-full">
    <ScreenHeader
      title="سفر شمال"
      right={
        <button className="icon-btn">
          <MoreVertical className="h-4 w-4" />
        </button>
      }
    />
    <div className="px-5 pb-8">
      <div className="app-card hero-bg p-5">
        <p className="text-xs text-muted-foreground">جمع هزینه‌های گروه</p>
        <p className="text-2xl font-extrabold mt-1 fa-num">
          ۳,۲۴۰,۰۰۰ <span className="text-sm font-medium text-muted-foreground">تومان</span>
        </p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="rounded-xl bg-destructive/15 p-3">
            <p className="text-[11px] text-destructive">بدهی شما</p>
            <p className="text-sm font-bold mt-1 fa-num">۴۸۰,۰۰۰ ت</p>
          </div>
          <div className="rounded-xl bg-accent/15 p-3">
            <p className="text-[11px] text-accent">سهم پرداختی</p>
            <p className="text-sm font-bold mt-1 fa-num">۱۵۰,۰۰۰ ت</p>
          </div>
        </div>

        <div className="flex -space-x-2 space-x-reverse mt-5">
          {["ع", "س", "ر", "ن", "م"].map((c, i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-card flex items-center justify-center text-xs font-bold"
            >
              {c}
            </div>
          ))}
          <span className="!mr-3 text-xs text-muted-foreground self-center fa-num">۵ عضو</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-5">
        {[
          { icon: Receipt, label: "هزینه‌ها", sub: "۱۲" },
          { icon: Wallet, label: "تسویه‌حساب", sub: "۳" },
          { icon: Users, label: "اعضا", sub: "۵" },
        ].map((b, i) => (
          <button key={i} className="app-card p-4 flex flex-col items-center gap-2">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${
              i === 0 ? "bg-primary/15 text-primary" : i === 1 ? "bg-accent/15 text-accent" : "bg-secondary text-foreground"
            }`}>
              <b.icon className="h-5 w-5" />
            </div>
            <p className="text-xs font-bold">{b.label}</p>
            <p className="text-[10px] text-muted-foreground fa-num">{b.sub}</p>
          </button>
        ))}
      </div>

      <h3 className="text-sm font-bold mt-6 mb-3">فعالیت‌های اخیر</h3>
      <div className="space-y-2.5">
        {[
          { t: "هزینه: رستوران دریا", a: "۴۲۰,۰۰۰", by: "سارا پرداخت کرد", cls: "text-destructive" },
          { t: "تسویه: رضا به علی", a: "۱۲۰,۰۰۰", by: "امروز", cls: "text-accent" },
          { t: "هزینه: اجاره ویلا", a: "۱,۸۰۰,۰۰۰", by: "علی پرداخت کرد", cls: "text-destructive" },
        ].map((x, i) => (
          <div key={i} className="app-card p-3.5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold">{x.t}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{x.by}</p>
            </div>
            <p className={`text-xs font-bold fa-num ${x.cls}`}>{x.a} ت</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

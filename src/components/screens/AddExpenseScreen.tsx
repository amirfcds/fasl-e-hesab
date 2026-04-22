import { ScreenHeader } from "../ScreenHeader";
import { Calendar, Check, Tag } from "lucide-react";

export const AddExpenseScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="افزودن هزینه" />
    <div className="px-5 pb-8 space-y-4">
      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">عنوان هزینه</label>
        <div className="relative">
          <Tag className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input className="app-input pr-11" placeholder="مثلاً شام رستوران" defaultValue="رستوران دریا" />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">مبلغ (تومان)</label>
        <input className="app-input text-lg font-bold fa-num text-left" dir="ltr" defaultValue="۴۲۰,۰۰۰" />
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">تاریخ</label>
        <div className="relative">
          <Calendar className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input className="app-input pr-11" defaultValue="۲۷ مهر ۱۴۰۳" />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">پرداخت‌کننده</label>
        <div className="app-card p-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">س</div>
          <p className="text-sm font-bold flex-1">سارا کریمی</p>
          <span className="chip chip-primary">تغییر</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-medium text-muted-foreground">تقسیم بین</label>
          <span className="chip chip-accent">تقسیم مساوی</span>
        </div>
        <div className="app-card p-2 space-y-1">
          {[
            { n: "علی رضایی", s: "۱۰۵,۰۰۰", on: true },
            { n: "سارا کریمی", s: "۱۰۵,۰۰۰", on: true },
            { n: "رضا محمدی", s: "۱۰۵,۰۰۰", on: true },
            { n: "نگین احمدی", s: "۱۰۵,۰۰۰", on: true },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-xl">
              <div className={`h-5 w-5 rounded-md flex items-center justify-center ${p.on ? "bg-primary" : "bg-secondary border border-border"}`}>
                {p.on && <Check className="h-3.5 w-3.5 text-primary-foreground" />}
              </div>
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">{p.n[0]}</div>
              <p className="text-sm flex-1">{p.n}</p>
              <p className="text-xs text-muted-foreground fa-num">{p.s} ت</p>
            </div>
          ))}
        </div>
      </div>

      <button className="btn-primary mt-2">ذخیره هزینه</button>
    </div>
  </div>
);

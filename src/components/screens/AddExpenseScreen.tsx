import { ScreenHeader } from "../ScreenHeader";
import { Calendar, Check, Tag } from "lucide-react";
import { useState } from "react";

type SplitType = "equal" | "percent" | "custom";

const splitOptions: { key: SplitType; label: string }[] = [
  { key: "equal", label: "مساوی" },
  { key: "percent", label: "درصدی" },
  { key: "custom", label: "دلخواه" },
];

const members = [
  { n: "علی رضایی", equal: "۱۰۵,۰۰۰", pct: "۲۵٪", custom: "۱۵۰,۰۰۰" },
  { n: "سارا کریمی", equal: "۱۰۵,۰۰۰", pct: "۲۵٪", custom: "۱۲۰,۰۰۰" },
  { n: "رضا محمدی", equal: "۱۰۵,۰۰۰", pct: "۳۰٪", custom: "۱۰۰,۰۰۰" },
  { n: "نگین احمدی", equal: "۱۰۵,۰۰۰", pct: "۲۰٪", custom: "۵۰,۰۰۰" },
];

export const AddExpenseScreen = () => {
  const [splitType, setSplitType] = useState<SplitType>("equal");

  const getShare = (m: (typeof members)[0]) => {
    if (splitType === "percent") return m.pct;
    if (splitType === "custom") return m.custom + " ت";
    return m.equal + " ت";
  };

  return (
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

        {/* Split Type Selector */}
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 block">نوع تقسیم</label>
          <div className="grid grid-cols-3 gap-2">
            {splitOptions.map((opt) => (
              <button
                key={opt.key}
                onClick={() => setSplitType(opt.key)}
                className={`rounded-xl py-2.5 text-xs font-bold transition-all ${
                  splitType === opt.key
                    ? "bg-primary/15 text-primary border border-primary/40"
                    : "bg-secondary text-muted-foreground border border-transparent"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Members split */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-muted-foreground">تقسیم بین</label>
            <span className="chip chip-accent">
              {splitType === "equal" ? "تقسیم مساوی" : splitType === "percent" ? "تقسیم درصدی" : "تقسیم دلخواه"}
            </span>
          </div>
          <div className="app-card p-2 space-y-1">
            {members.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-2 rounded-xl">
                <div className="h-5 w-5 rounded-md flex items-center justify-center bg-primary">
                  <Check className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">{p.n[0]}</div>
                <p className="text-sm flex-1">{p.n}</p>
                <p className="text-xs text-muted-foreground fa-num">{getShare(p)}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-primary mt-2">ذخیره هزینه</button>
      </div>
    </div>
  );
};

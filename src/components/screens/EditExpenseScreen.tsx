import { ScreenHeader } from "../ScreenHeader";
import { Trash2, Calendar, Tag, Check } from "lucide-react";

export const EditExpenseScreen = () => (
  <div className="min-h-full">
    <ScreenHeader
      title="ویرایش هزینه"
      right={
        <button className="icon-btn text-destructive" aria-label="حذف">
          <Trash2 className="h-4 w-4" />
        </button>
      }
    />
    <div className="px-5 pb-8 space-y-4">
      <div className="app-card p-4 flex items-center gap-3 border-primary/40" style={{ borderColor: "hsl(var(--primary) / 0.4)" }}>
        <div className="h-10 w-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">✎</div>
        <div>
          <p className="text-xs font-bold">در حال ویرایش</p>
          <p className="text-[11px] text-muted-foreground">تغییرات پس از ذخیره اعمال می‌شود.</p>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">عنوان</label>
        <div className="relative">
          <Tag className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input className="app-input pr-11" defaultValue="اجاره ویلا" />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">مبلغ</label>
        <input className="app-input text-lg font-bold fa-num text-left" dir="ltr" defaultValue="۱,۸۰۰,۰۰۰" />
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">تاریخ</label>
        <div className="relative">
          <Calendar className="h-4 w-4 text-muted-foreground absolute top-1/2 -translate-y-1/2 right-4" />
          <input className="app-input pr-11" defaultValue="۲۸ مهر ۱۴۰۳" />
        </div>
      </div>

      <div>
        <label className="text-xs font-medium text-muted-foreground mb-2 block">پرداخت‌کننده</label>
        <div className="app-card p-3 flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">ع</div>
          <p className="text-sm font-bold flex-1">علی رضایی</p>
          <span className="chip">خودتان</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-medium text-muted-foreground">شرکت‌کنندگان</label>
          <span className="chip chip-accent">تقسیم مساوی</span>
        </div>
        <div className="app-card p-2 space-y-1">
          {["علی رضایی", "سارا کریمی", "رضا محمدی", "نگین احمدی", "مریم صادقی"].map((n, i) => (
            <div key={i} className="flex items-center gap-3 p-2 rounded-xl">
              <div className="h-5 w-5 rounded-md bg-primary flex items-center justify-center">
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">{n[0]}</div>
              <p className="text-sm flex-1">{n}</p>
              <p className="text-xs text-muted-foreground fa-num">۳۶۰,۰۰۰ ت</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-2">
        <button className="btn-destructive">حذف هزینه</button>
        <button className="btn-primary">ذخیره تغییرات</button>
      </div>
    </div>
  </div>
);

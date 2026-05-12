import { FileText, FileSpreadsheet, FileJson, Calendar, Download } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const formats = [
  { i: FileText, n: "PDF", d: "گزارش رنگی و آماده چاپ", c: "from-destructive to-[hsl(var(--warning))]" },
  { i: FileSpreadsheet, n: "Excel", d: "صفحه‌گسترده برای تحلیل", c: "from-accent to-primary" },
  { i: FileJson, n: "JSON", d: "داده‌ی خام برای توسعه‌دهنده", c: "from-primary to-accent" },
];

export const ExportScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="خروجی گرفتن" />
    <div className="px-5 pb-8">
      <p className="text-xs text-muted-foreground leading-7 mb-4">
        تاریخچه‌ی هزینه‌ها و تسویه‌ها را به فرمت دلخواه دانلود کنید.
      </p>

      <p className="screen-label mb-2">بازه زمانی</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="app-card p-3">
          <p className="text-[10px] text-muted-foreground">از تاریخ</p>
          <p className="text-sm font-bold fa-num mt-1">۱۴۰۳/۰۸/۰۱</p>
        </div>
        <div className="app-card p-3">
          <p className="text-[10px] text-muted-foreground">تا تاریخ</p>
          <p className="text-sm font-bold fa-num mt-1">۱۴۰۳/۰۸/۳۰</p>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {["این هفته", "این ماه", "۳ ماه", "همه"].map((t, i) => (
          <button key={i} className={`flex-1 py-1.5 rounded-full text-[10px] font-bold ${i === 1 ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"}`}>{t}</button>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">گروه‌ها</p>
      <div className="app-card p-3 space-y-2">
        {["همه گروه‌ها", "سفر شمال", "خانواده", "همخانه"].map((g, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <input type="checkbox" defaultChecked={i === 0} className="accent-[hsl(var(--primary))]" />
            <span className="text-xs flex-1">{g}</span>
          </div>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">قالب فایل</p>
      <div className="space-y-2">
        {formats.map((f, i) => (
          <div key={i} className="app-card p-3 flex items-center gap-3">
            <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.c} flex items-center justify-center`}>
              <f.i className="h-5 w-5 text-background" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{f.n}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{f.d}</p>
            </div>
            <input type="radio" name="fmt" defaultChecked={i === 0} className="accent-[hsl(var(--primary))]" />
          </div>
        ))}
      </div>

      <button className="btn-primary mt-6 inline-flex items-center justify-center gap-2">
        <Download className="h-4 w-4" /> دانلود فایل
      </button>
    </div>
  </div>
);

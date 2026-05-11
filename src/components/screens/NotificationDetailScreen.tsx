import { ArrowRight, MoreHorizontal, DollarSign, Users, Calendar, MapPin } from "lucide-react";
import { StatusBar } from "../PhoneFrame";

export const NotificationDetailScreen = () => (
  <div className="min-h-full">
    <StatusBar />
    <div className="app-header">
      <button className="icon-btn" aria-label="بازگشت">
        <ArrowRight className="h-5 w-5" />
      </button>
      <h1 className="text-base font-bold">جزئیات اعلان</h1>
      <button className="icon-btn" aria-label="بیشتر">
        <MoreHorizontal className="h-4 w-4" />
      </button>
    </div>

    <div className="px-5 pb-8">
      <div className="app-card hero-bg p-5">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
            <DollarSign className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] text-muted-foreground">هزینهٔ جدید</p>
            <p className="text-sm font-bold mt-0.5">شام رستوران دریا</p>
          </div>
          <span className="chip chip-primary text-[10px]">سفر شمال</span>
        </div>

        <p className="text-2xl font-extrabold mt-5 fa-num">
          ۸۲۰,۰۰۰ <span className="text-xs font-medium text-muted-foreground">تومان</span>
        </p>
        <p className="text-[11px] text-muted-foreground mt-1 fa-num">سهم شما: ۱۶۴,۰۰۰ تومان</p>
      </div>

      <p className="screen-label mt-5 mb-2">جزئیات</p>
      <div className="app-card divide-y divide-border">
        {[
          { i: Users, l: "پرداخت‌کننده", v: "علی رضایی" },
          { i: Users, l: "تقسیم بین", v: "۵ نفر (مساوی)" },
          { i: Calendar, l: "تاریخ", v: "۲۷ مهر ۱۴۰۳ — ۲۱:۳۰", num: true },
          { i: MapPin, l: "مکان", v: "رستوران دریا، رامسر" },
        ].map((r, i) => (
          <div key={i} className="flex items-center gap-3 p-3.5">
            <div className="h-9 w-9 rounded-xl bg-secondary text-muted-foreground flex items-center justify-center">
              <r.i className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-muted-foreground">{r.l}</p>
              <p className={`text-sm font-bold mt-0.5 ${r.num ? "fa-num" : ""}`}>{r.v}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">تقسیم</p>
      <div className="app-card p-1.5">
        {[
          { n: "علی رضایی", s: "۱۶۴,۰۰۰", paid: true },
          { n: "سارا کریمی", s: "۱۶۴,۰۰۰" },
          { n: "نگار سلطانی", s: "۱۶۴,۰۰۰" },
          { n: "رضا محمدی", s: "۱۶۴,۰۰۰" },
          { n: "مریم احمدی", s: "۱۶۴,۰۰۰" },
        ].map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold">
              {m.n[0]}
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{m.n}</p>
              {m.paid && <p className="text-[10px] text-accent mt-0.5">پرداخت‌کننده</p>}
            </div>
            <p className="text-sm font-bold fa-num">{m.s} ت</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <button className="btn-secondary">بستن</button>
        <button className="btn-primary">مشاهده هزینه</button>
      </div>
    </div>
  </div>
);

import { ScreenHeader } from "../ScreenHeader";
import { Filter, Plus, UtensilsCrossed, Home, Car, ShoppingBag, Ticket } from "lucide-react";

const expenses = [
  { icon: Home, t: "اجاره ویلا", p: "علی رضایی", d: "۲۸ مهر", a: "۱,۸۰۰,۰۰۰", c: "bg-primary/15 text-primary" },
  { icon: UtensilsCrossed, t: "رستوران دریا", p: "سارا کریمی", d: "۲۷ مهر", a: "۴۲۰,۰۰۰", c: "bg-accent/15 text-accent" },
  { icon: Car, t: "بنزین و عوارض", p: "رضا محمدی", d: "۲۶ مهر", a: "۳۸۰,۰۰۰", c: "bg-warning/15 text-warning" },
  { icon: ShoppingBag, t: "خرید سوپرمارکت", p: "نگین احمدی", d: "۲۶ مهر", a: "۳۴۰,۰۰۰", c: "bg-primary/15 text-primary" },
  { icon: Ticket, t: "بلیط پارک آبی", p: "علی رضایی", d: "۲۵ مهر", a: "۳۰۰,۰۰۰", c: "bg-accent/15 text-accent" },
];

export const ExpenseListScreen = () => (
  <div className="min-h-full relative pb-24">
    <ScreenHeader
      title="هزینه‌ها"
      right={
        <button className="icon-btn">
          <Filter className="h-4 w-4" />
        </button>
      }
    />
    <div className="px-5">
      <div className="flex gap-2 overflow-x-auto pb-1">
        {["همه", "این ماه", "من پرداخت کردم", "سهم من", "تسویه‌نشده"].map((f, i) => (
          <span key={i} className={`chip whitespace-nowrap ${i === 0 ? "chip-primary" : ""}`}>{f}</span>
        ))}
      </div>

      <p className="screen-label mt-5 mb-2">امروز</p>
      <div className="app-card p-4 flex items-center gap-3">
        <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
          <Home className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold">اجاره ویلا</p>
          <p className="text-[11px] text-muted-foreground mt-0.5">علی پرداخت کرد • ۲۸ مهر</p>
        </div>
        <div className="text-left">
          <p className="text-sm font-bold fa-num">۱,۸۰۰,۰۰۰</p>
          <p className="text-[10px] text-destructive fa-num mt-0.5">سهم شما ۳۶۰,۰۰۰</p>
        </div>
      </div>

      <p className="screen-label mt-5 mb-2">این هفته</p>
      <div className="space-y-2.5">
        {expenses.slice(1).map((e, i) => (
          <div key={i} className="app-card p-4 flex items-center gap-3">
            <div className={`h-11 w-11 rounded-xl flex items-center justify-center ${e.c}`}>
              <e.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">{e.t}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{e.p} • {e.d}</p>
            </div>
            <p className="text-sm font-bold fa-num">{e.a}</p>
          </div>
        ))}
      </div>
    </div>

    <button className="fab right-5">
      <Plus className="h-5 w-5" /> افزودن هزینه
    </button>
  </div>
);

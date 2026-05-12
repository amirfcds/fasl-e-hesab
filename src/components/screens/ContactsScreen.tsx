import { Search, UserPlus, Phone, MessageCircle, Star } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

const favs = ["سارا کریمی", "رضا محمدی", "نگار سلطانی"];
const groups: Record<string, { n: string; p: string; on?: boolean }[]> = {
  "الف": [
    { n: "احمد رضایی", p: "۰۹۱۲۳۴۵۶۷۸۹", on: true },
    { n: "امیر حسینی", p: "۰۹۱۰۲۲۲۳۳۴۴" },
  ],
  "س": [
    { n: "سارا کریمی", p: "۰۹۳۵۱۱۱۲۲۳۳", on: true },
    { n: "سعید نوری", p: "۰۹۱۹۸۸۸۷۷۶۶" },
  ],
  "م": [
    { n: "مریم احمدی", p: "۰۹۳۸۲۲۲۳۳۴۴" },
    { n: "محسن طاهری", p: "۰۹۳۰۴۴۴۵۵۶۶" },
  ],
};

export const ContactsScreen = () => (
  <div className="min-h-full">
    <ScreenHeader
      title="مخاطبین"
      right={<button className="icon-btn"><UserPlus className="h-4 w-4" /></button>}
    />
    <div className="px-5 pb-10">
      <div className="relative mb-4">
        <Search className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input className="app-input pr-10" placeholder="جستجوی مخاطب…" />
      </div>

      <p className="screen-label mb-2 flex items-center gap-1"><Star className="h-3 w-3" /> دلخواه‌ها</p>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
        {favs.map((n, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 min-w-[64px]">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">{n[0]}</div>
            <p className="text-[10px]">{n.split(" ")[0]}</p>
          </div>
        ))}
      </div>

      {Object.entries(groups).map(([letter, people]) => (
        <div key={letter} className="mb-4">
          <p className="screen-label mb-2 fa-num">{letter}</p>
          <div className="app-card divide-y divide-border">
            {people.map((p, i) => (
              <div key={i} className="flex items-center gap-3 p-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold">{p.n[0]}</div>
                  {p.on && <span className="absolute bottom-0 left-0 h-2.5 w-2.5 rounded-full bg-accent border-2 border-background" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">{p.n}</p>
                  <p className="text-[10px] text-muted-foreground fa-num mt-0.5">{p.p}</p>
                </div>
                <button className="icon-btn h-9 w-9"><MessageCircle className="h-4 w-4 text-primary" /></button>
                <button className="icon-btn h-9 w-9"><Phone className="h-4 w-4 text-accent" /></button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

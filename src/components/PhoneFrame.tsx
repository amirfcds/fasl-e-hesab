import { ReactNode } from "react";

export const StatusBar = () => (
  <div className="status-bar">
    <span className="fa-num">۹:۴۱</span>
    <div className="flex items-center gap-1 opacity-80">
      <span className="h-2 w-2 rounded-full bg-foreground" />
      <span className="h-2 w-3 rounded-sm bg-foreground" />
      <span className="h-2.5 w-5 rounded-sm border border-foreground/70" />
    </div>
  </div>
);

export const PhoneFrame = ({ label, children }: { label: string; children: ReactNode }) => (
  <div className="flex flex-col items-center gap-3">
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">{children}</div>
    </div>
    <div className="screen-label">{label}</div>
  </div>
);

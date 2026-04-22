import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import { StatusBar } from "./PhoneFrame";

/** RTL header: back arrow appears on the right visually (start in RTL). */
export const ScreenHeader = ({
  title,
  right,
  onBack = true,
}: {
  title: string;
  right?: ReactNode;
  onBack?: boolean;
}) => (
  <>
    <StatusBar />
    <div className="app-header">
      {onBack ? (
        <button className="icon-btn" aria-label="بازگشت">
          <ArrowRight className="h-5 w-5" />
        </button>
      ) : (
        <span className="w-10" />
      )}
      <h1 className="text-base font-bold">{title}</h1>
      <div className="w-10 flex justify-end">{right}</div>
    </div>
  </>
);

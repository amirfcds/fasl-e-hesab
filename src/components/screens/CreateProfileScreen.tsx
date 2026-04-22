import { Camera, User } from "lucide-react";
import { ScreenHeader } from "../ScreenHeader";

export const CreateProfileScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="ساخت پروفایل" />
    <div className="px-6 pt-2 pb-8">
      <p className="text-xs text-muted-foreground leading-6 text-center">
        برای شناخته شدن توسط دوستانتان، نام و تصویر خود را وارد کنید.
      </p>

      <div className="flex justify-center mt-8">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-secondary border border-border flex items-center justify-center">
            <User className="h-12 w-12 text-muted-foreground" />
          </div>
          <button
            className="absolute bottom-0 left-0 h-9 w-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-elev)" }}
            aria-label="انتخاب عکس"
          >
            <Camera className="h-4 w-4 text-primary-foreground" />
          </button>
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 block">نام</label>
          <input className="app-input" placeholder="مثلاً علی رضایی" defaultValue="علی رضایی" />
        </div>
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-2 block">نام کاربری</label>
          <input className="app-input" placeholder="@username" defaultValue="@ali.rz" />
        </div>
      </div>

      <button className="btn-primary mt-8">ذخیره</button>
    </div>
  </div>
);

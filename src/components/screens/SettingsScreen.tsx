import { ScreenHeader } from "../ScreenHeader";
import { DollarSign, User, Trash2, Info, Globe, Moon, ChevronLeft, Send, MessageSquare } from "lucide-react";

export const SettingsScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="تنظیمات" />
    <div className="px-5 pb-8 space-y-5">
      <div>
        <p className="screen-label mb-2">عمومی</p>
        <div className="app-card divide-y divide-border">
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">واحد پول</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">تومان (IRT)</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
              <Globe className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">زبان</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">فارسی</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
              <Moon className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">تم تاریک</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">همیشه فعال</p>
            </div>
            <div className="w-10 h-6 rounded-full bg-primary relative">
              <div className="absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="screen-label mb-2">حساب کاربری</p>
        <div className="app-card divide-y divide-border">
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">ویرایش پروفایل</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">تغییر نام و تصویر</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-destructive/15 text-destructive flex items-center justify-center">
              <Trash2 className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-destructive">حذف حساب کاربری</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">حذف دائمی اطلاعات</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div>
        <p className="screen-label mb-2">اتصال به پیام‌رسان‌ها</p>
        <div className="app-card divide-y divide-border">
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[hsl(195_100%_45%)] to-[hsl(210_100%_55%)] flex items-center justify-center text-sm font-extrabold text-primary-foreground">ب</div>
            <div className="flex-1">
              <p className="text-sm font-bold">بله Bale</p>
              <p className="text-[11px] text-accent mt-0.5">متصل • @KharjamBot</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[hsl(200_90%_55%)] to-[hsl(210_85%_45%)] flex items-center justify-center">
              <Send className="h-4 w-4 text-primary-foreground -rotate-45" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">تلگرام Telegram</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">برای اتصال کلیک کنید</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex items-center gap-3 p-4">
            <div className="h-9 w-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">تنظیمات اعلان‌ها</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">انتخاب نوع پیام‌های دریافتی</p>
            </div>
            <ChevronLeft className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div>
        <p className="screen-label mb-2">درباره</p>
        <div className="app-card p-4 flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <Info className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold">درباره دِنگ</p>
            <p className="text-[11px] text-muted-foreground mt-0.5 fa-num">نسخهٔ ۱.۰.۰ • ساخت ۱۴۰۳</p>
          </div>
          <ChevronLeft className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>

      <p className="text-center text-[10px] text-muted-foreground pt-2">
        ساخته شده با ❤ در ایران
      </p>
    </div>
  </div>
);

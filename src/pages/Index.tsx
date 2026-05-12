import { PhoneFrame } from "@/components/PhoneFrame";
import { WelcomeScreen } from "@/components/screens/WelcomeScreen";
import { LoginScreen } from "@/components/screens/LoginScreen";
import { RegisterScreen } from "@/components/screens/RegisterScreen";
import { OtpScreen } from "@/components/screens/OtpScreen";
import { CreateProfileScreen } from "@/components/screens/CreateProfileScreen";
import { DashboardScreen } from "@/components/screens/DashboardScreen";
import { GroupListScreen } from "@/components/screens/GroupListScreen";
import { CreateGroupScreen } from "@/components/screens/CreateGroupScreen";
import { GroupDetailScreen } from "@/components/screens/GroupDetailScreen";
import { GroupOverviewScreen } from "@/components/screens/GroupOverviewScreen";
import { ExpenseListScreen } from "@/components/screens/ExpenseListScreen";
import { AddExpenseScreen } from "@/components/screens/AddExpenseScreen";
import { EditExpenseScreen } from "@/components/screens/EditExpenseScreen";
import { SettlementScreen } from "@/components/screens/SettlementScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { SettingsScreen } from "@/components/screens/SettingsScreen";
import { ChatListScreen } from "@/components/screens/ChatListScreen";
import { PrivateChatScreen } from "@/components/screens/PrivateChatScreen";
import { GroupChatScreen } from "@/components/screens/GroupChatScreen";
import { NewChatScreen } from "@/components/screens/NewChatScreen";
import { ChatGroupInfoScreen } from "@/components/screens/ChatGroupInfoScreen";
import { ForgotPasswordScreen } from "@/components/screens/ForgotPasswordScreen";
import { ChangePasswordScreen } from "@/components/screens/ChangePasswordScreen";
import { LanguageScreen } from "@/components/screens/LanguageScreen";
import { NotificationListScreen } from "@/components/screens/NotificationListScreen";
import { NotificationDetailScreen } from "@/components/screens/NotificationDetailScreen";
import { LightThemeScreen } from "@/components/screens/LightThemeScreen";
import { ContactsScreen } from "@/components/screens/ContactsScreen";
import { SkeletonShowcaseScreen } from "@/components/Skeleton";
import { ResetPasswordScreen } from "@/components/screens/ResetPasswordScreen";
import { VerifyEmailScreen } from "@/components/screens/VerifyEmailScreen";
import { VerifyPhoneScreen } from "@/components/screens/VerifyPhoneScreen";
import { SessionManagementScreen } from "@/components/screens/SessionManagementScreen";
import { DeleteAccountScreen } from "@/components/screens/DeleteAccountScreen";
import { OfflineScreen } from "@/components/screens/OfflineScreen";
import { MaintenanceScreen } from "@/components/screens/MaintenanceScreen";
import { NotFound404Screen } from "@/components/screens/NotFound404Screen";
import { ServerError500Screen } from "@/components/screens/ServerError500Screen";
import { MonthlyReportScreen } from "@/components/screens/MonthlyReportScreen";
import { SpendingAnalyticsScreen } from "@/components/screens/SpendingAnalyticsScreen";
import { DebtsSummaryScreen } from "@/components/screens/DebtsSummaryScreen";
import { PublicProfileScreen } from "@/components/screens/PublicProfileScreen";
import { ActivityScreen } from "@/components/screens/ActivityScreen";
import { InviteHistoryScreen } from "@/components/screens/InviteHistoryScreen";
import { EmptyStateScreen } from "@/components/screens/EmptyStateScreen";
import { ExportScreen } from "@/components/screens/ExportScreen";
import { ChatMediaScreen } from "@/components/screens/ChatMediaScreen";
import { PinnedMessagesScreen } from "@/components/screens/PinnedMessagesScreen";
import { SearchMessagesScreen } from "@/components/screens/SearchMessagesScreen";
import { BlockedUsersScreen } from "@/components/screens/BlockedUsersScreen";
import { MessengerIntegrationsScreen } from "@/components/screens/MessengerIntegrationsScreen";

const screens = [
  { label: "۰۱ — خوش‌آمدگویی", node: <WelcomeScreen /> },
  { label: "۰۲ — ورود", node: <LoginScreen /> },
  { label: "۰۳ — ثبت‌نام", node: <RegisterScreen /> },
  { label: "۰۴ — تأیید کد", node: <OtpScreen /> },
  { label: "۰۵ — ساخت پروفایل", node: <CreateProfileScreen /> },
  { label: "۰۶ — داشبورد", node: <DashboardScreen /> },
  { label: "۰۷ — لیست گروه‌ها", node: <GroupListScreen /> },
  { label: "۰۸ — ایجاد گروه", node: <CreateGroupScreen /> },
  { label: "۰۹ — جزئیات گروه (دسته‌بندی)", node: <GroupDetailScreen /> },
  { label: "۱۰ — خلاصه گروه", node: <GroupOverviewScreen /> },
  { label: "۱۱ — لیست هزینه‌ها", node: <ExpenseListScreen /> },
  { label: "۱۲ — افزودن هزینه", node: <AddExpenseScreen /> },
  { label: "۱۳ — ویرایش هزینه", node: <EditExpenseScreen /> },
  { label: "۱۴ — تسویه‌حساب", node: <SettlementScreen /> },
  { label: "۱۵ — پروفایل", node: <ProfileScreen /> },
  { label: "۱۶ — تنظیمات", node: <SettingsScreen /> },
  { label: "۱۷ — گفتگوها", node: <ChatListScreen /> },
  { label: "۱۸ — چت شخصی", node: <PrivateChatScreen /> },
  { label: "۱۹ — چت گروهی", node: <GroupChatScreen /> },
  { label: "۲۰ — شروع گفتگو", node: <NewChatScreen /> },
  { label: "۲۱ — اطلاعات گروه چت", node: <ChatGroupInfoScreen /> },
  { label: "۲۲ — فراموشی رمز عبور", node: <ForgotPasswordScreen /> },
  { label: "۲۳ — تغییر رمز عبور", node: <ChangePasswordScreen /> },
  { label: "۲۴ — انتخاب زبان (فا/EN)", node: <LanguageScreen /> },
  { label: "۲۵ — اعلان‌ها", node: <NotificationListScreen /> },
  { label: "۲۶ — جزئیات اعلان", node: <NotificationDetailScreen /> },
  { label: "۲۷ — تم روشن (Light)", node: <LightThemeScreen /> },
  { label: "۲۸ — مخاطبین", node: <ContactsScreen /> },
  { label: "۲۹ — حالت بارگذاری (Skeleton)", node: <SkeletonShowcaseScreen /> },
  { label: "۳۰ — رمز جدید (Reset)", node: <ResetPasswordScreen /> },
  { label: "۳۱ — تأیید ایمیل", node: <VerifyEmailScreen /> },
  { label: "۳۲ — تأیید شماره", node: <VerifyPhoneScreen /> },
  { label: "۳۳ — مدیریت دستگاه‌ها", node: <SessionManagementScreen /> },
  { label: "۳۴ — حذف حساب", node: <DeleteAccountScreen /> },
  { label: "۳۵ — حالت آفلاین", node: <OfflineScreen /> },
  { label: "۳۶ — تعمیرات سرور", node: <MaintenanceScreen /> },
  { label: "۳۷ — خطای ۴۰۴", node: <NotFound404Screen /> },
  { label: "۳۸ — خطای ۵۰۰", node: <ServerError500Screen /> },
  { label: "۳۹ — گزارش ماهانه", node: <MonthlyReportScreen /> },
  { label: "۴۰ — تحلیل خرج", node: <SpendingAnalyticsScreen /> },
  { label: "۴۱ — خلاصه بدهی‌ها", node: <DebtsSummaryScreen /> },
  { label: "۴۲ — پروفایل عمومی", node: <PublicProfileScreen /> },
  { label: "۴۳ — فعالیت‌ها", node: <ActivityScreen /> },
  { label: "۴۴ — تاریخچه دعوت‌ها", node: <InviteHistoryScreen /> },
  { label: "۴۵ — حالت خالی (Empty)", node: <EmptyStateScreen /> },
  { label: "۴۶ — خروجی گرفتن (Export)", node: <ExportScreen /> },
  { label: "۴۷ — رسانه‌های چت", node: <ChatMediaScreen /> },
  { label: "۴۸ — پیام‌های پین‌شده", node: <PinnedMessagesScreen /> },
  { label: "۴۹ — جستجوی پیام", node: <SearchMessagesScreen /> },
  { label: "۵۰ — کاربران بلاک‌شده", node: <BlockedUsersScreen /> },
  { label: "۵۱ — اتصال پیام‌رسان (بله/تلگرام)", node: <MessengerIntegrationsScreen /> },
];

const palette = [
  { name: "Background", hex: "#0F0F0F", cls: "bg-background border-border" },
  { name: "Surface", hex: "#1A1A1A", cls: "bg-surface border-border" },
  { name: "Card", hex: "#1F1F1F", cls: "bg-card border-border" },
  { name: "Primary", hex: "#4A90E2", cls: "bg-primary" },
  { name: "Accent", hex: "#00C896", cls: "bg-accent" },
  { name: "Text", hex: "#FFFFFF", cls: "bg-foreground" },
  { name: "Muted", hex: "#AFAFAF", cls: "bg-muted-foreground" },
  { name: "Danger", hex: "#EF4444", cls: "bg-destructive" },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="hero-bg">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
          <span className="chip chip-primary mb-4">
            دِنگ — Persian RTL Expense Sharing UI Kit
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
            اپ تقسیم هزینه‌های گروهی
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              مدرن، تاریک و کاملاً فارسی
            </span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mt-5 leading-8">
            طراحی کامل رابط کاربری موبایل برای یک اپ به سبک اسپلیت‌وایز — با چیدمان راست‌به‌چپ،
            تایپوگرافی وزیرمتن و ۱۲ صفحهٔ آمادهٔ اجرا.
          </p>
        </div>
      </section>

      {/* Screens grid */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 place-items-center">
          {screens.map((s) => (
            <PhoneFrame key={s.label} label={s.label}>
              {s.node}
            </PhoneFrame>
          ))}
        </div>
      </section>

      {/* UI Kit */}
      <section className="border-t border-border bg-surface/40">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">کیت رابط کاربری</h2>
          <p className="text-muted-foreground mt-2 text-sm">
            پالت رنگ، تایپوگرافی، دکمه‌ها، فیلدها و کارت‌های استفاده‌شده در طراحی.
          </p>

          {/* Colors */}
          <h3 className="text-sm font-bold mt-10 mb-4 screen-label">رنگ‌ها</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {palette.map((c) => (
              <div key={c.name} className="app-card p-4">
                <div className={`h-16 rounded-xl ${c.cls}`} />
                <p className="text-sm font-bold mt-3">{c.name}</p>
                <p className="text-[11px] text-muted-foreground fa-num">{c.hex}</p>
              </div>
            ))}
          </div>

          {/* Typography */}
          <h3 className="text-sm font-bold mt-10 mb-4 screen-label">تایپوگرافی — وزیرمتن</h3>
          <div className="app-card p-6 space-y-3">
            <p className="text-3xl font-extrabold">تیتر اصلی — خوش آمدید</p>
            <p className="text-xl font-bold">تیتر دوم — سفر شمال</p>
            <p className="text-base font-semibold">تیتر کارت — رستوران دریا</p>
            <p className="text-sm text-muted-foreground leading-7">
              متن بدنه: هزینه‌های گروهی خود را به صورت منصفانه بین دوستان تقسیم کنید و تسویه‌حساب‌ها را به ساده‌ترین شکل انجام دهید.
            </p>
            <p className="text-xs text-muted-foreground">متن کوچک — توضیحات کمکی</p>
          </div>

          {/* Buttons */}
          <h3 className="text-sm font-bold mt-10 mb-4 screen-label">دکمه‌ها</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="btn-primary">دکمهٔ اصلی</button>
            <button className="btn-accent">دکمهٔ تأکیدی</button>
            <button className="btn-secondary">دکمهٔ فرعی</button>
            <button className="btn-destructive">دکمهٔ حذف</button>
          </div>

          {/* Inputs */}
          <h3 className="text-sm font-bold mt-10 mb-4 screen-label">فیلدها</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-2 block">عادی</label>
              <input className="app-input" placeholder="نام شما" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block">فوکوس</label>
              <input className="app-input" style={{ borderColor: "hsl(var(--primary))", boxShadow: "0 0 0 3px hsl(var(--primary) / 0.18)" }} defaultValue="در حال تایپ…" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-2 block">خطا</label>
              <input className="app-input error" defaultValue="ایمیل نامعتبر" />
              <p className="text-[11px] text-destructive mt-1.5">ایمیل وارد شده صحیح نیست.</p>
            </div>
          </div>

          {/* Cards */}
          <h3 className="text-sm font-bold mt-10 mb-4 screen-label">کارت‌ها</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="app-card p-4 flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-accent" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold">سفر شمال</p>
                  <span className="text-[11px] text-muted-foreground fa-num">۵ نفر</span>
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <p className="text-[11px] text-muted-foreground fa-num">جمع: ۳,۲۴۰,۰۰۰ ت</p>
                  <span className="text-xs font-bold text-destructive fa-num">- ۴۸۰,۰۰۰</span>
                </div>
              </div>
            </div>
            <div className="app-card p-4 flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center font-bold">₪</div>
              <div className="flex-1">
                <p className="text-sm font-bold">رستوران دریا</p>
                <p className="text-[11px] text-muted-foreground mt-0.5">سارا کریمی • ۲۷ مهر</p>
              </div>
              <p className="text-sm font-bold fa-num">۴۲۰,۰۰۰</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-xs text-muted-foreground">
          © دِنگ ۱۴۰۳ — طراحی‌شده با وزیرمتن و چیدمان راست‌به‌چپ.
        </div>
      </footer>
    </main>
  );
};

export default Index;

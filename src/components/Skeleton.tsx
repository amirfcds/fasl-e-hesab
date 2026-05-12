import { ScreenHeader } from "./ScreenHeader";

/** Shared skeleton primitives for loading states across the app. */
export const SkLine = ({ w = "100%", h = 12 }: { w?: string | number; h?: number }) => (
  <div className="sk" style={{ width: w, height: h }} />
);
export const SkCircle = ({ s = 40 }: { s?: number }) => (
  <div className="sk-circle" style={{ width: s, height: s }} />
);
export const SkBox = ({ h = 80 }: { h?: number }) => (
  <div className="sk" style={{ height: h, borderRadius: 20 }} />
);

const Row = () => (
  <div className="app-card p-4 flex items-center gap-3">
    <SkCircle s={44} />
    <div className="flex-1 space-y-2">
      <SkLine w="55%" />
      <SkLine w="80%" h={10} />
    </div>
    <SkLine w={56} h={14} />
  </div>
);

export const SkeletonShowcaseScreen = () => (
  <div className="min-h-full">
    <ScreenHeader title="حالت بارگذاری" />
    <div className="px-5 pb-8 space-y-5">
      <p className="screen-label">کارت‌ها</p>
      <div className="space-y-2.5">
        <Row />
        <Row />
        <Row />
      </div>

      <p className="screen-label">پروفایل</p>
      <div className="app-card p-5 flex flex-col items-center gap-3">
        <SkCircle s={72} />
        <SkLine w="50%" />
        <SkLine w="35%" h={10} />
      </div>

      <p className="screen-label">چت</p>
      <div className="space-y-2">
        <div className="flex justify-end"><div className="sk" style={{ width: 180, height: 40, borderRadius: 18 }} /></div>
        <div className="flex"><div className="sk" style={{ width: 220, height: 56, borderRadius: 18 }} /></div>
        <div className="flex justify-end"><div className="sk" style={{ width: 120, height: 32, borderRadius: 18 }} /></div>
      </div>

      <p className="screen-label">گالری</p>
      <div className="grid grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => <SkBox key={i} h={70} />)}
      </div>
    </div>
  </div>
);

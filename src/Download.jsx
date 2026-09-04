import { useEffect, useState } from "react";
import { isAndroid, isIOS } from "react-device-detect";

const ANDROID_LINK =
  "https://play.google.com/store/apps/details?id=com.afriam.onehelp.app";
const IOS_LINK =
  "https://apps.apple.com/us/app/one-help-global-foundation/id6764048932";

function PhonePreview() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] lg:w-[360px]">
      <div className="absolute inset-6 rounded-[48px] bg-[#FF6D00]/25 blur-3xl" />
      <div className="relative overflow-hidden rounded-[42px] border-[10px] border-[#111111] bg-[#111111] shadow-[0_40px_80px_rgba(17,17,17,0.28)]">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="min-h-[580px] bg-gradient-to-b from-[#FFF4EC] to-[#F9FAFB] px-4 pb-6 pt-10">
          <div className="mb-6 flex items-center justify-between">
            <img src="/assets/app_logo.png" alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B7280]">
              One Help
            </span>
          </div>

          <p className="text-sm font-medium text-[#FF6D00]">Discover</p>
          <h3 className="mt-1 text-2xl font-bold leading-tight text-[#111111]">
            Causes worth backing
          </h3>

          <div className="mt-5 space-y-3">
            {[
              { title: "Clean water for schools", raised: "68%", tone: "from-[#FF6D00] to-[#FF9E40]" },
              { title: "Emergency food relief", raised: "41%", tone: "from-[#E65100] to-[#FF6D00]" },
              { title: "Community health clinics", raised: "84%", tone: "from-[#FF9E40] to-[#FF6D00]" },
            ].map((cause) => (
              <div key={cause.title} className="rounded-2xl bg-white p-3 shadow-sm">
                <div className="mb-3 h-16 rounded-xl bg-gradient-to-r from-[#FFF4EC] to-[#FFE0C2]" />
                <p className="text-sm font-semibold text-[#111111]">{cause.title}</p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#F3F4F6]">
                  <div className={`h-full rounded-full bg-gradient-to-r ${cause.tone}`} style={{ width: cause.raised }} />
                </div>
                <p className="mt-1 text-[11px] text-[#6B7280]">{cause.raised} funded</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Download() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    const redirectTimer = setTimeout(() => {
      if (isAndroid) window.location.href = ANDROID_LINK;
      if (isIOS) window.location.href = IOS_LINK;
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FFF4EC] via-white to-[#F9FAFB] py-20 lg:py-0">
      <div className="absolute -left-40 -top-40 h-[700px] w-[700px] rounded-full bg-[#FF9E40] opacity-20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[700px] w-[700px] rounded-full bg-[#FF6D00] opacity-15 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] items-center px-6 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="mb-10 flex items-center gap-4">
              <img
                src="/assets/app_logo.png"
                alt="One Help Global logo"
                className="size-28 rounded-xl bg-[#111111] object-cover shadow-md"
              />
              <span className="text-2xl font-semibold text-gray-700">
                One Help<br />Global
              </span>
            </div>

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
              Discover causes
              <span className="block bg-gradient-to-r from-[#FF6D00] to-[#E65100] bg-clip-text text-transparent">
                worth backing
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-xl leading-relaxed text-gray-600">
              The official One Help Global mobile app for finding verified campaigns,
              following impact stories, and giving securely through your browser.
            </p>

            <div className="mt-10 flex flex-wrap gap-6">
              <a href={ANDROID_LINK} className="transition hover:scale-105">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-16"
                />
              </a>
              <a href={IOS_LINK} className="transition hover:scale-105">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-16"
                />
              </a>
            </div>

            {(isAndroid || isIOS) && (
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <span className="h-2 w-2 animate-ping rounded-full bg-green-500" />
                Redirecting to your app store in
                <span className="ml-1 font-semibold text-[#FF6D00]">{countdown}</span>
                seconds...
              </div>
            )}

            <p className="mt-10 text-xs text-gray-400">Available for Android and iOS devices</p>
          </div>

          <div className="relative flex justify-center">
            <PhonePreview />
          </div>
        </div>
      </div>
    </div>
  );
}

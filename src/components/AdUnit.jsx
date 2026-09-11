import { useEffect, useRef } from "react"

const ADS_CLIENT = 'ca-pub-1247847789104095';

const ensureAdsScript = () => new Promise((resolve) => {
  if (window.adsbygoogle?.loaded) return resolve();
  const existing = document.querySelector('script[data-adsbygoogle]');
  if (existing) {
    if (window.adsbygoogle) return resolve();
    existing.addEventListener('load', () => resolve(), { once: true });
    return;
  }
  const s = document.createElement('script');
  s.async = true;
  s.crossOrigin = 'anonymous';
  s.dataset.adsbygoogle = 'true';
  s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CLIENT}`;
  s.addEventListener('load', () => resolve(), { once: true });
  s.addEventListener('error', () => resolve(), { once: true });
  document.head.appendChild(s);
});

export const AdUnit = () => {
  const ref = useRef(null)
  const pushed = useRef(false)

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const load = () => {
      if (pushed.current) return;
      pushed.current = true
      ensureAdsScript().then(() => {
        try {
          window.adsbygoogle = window.adsbygoogle || []
          window.adsbygoogle.push({})
        } catch (e) { void e }
      });
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          io.disconnect();
        }
      }, { rootMargin: '200px' });
      io.observe(el);
      return () => io.disconnect();
    }
    load();
  }, [])

  return (
    <div className="w-full overflow-hidden min-h-[280px] flex items-center justify-center bg-gray-50/50 dark:bg-white/[0.02]">
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "280px" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-1247847789104095"
        data-ad-slot="6150720503"
      />
    </div>
  )
}

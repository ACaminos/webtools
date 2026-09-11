import { useEffect, useRef } from "react"

export const AdUnit = () => {
  const ref = useRef(null)
  const pushed = useRef(false)

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const load = () => {
      if (pushed.current) return;
      try {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      } catch (e) { void e }
      pushed.current = true
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

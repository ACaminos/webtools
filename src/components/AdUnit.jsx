import { useEffect, useRef } from "react"

export const AdUnit = () => {
  const ref = useRef(null)
  const pushed = useRef(false)

  useEffect(() => {
    if (ref.current && !pushed.current) {
      try {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
      } catch (e) { void e }
      pushed.current = true
    }
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-1247847789104095"
        data-ad-slot="6150720503"
      />
    </div>
  )
}

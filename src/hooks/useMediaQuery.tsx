import { useEffect, useState } from "react"

export function useMediaQuery(query) {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = (event) => {
    setIsMobile(event.matches)
  }

  useEffect(() => {
    // Window does not exist on SSR
    if (typeof window !== "undefined") {
      const mql = window.matchMedia(query)

      mql.addEventListener("onresize", handleResize)

      setIsMobile(mql.matches) // Set initial state in DOM

      return () => mql.removeEventListener("onresize", handleResize)
    }
  }, [])

  return { isMobile }
}

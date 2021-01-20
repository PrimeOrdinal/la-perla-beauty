import { useEffect, useRef, useState } from "react"

export function useHover(): [
  React.MutableRefObject<HTMLElement | null>,
  boolean
] {
  const [value, setValue] = useState(false)

  const ref = useRef<HTMLElement>(null)

  const handleMouseOver = () => setValue(true)
  const handleMouseOut = () => setValue(false)

  useEffect(() => {
    const node = ref.current

    node?.addEventListener("mouseover", handleMouseOver)
    node?.addEventListener("mouseout", handleMouseOut)

    return () => {
      node?.removeEventListener("mouseover", handleMouseOver)
      node?.removeEventListener("mouseout", handleMouseOut)
    }
  })

  return [ref, value]
}

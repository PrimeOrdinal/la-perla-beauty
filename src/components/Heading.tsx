import React from "react"

export type HeadingProps = {
  level: number
}

export const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  let component

  switch (props.level) {
    case 1:
      component = <h1 {...props}>{children}</h1>
      break
    case 2:
      component = <h2 {...props}>{children}</h2>
      break
    case 3:
      component = <h3 {...props}>{children}</h3>
      break
    case 4:
      component = <h4 {...props}>{children}</h4>
      break
    case 5:
      component = <h5 {...props}>{children}</h5>
      break
    case 6:
      component = <h6 {...props}>{children}</h6>
      break
  }

  return component
}

import { themeGet } from "@styled-system/theme-get"
import styled from "styled-components"
import {
  color,
  compose,
  layout,
  space,
  variant,
  ColorProps,
  LayoutProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type TagProps = ColorProps & LayoutProps & SpaceProps & VariantProps

export const Tag: React.FC<TagProps> = styled.button`

  ${variant({
    prop: "colors",
    variants: {
      primary: {
        color: "white",
        bg: themeGet("colors.primary", "grey"),
      },
      secondary: {
        color: "white",
        bg: themeGet("colors.secondary", "grey"),
      },
      tertiary: {
        color: "white",
        bg: themeGet("colors.tertiary", "grey"),
      },
    },
  })}

  ${compose(color, layout, space)}
`

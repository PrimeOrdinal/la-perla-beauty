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
        bg: themeGet("tag.primary.backgroundColor", "grey"),
        color: themeGet("tag.primary.color", "white"),
      },
      secondary: {
        bg: themeGet("tag.secondary.backgroundColor", "grey"),
        color: themeGet("tag.primary.color", "white"),
      },
      tertiary: {
        bg: themeGet("tag.tertiary.backgroundColor", "grey"),
        color: themeGet("tag.primary.color", "white"),
      },
    },
  })}

  ${compose(color, layout, space)}
`

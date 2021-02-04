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

export type LeafProps = ColorProps & LayoutProps & SpaceProps & VariantProps

export const Leaf: React.FC<LeafProps> = styled.button`

  ${variant({
    prop: "colors",
    variants: {
      primary: {
        backgroundColor: themeGet("leaf.primary.backgroundColor", "grey"),
        color: themeGet("leaf.tertiary.color", "white"),
      },
      secondary: {
        backgroundColor: themeGet("leaf.secondary.backgroundColor", "grey"),
        color: themeGet("leaf.tertiary.color", "white"),
      },
      tertiary: {
        backgroundColor: themeGet("leaf.tertiary.backgroundColor", "grey"),
        color: themeGet("leaf.tertiary.color", "white"),
      },
    },
  })}

  ${compose(color, layout, space)}
`

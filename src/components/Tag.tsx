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

export const Tag: React.FC<TagProps> = styled.span`
  background-color: ${themeGet("colors.orange")};
  border-radius: ${themeGet("radii.2")}px;
  display: block;
  font-size: ${themeGet("fontSizes.small")}px;
  padding: ${themeGet("space.1")}px;
  text-align: center;
  text-transform: uppercase;

  ${variant({
    prop: "availability",
    variants: {
      InStock: {
        backgroundColor: "transparent",
        color: "transparent",
      },
      LimitedAvailability: {
        backgroundColor: "orange",
        color: "black",
      },
      OnlineOnly: {
        backgroundColor: "pink",
        color: "black",
      },
      OutOfStock: {
        backgroundColor: "lilac",
        color: "black",
      },
      PreOrder: {
        backgroundColor: "lightgreen",
        color: "black",
      },
      SoldOut: {
        backgroundColor: "beige",
        color: "black",
      },
    },
  })}

  ${compose(color, layout, space)}
`

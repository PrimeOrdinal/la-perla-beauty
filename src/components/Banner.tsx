import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
import React from "react"
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

export type BannerProps = ColorProps &
  LayoutProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
    to?: string
  }

export const BannerStyled: React.FC<BannerProps> = styled.div`
  background-color: ${themeGet("banners.primary.backgroundColor", "grey")};
  display: grid;
  font-size: ${themeGet("fontSizes.body")}px;
  text-align: center;
  grid-auto-flow: column;
  padding: ${themeGet("space.5")}px;
  text-transform: uppercase;

  a {
    color: ${themeGet("banners.primary.color", "black")};
    text-decoration: none;
  }

  ${variant({
    prop: "banners",
    variants: {
      primary: {
        backgroundColor: themeGet("banners.primary.backgroundColor", "grey"),
        color: themeGet("banners.primary.color", "black"),
      },
      secondary: {
        backgroundColor: themeGet("banners.secondary.backgroundColor", "grey"),
        color: themeGet("banners.secondary.color", "black"),
      },
    },
  })}

  ${compose(color, layout, space)}
`

export const Banner: React.FC<BannerProps> = ({ children, ...props }) => (
  <BannerStyled {...props}>
    <Link {...props}>{children}</Link>
  </BannerStyled>
)

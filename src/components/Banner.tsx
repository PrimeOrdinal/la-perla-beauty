import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import {
  color,
  compose,
  layout,
  space,
  ColorProps,
  LayoutProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type BannerProps = ColorProps & LayoutProps & SpaceProps & VariantProps

export const BannerStyled: React.FC<BannerProps> = styled.div`
  background-color: ${themeGet("banner.background", "grey")};
  display: grid;
  font-size: ${themeGet("fontSizes.body")}px;
  text-align: center;
  grid-auto-flow: column;
  padding: ${themeGet("space.5")}px;
  text-transform: uppercase;

  a {
    color: ${themeGet("banner.text", "black")};
    text-decoration: none;
  }

  ${compose(color, layout, space)}
`

export const Banner: React.FC<BannerProps> = ({ children, ...props }) => (
  <BannerStyled>
    <Link {...props}>{children}</Link>
  </BannerStyled>
)

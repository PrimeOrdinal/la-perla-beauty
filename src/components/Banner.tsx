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
  background-color: ${themeGet("colors.banner.background", "grey")};
  color: ${themeGet("colors.banner.text", "black")};
  display: grid;
  text-align: center;
  grid-auto-flow: column;
  padding: ${props => props.theme.space[3]}px;
  text-transform: uppercase;

  a {
    color: ${themeGet("colors.banner.text", "black")};
  }

  ${compose(color, layout, space)}
`

export const Banner: React.FC<BannerProps> = ({ children, ...props }) => (
  <BannerStyled>
    <Link {...props}>{children}</Link>
  </BannerStyled>
)

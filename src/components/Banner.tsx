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
  background-color: ${themeGet("colors.lilac")};
  color: ${themeGet("colors.black")};
  display: grid;
  font-size: var(--font-size-body, 13px);
  text-align: center;
  grid-auto-flow: column;
  padding: ${themeGet("space.6")}px;
  text-transform: uppercase;

  a {
    color: inherit;
    text-decoration: none;
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: "lilac",
        color: "black",
      },
      secondary: {
        backgroundColor: "pink",
        color: "black",
      },
      tertiary: {
        backgroundColor: "beige",
        color: "black",
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

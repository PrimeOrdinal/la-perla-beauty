import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  variant,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { Link } from "./Button"

export type BannerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
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

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Banner: React.FC<BannerProps> = ({
  children,
  href,
  title,
  ...props
}) => (
  <BannerStyled {...props}>
    <Link to={href}>{title}</Link>
  </BannerStyled>
)

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

export type PromotionalBannerProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
  }

export const PromotionalBannerStyled: React.FC<PromotionalBannerProps> = styled.div`
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

export const PromotionalBanner: React.FC<PromotionalBannerProps> = ({
  children,
  href,
  title,
  ...props
}) => (
  <PromotionalBannerStyled {...props}>
    <Link to={href}>{title}</Link>
  </PromotionalBannerStyled>
)

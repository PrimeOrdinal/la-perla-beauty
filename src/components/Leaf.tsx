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

import { mediaQueries } from "../theme"

export type LeafProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
  }

export const LeafStyled: React.FC<LeafProps> = styled.div`
  background-color: ${themeGet("colors.pink")};
  border-radius: 100px 0px;
  color: ${themeGet("colors.black")};
  display: grid;
  font-size: var(--font-size-body, 13px);
  grid-auto-flow: row;
  justify-items: start;
  padding: ${themeGet("space.8")}px ${themeGet("space.11")}px;
  position: relative;

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    left: -35vw;
    position: relative;
    width: 50vw;
    z-index: 10;

    ${mediaQueries.md} {
      left: -12.5vw;
      width: 20vw;
    }
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: "lightgreen",
        color: "black",
      },
      secondary: {
        backgroundColor: "pink",
        color: "black",
      },
      tertiary: {
        backgroundColor: "lilac",
        color: "black",
      },
    },
  })}

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Leaf: React.FC<LeafProps> = ({ children, ...props }) => (
  <LeafStyled {...props}>{children}</LeafStyled>
)

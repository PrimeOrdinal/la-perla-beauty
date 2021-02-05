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

export type LeafProps = ColorProps &
  LayoutProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
    to?: string
  }

export const LeafStyled: React.FC<LeafProps> = styled.div`
  background-color: ${themeGet("colors.pink")};
  border-radius: 100px 0px;
  color: ${themeGet("colors.black")};
  display: grid;
  font-size: ${themeGet("fontSizes.body")}px;
  grid-auto-flow:row;
  justify-items: start;
  left: 20vw;
  padding: ${themeGet("space.10")}px;
  position: relative;
  text-transform: uppercase;
  width: 20vw;

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    left: -12.5vw;
    position: relative;
    width: 20vw;
    z-index: 10;
  }

  ${variant({
    variants: {
      primary: {
        backgroundColor: "pink",
        color: "black",
      },
      secondary: {
        backgroundColor: "lilac",
        color: "black",
      },
    },
  })}

  ${compose(color, layout, space)}
`

export const Leaf: React.FC<LeafProps> = ({ children, ...props }) => (
  <LeafStyled {...props}>{children}</LeafStyled>
)

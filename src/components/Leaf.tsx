import { themeGet } from "@styled-system/theme-get"
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

import { mediaQueries } from "../theme"

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
  left: 30vw;
  padding: ${themeGet("space.10")}px;
  position: relative;
  text-transform: uppercase;
  width: 50vw;

  background: ${props => (props.children.img ? "red" : "blue")};

  ${mediaQueries.md} {
    left: 20vw;
    width: 20vw;
  }

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

  ${compose(color, layout, space)}
`

export const Leaf: React.FC<LeafProps> = ({ children, ...props }) => (
  <LeafStyled {...props}>{children}</LeafStyled>
)

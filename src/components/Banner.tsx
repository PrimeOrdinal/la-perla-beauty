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

export type BannerProps = ColorProps & LayoutProps & SpaceProps & VariantProps

export const Banner: React.FC<BannerProps> = styled.button`
  background-color: #efeee9;
  display: grid;
  text-align: center;
  grid-auto-flow: column;
  padding: ${props => props.theme.space[2]}px;

  ${variant({
    variants: {
      primary: {
        // color: "white",
        // bg: "primary",
        // "&:disabled": {
        //   bg: "tertiary",
        //   cursor: "not-allowed",
        // },
      },
      secondary: {
        // color: "white",
        // bg: "secondary",
      },
      tertiary: {
        // color: "white",
        // bg: "tertiary",
      },
    },
  })}

  ${compose(color, layout, space)}
`

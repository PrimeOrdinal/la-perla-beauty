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

import { ReactComponent as CloseIcon } from "../../static/icons/Close.svg"

export type ChipProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    children: React.ReactNode
  }

export const ChipStyled: React.FC<ChipProps> = styled.button`
  background-color: ${themeGet("colors.lightgrey")};
  border-radius: ${themeGet("radii.1")}px;
  color: ${themeGet("colors.black")};
  display: grid;
  font-size: var(--font-size-sm, 12px);
  text-align: center;
  grid-auto-flow: column;
  padding: ${themeGet("space.3")}px ${themeGet("space.4")}px;
  text-transform: uppercase;

  svg {
    width: 12px;
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

export const Chip: React.FC<ChipProps> = ({ children, ...props }) => (
  <ChipStyled {...props}>
    <span>{children}</span>
    <CloseIcon />
  </ChipStyled>
)

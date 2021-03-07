import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../theme"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type CategoryHeaderProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    description: string
    title: string
  }

export const CategoryHeaderStyled = styled.header`
  display: grid;
  justify-items: center;
  margin-block-end: ${themeGet("space.7")}px;
  text-align: center;

  span {
    font-size: 12px;
  }

  ${mediaQueries.md} {
    text-align: center;
    span {
      font-size: revert;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const CategoryHeader = CategoryHeaderStyled

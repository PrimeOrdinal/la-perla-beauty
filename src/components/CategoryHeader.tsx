import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../theme"
import styled from "styled-components"
import {
  compose,
  grid,
  layout,
  space,
  GridProps,
  LayoutProps,
  SpaceProps,
} from "styled-system"

export type CategoryHeaderProps = GridProps &
  LayoutProps &
  SpaceProps & {
    description: string
    title: string
  }

export const CategoryHeaderStyled = styled.header`
  display: grid;
  justify-items: center;
  margin-block-end: ${themeGet("space.7")}px;
  text-align: center;
  ${mediaQueries.md} {
    text-align: left;
  }
  ${compose(grid, layout, space)}
`

export const CategoryHeader = CategoryHeaderStyled

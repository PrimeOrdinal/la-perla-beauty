import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"
import {
  color,
  compose,
  layout,
  space,
  ColorProps,
  LayoutProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type BannerProps = ColorProps & LayoutProps & SpaceProps & VariantProps

export const Banner: React.FC<BannerProps> = styled.div`
  background-color: ${themeGet("colors.banner.background", "black")};
  color: ${themeGet("colors.banner.text", "white")};
  display: grid;
  text-align: center;
  grid-auto-flow: column;
  padding: ${props => props.theme.space[3]}px;

  ${compose(color, layout, space)}
`

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
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type WYSIWYGProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    markup: string
    width: "compact" | "full"
  }

export const WYSIWYGStyled: React.FC<WYSIWYGProps> = styled.section`
  max-width: ${props => props.width === "compact" ? "50%" : "100%"};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${themeGet("fontFamily", "Tiempos")};
  }

  h1 {
    font-size: var(--font-size-heading-1, 32px);
  }

  h2 {
    font-size: var(--font-size-heading-2, 24px);
  }

  h3 {
    font-size: var(--font-size-heading-3, 18px);
  }

  h4 {
    font-size: var(--font-size-heading-4, 16px);
  }

  h5 {
    font-size: var(--font-size-heading-5, 14px);
  }

  h6 {
    font-size: var(--font-size-heading-6, 12px);
  }

  p {
    max-width: 80ch;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const WYSIWYG: React.FC<WYSIWYGProps> = ({ markup, ...props }) => (
  <WYSIWYGStyled
    {...props}
    dangerouslySetInnerHTML={{
      __html: markup as string,
    }}
  />
)

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

export const WYSIWYGStyled: React.FC<WYSIWYGProps> = styled.div`
  max-width: ${props => props.width === "compact" ? "50%" : "100%"};

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

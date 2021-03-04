import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

export type HoriontalRuleProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    showPlayButton: boolean
  }

export const HoriontalRule: React.FC<HoriontalRuleProps> = styled.hr`
  ${compose(layout, position, space)}
`

import type { ItemAvailability } from "schema-dts"

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

import {
  availabilitySchemaToHumanReadableText,
  availabilitySchemaToShortName,
} from "../utils/schema-org"

export type ItemAvailabilityLabelProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    availability: ItemAvailability
  }

export const ItemAvailabilityLabelStyled: React.FC<ItemAvailabilityLabelProps> = styled.span`
  background-color: ${themeGet("colors.orange")};
  border-radius: ${themeGet("radii.2")}px;
  display: block;
  font-size: var(--font-size-sm, 12px);
  padding: ${themeGet("space.1")}px ${themeGet("space.3")}px;
  text-align: center;
  text-transform: uppercase;

  ${variant({
    prop: "availability",
    variants: {
      InStock: {
        backgroundColor: "transparent",
        color: "transparent",
      },
      LimitedAvailability: {
        backgroundColor: "orange",
        color: "black",
      },
      OnlineOnly: {
        backgroundColor: "pink",
        color: "black",
      },
      OutOfStock: {
        backgroundColor: "lilac",
        color: "black",
      },
      PreOrder: {
        backgroundColor: "lightgreen",
        color: "black",
      },
      SoldOut: {
        backgroundColor: "beige",
        color: "black",
      },
    },
  })}

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const ItemAvailabilityLabel: React.FC<ItemAvailabilityLabelProps> = ({
  availability,
  ...props
}) => (
  <ItemAvailabilityLabelStyled
    {...props}
    availability={availabilitySchemaToShortName(availability)}
  >
    {availabilitySchemaToHumanReadableText(availability)}
  </ItemAvailabilityLabelStyled>
)

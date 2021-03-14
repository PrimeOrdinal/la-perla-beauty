import type { Product } from "schema-dts"

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

import { ReactComponent as CloseIcon } from "../../static/icons/Close.svg"

import { Button, ButtonUnstyled } from "./Button"

export type AddToBagMobileProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    product: Product
    visible: boolean
  }

const ContainerStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 50vh;
  position: relative;

  .container {
    background-color: ${themeGet("colors.background")};
    border-radius: ${themeGet("radii.3")}px;
    border-style: solid;
    bottom: 0px;
    display: grid;
    gap: 1rem;
    grid-auto-flow: row;
    padding-block-end: 1rem;
    position: absolute;
    width: 100%;

    .item {
      align-items: center;
      display: flex;
      justify-content: space-between;
      padding-block-end: 1rem;
      padding-block-start: 1rem;

      span {
        text-transform: uppercase;
      }
    }

    .close {
      height: 20px;
      object-fit: contain;
      padding: 0;
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const AddToBagMobile: React.FC<AddToBagMobileProps> = () => (
  <ContainerStyled>
    <div className="container">
      <div className="item">
        <span>Item added to bag</span>

        <ButtonUnstyled className="close">
          <CloseIcon />
        </ButtonUnstyled>
      </div>

      <Button variant="primary">View bag</Button>
      <Button variant="tertiary">Continue shopping</Button>
    </div>
  </ContainerStyled>
)

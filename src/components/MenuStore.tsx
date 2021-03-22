import React, { useState } from "react"
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

import { ReactComponent as ChevronIcon } from "../../static/icons/Chevron.svg"

import { Button } from "./Button"
import { ListPlain } from "./ListPlain"
import { ModalSiteSettings } from "./ModalSiteSettings"

const MenuStoreStyled = styled(ListPlain)`
  ${compose(color, flexbox, grid, layout, position, space)}
`

const ChevronIconStyled = styled(ChevronIcon)`
  width: 14px;
`

export type MenuStoreProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    currentCurrency: string
    currentLocale: string
  }

export const MenuStore: React.FC<MenuStoreProps> = props => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <MenuStoreStyled {...props}>
      <Button onClick={openModal}>
        <span>UK | ENGLISH | £</span>
        {/* <span>{props.currentLocale} | {props.currentCurrency}</span> */}
        <ChevronIconStyled />
      </Button>

      <ModalSiteSettings closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </MenuStoreStyled>
  )
}

import React, { useState } from "react"
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

import { ReactComponent as DownArrowIcon } from "../images/DownArrow.svg"

import { Button } from "./Button"
import { ListPlain } from "./ListPlain"
import { SiteSettingsOverlay } from "./SiteSettingsOverlay"

const MenuStoreStyled = styled(ListPlain)`
  ${compose(grid, layout, space)}
`

const DownArrowIconStyled = styled(DownArrowIcon)`
  width: 14px;
`

export type MenuStoreProps = GridProps & LayoutProps & SpaceProps

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
        UK | ENGLISH | £
        <DownArrowIconStyled />
      </Button>

      <SiteSettingsOverlay closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </MenuStoreStyled>
  )
}

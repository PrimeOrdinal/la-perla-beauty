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

import { ReactComponent as ChevronIcon } from "../../static/icons/Chevron.svg"

import { Button } from "./Button"
import { ListPlain } from "./ListPlain"
import { SiteSettingsOverlay } from "./SiteSettingsOverlay"

const MenuStoreStyled = styled(ListPlain)`
  ${compose(grid, layout, space)}
`

const ChevronIconStyled = styled(ChevronIcon)`
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
        <ChevronIconStyled />
      </Button>

      <SiteSettingsOverlay closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </MenuStoreStyled>
  )
}

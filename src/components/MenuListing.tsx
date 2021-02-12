import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Filter } from "../images/Filter.svg"

import { theme, mediaQueries } from "../theme"

import { Button } from "./Button"
import { ViewSelector } from "./ViewSelector"

const MenuListingStyled = styled.section`
  align-items: center;
  border-bottom: ${theme.border.width} solid ${theme.border.color};
  display: flex;
  justify-content: space-between;
  padding-block-end: 1.25rem;

  svg {
    height: ${themeGet("space.5")}px;
    object-fit: contain;
  }
`

const RefineStyled = styled.div`
  align-items: center;
  display: grid;
  grid-auto-flow: column;

  ${theme.mediaQueries.md} {
    gap: ${themeGet("space.10")}px;
  }

  .product-count {
    display: none;

    ${mediaQueries.md} {
      display: block;
    }
  }
`

export type MenuListingProps = {
  productCount: number
  setView: React.Dispatch<SetStateAction<string>>
  view: "grid" | "list"
}

export const MenuListing: React.FC<MenuListingProps> = ({ productCount, setView, view,
  ...props }) => {

  return (
    <MenuListingStyled className="container" {...props}>
      <ViewSelector setView={setView} view={view} />
      <RefineStyled>
        <Button>
          <span>Refine</span>
          <Filter />
        </Button>
        <span className="product-count">{productCount} Products</span>
      </RefineStyled>
    </MenuListingStyled>
  )
}

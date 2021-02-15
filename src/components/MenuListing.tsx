import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React from "react"
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

import { ReactComponent as FilterIcon } from "../images/Filter.svg"
import { ReactComponent as MinusIcon } from "../images/Minus.svg"

import { useToggle } from "../hooks/useToggle"

import { theme, mediaQueries } from "../theme"

import { Button } from "./Button"
import { MenuRefine } from "./MenuRefine"
import { ViewSelector } from "./ViewSelector"

const MenuListingStyled = styled.section`
  position: sticky;
  top: var(--header-min-height, 64px);

  .menu {
    align-items: center;
    background-color: ${themeGet("colors.white")};
    border-bottom: ${theme.border.width} solid ${theme.border.color};
    display: flex;
    justify-content: space-between;
    padding-block-end: ${themeGet("space.7")}px;
    padding-block-start: ${themeGet("space.7")}px;
  }

  .menu-refine {
    background-color: ${themeGet("colors.white")};
    padding-block-end: ${themeGet("space.7")}px;
    padding-block-start: ${themeGet("space.7")}px;
    width: 80%;
  }

  ${compose(layout, position, space)}
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

export type MenuListingProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    productCount: number
    setView: React.Dispatch<SetStateAction<string>>
    view: "grid" | "list"
  }

export const MenuListing: React.FC<MenuListingProps> = ({
  productCount,
  setView,
  view,
  ...props
}) => {
  const [filtersVisibility, toggleFiltersVisibility] = useToggle()

  return (
    <MenuListingStyled {...props}>
      <div className={clsx("container", "menu")}>
        <ViewSelector setView={setView} view={view} />
        <RefineStyled>
          <Button
            active
            onClick={() => {
              toggleFiltersVisibility()
            }}
          >
            <span>Refine</span>
            {filtersVisibility ? <MinusIcon /> : <FilterIcon />}
          </Button>
          <span className="product-count">{productCount} Products</span>
        </RefineStyled>
      </div>
      {filtersVisibility && (
        <MenuRefine className={clsx("container", "menu-refine")} />
      )}
    </MenuListingStyled>
  )
}

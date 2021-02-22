import type { SetStateAction } from "react"

import { themeGet } from "@styled-system/theme-get"
import clsx from "clsx"
import React, { useState } from "react"
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
import { Chip } from "./Chip"
import { MenuRefine } from "./MenuRefine"
import { ViewSelector } from "./ViewSelector"

const MenuListingStyled = styled.section`
  background-color: ${themeGet("colors.white")};
  position: sticky;
  top: var(--header-min-height, 38px);

  .product-count-mobile,
  .sortBy {
    text-transform: uppercase;
  }

  .feedback,
  .filterChips,
  .menu,
  .product-count-mobile {
    align-items: center;
    display: grid;
    gap: ${themeGet("space.7")}px;
    grid-auto-flow: column;
    justify-content: space-between;
  }

  .feedback,
  .product-count-mobile {
    padding-block-end: ${themeGet("space.7")}px;
    padding-block-start: ${themeGet("space.7")}px;
  }

  .feedback {
    padding-block-start: ${themeGet("space.9")}px;
  }

  .product-count-mobile {
    ${mediaQueries.md} {
      display: none;
    }
  }

  .menu {
    border-bottom-style: solid;
    padding-block-end: ${themeGet("space.3")}px;
    padding-block-start: ${themeGet("space.3")}px;
  }

  .menu-refine {
    padding-block-end: ${themeGet("space.10")}px;
    padding-block-start: ${themeGet("space.10")}px;
  }

  .filterChips {

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

  .product-count-desktop {
    display: none;
    text-transform: upercase;

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
  const [filterChips, setFilterChips] = useState([])
  const [filtersCount, setFiltersCount] = useState(0)
  const [sortBy, setSortBy] = useState("best sellers")

  return (
    <MenuListingStyled {...props}>
      <div className={clsx("container")}>
        <div className={clsx("menu")}>
          <ViewSelector setView={setView} view={view} />
          <RefineStyled>
            <Button
              onClick={() => {
                toggleFiltersVisibility()
              }}
            >
              <span>Refine {filtersCount > 0 && `(${filtersCount})`}</span>

              {filtersVisibility ? <MinusIcon /> : <FilterIcon />}
            </Button>
            <span className="product-count-desktop">{productCount} products</span>
          </RefineStyled>
        </div>
      </div>
      {filtersVisibility && (
        <MenuRefine
          className={clsx("container", "menu-refine")}
          setFilterChips={setFilterChips}
          setFiltersCount={setFiltersCount}
          setSortBy={setSortBy}
        />
      )}
      <div className={clsx("container", "feedback")}>
        {filterChips && (
          <div className="filterChips">
            {filterChips.map(filterChip => (
              <Chip>{filterChip}</Chip>
            ))}
          </div>
        )}
        {sortBy && <span className="sortBy">Sort by: {sortBy}</span>}
      </div>
      <span className="product-count-mobile container">
        Showing 1 - {productCount} of 100
      </span>
    </MenuListingStyled>
  )
}

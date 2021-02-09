import type {
  // MenuNavigationQuery
  LayoutQuery,
} from "../../graphql-types"

import { Link } from "gatsby"
import React from "react"
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
import { themeGet } from "@styled-system/theme-get"
import { useHover } from "../hooks/useHover"

import { ListPlain } from "./ListPlain"

const StyledMenu = styled.div`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;

  li {
    margin-block-end: 0;
  }

  ${compose(grid, layout, space)}
`

const StyledMenuMainHeadings = styled(ListPlain)`
  display: grid;
  gap: ${themeGet("space.7")}px;
  grid-auto-flow: column;
  padding-block-start: ${themeGet("space.7")}px;
  place-content: center;

  li {
    text-align: left;
    font-size: ${themeGet("fontSizes.heading3Desktop")}px;
    font-weight: 600;
    letter-spacing: 1px;

    a {
      color: inherit;
      text-decoration: none;
      font-weight: inherit;
      text-transform: uppercase;
    }
  }
`

const StyledMenuMainExpanded = styled.div`
  display: ${props => (props.active ? "grid" : "none")};
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding-block-end: 1rem;
  padding-block-start: 1rem;

  ul {
    list-style: none;
    padding: 0;

    li {
      text-align: left;
      padding: 0.5rem 0;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`

export type MenuNavigationProps = GridProps &
  LayoutProps &
  SpaceProps & {
    // data?: MenuNavigationQuery
    data?: LayoutQuery
  }

export const MenuNavigation: React.FC<MenuNavigationProps> = ({
  data,
  ...props
}) => {
  const [hoverRef, isHovered] = useHover()

  return (
    <StyledMenu ref={hoverRef} {...props}>
      {data?.allContentstackMenus?.edges
        ?.filter(({ node: menu }) => menu.slot?.startsWith("header-navigation"))
        .map(({ node: menu }) => (
          <StyledMenuMainHeadings id={menu.slot as string} key={menu.id}>
            {menu?.links?.map((link, index) => (
              <li key={index}>
                <Link
                  to={link?.url?.href as string}
                  title={link?.url?.title as string}
                >
                  {link?.text}
                </Link>
              </li>
            ))}
          </StyledMenuMainHeadings>
        ))}
      <StyledMenuMainExpanded active={isHovered}>
        {data?.allContentstackMenus?.edges?.map(({ node: menu }) => (
          <ul id={menu.slot as string} key={menu.id}>
            {menu?.links?.map((link, index) => (
              <li key={index}>
                <Link
                  to={link?.url?.href as string}
                  title={link?.url?.title as string}
                >
                  {link?.text}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </StyledMenuMainExpanded>
    </StyledMenu>
  )
}

import type { MenuNavigationQuery } from "../../graphql-types"

import { graphql, useStaticQuery, Link } from "gatsby"
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

const StyledMenuMainExpanded = styled.div`
  display: ${props => (props.active ? "block" : "none")};
  padding-block-end: 1rem;
  padding-block-start: 1rem;
`

const StyledMenuMainHeadings = styled(ListPlain)`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  padding-block-end: 1rem;
  padding-block-start: 1rem;
`

export type MenuNavigationProps = GridProps & LayoutProps & SpaceProps

export const MenuNavigation: React.FC<MenuNavigationProps> = props => {
  const data: MenuNavigationQuery = useStaticQuery(graphql`
    query MenuNavigation {
      allContentstackMenus(
        filter: {
          slot: {
            in: ["secondary-1", "secondary-2", "secondary-3", "tertiary-1"]
          }
        }
      ) {
        edges {
          node {
            ...Contentstack_menusFragment
          }
        }
      }
    }
  `)

  const [hoverRef, isHovered] = useHover()

  return (
    <StyledMenu ref={hoverRef} {...props}>
      <StyledMenuMainHeadings>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <a href="/">Category 2</a>
        </li>
        <li>
          <a href="/">Category 3</a>
        </li>
        <li>
          <a href="/">Category 4</a>
        </li>
      </StyledMenuMainHeadings>
      <StyledMenuMainExpanded active={isHovered}>
        {data.allContentstackMenus.edges.map(({ node: menu }) => (
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

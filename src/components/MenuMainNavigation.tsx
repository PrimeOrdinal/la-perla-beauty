import type {
  // MenuMainNavigationQuery
  LayoutQuery,
} from "../../graphql-types"

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

import { Link } from "./Button"
import { ListPlain } from "./ListPlain"

const StyledMenu = styled.div`
  align-items: center;
  display: grid;
  list-style: none;
  margin: 0;
  position: relative;

  li {
    margin-block-end: 0;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

const StyledMenuMainHeadings = styled(ListPlain)`
  display: grid;
  grid-auto-flow: column;
  padding-block-start: ${themeGet("space.7")}px;
  place-content: center;

  li {
    text-align: left;
    font-size: var(--font-size-heading-3, 14px);
    font-weight: bold;
    letter-spacing: 1px;

    a {
      border-bottom-color: transparent;
      border-bottom-style: solid;
      color: inherit;
      display: inline-block;
      margin-inline-end: ${themeGet("space.3")}px;
      margin-inline-start: ${themeGet("space.3")}px;
      text-decoration: none;
      font-weight: inherit;
      text-transform: uppercase;

      &.active,
      &:active,
      &:hover {
        border-bottom-color: ${themeGet("colors.black")};
      }

      &.level-1 {
        padding-block-end: ${themeGet("space.6")}px;
      }
    }
  }

  .sub-menu {
    background-color: ${themeGet("colors.background")};
    border-bottom-right-radius: ${themeGet("radii.4")}px;
    border-bottom-left-radius: ${themeGet("radii.4")}px;
    display: none;
    gap: ${themeGet("space.10")}px;
    grid-auto-flow: column;
    grid-template-columns: repeat(4, 1fr);
    left: 15%;
    margin-block-start: 1px;
    padding: ${themeGet("space.9")}px;
    position: absolute;
    width: 70%;
  }

  .menu-item {
    &:focus-within,
    &:hover {
      .sub-menu {
        display: grid;
      }
    }
  }

  .links {
    align-content: start;
    display: grid;
    gap: ${themeGet("space.4")}px;
    list-style: none;
    padding-inline-start: unset;

    a {
      font-size: var(--font-size-sm, 12px);
      font-weight: lighter;
    }
  }

  .image-container {
    display: grid;
  }

  .image {
    aspect-ratio: 1;
    width: 100%;
  }

  .title {
    display: inline-block;
    margin-block-start: ${themeGet("space.6")}px;
  }
`

export type MenuMainNavigationProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    // data?: MenuMainNavigationQuery
    data?: LayoutQuery
  }

export const MenuMainNavigation: React.FC<MenuMainNavigationProps> = ({
  data,
  ...props
}) => (
  <StyledMenu {...props}>
    {data?.allContentstackMenus?.edges
      ?.filter(({ node: menu }) => menu.slot?.startsWith("header-navigation"))
      .map(({ node: menu }) => (
        <StyledMenuMainHeadings id={menu.slot as string} key={menu.id}>
          {menu?.links?.map((linkLevel1, indexLevel1) => (
            <li className="menu-item" key={indexLevel1}>
              <Link
                className="level-1"
                title={linkLevel1?.url?.title as string}
                to={linkLevel1?.url?.href as string}
              >
                {linkLevel1?.text}
              </Link>
              {linkLevel1?.sub_menus?.map((sub_menu, subMenuIndex) => (
                <div className="sub-menu" key={subMenuIndex}>
                  {sub_menu && (
                    <ul className="links">
                      {sub_menu?.links?.map((linkLevel2, indexLevel2) => (
                        <li key={indexLevel2}>
                          <Link
                            className="level-2"
                            to={linkLevel2?.url?.href as string}
                            title={linkLevel2?.url?.title as string}
                          >
                            {linkLevel2?.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {sub_menu?.images?.map((image, index) => (
                    <React.Fragment key={index}>
                      {image?.image?.url && (
                        <Link
                          className="image-container"
                          title={image?.url?.title as string}
                          to={image?.url?.href as string}
                        >
                          <img
                            alt={image?.image?.title}
                            className="image"
                            src={image?.image?.url}
                          />
                          <span className="title">
                            {image?.url?.title as string}
                          </span>
                        </Link>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              ))}
            </li>
          ))}
        </StyledMenuMainHeadings>
      ))}
  </StyledMenu>
)

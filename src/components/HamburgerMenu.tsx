import React, { useState } from "react"

import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../theme"
import { ReactComponent as Hamburger } from "../images/Hamburger.svg"
import { Accordion } from "./Accordion"
import { Link } from "gatsby"

const StyledHamburger = styled.div`
  button {
    padding-left: 0;
    svg {
      cursor: pointer;
      height: ${themeGet("space.5")}px;
      object-fit: contain;
      ${mediaQueries.md} {
        display: none;
      }
    }
  }

  div {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const HamburgerMenu = ({ data, ...props }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <StyledHamburger>
      <button onClick={() => setToggle(!toggle)}>
        <Hamburger />
      </button>

      {toggle && (
        <div>
          {
            <Accordion
              className="hamburger-accordion"
              items={data?.allContentstackMenus?.edges
                .filter(({ node: menu }) =>
                  menu.slot?.startsWith("header-navigation")
                )
                .map(({ node: menu }) => ({
                  heading: menu.title,
                  panel: (
                    <ul>
                      {menu.links?.map((link, index) => (
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
                  ),
                }))}
            />
          }
        </div>
      )}
    </StyledHamburger>
  )
}

export default HamburgerMenu

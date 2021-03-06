import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"

import { ReactComponent as Close } from "../images/Close.svg"
import { ReactComponent as Hamburger } from "../images/Hamburger.svg"

import { mediaQueries } from "../theme"

import { Accordion } from "./Accordion"

const StyledHamburger = styled.div`
  button {
    left: -${themeGet("space.4")}px;
    position: relative;
    z-index: 50;

    svg {
      cursor: pointer;
      height: ${themeGet("space.5")}px;
      object-fit: contain;

      ${mediaQueries.md} {
        display: none;
      }
    }
  }

  .container {
    background-color: ${themeGet("colors.white")};
    bottom: 0;
    height: 100vh;
    left: 0;
    overflow-y: auto;
    padding-top: ${themeGet("space.12")}px;
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const HamburgerMenu = ({ data }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <StyledHamburger>
      <button onClick={() => setToggle(!toggle)}>
        {toggle && <Close /> || <Hamburger />}
        
      </button>

      {toggle && (
        <div className="container">
          {
            <Accordion
              className="hamburger-accordion"
              items={data?.allContentstackMenus?.edges
                .find(({ node: menu }) =>
                  menu.slot?.startsWith("mobile-navigation")
                )
                ?.node?.links.map((panel) => ({
                  heading: panel.text,
                  panel: (
                    <ul>
                      {panel.sub_menus?.[0]?.links?.map((link, index) => (
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

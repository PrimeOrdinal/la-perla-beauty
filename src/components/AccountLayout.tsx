import React, { useState } from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { ReactComponent as Profile } from "../images/Profile.svg"
import { ReactComponent as Newsletter } from "../images/Newsletter.svg"
import { ReactComponent as Shipping } from "../images/Shipping.svg"
import { ReactComponent as Return } from "../images/Return.svg"
import { ReactComponent as Address } from "../images/Address.svg"
import { ReactComponent as WishlistAbsent } from "../images/WishlistAbsent.svg"

import { mediaQueries } from "../theme"
import { ListPlain } from "./ListPlain"
import { Link } from "../components/Button"

const MainStyled = styled.main`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;

  ${mediaQueries.md} {
    grid-auto-flow: column;
    align-items: flex-start;
    gap: 5rem;
    margin-block-end: 70px;
    margin-block-start: 70px;
    grid-template-columns: minmax(200px, 300px) minmax(400px, 650px);
    justify-content: space-between;
  }
  .section-title {
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 13px;
    margin: 0;
    text-transform: uppercase;
    ${mediaQueries.md} {
      display: none;
    }
  }
`

const AccountNav = styled(ListPlain)`
  display: grid;
  grid-auto-flow: row;
  gap: 1.5rem;
  border: 1px solid black;
  padding: 1rem;
  border-radius: 15px;
  justify-items: flex-start;
  place-content: start;
  ${mediaQueries.md} {
    border: none;
    align-items: flex-start;
    align-content: flex-start;
    place-content: unset;
  }
  li {
    ${mediaQueries.md} {
      border-bottom: ${themeGet("border.width")} solid
        ${themeGet("border.color")};
      width: 100%;
      padding: 0.25rem 0;
    }
    a {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      align-items: center;
      text-transform: uppercase;
      ${mediaQueries.md} {
        justify-content: start;
      }
      svg {
        height: auto;
        width: 15px;
      }
    }
  }

  .active {
    border-bottom: black solid 1px;
  }
  .border {
    border-bottom: solid ${themeGet("border.width")} ${themeGet("border.color")};
  }
`

const activeStyles = {
  background: "red",
}

export const AccountLayout = ({ children }) => {
  const [active, setActive] = useState(false)
  const handleClick = () => {
    setActive(!active)
  }

  return (
    <MainStyled className="container">
      <h1 className="section-title">Navigate to section</h1>
      <AccountNav>
        <li>
          <Link to="information" activeStyle={activeStyles}>
            <Profile />
            Account information
          </Link>
        </li>
        <li>
          <Link to="orders" activeStyle={activeStyles}>
            <Shipping />
            Orders
          </Link>
        </li>
        <li>
          <Link activeStyle={{ color: "red" }}>
            <Return />
            Returns
          </Link>
        </li>
        <li className={active ? "active" : ""}>
          <Link>
            <Address />
            Address book
          </Link>
        </li>
        <li className={active ? "active" : ""}>
          <Link to="wishlist">
            <WishlistAbsent />
            Wishlist
          </Link>
        </li>
        <li>
          <Link>
            <Newsletter />
            Newsletter preferences
          </Link>
        </li>
      </AccountNav>
      {children}
    </MainStyled>
  )
}

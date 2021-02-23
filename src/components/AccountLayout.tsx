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
  border-radius: 15px;
  border: 1px solid black;
  display: grid;
  gap: 1.5rem;
  grid-auto-flow: row;
  justify-items: flex-start;
  padding: 1rem;
  place-content: start;

  ${mediaQueries.md} {
    align-content: flex-start;
    align-items: flex-start;
    border: none;
    place-content: unset;
  }

  li {
    ${mediaQueries.md} {
      width: 100%;
    }

    a {
      align-items: center;
      display: grid;
      gap: 1rem;
      grid-auto-flow: column;
      text-transform: uppercase;

      ${mediaQueries.md} {
        border-bottom-style: solid;
        padding-block-end: 12px;
        justify-content: start;

        &.active {
          border-bottom-color: ${themeGet("colors.black")};
          font-weight: bold,
        }
      }

      svg {
        height: auto;
        width: 15px;
      }
    }
  }
`

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
          <Link to="/account/information">
            <Profile />
            Account information
          </Link>
        </li>
        <li>
          <Link to="/account/orders">
            <Shipping />
            Orders
          </Link>
        </li>
        <li>
          <Link to="/account/returns">
            <Return />
            Returns
          </Link>
        </li>
        <li>
          <Link to="/account/address-book">
            <Address />
            Address book
          </Link>
        </li>
        <li>
          <Link to="/account/wishlist">
            <WishlistAbsent />
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/account/newsletter-preferences">
            <Newsletter />
            Newsletter preferences
          </Link>
        </li>
      </AccountNav>
      {children}
    </MainStyled>
  )
}

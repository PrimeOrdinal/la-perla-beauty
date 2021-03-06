import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Profile } from "../../static/icons/Profile.svg"
import { ReactComponent as Newsletter } from "../../static/icons/Newsletter.svg"
import { ReactComponent as Shipping } from "../../static/icons/Shipping.svg"
import { ReactComponent as Return } from "../../static/icons/Return.svg"
import { ReactComponent as Address } from "../../static/icons/Address.svg"
import { ReactComponent as WishlistAbsent } from "../../static/icons/WishlistAbsent.svg"

import { Link } from "../components/Button"

import { mediaQueries } from "../theme"

import { ListPlain } from "./ListPlain"

const MainStyled = styled.main`
  display: grid;
  gap: 1rem;
  grid-auto-flow: row;

  ${mediaQueries.md} {
    align-items: flex-start;
    gap: 5rem;
    grid-auto-flow: column;
    grid-template-columns: minmax(200px, 300px) minmax(400px, 650px);
    justify-content: space-between;
    margin-block-end: 70px;
    margin-block-start: 70px;
  }

  .section-title {
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    font-weight: bold;
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
        justify-content: start;
        padding-block-end: 12px;

        &.active {
          border-bottom-color: ${themeGet("colors.black")};
          font-weight: bold;
        }
      }

      svg {
        height: auto;
        width: 15px;
      }
    }
  }
`

export const AccountLayout = ({ children }) => (
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

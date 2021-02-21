import React from "react"
import styled from "styled-components"
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
  }
  .section-title {
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 13px;
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

  li {
    a {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      align-items: center;
      text-transform: uppercase;
      svg {
        height: auto;
        width: 15px;
      }
    }
  }
`

export const AccountLayout = ({ children }) => {
  return (
    <MainStyled className="container">
      <h1 className="section-title">Navigate to section</h1>
      <AccountNav>
        <li>
          <Link to="information">
            <Profile />
            Account information
          </Link>
        </li>
        <li>
          <Link to="orders">
            <Shipping />
            Orders
          </Link>
        </li>
        <li>
          <Link>
            <Return />
            Returns
          </Link>
        </li>
        <li>
          <Link>
            <Address />
            Address book
          </Link>
        </li>
        <li>
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

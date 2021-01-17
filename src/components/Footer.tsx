import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import React, { ReactElement } from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"

import { ListPlain } from "../styles/ListPlain"

const StyledFooter = styled.footer`
  background-color: #efeee9;
  display: grid;
  gap: 2rem;
  padding: 1rem;
`

const SocialContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`

const SocialLinkList = styled(ListPlain)`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
`

export const Footer = (): ReactElement => {
  return (
    <StyledFooter>
      <div className="primary">
        <Logo />
        <form>
          <label htmlFor="email-address">Sign up to our newsletter</label>
          <input
            id="email-address"
            name="email-address"
            placeholder="Enter your email address"
            type="email"
          />
        </form>
      </div>
      <div className="secondary"></div>
      <div className="tertiary">
        <SocialContainer>
          <span>Follow us</span>
          <SocialLinkList>
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </SocialLinkList>
        </SocialContainer>
        <span>© {new Date().getFullYear()} La Perla Beauty</span>
      </div>
      <a href="https://laperla.com">Lorem ipsum dolor sit amet</a>
    </StyledFooter>
  )
}

Footer.propTypes = {}

export default Footer

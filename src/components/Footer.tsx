import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import React, { ReactElement } from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"

import { ListPlain } from "../styles/ListPlain"

import { NewsletterSignup } from "./NewsletterSignup"

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

export const Footer = (
  {
    siteTitle,
  }: {
    siteTitle: string
  } = {
    siteTitle: "Site Title",
  }
): ReactElement => {
  return (
    <StyledFooter>
      <div className="primary">
        <Logo />
        <NewsletterSignup />
      </div>
      <div className="secondary"></div>
      <div className="tertiary">
        <SocialContainer>
          <span>Follow us</span>
          <SocialLinkList>
            <li>
              <a href="https://www.facebook.com/BeautyByLaPerla/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/BeautyByLaPerla/">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/BeautyByLaPerla">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/EJo0TYlRfn6rYQUCAxW1XT0i">
                <FaYoutube />
              </a>
            </li>
          </SocialLinkList>
        </SocialContainer>
        <span>
          © {new Date().getFullYear()} {siteTitle}
        </span>
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {}

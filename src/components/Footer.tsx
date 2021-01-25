import type { FooterQuery } from "../../graphql-types"

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import React from "react"
import styled from "styled-components"

import Logo from "../images/logo.svg"

import { ListPlain } from "./ListPlain"
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

export type FooterProps = {
  siteTitle?: string
}

export const Footer: React.FC<FooterProps> = (
  { siteTitle } = {
    siteTitle: "Site Title",
  }
) => {
  const data: FooterQuery = useStaticQuery(graphql`
    query Footer {
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

  return (
    <StyledFooter>
      <div className="primary">
        <Logo />
        <NewsletterSignup />
      </div>
      <div className="secondary">
        {data.allContentstackMenus.edges.map(({ node: menu }) => (
          <ul id={menu?.slot as string} key={menu.id}>
            {menu?.links?.map((link, index) => (
              <li key={index}>
                <Link to={link?.url?.href as string} title={link?.url?.title as string}>
                  {link?.text}
                  {link?.image && <Img fluid={link?.image?.children?.fluid as FluidObject} />}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
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

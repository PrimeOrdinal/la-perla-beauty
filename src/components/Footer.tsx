import type {
  // FooterQuery
  LayoutQuery,
} from "../../graphql-types"
import {
  Accordion as ReactAccessibleAccordion,
  AccordionItem as ReactAccessibleAccordionItem,
  AccordionItemHeading as ReactAccessibleAccordionItemHeading,
  AccordionItemButton as ReactAccessibleAccordionItemButton,
  AccordionItemPanel as ReactAccessibleAccordionItemPanel,
} from "react-accessible-accordion"

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
// import Img, { FluidObject } from "gatsby-image"
import React from "react"
import styled from "styled-components"

import { ReactComponent as Logotype } from "../images/Logotype.svg"

import { ListPlain } from "./ListPlain"
import { NewsletterSignup } from "./NewsletterSignup"
import { mediaQueries, theme } from "../theme"

const LogotypeStyle = styled(Logotype)`
  display: none;
  ${mediaQueries.md} {
    display: block;
    height: 32px;
    object-fit: contain;
    flex: 0.2;
  }
`

const SocialContainerStyle = styled.div`
  padding-top: 1.25rem;
  ${mediaQueries.md} {
    display: flex;
    align-items: center;
  }
  span {
    display: none;
    ${mediaQueries.md} {
      display: block;
      font-size: 14px;
      font-weight: bold;
      margin-right: 1rem;
    }
  }
`

const SocialLinkListStyle = styled(ListPlain)`
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    padding: 1rem;
    a {
      font-size: 34px;
      text-decoration: none;
      color: inherit;
    }
  }
`

const FooterStyle = styled.footer`
  border-top: 1px solid ${theme.colors.tertiary};
  padding-top: 23px;
  ${mediaQueries.md} {
    padding-top: 35px;
  }
  .footer-newsletter {
    ${mediaQueries.md} {
      display: grid;
      grid-template-columns: 1fr 4fr;
      align-items: center;
      padding-bottom: 35px;
    }
  }
  .footer-nav-desktop {
    display: none;
    ${mediaQueries.md} {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 2fr;
      gap: ${theme.space[4]}px;
      border-top: 1px solid ${theme.colors.tertiary};
      ul {
        list-style: none;
        padding: 0;
        h3 {
          font-family: ${themeGet("fontFamily", "Quicksand")};
          font-size: ${theme.fontSizes[1]}px;
        }
        li {
          padding-top: ${theme.space[3]}px;
          font-size: ${theme.fontSizes[1]}px;
          a {
            text-decoration: none;
            color: inherit;
            font-size: inherit;
          }
        }
      }
    }
  }
  .footer-nav-mobile {
    /* display: block; */
    ${mediaQueries.md} {
      display: none;
    }
  }
  .footer-social {
    .footer-wrapper {
      border-top: 1px solid ${theme.colors.tertiary};
      border-bottom: 1px solid ${theme.colors.tertiary};
      margin-top: 1.45rem;
      margin-bottom: 2rem;
      ${mediaQueries.md} {
        border-bottom: none;
      }
    }
    .footer-flex {
      ${mediaQueries.md} {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`
const ContainerStyled = styled.div`
  width: 90%;
  margin: auto;

  h2 {
    margin-bottom: 20px;
    ${mediaQueries.md} {
      display: none;
    }
  }
  p {
    text-align: center;
    font-size: 11px;
    letter-spacing: 0.7px;
    ${mediaQueries.md} {
      font-size: 12px;
    }
  }
`

export type FooterProps = {
  // data?: FooterQuery
  data?: LayoutQuery
  siteTitle?: string
}

export const Footer: React.FC<FooterProps> = (
  { data, siteTitle } = {
    siteTitle: "Site Title",
  }
) => (
  <FooterStyle>
    <ContainerStyled>
      <h2>Newsletter</h2>
      <div className="footer-newsletter">
        <LogotypeStyle />
        <NewsletterSignup />
      </div>
      <div className="footer-nav-mobile">
        <ReactAccessibleAccordion />
        {data?.allContentstackMenus?.edges
          .filter(({ node: menu }) => menu.slot?.startsWith("footer-secondary"))
          .map(({ node: menu }) => (
            <ReactAccessibleAccordionItem key={menu.id}>
              <ReactAccessibleAccordionItemHeading>
                <ReactAccessibleAccordionItemButton>
                  {menu.title}
                </ReactAccessibleAccordionItemButton>
              </ReactAccessibleAccordionItemHeading>
              <ReactAccessibleAccordionItemPanel>
                <p>{menu?.title}</p>
              </ReactAccessibleAccordionItemPanel>
            </ReactAccessibleAccordionItem>
          ))}
        <ReactAccessibleAccordion />
      </div>
      <div className="footer-nav-desktop">
        {data?.allContentstackMenus?.edges
          .filter(({ node: menu }) => menu.slot?.startsWith("footer-secondary"))
          .map(({ node: menu }) => (
            <ul id={menu.slot as string} key={menu.id}>
              <h3>{menu.title}</h3>

              {menu?.links?.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link?.url?.href as string}
                    title={link?.url?.title as string}
                  >
                    {link?.text}
                    {/* {link?.image && <Img fluid={link?.image?.children?.fluid as FluidObject} />} */}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
      </div>
    </ContainerStyled>
    <div className="footer-social">
      <div className="footer-wrapper">
        <ContainerStyled className="footer-flex">
          <SocialContainerStyle>
            <span>Follow us</span>
            <SocialLinkListStyle>
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
            </SocialLinkListStyle>
          </SocialContainerStyle>
          <p>
            © {new Date().getFullYear()} {siteTitle}
          </p>
        </ContainerStyled>
      </div>
    </div>
  </FooterStyle>
)

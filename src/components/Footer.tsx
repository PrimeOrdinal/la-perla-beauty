import type { FooterQuery } from "../../graphql-types"

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

const LogotypeStyle = styled(Logotype)`
  height: 35px;
  object-fit: contain;
  width: auto;
`

const SocialContainerStyle = styled.div`
  /* display: grid;
  gap: 1rem;
  grid-auto-flow: column; */
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
  }
`

const SocialLinkListStyle = styled(ListPlain)`
  /* display: grid; */
  /* gap: 1rem; */
  display: flex;
  li {
    margin-left: 34px;
    font-size: 30px;
    color: inherit;
    a {
      color: inherit;
    }
  }
  /* grid-auto-flow: column; */
`

const FooterStyle = styled.footer`
  border-top: 0.5px solid #858585;
  border-bottom: 0.5px solid #858585;
  display: grid;
  gap: 2rem;
  .container {
    width: 90%;
    margin: auto;
    .primary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 2rem;
      padding-top: 2rem;
      border-bottom: 0.5px solid #858585;
    }
    .title_wrapper {
      display: flex;
    }
    .secondary {
      display: flex;
      justify-content: start;
      h3 {
        font-family: ${themeGet("fonts.body", "Quicksand")};
        font-size: 14px;
        margin-bottom: 38px;
        text-transform: uppercase;
      }
      ul {
        list-style: none;
        padding: 0;
        font-size: 14px;

        &:not(:first-child) {
          margin-left: 84px;
        }
        li {
          padding: 12px 0;
          a {
            font-weight: 300;
            text-decoration: 0;
            color: inherit;
          }
        }
      }
    }
  }
  .tertiary {
    border-top: 0.5px solid #858585;
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .tertiary-wrapper {
    display: flex;
    justify-content: space-between;
  }
`

export type FooterProps = {
  data?: FooterQuery
  siteTitle?: string
}

export const Footer: React.FC<FooterProps> = (
  { data, siteTitle } = {
    siteTitle: "Site Title",
  }
) => (
  <FooterStyle>
    <div className="container">
      <div className="primary">
        <LogotypeStyle />
        <NewsletterSignup />
      </div>
      <div className="secondary">
        {data?.allContentstackMenus?.edges
          .filter(({ node }) => node.slot?.startsWith("secondary"))
          .map(({ node: menu }) => (
            <>
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
            </>
          ))}
      </div>
    </div>
    <div className="tertiary">
      <div className="container tertiary-wrapper">
        <SocialContainerStyle>
          <span>Follow us</span>
          {/* {data.allContentstackMenus.edges
              .filter(item => item.node.slot.startsWith("tertiary"))
              .map(({ node: menu }) => (
                <>
                  <ul id={menu.slot as string} key={menu.id}>
                    <h3>{menu.title}</h3>

                    {menu?.links?.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link?.url?.href as string}
                          title={link?.url?.title as string}
                        >
                          {link?.text}
                          {link?.image && <Img fluid={link?.image?.children?.fluid as FluidObject} />}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ))} */}
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
      </div>
    </div>
  </FooterStyle>
)

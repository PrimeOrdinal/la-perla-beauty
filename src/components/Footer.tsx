import type {
  // FooterQuery
  LayoutQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
import React from "react"
import {
  Accordion as ReactAccessibleAccordion,
  AccordionItem as ReactAccessibleAccordionItem,
  AccordionItemHeading as ReactAccessibleAccordionItemHeading,
  AccordionItemButton as ReactAccessibleAccordionItemButton,
  AccordionItemPanel as ReactAccessibleAccordionItemPanel,
} from "react-accessible-accordion"
import styled from "styled-components"

import { ReactComponent as Logotype } from "../images/Logotype.svg"

import { ListPlain } from "./ListPlain"
import { NewsletterSignup } from "./NewsletterSignup"
import { mediaQueries } from "../theme"

const LogotypeStyle = styled(Logotype)`
  display: none;

  ${mediaQueries.md} {
    display: block;
    flex: 0.2;
    height: 2rem;
    object-fit: contain;
  }
`

const SocialContainerStyled = styled.div`
  ${mediaQueries.md} {
    align-items: center;
    display: flex;
  }

  span {
    display: none;

    ${mediaQueries.md} {
      display: block;
      font-size: 0.875rem;
      font-weight: bold;
      margin-right: 1rem;
    }
  }
`

const SocialLinkListStyled = styled(ListPlain)`
  align-items: center;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
  justify-content: center;
  padding-inline-start: 2rem;

  a {
    color: inherit;
    font-size: 2.125rem;
    text-decoration: none;
  }
`

const FooterStyle = styled.footer`
  border-top-style: solid;
  margin-block-start: ${themeGet("space.8")}rem;
  padding-top: 1.5rem;

  ${mediaQueries.md} {
    padding-top: 2.25rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: ${themeGet("fontFamily", "Quicksand")};
      text-transform: uppercase;
  }

  .footer-newsletter {
    padding-bottom: 1rem;

    ${mediaQueries.md} {
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 4fr;
      padding-bottom: 2.25rem;
    }
  }

  .footer-nav-desktop {
    display: none;

    ${mediaQueries.md} {
      border-top-style: solid;
      display: grid;
      gap: ${themeGet("space.5")}rem;
      grid-template-columns: 1fr 1fr 1fr 2fr;
      padding-block-end: ${themeGet("space.6")}rem;
      padding-block-start: ${themeGet("space.6")}rem;

      h3 {
        font-family: ${themeGet("fontFamily", "Quicksand")};
        font-size: ${themeGet("fontSizes.body")}rem;
        padding-block-end: ${themeGet("space.7")}rem;
      }

      ul {
        display: grid;
        gap: 1.5rem;
        list-style: none;
        padding: 0;

        li {
          font-size: ${themeGet("fontSizes.body")}rem;

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
    ${mediaQueries.md} {
      display: none;
    }
  }

  .footer-social {
    border-bottom-style: solid;
    border-top-style: solid;

    ${mediaQueries.md} {
      border-bottom-style: none;
    }

    .container {
      padding-block-end: ${themeGet("space.6")}rem;
      padding-block-start: ${themeGet("space.6")}rem;

      ${mediaQueries.md} {
        align-items: center;
        display: grid;
        gap: ${themeGet("space.5")}rem;
        grid-auto-flow: column;
        justify-content: space-between;
      }
    }

    section {
      align-items: center;
      display: grid;
      grid-auto-flow: column;
    }
  }
`
const ContainerStyled = styled.div`
  h2 {
    margin-bottom: 1.25rem;

    ${mediaQueries.md} {
      display: none;
    }
  }

  p {
    text-align: center;

    ${mediaQueries.md} {
      font-size: 0.75rem;
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
    <ContainerStyled className="container">
      <h2>Newsletter</h2>

      <div className="footer-newsletter">
        <LogotypeStyle />
        <NewsletterSignup />
      </div>

      <div className="footer-nav-mobile">
        <ReactAccessibleAccordion>
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
        </ReactAccessibleAccordion>
      </div>

      <div className="footer-nav-desktop">
        {data?.allContentstackMenus?.edges
          .filter(({ node: menu }) => menu.slot?.startsWith("footer-secondary"))
          .map(({ node: menu }) => (
            <section>
              <h3>{menu.title}</h3>
              <ul id={menu.slot as string} key={menu.id}>
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
            </section>
          ))}
      </div>
    </ContainerStyled>
    <div className="footer-social">
      <ContainerStyled className="container">
        <SocialContainerStyled>
          {data?.allContentstackMenus?.edges
            .filter(({ node: menu }) =>
              menu.slot?.startsWith("footer-tertiary")
            )
            .map(({ node: menu }) => (
              <section>
                <h3>{menu.title}</h3>
                <SocialLinkListStyled id={menu.slot as string} key={menu.id}>
                  {menu?.links?.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link?.url?.href as string}
                        title={link?.url?.title as string}
                      >
                        {link?.text && <span>{link?.text}</span>}
                        {link?.icon && (
                          <img
                            src={link?.icon?.url as string}
                            title={link?.icon?.title as string}
                          />
                        )}
                      </a>
                    </li>
                  ))}
                </SocialLinkListStyled>
              </section>
            ))}
        </SocialContainerStyled>
        <p className="small">
          © {new Date().getFullYear()} {siteTitle}
        </p>
      </ContainerStyled>
    </div>
  </FooterStyle>
)

import type {
  // GlobalFooterQuery
  Contentstack_Menu_Component,
  LayoutQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

import { Accordion } from "./Accordion"
import { Link } from "./Button"
import { ListPlain } from "./ListPlain"
import { NewsletterSignup } from "./NewsletterSignup"

const SocialContainerStyled = styled.div`
  ${mediaQueries.md} {
    align-items: center;
    display: flex;
  }
`

const SocialLinkListStyled = styled(ListPlain)`
  align-items: center;
  display: grid;
  gap: 30px;
  grid-auto-flow: column;
  justify-content: center;
  padding-inline-start: 2rem;

  ${mediaQueries.md} {
    gap: 34px;
  }

  a {
    color: inherit;
    font-size: ${themeGet("fontSizes.8")}px;
    text-decoration: none;
  }
`

const GlobalFooterStyle = styled.footer`
  border-top-style: solid;
  border-bottom-style: solid;
  margin-block-start: ${themeGet("space.9")}px;
  margin-block-end: ${themeGet("space.9")}px;
  padding-block-start: 1.5rem;

  ${mediaQueries.md} {
    padding-block-start: 2.25rem;
    border-bottom: none;
    margin-block-end: initial;
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
    padding-block-end: 1rem;

    ${mediaQueries.md} {
      align-items: center;
      display: grid;
      grid-template-columns: auto 4fr;
      padding-block-end: 2.25rem;
    }

    span {
      display: none;
  
      ${mediaQueries.md} {
        display: block;
        font-family: "Tiempos", serif;
        font-weight: lighter;
        font-size: var(--font-size-lg, 18px);
        letter-spacing: 0.5px;
        text-transform: capitalize;
      }
    }
  }

  .footer-nav-desktop {
    display: none;


    ${mediaQueries.md} {
      border-top-style: solid;
      display: grid;
      gap: ${themeGet("space.6")}px;
      grid-template-columns: 1fr 1fr 1fr 2fr;
      padding-block-end: ${themeGet("space.7")}px;
      padding-block-start: ${themeGet("space.7")}px;

      h3 {
        font-family: ${themeGet("fontFamily", "Quicksand")};
        font-size: var(--font-size-heading-5, 14px);
        font-weight: bold;
        padding-block-end: ${themeGet("space.8")}px;
      }

      ul {
        display: grid;
        gap: 1.5rem;
        list-style: none;
        padding: 0;

        li {
          font-size: var(--font-size-heading-5, 14px);

          a {
            color: inherit;
            font-size: inherit;
            text-decoration: none;
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
      padding-block-end: ${themeGet("space.7")}px;
      padding-block-start: ${themeGet("space.11")}px;

  
      ${mediaQueries.md} {
        align-items: center;
        display: grid;
        gap: ${themeGet("space.6")}px;
        grid-auto-flow: column;
        justify-content: space-between;
      }
    }

    section {
      display: grid;
      grid-auto-flow: row;
  
      ${mediaQueries.md} {
        align-items: center;
        grid-auto-flow: column;
        gap: ${themeGet("space.9")}px;
      }

      h3 {
        display: none;
    
        ${mediaQueries.md} {
          display: block;
          font-size: var(--font-size-heading-5, 14px);
          font-weight: bold;
        }
      }

      ul {
        padding: 0;
      }
    }
  }
`

const ContainerStyled = styled.div`
  h2 {
    margin-block-end: ${themeGet("space.7")}px;
    font-family: ${themeGet("fontFamily", "Tiempos")};
    font-size: var(--font-size-heading-3, 18px);
    font-weight: 100;
    text-transform: capitalize;

    ${mediaQueries.md} {
      display: none;
    }
  }

  p {
    font-weight: bold;
    margin-block-start: ${themeGet("space.7")}px;
    text-align: center;
    text-transform: uppercase;

    ${mediaQueries.md} {
      font-size: 0.75rem;
      margin-block-start: revert;
      text-align: left;
    }
  }
`

export type GlobalFooterProps = {
  // data?: GlobalFooterQuery
  data?: LayoutQuery
  siteTitle?: string
}

export const GlobalFooter: React.FC<GlobalFooterProps> = (
  { data, siteTitle } = {
    siteTitle: "Site Title",
  }
) => (
  <GlobalFooterStyle>
    <ContainerStyled className="container">
      <h2>Newsletter</h2>

      <div className="footer-newsletter">
        <span>La Perla Beauty</span>
        <NewsletterSignup />
      </div>

      <div className="footer-nav-mobile">
        <Accordion
          className="footer-secondary-accordion"
          items={data?.allContentstackMenuComponent?.edges
            .filter(({ node: menu }) =>
              menu.slot?.startsWith("footer-secondary")
            )
            .map(({ node: menu }) => ({
              title: menu.title,
              panel: (
                <ul key={menu.id}>
                  {menu.links?.map((link, index) => (
                    <li key={index}>
                      <Link to={link?.link?.href}>{link?.link?.title}</Link>
                    </li>
                  ))}
                </ul>
              ),
            }))}
        />
      </div>

      <div className="footer-nav-desktop">
        {data?.allContentstackMenuComponent?.edges
          .filter(({ node: menu }) => menu.slot?.startsWith("footer-secondary"))
          .sort(function (
            a: {
              node: Contentstack_Menu_Component
            },
            b: {
              node: Contentstack_Menu_Component
            }
          ) {
            const slotA = a?.node?.slot as string
            const slotB = b?.node?.slot as string

            if (slotA < slotB) {
              return -1
            }

            if (slotA > slotB) {
              return 1
            }

            // slots must be equal
            return 0
          })
          .map(({ node: menu }) => (
            <section key={menu.id}>
              <h3>{menu.title}</h3>
              <ul id={menu.slot}>
                {menu?.links?.map((link, index) => (
                  <li key={index}>
                    <Link to={link?.link?.href}>{link?.link?.title}</Link>
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
          {data?.allContentstackMenuComponent?.edges
            .filter(({ node: menu }) =>
              menu.slot?.startsWith("footer-tertiary")
            )
            .map(({ node: menu }) => (
              <section key={menu.id}>
                <h3>{menu.title}</h3>
                <SocialLinkListStyled id={menu.slot} key={menu.id}>
                  {menu?.links?.map((link, index) => (
                    <li key={index}>
                      <a href={link?.link?.href}>
                        {link?.link?.title && <span className="sr-only">{link?.link?.title}</span>}
                        {link?.icon && (
                          <img
                            src={link?.icon?.url}
                            title={link?.icon?.title}
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
  </GlobalFooterStyle>
)

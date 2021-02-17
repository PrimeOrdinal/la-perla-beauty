import type {
  // FooterQuery
  Contentstack_MenusFragmentFragment,
  LayoutQuery,
} from "../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

import { Accordion } from "./Accordion"
import { ListPlain } from "./ListPlain"
import { NewsletterSignup } from "./NewsletterSignup"

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
  gap: 30px;
  grid-auto-flow: column;
  justify-content: center;
  padding-inline-start: 2rem;

  ${mediaQueries.md} {
    gap: 34px;
  }

  a {
    color: inherit;
    font-size: 2.125rem;
    text-decoration: none;
  }
`

const FooterStyle = styled.footer`
  border-top-style: solid;
  border-bottom-style: solid;
  margin-block-start: ${themeGet("space.9")}px;
  margin-block-end: ${themeGet("space.9")}px;
  padding-top: 1.5rem;

  ${mediaQueries.md} {
    padding-top: 2.25rem;
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
    padding-bottom: 1rem;

    ${mediaQueries.md} {
      align-items: center;
      display: grid;
      grid-template-columns: auto 4fr;
      padding-bottom: 2.25rem;
    }

    span {
      display: none;

      ${mediaQueries.md} {
        display: block;
        font-family: "Tiempos";
        font-weight: 300;
        font-size: ${themeGet("fontSizes.6")}px;
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
        font-size: ${themeGet("fontSizes.heading3Desktop")}px;
        padding-block-end: ${themeGet("space.8")}px;
        font-weight: bold;
      }

      ul {
        display: grid;
        gap: 1.5rem;
        list-style: none;
        padding: 0;
        li {
          font-size: ${themeGet("fontSizes.heading3Desktop")}px;

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
      padding-block-end: ${themeGet("space.7")}px;
      padding-block-start: ${themeGet("space.11")}px;

      ${mediaQueries.md} {
        display: grid;
        align-items: center;
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
          font-size: ${themeGet("fontSizes.heading3Desktop")}px;
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
    margin-bottom: 1.25rem;
    font-family: ${themeGet("fontFamily", "Tiempos")};
    font-size: ${themeGet("fontSizes.heading1Mobile")}px;
    font-weight: 100;
    text-transform: capitalize;
    ${mediaQueries.md} {
      display: none;
    }
  }

  p {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    margin-block-start: ${themeGet("space.7")}px;
    ${mediaQueries.md} {
      font-size: 0.75rem;
      text-align: left;
      margin-block-start: revert;
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
        <span>La Perla Beauty</span>
        <NewsletterSignup />
      </div>

      <div className="footer-nav-mobile">
        <Accordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          className="footer-secondary-accordion"
          items={data?.allContentstackMenus?.edges
            .filter(({ node: menu }) =>
              menu.slot?.startsWith("footer-secondary")
            )
            .map(({ node: menu }) => ({
              heading: menu.title,
              panel: (
                <ul key={menu.id}>
                  {menu.links?.map((link, index) => (
                    <li key={index}>
                      {link?.url?.href?.startsWith("http") ? (
                        <a
                          href={link?.url?.href as string}
                          rel="external"
                          title={link?.url?.title as string}
                        >
                          {link?.text}
                        </a>
                      ) : (
                        <Link
                          to={link?.url?.href as string}
                          title={link?.url?.title as string}
                        >
                          {link?.text}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ),
            }))}
        />
      </div>

      <div className="footer-nav-desktop">
        {data?.allContentstackMenus?.edges
          .filter(({ node: menu }) => menu.slot?.startsWith("footer-secondary"))
          .sort(function (
            a: {
              node: Contentstack_MenusFragmentFragment
            },
            b: {
              node: Contentstack_MenusFragmentFragment
            }
          ) {
            if (a?.node?.slot < b?.node?.slot) {
              return -1
            }

            if (a?.node?.slot > b?.node?.slot) {
              return 1
            }

            // slots must be equal
            return 0
          })
          .map(({ node: menu }) => (
            <section key={menu.id}>
              <h3>{menu.title}</h3>
              <ul id={menu.slot as string}>
                {menu?.links?.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link?.url?.href as string}
                      title={link?.url?.title as string}
                    >
                      {link?.text}
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
              <section key={menu.id}>
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

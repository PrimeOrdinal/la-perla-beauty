import React from "react"
import type {
  BigCommerceGql_Category,
  IngredientsPageQuery,
} from "../../graphql-types"
import { PageProps } from "gatsby"

import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../theme"

import { Layout } from "../components/Layout"
import { ListPlain } from "../components/ListPlain"
import { Button } from "../components/Button"
import { Breadcrumb } from "../components/Breadcrumb"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

const ImgBannerStyled = styled.img`
  width: 100%;
  border-radius: 0;
  height: 375px;
  object-fit: cover;
`

const InformationSection = styled.section`
  padding-block-start: ${themeGet("space.6")}px;
  padding-block-end: ${themeGet("space.10")}px;
  ${mediaQueries.md} {
    padding-block-start: ${themeGet("space.10")}px;
    padding-block-end: ${themeGet("space.13")}px;
  }
  span {
    text-transform: uppercase;
  }
  h1 {
    margin-block-start: ${themeGet("space.6")}px;
    margin-block-end: ${themeGet("space.4")}px;
    font-size: var(--font-size-xl, 24px);
    ${mediaQueries.md} {
      margin-block-end: ${themeGet("space.7")}px;
    }
  }
  p {
    max-width: 82ch;
    margin-block-start: 0;
    margin-block-end: ${themeGet("space.11")}px;
    ${mediaQueries.md} {
      margin-block-end: ${themeGet("space.10")}px;
    }
  }
  form {
    label {
      font-size: ${themeGet("fontSizes.bodyMobile")}px;
      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.bodyDesktop")}px;
      }
    }
    select {
      max-width: 500px;
    }
  }
`

const LetterBanner = styled.div`
  padding-block-end: ${themeGet("space.3")}px;
  padding-block-start: ${themeGet("space.3")}px;
  background-color: ${themeGet("lightgreen")};
  ${mediaQueries.md} {
    padding-block-end: ${themeGet("space.5")}px;
    padding-block-start: ${themeGet("space.5")}px;
  }
  span {
    font-size: var(--font-size-lg, 18px);
    font-family: "Tiempos", serif;
  }
`

const IngredientList = styled(ListPlain)`
  li {
    &:not(:last-child) {
      border-bottom: 1px solid ${themeGet("border.color")};
    }
    article {
      display: grid;
      grid-auto-flow: row;
      gap: ${themeGet("space.4")}px;
      padding-block-end: ${themeGet("space.9")}px;
      padding-block-start: ${themeGet("space.9")}px;
      ${mediaQueries.md} {
        gap: ${themeGet("space.7")}px;
        padding-block-end: ${themeGet("space.11")}px;
        padding-block-start: ${themeGet("space.11")}px;
      }

      h2 {
        margin: 0;
        ${mediaQueries.md} {
          font-size: var(--font-size-lg, 18px);
        }
      }
      .contents {
        display: grid;
        gap: ${themeGet("space.6")}px;
        ${mediaQueries.md} {
          grid-template-columns: 370px auto;
          gap: ${themeGet("space.9")}px;
        }
        img {
          height: 225px;
          width: 100%;
          object-fit: cover;
          ${mediaQueries.md} {
            height: 250px;
          }
        }
        .info-wrapper {
          display: grid;
          grid-auto-flow: row;
          gap: ${themeGet("space.6")}px;
          ${mediaQueries.md} {
            grid-template-columns: repeat(2, minmax(auto, 50ch));
            align-items: flex-start;
            gap: ${themeGet("space.10")}px;
          }
          .info-one,
          .info-two,
          .info-three,
          .info-four {
            display: grid;
            grid-auto-flow: row;
            gap: ${themeGet("space.4")}px;
            h3 {
              font-family: "Quicksand", sans-serif;
              font-size: ${themeGet("fontSizes.bodyMobile")}px;
              text-transform: uppercase;
              font-weight: bold;
              margin: 0;
              ${mediaQueries.md} {
                font-size: ${themeGet("fontSizes.bodyDesktop")}px;
              }
            }
            p {
              margin: 0;
            }
          }
        }
      }
    }
  }
`

const LoadingButton = styled.section`
  display: flex;
  justify-content: center;
`

const IngredientsPage: React.FC<
  PageProps<IngredientsPageQuery, PageContextCategory>
> = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />

      <ImgBannerStyled
        src="https://picsum.photos/800/800"
        alt="placeholder image"
        className="img-bl"
      />

      <main>
        <InformationSection className="container">
          <span>La perla beauty</span>
          <h1>Ingredients</h1>
          <p>
            Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros
            nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras
            efficitur erat aliquam, gravida mi ac, blandit sem. Suspendisse
            bibendum ultricies hendrerit{" "}
          </p>
          <form>
            <label htmlFor="product-selector">product selector</label>
            <select name="product" id="product-select" className="select">
              Select a product
            </select>
          </form>
        </InformationSection>
        <LetterBanner className="container">
          <span>A</span>
        </LetterBanner>
        <section className="container">
          <IngredientList>
            <li>
              <article>
                <h2>Accumsan</h2>
                <div className="contents">
                  <img
                    src="https://picsum.photos/800/800"
                    alt="placeholder-image"
                  />
                  <div className="info-wrapper">
                    <div className="info-one">
                      <h3>Description</h3>
                      <p>
                        Nullam sit amet laoreet urna. Donec quis erat feugiat,
                        ultrices eros nec, tincidunt nisl. Sed bibendum eu
                        sapien eleifend feugiat cras efficitur erat aliquam.
                      </p>
                    </div>
                    <div className="info-two">
                      <h3>Header</h3>
                      <p>Phasellus eros ipsum, commodo quis enim in</p>
                    </div>
                    <div className="info-three">
                      <h3>Header 2</h3>
                      <p>Imperdiet dapibus lectus</p>
                    </div>
                    <div className="info-four">
                      <h3>Header 3</h3>
                      <p>
                        Ut luctus nisi vel mauris consectetur, at dignissim
                        metus egestas
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
            <li>
              <article>
                <h2>Antoinette</h2>
                <div className="contents">
                  <img src="https://picsum.photos/600/500" alt="image" />
                  <div className="info-wrapper">
                    <div className="info-one">
                      <h3>Description</h3>
                      <p>
                        Nullam sit amet laoreet urna. Donec quis erat feugiat,
                        ultrices eros nec, tincidunt nisl. Sed bibendum eu
                        sapien eleifend feugiat cras efficitur erat aliquam.
                      </p>
                    </div>
                    <div className="info-two">
                      <h3>Header</h3>
                      <p>Phasellus eros ipsum, commodo quis enim in</p>
                    </div>
                    <div className="info-three">
                      <h3>Header 2</h3>
                      <p>Imperdiet dapibus lectus</p>
                    </div>
                    <div className="info-four">
                      <h3>Header 3</h3>
                      <p>
                        Ut luctus nisi vel mauris consectetur, at dignissim
                        metus egestas
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          </IngredientList>
        </section>
        <LoadingButton className="container">
          <Button className="button" variant="tertiary">
            Load more
          </Button>
        </LoadingButton>
      </main>
    </Layout>
  )
}

export default IngredientsPage

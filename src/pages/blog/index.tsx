import type { BigCommerceGql_Category, BlogLandingPageQuery } from "/../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"

import { BlogPostPreview } from "../../components/BlogPostPreview"
import { Breadcrumb } from "../../components/Breadcrumb"
import { ImageGallery } from "../../components/ImageGallery"
import { Layout } from "../../components/Layout"
import { ListPlain } from "../../components/ListPlain"
import { MenuSubCategory } from "../../components/MenuSubCategory"
import { ProductCardAlt } from "../../components/ProductCardAlt"

import { mediaQueries } from "../../theme"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

const imageprops = {
  items: [
    {
      original: "https://picsum.photos/id/1018/600/600/",
    },
    {
      original: "https://picsum.photos/id/1015/600/600/",
    },
    {
      original: "https://picsum.photos/id/1014/600/600/",
    },
    {
      original: "https://picsum.photos/id/1016/600/600/",
    },
    {
      original: "https://picsum.photos/id/1015/600/600/",
    },
    {
      original: "https://picsum.photos/id/1019/600/600/",
    },
  ],
  showPlayButton: false,
  bulletClass: true,
  showFullscreenButton: false,
  showNav: false,
  showThumbnails: false,
}

const MainStyled = styled.main`
  h1 {
    margin-block-start: 0;
    font-size: ${themeGet("fontSizes.6")}px;
    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.7")}px;
    }
  }
  h2 {
    ${mediaQueries.md} {
      font-size: ${"fontSizes.6"}px;
    }
  }
  p {
    max-width: 90ch;
  }

  .second-section {
    padding-block-start: ${themeGet("space.10")}px;
    padding-block-end: ${themeGet("space.12")}px;
  }
  .first-section {
    padding-block-start: ${themeGet("space.10")}px;
  }
  .fourth-section {
    background: #bfcea5;
  }
  .fifth-section {
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      ${mediaQueries.md} {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`

const FeaturedGrid = styled(ListPlain)`
  display: grid;
  gap: 34px;
  grid-auto-flow: row;
  ${mediaQueries.md} {
    grid-template-columns: 1fr 1fr;
  }
  border-bottom: 1px ${themeGet("border.color")} solid;
  padding-block-end: ${themeGet("space.12")}px;
`
const RecommendedGrid = styled(ListPlain)`
  display: grid;
  grid-template-columns: auto auto;
  gap: 15px;
  min-height: 770px;
  ${mediaQueries.md} {
    grid-auto-flow: column;
    gap: 40px;
    min-height: 600px;
  }
  li {
    &:nth-child(even) {
      align-self: flex-end;
    }
  }
`

const ProductCardSection = styled(ListPlain)`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  place-content: center;
  ${mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
  ${mediaQueries.lg} {
    grid-template-columns: repeat(4, 1fr);
    justify-items: unset;
  }
`

const BlogLandingPage: React.FC<PageProps<BlogLandingPageQuery, PageContextCategory>> = ({
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />

      <ImageGallery {...imageprops} className="img-bl" />
      <MenuSubCategory>View All</MenuSubCategory>
      <MainStyled>
        <section className="container first-section">
          <h1>Top stories</h1>
          <p>
            Vestibulum interdum metus at mi volutpat, in pulvinar diam suscipit.
            Vivamus at tortor ullamcorper, aliquam lorem nec, varius arcu.
          </p>
          <div>
            <FeaturedGrid>
              <li>
                <BlogPostPreview
                  tag="be inspired"
                  headingBelow="The exquisite sense of mere tranquil existence"
                  link="explore & shop"
                  aspectRatio="615/413"
                />
              </li>
              <li>
                <BlogPostPreview
                  tag="featured"
                  headingBelow="Never was there a greater artist than there is now"
                  link="explore & shop"
                  aspectRatio="615/413"
                />
              </li>
            </FeaturedGrid>
          </div>
        </section>
        <section className="container second-section">
          <h1>Recommended</h1>
          <p>
            Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros
            nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras
            efficitur erat aliquam.
          </p>
          <div>
            <RecommendedGrid>
              <li>
                <BlogPostPreview
                  headingAbove="Etiam aliquet vist metus"
                  body="Luxuary with integrity"
                  link="read more"
                  aspectRatio="3/4"
                />
              </li>
              <li>
                <BlogPostPreview
                  headingAbove="Etiam aliquet vist metus"
                  body="Luxuary with integrity"
                  aspectRatio="3/4"
                  link="read more"
                />
              </li>
              <li>
                <BlogPostPreview
                  headingAbove="Etiam aliquet vist metus"
                  body="Luxuary with integrity"
                  aspectRatio="3/4"
                  link="read more"
                />
              </li>
              <li>
                <BlogPostPreview
                  headingAbove="Etiam aliquet vist metus"
                  body="Luxuary with integrity"
                  aspectRatio="3/4"
                  link="read more"
                />
              </li>
            </RecommendedGrid>
          </div>
        </section>
        <section className="container third-section">
          <BlogPostPreview
            tag="videos"
            headingBelow="The buzz of the little wolrd"
            link="learn more"
            aspectRatio="615/413"
          />
        </section>
        <section className="container fourth-section">
          <ProductCardSection>
            <li>
              <ProductCardAlt
                image={{
                  src: `https://picsum.photos/277/277?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                  alt: "placeholder",
                }}
                category="EAU DE PARFUM"
                name="The Scent of La Perla"
                price="123"
              />
            </li>
            <li>
              <ProductCardAlt
                image={{
                  src: `https://picsum.photos/277/277?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                  alt: "placeholder",
                }}
                category="EAU DE PARFUM"
                name="The Scent of La Perla"
                price="123"
              />
            </li>
            <li>
              <ProductCardAlt
                image={{
                  src: `https://picsum.photos/277/277?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                  alt: "placeholder",
                }}
                category="EAU DE PARFUM"
                name="The Scent of La Perla"
                price="123"
              />
            </li>
            <li>
              <ProductCardAlt
                image={{
                  src: `https://picsum.photos/277/277?${
                    Math.floor(Math.random() * 10) + 1
                  }`,
                  alt: "placeholder",
                }}
                category="EAU DE PARFUM"
                name="The Scent of La Perla"
                price="123"
              />
            </li>
          </ProductCardSection>
        </section>
        <section className="container fifth-section">
          <h1>Don't miss</h1>
          <hr />
          <p>
            Etiam aliquet metus mauris, tempus odio feugiat non. Praesent eu
            magna id hendrerit bibendum. Aenean eget aliquet nisl. Pellentesque.
          </p>
          <BlogPostPreview
            headingBelow="The breath of that universal love"
            link="explore & shop"
            aspectRatio="615/413"
            body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
          />
          <ListPlain>
            <li>
              <BlogPostPreview
                headingAbove="The breath of that universal love"
                link="explore & shop"
                aspectRatio="3/4"
                body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
              />
            </li>

            <li>
              <BlogPostPreview
                headingBelow="The breath of that universal love"
                link="explore & shop"
                aspectRatio="3/4"
                body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
              />
            </li>
            <li>
              <BlogPostPreview
                headingAbove="The breath of that universal love"
                link="explore & shop"
                aspectRatio="3/4"
                body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
              />
            </li>
            <li>
              <BlogPostPreview
                headingBelow="The breath of that universal love"
                link="explore & shop"
                aspectRatio="3/4"
                body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
              />
            </li>
          </ListPlain>
        </section>
      </MainStyled>
    </Layout>
  )
}

export default BlogLandingPage

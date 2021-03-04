import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../../theme"

import type { BigCommerceGql_Category } from "/../../graphql-types"
import { PageProps } from "gatsby"

import { Layout } from "../../components/Layout"
import { Breadcrumb } from "../../components/Breadcrumb"
import { BlogPostPreview } from "../../components/BlogPostPreview"
import { ImageGallery } from "../../components/ImageGallery"
import { MenuSubCategory } from "../../components/MenuSubCategory"
import { ListPlain } from "../../components/ListPlain"
import { LeafAlt } from "../../components/LeafAlt"

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
  height: 770px;
  ${mediaQueries.md} {
    grid-auto-flow: column;
    gap: 40px;
    height: 600px;
  }
  li {
    &:nth-child(even) {
      align-self: flex-end;
    }
  }
`

const BlogLandingPage: React.FC<PageProps<PageContextCategory>> = ({
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
        <section className="video-content container"></section>
      </MainStyled>
    </Layout>
  )
}

export default BlogLandingPage

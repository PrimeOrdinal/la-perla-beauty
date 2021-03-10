import type {
  BigCommerceGql_Category,
  BlogLandingPageQuery,
} from "/../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../../theme"

import { BlogPostPreview } from "../../components/BlogPostPreview"
import { Breadcrumb } from "../../components/Breadcrumb"
import { ImageGallery } from "../../components/ImageGallery"
import { Layout } from "../../components/Layout"
import { MenuSubCategory } from "../../components/MenuSubCategory"
import { ArticleGrid } from "../../components/ArticleGrid"
import { ArticleSlider } from "../../components/ArticleSlider"
import { ProductCardAltGrid } from "../../components/ProductCardAltGrid"

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: BigCommerceGql_Category
}

const imageprops = {
  bulletClass: true,
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
  showFullscreenButton: false,
  showNav: false,
  showThumbnails: false,
}

const MainStyled = styled.main`
  overflow-x: hidden;
  ${mediaQueries.md} {
    overflow-x: unset;
  }
  .first {
    h1 {
      font-size: 21px;
      ${mediaQueries.md} {
        font-size: 32px;
      }
    }
    p {
      max-width: 95ch;
      margin-block-end: 2rem;
      ${mediaQueries.md} {
        font-size: 14px;
      }
    }
    &__grid {
      display: grid;
      grid-auto-flow: row;
      gap: 36px;
      ${mediaQueries.md} {
        grid-template-columns: repeat(2, 1fr);
      }
      article {
        figure {
          margin-inline-start: -10%;
          margin-inline-end: -10%;
          ${mediaQueries.md} {
            margin-inline-start: unset;
            margin-inline-end: unset;
          }
        }
        h2 {
          ${mediaQueries.md} {
            font-size: 24px;
          }
        }
      }
    }
  }
  .second {
    h2 {
      font-size: 21px;
      ${mediaQueries.md} {
        font-size: 24px;
      }
    }
    p {
      ${mediaQueries.md} {
        font-size: 14px;
        max-width: 95ch;
        margin-block-end: 2rem;
      }
    }
  }
  .third {
    margin-block-end: 1rem;
    article {
      figure {
        margin-inline-start: -10%;
        margin-inline-end: -10%;
        ${mediaQueries.md} {
          margin-inline-start: unset;
          margin-inline-end: unset;
        }
      }
    }
  }
  .fourth {
    background-color: ${themeGet("lightgreen")};
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    margin-block-end: 1rem;
    &__grid {
      display: grid;
      grid-auto-flow: row;
      gap: 1rem;
      place-items: center;
      ${mediaQueries.sm} {
        grid-template-columns: auto auto;
      }
      ${mediaQueries.md} {
        grid-template-columns: repeat(4, auto);
        gap: 24px;
      }
    }
  }
  .fifth {
    margin-block-end: 2rem;
    article {
      figure {
        margin-inline-start: -10%;
        margin-inline-end: -10%;
        ${mediaQueries.md} {
          margin-inline-start: unset;
          margin-inline-end: unset;
        }
      }
    }
  }
`

const BlogLandingPage: React.FC<
  PageProps<BlogLandingPageQuery, PageContextCategory>
> = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  return (
    <Layout>
      <Breadcrumb crumbs={crumbs} />

      <ImageGallery {...imageprops} className="img-bl" />
      <MenuSubCategory>View All</MenuSubCategory>
      <MainStyled>
        <section className="first container">
          <h1>Top Stories</h1>
          <p>
            Vestibulum interdum metus at mi volutpat, in pulvinar diam suscipit.
            Vivamus at tortor ullamcorper, aliquam lorem nec, varius arcu.
          </p>
          <div className="first__grid">
            <BlogPostPreview
              titleBelow="The exquisite sense of mere tranquil existence"
              tag="Be inspired"
              link="explore and shop"
              aspectRatio="615/413"
            />
            <BlogPostPreview
              titleBelow="Never was there a greater artist than there is now"
              tag="featured"
              link="explore and shop"
              aspectRatio="615/413"
            />
          </div>
          <hr />
        </section>
        <section className="second container">
          <h2>Recommended</h2>
          <p>
            Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros
            nec, tincidunt nisl. Sed bibendum eu sapien eleifend feugiat. Cras
            efficitur erat aliquam.
          </p>
          <ArticleGrid />
        </section>
        <section className="third container">
          <BlogPostPreview
            titleBelow="The buzz of the little world"
            tag="videos"
            link="learn more"
            aspectRatio="615/413"
          />
        </section>
        <ProductCardAltGrid />
        <section className="fifth container">
          <h2>Don't Miss</h2>
          <p>
            Etiam aliquet metus mauris, tempus odio feugiat non. Praesent eu
            magna id hendrerit bibendum. Aenean eget aliquet nisl. Pellentesque.{" "}
          </p>
          <BlogPostPreview
            titleBelow="The buzz of the little world"
            body="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae. Vivamus a felis et odio viverra dignissim."
            link="explore & shop"
            aspectRatio="615/413"
          />
        </section>
        <ArticleSlider />
      </MainStyled>
    </Layout>
  )
}

export default BlogLandingPage

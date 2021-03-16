import type {
  BigCommerceGql_Category,
  BlogLandingPageQuery,
} from "/../../graphql-types"

import { themeGet } from "@styled-system/theme-get"
import { PageProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { mediaQueries } from "../../theme"

import { ArticleCard } from "../../components/ArticleCard"
import { Breadcrumb } from "../../components/Breadcrumb"
import { ImageGallery } from "../../components/ImageGallery"
import { Layout } from "../../components/Layout"
import { MenuCategory } from "../../components/MenuCategory"
import { ArticleCardGrid } from "../../components/ArticleCardGrid"
import { ArticleSlider } from "../../components/ArticleSlider"
import { ProductCardAlternateGallery } from "../../components/ProductCardAlternateGallery"

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
      font-size: ${themeGet("fontSizes.6")}px;

      ${mediaQueries.md} {
        font-size: 32px;
      }
    }

    p {
      margin-block-end: 2rem;
      max-width: 95ch;

      ${mediaQueries.md} {
        font-size: 14px;
      }
    }

    &__grid {
      display: grid;
      gap: 36px;
      grid-auto-flow: row;

      ${mediaQueries.md} {
        grid-template-columns: repeat(2, 1fr);
      }

      article {
        figure {
          margin-inline: -10%;

          ${mediaQueries.md} {
            margin-inline-start: unset;
            margin-inline-end: unset;
          }
        }

        h2 {
          ${mediaQueries.md} {
            font-size: ${themeGet("fontSizes.7")}px;
          }
        }
      }
    }
  }

  .second {
    h2 {
      font-size: ${themeGet("fontSizes.6")}px;

      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.7")}px;
      }
    }

    p {
      ${mediaQueries.md} {
        font-size: 14px;
        margin-block-end: 2rem;
        max-width: 95ch;
      }
    }
  }

  .third {
    margin-block-end: 1rem;

    article {
      figure {
        margin-inline: -10%;

        ${mediaQueries.md} {
          margin-inline-start: unset;
          margin-inline-end: unset;
        }
      }
    }
  }

  .fourth {
    background-color: ${themeGet("lightgreen")};
    margin-block-end: 1rem;
    padding-block: 1rem;

    &__grid {
      display: grid;
      gap: 1rem;
      grid-auto-flow: row;
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
        margin-inline: -10%;

        ${mediaQueries.md} {
          margin-inline: unset;
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
      <MenuCategory>View All</MenuCategory>
      <MainStyled>
        <section className="first container">
          <h1>Top Stories</h1>
          <p>
            Vestibulum interdum metus at mi volutpat, in pulvinar diam suscipit.
            Vivamus at tortor ullamcorper, aliquam lorem nec, varius arcu.
          </p>
          <div className="first__grid">
            <ArticleCard
              titleBelow="The exquisite sense of mere tranquil existence"
              tag="Be inspired"
              link="explore and shop"
              aspectRatio="615/413"
            />
            <ArticleCard
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
          <ArticleCardGrid />
        </section>
        <section className="third container">
          <ArticleCard
            titleBelow="The buzz of the little world"
            tag="videos"
            link="learn more"
            aspectRatio="615/413"
          />
        </section>
        <ProductCardAlternateGallery />
        <section className="fifth container">
          <h2>Don't Miss</h2>
          <p>
            Etiam aliquet metus mauris, tempus odio feugiat non. Praesent eu
            magna id hendrerit bibendum. Aenean eget aliquet nisl. Pellentesque.{" "}
          </p>
          <ArticleCard
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

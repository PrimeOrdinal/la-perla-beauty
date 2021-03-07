import type {
  BigCommerceGql_Category,
  BlogLandingPageQuery,
} from "/../../graphql-types"

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
      ${mediaQueries.md} {
        font-size: 14px;
      }
    }
    &__grid {
      display: grid;
      grid-auto-flow: row;
      gap: 1rem;
      ${mediaQueries.md} {
        grid-template-columns: repeat(2, 1fr);
      }
      article {
        figure {
          margin-left: -10%;
          margin-right: -10%;
          ${mediaQueries.md} {
            margin-left: unset;
            margin-right: unset;
          }
        }
      }
    }
  }
  .second {
    h2 {
      font-size: 21px;
      ${mediaQueries.md} {
        font-size: 32px;
      }
    }
    p {
      ${mediaQueries.md} {
        font-size: 14px;
      }
    }
    &__grid {
      ${mediaQueries.md} {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
      }
      .col1,
      .col2 {
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
        min-height: 375px;
        article:last-child {
          align-self: flex-end;
        }
      }
    }
  }
  .third {
    article {
      figure {
        margin-left: -10%;
        margin-right: -10%;
        ${mediaQueries.md} {
          margin-left: unset;
          margin-right: unset;
        }
      }
    }
  }
  .fourth {
    background: #bfcea5;
    padding-block-start: 1rem;
    padding-block-end: 1rem;
    &__grid {
      display: grid;
      grid-auto-flow: row;
      gap: 1rem;
      place-items: center;
      ${mediaQueries.sm} {
        grid-template-columns: auto auto;
      }
      ${mediaQueries.md} {
        grid-auto-flow: column;
      }
    }
  }
  .fifth {
    &__grid {
      display: grid;
      grid-template-columns: repeat(4, 200px);
      gap: 2rem;
      overflow-x: scroll;
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
              headingBelow="The exquisite sense of mere tranquil existence"
              tag="Be inspired"
              link="explore and shop"
              aspectRatio="615/413"
            />
            <BlogPostPreview
              headingBelow="Never was there a greater artist than there is now"
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
          <div className="second__grid">
            <div className="col1">
              <BlogPostPreview
                headingBelow="Etiam aliquet vist metus"
                body="Luxury with integrity​"
                link="read more"
                aspectRatio="3/4"
              />
              <BlogPostPreview
                headingBelow="Etiam aliquet vist metus"
                body="Luxury with integrity​"
                link="read more"
                aspectRatio="3/4"
              />
            </div>
            <div className="col2">
              <BlogPostPreview
                headingBelow="Etiam aliquet vist metus"
                body="Luxury with integrity​"
                link="read more"
                aspectRatio="3/4"
              />
              <BlogPostPreview
                headingBelow="Etiam aliquet vist metus"
                body="Luxury with integrity​"
                link="read more"
                aspectRatio="3/4"
              />
            </div>
          </div>
        </section>
        <section className="third container">
          <BlogPostPreview
            headingBelow="The buzz of the little world"
            tag="videos"
            link="learn more"
            aspectRatio="615/413"
          />
        </section>
        <section className="fourth">
          <div className="fourth__grid">
            <ProductCardAlt
              image={{
                src: `https://picsum.photos/231/231?${
                  Math.floor(Math.random() * 10) + 1
                }`,
                alt: "something",
              }}
              size="120"
              name="The Scent of La Perla"
              price="120"
              category="Eau de parfum"
            />
            <ProductCardAlt
              image={{
                src: `https://picsum.photos/231/231?${
                  Math.floor(Math.random() * 10) + 1
                }`,
                alt: "something",
              }}
              size="120"
              name="The Scent of La Perla"
              price="120"
              category="Eau de parfum"
            />
            <ProductCardAlt
              image={{
                src: `https://picsum.photos/231/231?${
                  Math.floor(Math.random() * 10) + 1
                }`,
                alt: "something",
              }}
              size="120"
              name="The Scent of La Perla"
              price="120"
              category="Eau de parfum"
            />
            <ProductCardAlt
              image={{
                src: `https://picsum.photos/231/231?${
                  Math.floor(Math.random() * 10) + 1
                }`,
                alt: "something",
              }}
              size="120"
              name="The Scent of La Perla"
              price="120"
              category="Eau de parfum"
            />
          </div>
        </section>
        <section className="fifth container">
          <h2>Don't Miss</h2>
          <p>
            Etiam aliquet metus mauris, tempus odio feugiat non. Praesent eu
            magna id hendrerit bibendum. Aenean eget aliquet nisl. Pellentesque.{" "}
          </p>
          <BlogPostPreview />
          <div className="fifth__grid">
            <BlogPostPreview
              headingAbove="The key to more success is to get a massage"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              link="read more"
              aspectRatio="3/4"
            />
            <BlogPostPreview
              headingBelow="Don’t panic, when it gets crazy and rough"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              link="read more"
              aspectRatio="3/4"
            />
            <BlogPostPreview
              headingAbove="The key to more success is to get a massage"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              link="read more"
              aspectRatio="3/4"
            />
            <BlogPostPreview
              headingBelow="Don’t panic, when it gets crazy and rough"
              body="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              link="read more"
              aspectRatio="3/4"
            />
          </div>
        </section>
      </MainStyled>
    </Layout>
  )
}

export default BlogLandingPage

import type { Contentstack_Pages } from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import { Breadcrumb } from "../components/Breadcrumb"
import { Link } from "../components/Button"
import { Leaf } from "../components/Leaf"
import { Layout } from "../components/Layout"
import { PromotionalBanner } from "../components/PromotionalBanner"
import { SEO } from "../components/SEO"
import { MenuSubCategory } from "../components/MenuSubCategory"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const GeneralPage: React.FC<PageProps<null, PageContextPage>> = ({
  data,
  pageContext,
}) => {
  const {
    breadcrumb: { crumbs },
    page,
  } = pageContext

  return (
    <Layout>
      <SEO title={page?.title} />

      <div className={clsx("container")} page-id={data?.contentstackPages?.id}>
        <Breadcrumb crumbs={crumbs} />
      </div>

      <header className={clsx("container")}>
        <h1>{page?.title}</h1>
        <h2>{data?.contentstackPages?.title}</h2>
      </header>

      {data?.contentstackPages?.page_section?.map(page_section => {
        const SectionStyled = styled.section`
          ${page_section?.background_image?.attachment &&
          css`
            background-attachment: ${page_section?.background_image
              ?.attachment};
          `}
          ${page_section?.background_image?.colour?.transparent === false &&
          page_section?.background_image?.colour?.colour_picker &&
          css`
            background-color: ${page_section?.background_image?.colour
              ?.colour_picker};
          `}
            ${page_section?.background_image?.file?.url &&
          css`
            background-image: url("${page_section?.background_image?.file
              ?.url}");
          `}
          ${page_section?.background_image?.position?.custom_position !== ""
            ? css`
                background-position: ${page_section?.background_image?.position
                  ?.custom_position};
              `
            : css`
                background-position: ${page_section?.background_image?.position
                    ?.horizontal_position}
                  ${page_section?.background_image?.position?.vertical_position};
              `}
          ${page_section?.background_image?.position?.repeat &&
          css`
            background-repeat: ${page_section?.background_image?.repeat
                ?.horizontal_repetition_behaviour}
              ${page_section?.background_image?.repeat
                ?.vertical_repetition_behaviour};
          `}
          ${page_section?.background_image?.size?.custom_size !== ""
            ? css`
                background-size: ${page_section?.background_image?.size
                  ?.custom_size};
              `
            : css`
                background-size: ${page_section?.background_image?.size
                  ?.preset};
              `}
          min-height: 25vh;
          padding: 1rem;
        `

        return (
          <SectionStyled id={page_section?.id} key={page_section?.id}>
            <h2>{page_section?.title}</h2>
            {page_section?.modular_blocks.map(modular_block => {
              console.log("modular_block", modular_block)
              let component

              Object.entries(modular_block).forEach(([key, value]) => {
                console.log("key", key)

                if (value === null) {
                  return
                }

                console.log("value", value)

                switch (key) {
                  case "image_with_overlay":
                    component = <PromotionalBanner inlineView text={value?.paragraph} title={value?.title_primary} {...value} />
                    break
                  case "introduction":
                    component = (
                      <div className="introduction">
                        <h2>{value?.heading}</h2>
                        <p>{value?.paragraph}</p>
                      </div>
                    )
                    break
                  case "leaf":
                    component = <Leaf {...value} />
                    break
                  case "menu":
                    component = (
                      <MenuSubCategory>
                        {value?.menu?.[0]?.links?.map(link => (
                          <Link title={link?.url?.title} to={link?.url?.href}>
                            {link?.text}
                          </Link>
                        ))}
                      </MenuSubCategory>
                    )
                    break
                  default:
                    console.log("the two sweetest words")
                    break
                }
              })

              return component
            })}
          </SectionStyled>
        )
      })}
    </Layout>
  )
}

export default GeneralPage

export const query = graphql`
  query GeneralPage($id: String!) {
    contentstackPages(id: { eq: $id }) {
      ...Contentstack_pagesFragment
    }
  }
`

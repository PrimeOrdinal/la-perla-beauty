import type { Contentstack_Pages, GeneralPageQuery } from "../../graphql-types"

import clsx from "clsx"
import { PageProps, graphql } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"

import { Accordion } from "../components/Accordion"
import { Breadcrumb } from "../components/Breadcrumb"
// import { Heading } from "../components/Heading"
import { HoriontalRule } from "../components/HoriontalRule"
import { IconList } from "../components/IconList"
import { Introduction } from "../components/Introduction"
import { Link } from "../components/Button"
import { Leaf } from "../components/Leaf"
import { Layout } from "../components/Layout"
import { PromotionalBanner } from "../components/PromotionalBanner"
import { SEO } from "../components/SEO"
import { MenuSubCategory } from "../components/MenuSubCategory"

type PageContextPage = PageContextTypeBreadcrumb & {
  page: Contentstack_Pages
}

const GeneralPage: React.FC<PageProps<GeneralPageQuery, PageContextPage>> = ({
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

      {data?.contentstackPages?.breadcrumb?.show && (
        <Breadcrumb crumbs={crumbs} />
      )}

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
        `

        return (
          <SectionStyled
            className={clsx(page_section?.container && "container")}
            id={page_section?.id}
            key={page_section?.id}
          >
            {/* <h2>{page_section?.title}</h2> */}
            {page_section?.modular_blocks.map(modular_block => {
              let component

              Object.entries(modular_block).forEach(([key, value]: [key: string, value: any]) => {
                if (value === null) {
                  return
                }

                console.log("value", value)

                const margins = {
                  marginBottom: { _: 0, md: value?.margins?.bottom },
                  marginLeft: { _: 0, md: value?.margins?.left },
                  marginRight: { _: 0, md: value?.margins?.right },
                  marginTop: { _: 0, md: value?.margins?.top },
                }

                switch (key) {
                  case "accordion":
                    component = (
                      <Accordion
                        allowMultipleExpanded={true}
                        allowZeroExpanded={true}
                        className="footer-secondary-accordion"
                        items={value?.panels?.map((panel, index) => ({
                          heading: panel.heading,
                          panel: <div key={index}>{panel?.panel}</div>,
                        }))}
                      />
                    )
                    break
                  case "horizontal_rule":
                    component = (
                      <HoriontalRule
                        className={value?.colour}
                        {...margins}
                      />
                    )
                    break
                  case "icon_list":
                    component = (
                      <IconList
                        gridAutoFlow={{ _: "row", md: "column" }}
                        items={value?.item?.map(item => ({
                          icon: item?.icon,
                          color: item?.colour,
                          heading: item?.title,
                          body: <p>{item?.text}</p>,
                        }))}
                        orientation="horizontal"
                        {...margins}
                      ></IconList>
                    )
                    break
                  case "image":
                    component = <PromotionalBanner inlineView {...value} {...margins} />
                    break
                  case "image_with_overlay":
                    component = (
                      <PromotionalBanner
                        inlineView
                        text={value?.paragraph}
                        title={value?.title_primary}
                        {...margins}
                        {...value}
                      />
                    )
                    break
                  case "introduction":
                    component = 
                    (
                      <Introduction {...margins}>
                        {/* <Heading level={value?.heading?.semantic_level}>{value?.heading?.text}</Heading> */}
                        <p>{value?.paragraph}</p>
                      </Introduction>
                    )
                    break
                  case "leaf":
                    component = <Leaf {...value} {...margins} />
                    break
                  case "menu":
                    component = (
                      <MenuSubCategory justifyContent={value?.justify_content} {...margins}>
                        {value?.menu?.[0]?.links?.map(link => (
                          <Link title={link?.url?.title} to={link?.url?.href}>
                            {link?.text}
                          </Link>
                        ))}
                      </MenuSubCategory>
                    )
                    break
                  case "paragraph":
                    component = <p {...margins}>{value?.paragraph}</p>
                    break
                  default:
                    console.log(`Unmapped modular block type: ${key}`)
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
  query GeneralPage($contentstackId: String!) {
    contentstackPages(id: { eq: $contentstackId }) {
      ...Contentstack_pagesFragment
    }
  }
`

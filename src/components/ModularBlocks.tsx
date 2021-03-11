import type {
  ModularBlocksTypes,
  ModularBlock,
  ModularBlockAccordion,
  ModularBlockArticleCard,
  ModularBlockBlogPostPreview,
  ModularBlockHorizontalRule,
  ModularBlockIconList,
  ModularBlockImage,
  ModularBlockImageWithOverlay,
  ModularBlockLeaf,
  ModularBlockMenu,
  ModularBlockParagraph,
  ModularBlockProductCard,
  ModularBlockquote,
  ModularBlockWYSIWYG,
  ModularBlockVideo,
} from "../../types/ModularBlocks"

import React from "react"

import { Accordion } from "../components/Accordion"
import { Blockquote } from "./Blockquote"
import { BlogPostPreview } from "../components/BlogPostPreview"
import { HoriontalRule } from "../components/HoriontalRule"
import { IconList } from "../components/IconList"
import { Link } from "../components/Button"
import { Leaf } from "../components/Leaf"
import { ProductCard } from "../components/ProductCard"
import { ProductCardAlt } from "../components/ProductCardAlt"
import { PromotionalBanner } from "../components/PromotionalBanner"
import { MenuCategory } from "../components/MenuCategory"
import { VideoPlayer } from "../components/VideoPlayer"
import { WYSIWYG } from "../components/WYSIWYG"

export type ModularBlocksProps = {
  modularBlocks: ModularBlocksTypes[]
}

export const ModularBlocks: React.FC<ModularBlocksProps> = ({
  modularBlocks,
}) => (
  <React.Fragment>
    {modularBlocks?.map(modular_block => {
      let component

      Object.entries(modular_block).forEach(
        ([key, value]: [key: string, value: ModularBlock]) => {
          if (value === null) {
            return
          }

          // const value: MakePick<ModularBlocksTypes, "image" | "margins"> = value1

          const margins = {
            marginBottom: { _: 0, md: value?.margins?.bottom },
            marginLeft: { _: 0, md: value?.margins?.left },
            marginRight: { _: 0, md: value?.margins?.right },
            marginTop: { _: 0, md: value?.margins?.top },
          }

          switch (key) {
            case "accordion":
              const accordion = value as ModularBlockAccordion
              component = (
                <Accordion
                  items={accordion?.panels?.map((panel, index) => ({
                    title: panel.title,
                    panel: <div key={index}>{panel?.panel}</div>,
                  }))}
                />
              )
              break
            // case "article_card":
            //   const articleCard = value as ModularBlockArticleCard
            //   component = (<ArticleCard />)
            //   break
            // case "article_cards":
            //   const articleCards = value as ModularBlockArticleCards
            //   component = ()
            //   break
            case "blog_post_preview":
              const blogPostPreview = value as ModularBlockBlogPostPreview
              // aspectRatio: string
              // text: string
              // headingAbove: string
              // headingBelow: string
              // link?: {
              //   href: URL
              //   title: string
              // }
              // tag: string
              component = (
                <BlogPostPreview
                  {...blogPostPreview}
                  {...margins}
                />
              )
              break
            case "horizontal_rule":
              const horizontalRule = value as ModularBlockHorizontalRule
              component = (
                <HoriontalRule
                  className={horizontalRule?.colour}
                  {...margins}
                />
              )
              break
            case "icon_list":
              const iconList = value as ModularBlockIconList
              component = (
                <IconList
                  gridAutoFlow={{ _: "row", md: "column" }}
                  items={iconList?.item?.map(item => ({
                    icon: item?.icon,
                    color: item?.colour,
                    title: item?.title,
                    text: <p>{item?.text}</p>,
                  }))}
                  orientation="horizontal"
                  {...margins}
                ></IconList>
              )
              break
            case "image":
              const image = value as ModularBlockImage
              component = (
                <PromotionalBanner layout="overlay" {...image} {...margins} />
              )
              break
            case "image_with_overlay":
              const imageWithOverlay = value as ModularBlockImageWithOverlay
              component = (
                <PromotionalBanner
                  layout="hero"
                  link={imageWithOverlay?.link}
                  text={imageWithOverlay?.paragraph}
                  titlePrimary={imageWithOverlay?.title_primary}
                  titleSecondary={imageWithOverlay?.title_secondary}
                  {...margins}
                  {...value}
                />
              )
              break
            case "leaf":
              const leaf = value as ModularBlockLeaf
              const img = {
                alt: leaf?.image?.title as string,
                src: leaf?.image?.url?.toString() as string,
              }
              component = (
                <Leaf
                  colour={leaf?.colour}
                  // image={leaf?.image}
                  image={img}
                  // layout={leaf?.layout || "text-inside-and-image"}
                  layout="text-inside-and-image"
                  // layout="image-and-text-inside"
                  // layout="image-and-text-outside"
                  // layout="text-outside-and-image"
                  link={leaf?.link}
                  text={leaf?.text as string}
                  title={leaf?.title as string}
                  {...margins}
                />
              )
              break
            case "menu":
              const menu = value as ModularBlockMenu
              component = (
                <MenuCategory
                  justifyContent={menu?.justify_content}
                  {...margins}
                >
                  {menu?.menu?.[0]?.links?.map(link => (
                    <Link title={link?.url?.title} to={link?.url?.href}>
                      {link?.text}
                    </Link>
                  ))}
                </MenuCategory>
              )
              break
            case "paragraph":
              const paragraph = value as ModularBlockParagraph
              component = <p {...margins}>{paragraph?.paragraph}</p>
              break
            case "product_card":
              const productCard = value as ModularBlockProductCard
              component =
                productCard?.view === "alternative" ? (
                  <ProductCardAlt product={productCard?.product} {...margins} />
                ) : (
                  <ProductCard product={productCard?.product} {...margins} />
                )
              break
            case "quotation":
              const blockquote = value as ModularBlockquote
              const { quotation, ...props } = blockquote
              component = (
                <Blockquote {...props} {...margins}>{quotation}</Blockquote>
              )
              break
            case "video":
              const video = value as ModularBlockVideo
              component = (
                <VideoPlayer
                  aspectRatio="16/9"
                  light={video?.poster?.url}
                  url={video?.video?.url}
                  {...margins}
                />
              )
              break
            case "wysiwyg":
              const wysiwyg = value as ModularBlockWYSIWYG
              component = (
                <WYSIWYG
                  markup={wysiwyg?.markup}
                  {...margins}
                />
              )
              break
            default:
              console.log(`Unmapped modular block type: ${key}`)
              break
          }
        }
      )

      return component
    })}
  </React.Fragment>
)

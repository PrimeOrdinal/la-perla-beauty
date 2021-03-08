import type {
  ModularBlocksTypes,
  ModularBlock,
  ModularBlockAccordion,
  ModularBlockArticleCard,
  ModularBlockHorizontalRule,
  ModularBlockIconList,
  ModularBlockImage,
  ModularBlockImageWithOverlay,
  ModularBlockIntroduction,
  ModularBlockLeaf,
  ModularBlockMenu,
  ModularBlockParagraph,
  ModularBlockQuotation,
  ModularBlockWYSIWYG,
  ModularBlockVideo,
} from "../../types/ModularBlocks"

import React from "react"

import { Accordion } from "../components/Accordion"
import { BlockQuote } from "../components/BlockQuote"
import { HoriontalRule } from "../components/HoriontalRule"
import { IconList } from "../components/IconList"
import { Introduction } from "../components/Introduction"
import { Link } from "../components/Button"
import { LeafTwo } from "../components/LeafTwo"
import { PromotionalBanner } from "../components/PromotionalBanner"
import { MenuSubCategory } from "../components/MenuSubCategory"
import { VideoPlayer } from "../components/VideoPlayer"

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
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                  items={accordion?.panels?.map((panel, index) => ({
                    title: panel.title,
                    panel: <div key={index}>{panel?.panel}</div>,
                  }))}
                />
              )
              break
            // case "article_card":
            //   const articleCard = value as ModularBlockArticleCard
            //   component = ()
            //   break
            // case "article_cards":
            //   const articleCards = value as ModularBlockArticleCards
            //   component = ()
            //   break
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
                    body: <p>{item?.text}</p>,
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
            case "introduction":
              const introduction = value as ModularBlockIntroduction
              component = (
                <Introduction {...margins}>
                  {/* <Heading level={value?.title?.semantic_level}>{value?.title?.text}</Heading> */}
                  <p>{introduction?.paragraph}</p>
                </Introduction>
              )
              break
            case "leaf":
              const leaf = value as ModularBlockLeaf
              const img = {
                alt: leaf?.image?.title as string,
                src: leaf?.image?.url?.toString(),
              }
              component = (
                <LeafTwo
                  body={leaf?.text as string}
                  color={leaf?.colour}
                  title={leaf?.title as string}
                  img={img}
                  link={<Link to={leaf?.link?.href}>{leaf?.link?.title}</Link>}
                  {...margins}
                />
              )
              break
            case "menu":
              const menu = value as ModularBlockMenu
              component = (
                <MenuSubCategory
                  justifyContent={menu?.justify_content}
                  {...margins}
                >
                  {menu?.menu?.[0]?.links?.map(link => (
                    <Link title={link?.url?.title} to={link?.url?.href}>
                      {link?.text}
                    </Link>
                  ))}
                </MenuSubCategory>
              )
              break
            case "paragraph":
              const paragraph = value as ModularBlockParagraph
              component = <p {...margins}>{paragraph?.paragraph}</p>
              break
            case "quotation":
              const quotation = value as ModularBlockQuotation
              component = (
                <BlockQuote {...margins}>{quotation?.quotation}</BlockQuote>
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
                <div
                  dangerouslySetInnerHTML={{
                    __html: wysiwyg?.markup as string,
                  }}
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

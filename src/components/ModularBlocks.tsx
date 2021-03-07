import type {
  ModularBlocksTypes,
  ModularBlock,
  ModularBlockHorizontalRule,
  ModularBlockIconList,
  ModularBlockImage,
  ModularBlockIntroduction,
  ModularBlockMenu,
  ModularBlockParagraph,
  ModularBlockQuotation,
  ModularBlockVideo,
} from "../../types/ModularBlocks"

import React from "react"

import { Accordion } from "../components/Accordion"
import { HoriontalRule } from "../components/HoriontalRule"
import { IconList } from "../components/IconList"
import { Introduction } from "../components/Introduction"
import { Link } from "../components/Button"
import { Leaf } from "../components/Leaf"
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
              component = (
                <Accordion
                  allowMultipleExpanded={true}
                  allowZeroExpanded={true}
                  items={value?.panels?.map((panel, index) => ({
                    heading: panel.heading,
                    panel: <div key={index}>{panel?.panel}</div>,
                  }))}
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
                    heading: item?.title,
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
              component = (
                <PromotionalBanner
                  layout="hero"
                  text={value?.paragraph}
                  title={value?.title_primary}
                  {...margins}
                  {...value}
                />
              )
              break
            case "introduction":
              const introduction = value as ModularBlockIntroduction
              component = (
                <Introduction {...margins}>
                  {/* <Heading level={value?.heading?.semantic_level}>{value?.heading?.text}</Heading> */}
                  <p>{introduction?.paragraph}</p>
                </Introduction>
              )
              break
            case "leaf":
              component = <Leaf {...value} {...margins} />
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
                <blockquote {...margins}>{quotation?.quotation}</blockquote>
              )
              break
              case "video":
              const video = value as ModularBlockVideo
              component = (
                <VideoPlayer light={video?.poster?.url} url={video?.video?.url} {...margins} />
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

import type { ModularBlocksTypes } from "../../types/ModularBlocks"

import React from "react"

import { Accordion } from "../components/Accordion"
import { HoriontalRule } from "../components/HoriontalRule"
import { IconList } from "../components/IconList"
import { Introduction } from "../components/Introduction"
import { Link } from "../components/Button"
import { Leaf } from "../components/Leaf"
import { PromotionalBanner } from "../components/PromotionalBanner"
import { MenuSubCategory } from "../components/MenuSubCategory"

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
        ([key, value]: [key: string, value: any]) => {
          if (value === null) {
            return
          }

          // const value: ModularBlocksTypes["image"] = value1

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
                <HoriontalRule className={value?.colour} {...margins} />
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
              component = (
                <PromotionalBanner layout="overlay" {...value} {...margins} />
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
              component = (
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
                <MenuSubCategory
                  justifyContent={value?.justify_content}
                  {...margins}
                >
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
        }
      )

      return component
    })}
  </React.Fragment>
)

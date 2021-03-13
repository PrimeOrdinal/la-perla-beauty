import type {
  ModularBlocksTypes,
  ModularBlock,
} from "../../types/ModularBlocks"

import React from "react"

import { Accordion, AccordionProps } from "../components/Accordion"
import { ArticleCardGallery, ArticleCardGalleryProps } from "../components/ArticleCardGallery"
import { Blockquote } from "./Blockquote"
import { BlogPostPreview } from "../components/BlogPostPreview"
import { HoriontalRule, HoriontalRuleProps } from "../components/HoriontalRule"
import { IconList } from "../components/IconList"
import { Link } from "../components/Button"
import { Leaf } from "../components/Leaf"
import { ProductCard } from "../components/ProductCard"
import { ProductCardAlt } from "../components/ProductCardAlt"
import { Banner } from "../components/Banner"
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
      console.log("modular_block", modular_block)
      let component

      Object.entries(modular_block).forEach(
        ([key, value]: [key: string, value: ModularBlock]) => {
          if (value === null) {
            return
          }

          // const value: MakePick<ModularBlocksTypes, "image" | "margins"> = value1

          const margins = {
            marginBottom: { _: value?.margins?.[0], md: value?.margins?.[2] },
            marginTop: { _: value?.margins?.[1], md: value?.margins?.[3] },
          }

          // TODO: These are all the same so far so replace case statements with a single mapping
          switch (key) {
            case "accordion":
              const {
                accordion,
              }: { accordion: AccordionProps[] } = value as any
              component = accordion?.map((props, index) => (
                <Accordion key={index} {...props} {...margins} />
              ))
              break
            case "article_card_gallery":
              const {
                article_card_gallery,
              }: {
                article_card_gallery: ArticleCardGalleryProps[]
              } = value as any
              component = article_card_gallery?.map((props, index) => (
                <ArticleCardGallery key={index} {...props} {...margins} />
              ))
              break
            case "horizontal_rule":
              const props: HoriontalRuleProps[] = value as any
              component = <HoriontalRule {...props} {...margins} />
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

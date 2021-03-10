import type { Link as LinkProp } from "./components"

import type { Product } from "schema-dts"

import { ReactElement } from "react"
import { Colour, Icon } from "components"

export type ModularBlock = {
  margins?: {
    bottom?: number
    left?: number
    right?: number
    top?: number
  }
}

export type ModularBlockAccordion = ModularBlock & {
  panels?: Array<{
    title: string
    panel: ReactElement
  }>
}

export type ModularBlockBlogPostPreview = ModularBlock & {
  aspectRatio: string
  body: string
  headingAbove: string
  headingBelow: string
  link?: LinkProp
  tag: string
}

export type ModularBlockHorizontalRule = ModularBlock & {
  colour?: string
}

export type ModularBlockIconList = ModularBlock & {
  item: Array<{
    colour?: Colour
    icon?: Icon
    text?: string
    title?: string
  }>
}

export type ModularBlockImage = ModularBlock & {
  image: {
    image?: {
      title?: string
      url?: string
    }
  }
}

export type ModularBlockImageWithOverlay = ModularBlock & {
  image: {
    image?: {
      title?: string
      url?: string
    }
  }
  link?: LinkProp
  paragraph?: string
  title_primary: string
  title_secondary: string
}

export type ModularBlockIntroduction = ModularBlock & {
  title?: {
    semantic_level?: number
    text?: string
  }
  link?: LinkProp
  paragraph?: string
}

export type ModularBlockLeaf = ModularBlock & {
  colour: Colour
  title?: string
  image?: {
    title?: string
    url?: string
  }
  layout: string,
  link?: LinkProp
  orientation: null,
  text?: string
}

export type ModularBlockMenu = ModularBlock & {
  justify_content?: string
  menu?: Array<{
    links?: Array<{
      text?: string
      url?: {
        href: string
        title: string
      }
    }>
    title?: string
  }>
}

export type ModularBlockParagraph = ModularBlock & {
  paragraph: {
    paragraph?: string
  }
}

export type ModularBlockProductCard = ModularBlock & {
  product: Product
  view: "alternative" | "default"
}

export type ModularBlockQuotation = ModularBlock & {
  quotation: {
    quotation?: string
  }
}

export type ModularBlockVideo = ModularBlock & {
  poster: {
    url?: string
  }
  video: {
    url?: string
  }
}

export type ModularBlockWYSIWYG = ModularBlock & {
  markup: string
}

export type ModularBlocksTypes =
  | ModularBlockAccordion
  | ModularBlockBlogPostPreview
  | ModularBlockHorizontalRule
  | ModularBlockIconList
  | ModularBlockImage
  | ModularBlockImageWithOverlay
  | ModularBlockIntroduction
  | ModularBlockLeaf
  | ModularBlockMenu
  | ModularBlockParagraph
  | ModularBlockProductCard
  | ModularBlockQuotation
  | ModularBlockVideo
  | ModularBlockWYSIWYG

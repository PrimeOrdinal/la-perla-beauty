import { ReactElement } from "react"
import { Colour, Icon } from "theme"

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
    heading: string
    panel: ReactElement
  }>
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
      url?: URL
    }
  }
}

export type ModularBlockImageWithOverlay = ModularBlock & {
  image: {
    image?: {
      title?: string
      url?: URL
    }
  }
  link?: {
    href: URL
    title: string
  }
  paragraph?: string
  title_primary: string
  title_secondary: string
}

export type ModularBlockIntroduction = ModularBlock & {
  heading?: {
    semantic_level?: number
    text?: string
  }
  link?: {
    href: URL
    title: string
  }
  paragraph?: string
}

export type ModularBlockLeaf = ModularBlock & {
  colour: Colour
  heading?: string
  image: {
    image?: {
      title?: string
      url?: URL
    }
  }
  layout: string,
  link?: {
    href: URL
    title: string
  }
  orientation: null,
  text?: string
}

export type ModularBlockMenu = ModularBlock & {
  justify_content?: string
  menu?: Array<{
    links?: Array<{
      text?: string
      url?: {
        href: URL
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

export type ModularBlockQuotation = ModularBlock & {
  quotation: {
    quotation?: string
  }
}

export type ModularBlockVideo = ModularBlock & {
  poster: {
    url?: URL
  }
  video: {
    url?: URL
  }
}

export type ModularBlockWYSIWYG = ModularBlock & {
  markup: string
}

export type ModularBlocksTypes =
  | ModularBlockImage
  | ModularBlockImageWithOverlay
  | ModularBlockIntroduction
  | ModularBlockMenu
  | ModularBlockParagraph
  | ModularBlockQuotation
  | ModularBlockVideo

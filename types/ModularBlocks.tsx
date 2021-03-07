import { Colour, Icon } from "theme"

export type ModularBlock = {
  margins?: {
    bottom?: number
    left?: number
    right?: number
    top?: number
  }
}

export type ModularBlockHorizontalRule = ModularBlock & {
  colour?: string
}

export type ModularBlockIconList = ModularBlock & {
  item: Array<{
    colour?: Icon
    icon?: Colour
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

export type ModularBlocksTypes =
  | ModularBlockImage
  | ModularBlockIntroduction
  | ModularBlockMenu
  | ModularBlockParagraph
  | ModularBlockQuotation
  | ModularBlockVideo

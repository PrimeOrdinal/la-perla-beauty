export type ModularBlock = {
  margins?: {
    bottom?: number
    left?: number
    right?: number
    top?: number
  }
}

export type ModularBlockImage = ModularBlock & {
  image: {
    image?: {
      title?: string
      url?: string
    }
  }
}

export type ModularBlockIntroduction = ModularBlock & {
  introduction: {
    heading?: {
      semantic_level?: string
      text?: string
    }
    link?: {
      href: string
      title: string
    }
    paragraph?: string
  }
}

export type ModularBlockMenu = ModularBlock & {
  menu: {
    justify_content?: string
    menu?: Array<{
      links?: Array<{
        href: string
        title: string
      }>
      title?: string
    }>
  }
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
  video: {
    video?: {
      title?: string
      url?: string
    }
  }
}

export type ModularBlocksTypes =
  | ModularBlockImage
  | ModularBlockIntroduction
  | ModularBlockMenu
  | ModularBlockParagraph
  | ModularBlockQuotation
  | ModularBlockVideo

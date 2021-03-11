export type Background = {
  attachment: string
  colour: {
    colour_picker: string
    transparent: boolean
  }
  file: {
    description: string
    title: string
    url: string
  }
  position: BackgroundPosition
  repeat: {
    horizontal_repetition_behaviour: string
    vertical_repetition_behaviour: string
  }
  size: {
    custom_size: string
    preset: string
  }
}

export type BackgroundPosition = {
  custom: string
  horizontal: "left" | "center" | "right"
  vertical: "top" | "center" | "bottom"
}

export type Colour = "beige" | "lightgreen" | "lilac" | "orange" | "pink"

export type Icon =
  | "checkout"
  | "cookies"
  | "diamond"
  | "envelope"
  | "gift-wrap"
  | "heart"
  | "nib"
  | "perfume"
  | "plant"
  | "recycle"
  | "return"
  | "shipping"
  | "tracking"

export type Image = {
  alt: string,
  src: string
}

export type Link = {
  href: string
  title: string
}
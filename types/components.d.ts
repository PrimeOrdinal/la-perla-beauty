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
  title: string
}

export type Justify = "center" | "end" | "start" | "stretch"

export type Link = {
  href: string
  title: string
}
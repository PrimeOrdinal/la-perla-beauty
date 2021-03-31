export type AspectRatio = "1/1" | "2/3" | "3/2" | "3/4" | "16/9"

export type BackgroundPosition = [
  "top left",
  "top center",
  "top right",
  "center left",
  "center center",
  "center right",
  "bottom left",
  "bottom center",
  "bottom right"
]

export type Colour =
  | "beige"
  | "lightgreen"
  | "lightgrey"
  | "lilac"
  | "orange"
  | "pink"

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
  alt: string
  src: string
  title?: string
}

export type Justify = "center" | "end" | "start" | "stretch"

export type Link = {
  href: string
  title: string
}

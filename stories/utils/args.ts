import type { ItemAvailability, Offer, Product } from "schema-dts"

import type {
  Colour as ColourProp,
  Image as ImageProp,
  Link as LinkProp,
} from "../../types/components"

import faker from "faker"

export const colours: ColourProp[] = ["beige", "lightgreen", "lightgrey", "lilac", "orange", "pink"]

export const itemAvailability: ItemAvailability[] = [
  "https://schema.org/InStock",
  "https://schema.org/LimitedAvailability",
  "https://schema.org/OnlineOnly",
  "https://schema.org/OutOfStock",
  "https://schema.org/PreOrder",
  "https://schema.org/SoldOut",
]

export const getColour = (): ColourProp => colours[Math.floor(Math.random() * colours.length)]

export const getImage = (): ImageProp => ({
  alt: faker.lorem.sentence(),
  src: faker.image.imageUrl(),
  title: faker.lorem.sentence(),
})

export const getItemAvailability = (): ItemAvailability => itemAvailability[Math.floor(Math.random() * itemAvailability.length)]

export const getLink = (): LinkProp => ({
  href: faker.internet.url(),
  title: faker.lorem.sentence(),
})

export const getOffers = (url?: string): Offer => ({
  "@type": "Offer",
  availability: "https://schema.org/InStock",
  itemCondition: "https://schema.org/NewCondition",
  price: faker.commerce.price(),
  priceCurrency: faker.finance.currencyCode(),
  priceValidUntil: faker.date.future(),
  url: url ? url : `https://${faker.internet.domainName()}/${faker.helpers.slugify(faker.commerce.productName())}`,
})

export const getProduct = (): Product => {
  const colors = ["red", "green", "blue"]
  const color = colors[Math.floor(Math.random() * colors.length)]
  const domainName = faker.internet.domainName()
  const name = faker.commerce.productName()
  const sizes = [300, 600, 900]
  const size = sizes[Math.floor(Math.random() * sizes.length)]
  const url = `https://${domainName}/${faker.helpers.slugify(name)}`

  return {
    "@context": "https://schema.org/",
    "@type": "Product",
    brand: {
      "@type": "Brand",
      name: faker.company.companyName(),
    },
    category: [
      {
        "@type": "Thing",
        name: "Shop All",
        url: `${faker.internet.domainName()}/${faker.lorem.word()}`,
      },
    ],
    color,
    description: faker.commerce.productDescription(),
    ean: faker.random.number(),
    image: [
      {
        "@type": "ImageObject",
        caption: faker.lorem.sentence(),
        contentUrl: faker.image.imageUrl(),
      },
      {
        "@type": "ImageObject",
        caption: faker.lorem.sentence(),
        contentUrl: faker.image.imageUrl(),
      },
      {
        "@type": "ImageObject",
        caption: faker.lorem.sentence(),
        contentUrl: faker.image.imageUrl(),
      },
    ],
    material: faker.commerce.productMaterial(),
    mpn: faker.random.number(),
    name,
    offers: getOffers(url),
    review: {
      "@type": "Review",
      dateCreated: faker.date.future(),
      reviewBody: `This product is absolutely ${faker.commerce.productAdjective()}`,
      reviewRating: {
        "@type": "Rating",
        ratingValue: Math.floor(Math.random() * 5) + 1,
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      },
    },
    size: `${size}ml`,
    sku: faker.random.alphaNumeric(),
    url,
  } as Product
}
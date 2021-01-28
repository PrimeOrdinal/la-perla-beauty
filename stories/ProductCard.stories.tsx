import type { Product } from "schema-dts"

import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react"

import { ProductCard, ProductCardProps } from "../src/components/ProductCard"

export default {
  title: "ProductCard",
  component: ProductCard,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

export const Primary = Template.bind({})
Primary.args = {
  product: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Executive Anvil",
    image: [
      "https://example.com/photos/1x1/photo.jpg",
      "https://example.com/photos/4x3/photo.jpg",
      "https://example.com/photos/16x9/photo.jpg",
    ],
    description:
      "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
    sku: "0446310786",
    mpn: "925872",
    brand: {
      "@type": "Brand",
      name: "ACME",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Fred Benson",
      },
    },
    offers: {
      "@type": "Offer",
      url: "https://example.com/anvil",
      priceCurrency: "USD",
      price: "119.99",
      priceValidUntil: "2020-11-20",
      itemCondition: "https://schema.org/UsedCondition",
      availability: "https://schema.org/InStock",
    },
  } as Product,
}

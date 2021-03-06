import type { Product } from "schema-dts"

import React from "react"
import { Story, Meta } from "@storybook/react"

import { ProductSection, ProductSectionProps } from "../src/components/ProductSection"

export default {
  title: "ProductSection",
  component: ProductSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ProductSectionProps> = args => <ProductSection {...args} />

export const Primary = Template.bind({})
Primary.args = {
  product: {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "Executive Anvil",
    image: [
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/300x400",
      "https://via.placeholder.com/300x400",
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
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
    },
  } as Product,
}

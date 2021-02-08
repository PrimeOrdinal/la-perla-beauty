import type { Product } from "schema-dts"

import React from "react"
import { Story, Meta } from "@storybook/react"

import { ProductCard, ProductCardProps } from "../src/components/ProductCard"

export default {
  title: "ProductCard",
  component: ProductCard,
  argTypes: {
    backgroundColor: { control: "color" },
    showImage: { control: "boolean" },
    availability: {
      control: {
        type: "inline-radio",
        options: ["https://schema.org/InStock", "https://schema.org/LimitedAvailability", "https://schema.org/OnlineOnly", "https://schema.org/OutOfStock", "https://schema.org/PreOrder", "https://schema.org/SoldOut"],
      },
    },
  },
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

export const InStock = Template.bind({})
InStock.args = {
  label: "In Stock",
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
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/UsedCondition",
      price: "119.99",
      priceCurrency: "USD",
      priceValidUntil: "2020-11-20",
      url: "https://example.com/anvil",
    },
  } as Product,
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 },
}

export const LimitedAvailability = Template.bind({});
LimitedAvailability.args = {
  ...InStock.args,
}
// LimitedAvailability.args = Object.assign(InStock.args)
LimitedAvailability.args.label = "Limited Availability"
LimitedAvailability.args.product.offers.availability = "https://schema.org/LimitedAvailability"

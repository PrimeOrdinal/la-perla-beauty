import { Story, Meta } from "@storybook/react"
import React from "react"

import {
  ProductCardAlternate,
  ProductCardAlternateProps,
} from "../src/components/ProductCardAlternate"

import { getProduct } from "./utils/args"

export default {
  title: "ProductCardAlternate",
  component: ProductCardAlternate,
  argTypes: {
    backgroundColor: { control: "color" },
    showImage: { control: "boolean" },
    availability: {
      control: {
        type: "inline-radio",
        options: [
          "https://schema.org/InStock",
          "https://schema.org/LimitedAvailability",
          "https://schema.org/OnlineOnly",
          "https://schema.org/OutOfStock",
          "https://schema.org/PreOrder",
          "https://schema.org/SoldOut",
        ],
      },
    },
  },
} as Meta

const Template: Story<ProductCardAlternateProps> = args => (
  <ProductCardAlternate {...args} />
)

export const InStock = Template.bind({})
InStock.args = {
  label: "In Stock",
  product: getProduct(),
  variantType: "size",
  width: { _: 1, sm: 1 / 2, md: 1 / 2, lg: 1 / 6 },
}

export const LimitedAvailability = Template.bind({})
LimitedAvailability.args = {
  ...InStock.args,
}
// LimitedAvailability.args = Object.assign(InStock.args)
LimitedAvailability.args.label = "Limited Availability"
LimitedAvailability.args.product.offers.availability =
  "https://schema.org/LimitedAvailability"

import React from "react"
import { Story, Meta } from "@storybook/react"

import { ProductCard, ProductCardProps } from "../src/components/ProductCard"

import { getProduct } from "./utils/args"

export default {
  title: "ProductCard",
  component: ProductCard,
  argTypes: {
    
  },
} as Meta

const Template: Story<ProductCardProps> = args => <ProductCard {...args} />

const Base = Template.bind({})
Base.args = {
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/4 },
}

export const InStock = Template.bind({})
InStock.args = {
  ...Base.args,
  label: "In Stock",
  product: {
    ...getProduct(),
    offers: {
      ...getProduct().offers,
      availability: "https://schema.org/InStock",
    },
  }
}

export const LimitedAvailability = Template.bind({});
LimitedAvailability.args = {
  ...Base.args,
  label: "Limited Availability",
  product: {
    ...getProduct(),
    offers: {
      ...getProduct().offers,
      availability: "https://schema.org/LimitedAvailability",
    },
  }
}
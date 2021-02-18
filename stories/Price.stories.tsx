import type { Product } from "schema-dts"

import React from "react"
import { Story, Meta } from "@storybook/react"

import { Price, PriceProps } from "../src/components/Price"

export default {
  title: "Price",
  component: Price,
  argTypes: {

  },
} as Meta

const Template: Story<PriceProps> = args => <Price {...args} />

export const Example = Template.bind({})
Example.args = {
  offer: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    price: "119.99",
    priceCurrency: "USD",
    priceValidUntil: "2020-11-20",
    url: "https://example.com/anvil",
  } as Offer,
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 },
}
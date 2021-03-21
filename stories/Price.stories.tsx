import React from "react"
import { Story, Meta } from "@storybook/react"

import { Price, PriceProps } from "../src/components/Price"

import { getOffers } from "./utils/args"

export default {
  title: "Price",
  component: Price,
  argTypes: {

  },
} as Meta

const Template: Story<PriceProps> = args => <Price {...args} />

export const Example = Template.bind({})
Example.args = {
  offer: getOffers(),
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 },
}
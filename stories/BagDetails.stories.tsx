import React from "react"
import { Story, Meta } from "@storybook/react"

import { BagDetails } from "../src/components/BagDetails"

import { getProduct } from "./utils/args"

export default {
  title: "BagDetails",
  component: BagDetails,
} as Meta

const Template: Story = args => <BagDetails {...args} />
export const Example = Template.bind({})
Example.args = {
  items: [
    {
      product: getProduct(),
      quantity: 1,
    },
    {
      product: getProduct(),
      quantity: 2,
    },
    {
      product: getProduct(),
      quantity: 3,
    },
    {
      product: getProduct(),
      quantity: 4,
    },
  ],
}
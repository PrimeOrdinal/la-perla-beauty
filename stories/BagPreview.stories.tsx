import React from "react"
import { Story, Meta } from "@storybook/react"

import { BagPreview } from "../src/components/BagPreview"

import { getProduct } from "./utils/args"

export default {
  title: "BagPreview",
  component: BagPreview,
} as Meta

const Template: Story = args => <BagPreview {...args} />
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
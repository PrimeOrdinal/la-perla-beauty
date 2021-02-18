import React from "react"
import { Story, Meta } from "@storybook/react"

import { ShoppingBagProduct } from "../src/components/ShoppingBagProduct"

export default {
  title: "ShoppingBagProduct",
  component: ShoppingBagProduct,
} as Meta

const Template: Story = args => <ShoppingBagProduct {...args} />
export const Primary = Template.bind({})

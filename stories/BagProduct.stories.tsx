import React from "react"
import { Story, Meta } from "@storybook/react"

import { BagProduct } from "../src/components/BagProduct"

export default {
  title: "BagProduct",
  component: BagProduct,
} as Meta

const Template: Story = args => <BagProduct {...args} />
export const Primary = Template.bind({})

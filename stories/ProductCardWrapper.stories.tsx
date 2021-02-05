import React from "react"
import { Story, Meta } from "@storybook/react"

import { ProductCardWrapper } from "../src/components/ProductCardWrapper"

export default {
  title: "ProductCardWrapper",
  component: ProductCardWrapper,
  argTypes: {
    backgroundColor: { control: "color" },
    showImage: { control: "boolean" },
  },
} as Meta

const Template: Story = args => <ProductCardWrapper {...args} />
export const Primary = Template.bind({})

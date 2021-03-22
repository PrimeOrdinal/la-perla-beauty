import type { Product } from "schema-dts"

import { Story, Meta } from "@storybook/react"
import React from "react"

import {
  ProductSection,
  ProductSectionProps,
} from "../src/components/ProductSection"

import { getProduct } from "./utils/args"

export default {
  title: "ProductSection",
  component: ProductSection,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ProductSectionProps> = args => (
  <ProductSection {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  product: getProduct(),
}

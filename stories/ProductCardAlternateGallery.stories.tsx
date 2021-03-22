import React from "react"
import { Story, Meta } from "@storybook/react"

import {
  ProductCardAlternateGallery,
  ProductCardAlternateGalleryProps,
} from "../src/components/ProductCardAlternateGallery"

import { getProduct } from "./utils/args"

export default {
  title: "ProductCardAlternateGallery",
  component: ProductCardAlternateGallery,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ProductCardAlternateGalleryProps> = args => (
  <ProductCardAlternateGallery {...args} />
)

export const Example = Template.bind({})
Example.args = {
  items: [
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
  ],
  view: "grid",
  variantType: "size",
}

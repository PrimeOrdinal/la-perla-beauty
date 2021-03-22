import React from "react"
import { Story, Meta } from "@storybook/react"

import { ProductListing, ProductListingProps } from "../src/components/ProductListing"

import { getProduct } from "./utils/args"

export default {
  title: "ProductListing",
  component: ProductListing,
  argTypes: {
    view: {
      control: {
        type: "inline-radio",
        options: ["grid", "list"],
      },
    },
  },
} as Meta

const Template: Story<ProductListingProps> = args => <ProductListing {...args} />

export const Example = Template.bind({})
Example.args = {
  items: [
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
  ],
  view: "grid",
}

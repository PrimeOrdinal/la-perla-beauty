import React from "react"
import { Story, Meta } from "@storybook/react"

import { BagProduct, BagProductProps } from "../src/components/BagProduct"

import { getProduct } from "./utils/args"

export default {
  title: "BagProduct",
  component: BagProduct,
  argTypes: {
  //   layout: {
  //     control: {
  //       type: "inline-radio",
  //       options: [
  //         "compact", "full"
  //       ],
  //     },
  //   },
  },
} as Meta

const Template: Story<BagProductProps> = args => <BagProduct {...args} />

export const Compact = Template.bind({})
Compact.args = {
  label: "Compact",
  layout: "compact",
  product: getProduct()
}

export const Full = Template.bind({})
Full.args = {
  label: "Full",
  layout: "full",
  product: getProduct()
}

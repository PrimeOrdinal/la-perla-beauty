
import React from "react"
import { Story, Meta } from "@storybook/react"

import { YouMayAlsoLike, YouMayAlsoLikeProps } from "../src/components/YouMayAlsoLike"

import { getProduct } from "./utils/args"

export default {
  title: "YouMayAlsoLike",
  component: YouMayAlsoLike,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<YouMayAlsoLikeProps> = args => <YouMayAlsoLike {...args} />

export const Example = Template.bind({})
Example.args = {
  featuredProducts: [
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
    getProduct(),
  ],
  view: "grid"
}
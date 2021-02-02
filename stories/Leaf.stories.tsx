import React from "react"
import { Story, Meta } from "@storybook/react"

import { Leaf, LeafProps } from "../src/components/Leaf"

export default {
  title: "Leaf",
  component: Leaf,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
  },
} as Meta

const Template: Story<LeafProps> = args => <Leaf {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Leaf with primary style",
  variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Leaf with secondary style",
  variant: "secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: "Third button style",
  variant: "tertiary",
}

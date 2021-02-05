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
        options: ["primary", "secondary"],
      },
    },
  },
} as Meta

const Template: Story<LeafProps> = args => <Leaf {...args} />

export const Example = Template.bind({})
Example.args = {
  children: "Leaf",
  variant: "primary",
}
Example.argTypes = {
  onClick: { action: "Leaf clicked" },
}

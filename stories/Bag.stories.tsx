import React from "react"
import { Story, Meta } from "@storybook/react"

import { Bag } from "../src/components/Bag"

export default {
  title: "Bag",
  component: Bag,
} as Meta

const Template: Story = args => <Bag {...args} />
export const Primary = Template.bind({})

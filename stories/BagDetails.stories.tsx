import React from "react"
import { Story, Meta } from "@storybook/react"

import { BagDetails } from "../src/components/BagDetails"

export default {
  title: "BagDetails",
  component: BagDetails,
} as Meta

const Template: Story = args => <BagDetails {...args} />
export const Primary = Template.bind({})

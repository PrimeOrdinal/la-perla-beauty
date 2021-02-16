import React from "react"
import { Story, Meta } from "@storybook/react"

import { AddToBagMobile } from "../src/components/AddToBagMobile"

export default {
  title: "AddToBagMobile",
  component: AddToBagMobile,
} as Meta

const Template: Story = args => <AddToBagMobile {...args} />
export const Primary = Template.bind({})

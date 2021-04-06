import React from "react"
import { Story, Meta } from "@storybook/react"

import { AddToBagMobile, AddToBagMobileProps } from "../src/components/AddToBagMobile"

export default {
  component: AddToBagMobile,
  title: "AddToBagMobile",
} as Meta

const Template: Story<AddToBagMobileProps> = args => <AddToBagMobile {...args} />

export const Example = Template.bind({})

Example.args = {
  width: { _: 1, sm: 1/2, md: 1/3, lg: 1/4 },
}
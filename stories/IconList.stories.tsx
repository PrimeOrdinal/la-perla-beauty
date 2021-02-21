import React from "react"
import { Story, Meta } from "@storybook/react"

import { IconList, IconListProps } from "../src/components/IconList"

export default {
  title: "IconList",
  component: IconList,
} as Meta

const Template: Story<IconListProps> = args => <IconList {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
  layout: "horizontal"
}

export const Vertical = Template.bind({})
Vertical.args = {
  layout: "vertical"
}
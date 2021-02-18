import React from "react"
import { Story, Meta } from "@storybook/react"

import { IconList } from "../src/components/IconList"

export default {
  title: "IconList",
  component: IconList,
} as Meta

const Template: Story = args => <IconList {...args} />
export const Primary = Template.bind({})

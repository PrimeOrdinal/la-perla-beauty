import React from "react"
import { Story, Meta } from "@storybook/react"

import { Tag, TagProps } from "../src/components/Tag"

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<TagProps> = args => <Tag {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Tag with primary style",
  variant: "primary",
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Tag with secondary style",
  variant: "secondary",
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: "Third button style",
  variant: "tertiary",
}

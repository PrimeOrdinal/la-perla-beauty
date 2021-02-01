import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "../src/components/Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Button with primary style",
  variant: "primary",
}
Primary.argTypes = {
  onClick: { action: "Button with primary style clicked" },
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Button with secondary style",
  variant: "secondary",
}
Secondary.argTypes = {
  onClick: { action: "Button with secondary style clicked" },
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: "Button with tertiary style",
  variant: "tertiary",
}

import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "../components/Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    bg: { control: "color" },
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
  children: "Third button style",
  variant: "tertiary",
}

import React from "react"
import { Story, Meta } from "@storybook/react"

import { Button, ButtonProps } from "../src/components/Button"

export default {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Example = Template.bind({})
Example.args = {
  children: "Button",
  variant: "primary",
}
Example.argTypes = {
  onClick: { action: "Button clicked" },
}

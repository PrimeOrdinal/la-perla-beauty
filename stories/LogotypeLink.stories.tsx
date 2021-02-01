import React from "react"
import { Story, Meta } from "@storybook/react"

import { LogotypeLink } from "../src/components/LogotypeLink"

export default {
  title: "LogotypeLink",
  component: LogotypeLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = args => <LogotypeLink {...args} />

export const Example = Template.bind({})
Example.args = {}

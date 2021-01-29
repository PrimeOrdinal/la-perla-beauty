import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react"

import { LogotypeLink } from "../src/components/LogotypeLink"

export default {
  title: "LogotypeLink",
  component: LogotypeLink,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story = args => <LogotypeLink {...args} />

export const Example = Template.bind({})
Example.args = {}

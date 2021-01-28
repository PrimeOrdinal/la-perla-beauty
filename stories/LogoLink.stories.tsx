import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react"

import { LogoLink } from "../src/components/LogoLink"

export default {
  title: "LogoLink",
  component: LogoLink,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story = args => <LogoLink {...args} />

export const Example = Template.bind({})
Example.args = {}

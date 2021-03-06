import React from "react"
import { Story, Meta } from "@storybook/react"

import { ViewSelector } from "../src/components/ViewSelector"

export default {
  title: "ViewSelector",
  component: ViewSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = args => <ViewSelector {...args} />

export const Example = Template.bind({})
Example.args = {}

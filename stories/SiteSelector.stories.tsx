import React from "react"
import { Story, Meta } from "@storybook/react"

import { SiteSelector } from "../src/components/SiteSelector"

export default {
  title: "SiteSelector",
  component: SiteSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = args => <SiteSelector {...args} />

export const Example = Template.bind({})
Example.args = {}

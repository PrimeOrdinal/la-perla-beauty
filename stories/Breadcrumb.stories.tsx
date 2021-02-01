import React from "react"
import { Story, Meta } from "@storybook/react"

import { Breadcrumb } from "../src/components/Breadcrumb"

export default {
  title: "Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = args => <Breadcrumb {...args} />

export const Example = Template.bind({})
Example.args = {
  crumbs: [{
    pathname: "path/to/page",
    location: [{
      test: "aaa"
    }]
  }],
  crumbSeparator: " - "
}

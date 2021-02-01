import React from "react"
import { Story, Meta } from "@storybook/react"

import { Tabs, TabsProps } from "../src/components/Tabs"

export default {
  title: "Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<TabsProps> = args => <Tabs {...args} />

export const Example = Template.bind({})
Example.args = {
  children: [
    <div>
      <h1>Heading 1</h1>
      <span>
        Contents
      </span>
    </div>
  ]
}

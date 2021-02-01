import React from "react"
import { Story, Meta } from "@storybook/react"

import { ListPlain } from "../src/components/ListPlain"

export default {
  title: "ListPlain",
  component: ListPlain,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = args => <ListPlain {...args} />

export const Example = Template.bind({})
Example.args = {
  children: (
    <React.Fragment>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
      <li>List item 4</li>
    </React.Fragment>
  ),
}

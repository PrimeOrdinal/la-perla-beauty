import React from "react"
import { Story, Meta } from "@storybook/react"

import { MenuRefine } from "../src/components/MenuRefine"

export default {
  title: "MenuRefine",
  component: MenuRefine,
} as Meta

const Template: Story = args => <MenuRefine {...args} />
export const Primary = Template.bind({})

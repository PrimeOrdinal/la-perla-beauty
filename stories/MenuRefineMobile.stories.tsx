import React from "react"
import { Story, Meta } from "@storybook/react"

import { MenuRefineMobile } from "../src/components/MenuRefineMobile"

export default {
  title: "MenuRefineMobile",
  component: MenuRefineMobile,
} as Meta

const Template: Story = args => <MenuRefineMobile {...args} />
export const Primary = Template.bind({})

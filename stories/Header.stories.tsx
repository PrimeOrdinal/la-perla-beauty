import React from "react"
import { Story, Meta } from "@storybook/react"

import { HeaderPure as Header, HeaderProps } from "../src/components/Header"

export default {
  title: "Header",
  component: Header,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args} />

export const Example = Template.bind({})
Example.args = {}
Example.argTypes = {
  onClick: { action: "Header clicked" },
}

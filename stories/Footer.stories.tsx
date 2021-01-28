import React from "react"
import { Story, Meta } from "@storybook/react"

import { Footer, FooterProps } from "../src/components/Footer"

export default {
  title: "Footer",
  component: Footer,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story<FooterProps> = args => <Footer {...args} />

export const Example = Template.bind({})
Example.args = {}
Example.argTypes = {
  onClick: { action: "Footer clicked" },
}

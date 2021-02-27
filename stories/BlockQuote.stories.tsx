import React from "react"
import { Story, Meta } from "@storybook/react"

import { BlockQuote } from "../src/components/BlockQuote"

export default {
  title: "BlockQuote",
  component: BlockQuote,
} as Meta

const Template: Story = args => <BlockQuote {...args} />
export const Primary = Template.bind({})

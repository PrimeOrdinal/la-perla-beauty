import React from "react"
import { Story, Meta } from "@storybook/react"

import { Blockquote, BlockquoteProps } from "../src/components/Blockquote"

export default {
  title: "Blockquote",
  component: Blockquote,
} as Meta

const Template: Story<BlockquoteProps> = args => <Blockquote {...args} />
export const Example = Template.bind({})
Example.args = {
  colour: "beige"
}

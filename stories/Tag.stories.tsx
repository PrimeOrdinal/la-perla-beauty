import React from "react"
import { Story, Meta } from "@storybook/react"

import { Tag, TagProps } from "../src/components/Tag"

export default {
  title: "Tag",
  component: Tag,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary"],
      },
    },
  },
} as Meta

const Template: Story<TagProps> = args => <Tag {...args} />

export const Example = Template.bind({})
Example.args = {
  children: "Pre-order",
  variant: "primary",
  // width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 }
  maxWidth: 256
}
Example.argTypes = {
  onClick: { action: "Tag clicked" },
}

import React from "react"
import { Story, Meta } from "@storybook/react"

import { ItemAvailability, ItemAvailabilityProps } from "../src/components/ItemAvailability"

export default {
  title: "ItemAvailability",
  component: ItemAvailability,
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

const Template: Story<ItemAvailabilityProps> = args => <ItemAvailability {...args} />

export const Example = Template.bind({})
Example.args = {
  children: "Pre-order",
  variant: "primary",
  // width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 }
  maxWidth: 256
}
Example.argTypes = {
  onClick: { action: "ItemAvailability clicked" },
}

import React from "react"
import { Story, Meta } from "@storybook/react"

import {
  ItemAvailability,
  ItemAvailabilityProps,
} from "../src/components/ItemAvailability"

export default {
  title: "ItemAvailability",
  component: ItemAvailability,
  argTypes: {
    backgroundColor: { control: "color" },
    availability: {
      control: {
        type: "inline-radio",
        options: [
          "InStock",
          "LimitedAvailability",
          "OnlineOnly",
          "OutOfStock",
          "PreOrder",
          "SoldOut",
        ],
      },
    },
  },
} as Meta

const Template: Story<ItemAvailabilityProps> = args => (
  <ItemAvailability {...args} />
)

export const Example = Template.bind({})
Example.args = {
  children: "Pre-order",
  availability: "InStock",
  maxWidth: 256,
}
Example.argTypes = {
  onClick: { action: "ItemAvailability clicked" },
}

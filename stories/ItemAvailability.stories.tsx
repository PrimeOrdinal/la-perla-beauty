import React from "react"
import { Story, Meta } from "@storybook/react"

import {
  ItemAvailabilityLabel,
  ItemAvailabilityLabelProps,
} from "../src/components/ItemAvailabilityLabel"

export default {
  title: "ItemAvailabilityLabel",
  component: ItemAvailabilityLabel,
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

const Template: Story<ItemAvailabilityLabelProps> = args => (
  <ItemAvailabilityLabel {...args} />
)

export const Example = Template.bind({})
Example.args = {
  availability: "LimitedAvailability",
  maxWidth: 256,
}
Example.argTypes = {
  onClick: { action: "ItemAvailabilityLabel clicked" },
}

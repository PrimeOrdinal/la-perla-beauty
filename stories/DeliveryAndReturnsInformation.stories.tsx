import { Story, Meta } from "@storybook/react"
import faker from "faker"
import React from "react"

import { DeliveryAndReturnsInformation, DeliveryAndReturnsInformationProps } from "../src/components/DeliveryAndReturnsInformation"

export default {
  title: "DeliveryAndReturnsInformation",
  component: DeliveryAndReturnsInformation,
  argTypes: {

  },
} as Meta

const Template: Story<DeliveryAndReturnsInformationProps> = args => <DeliveryAndReturnsInformation {...args} />

export const Example = Template.bind({})
Example.args = {
  children: faker.lorem.word(),
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 },
}
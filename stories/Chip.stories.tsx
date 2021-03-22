import { Story, Meta } from "@storybook/react"
import faker from "faker"
import React from "react"

import { Chip, ChipProps } from "../src/components/Chip"

export default {
  title: "Chip",
  component: Chip,
  argTypes: {

  },
} as Meta

const Template: Story<ChipProps> = args => <Chip {...args} />

export const Example = Template.bind({})
Example.args = {
  children: faker.lorem.word(),
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 },
}

import { Story, Meta } from "@storybook/react"
import faker from "faker"
import React from "react"

import { BlurCard, BlurCardProps } from "../src/components/BlurCard"

import { getColour, getImage, getLink } from "./utils/args"
import { backgroundPositionPreset, colourPreset, justifyPreset } from "./utils/argTypes"

export default {
  title: "BlurCard",
  component: BlurCard,
  argTypes: {
    backgroundPosition: backgroundPositionPreset,
    colour: colourPreset,
    justifyItems: justifyPreset,
  },
} as Meta

const Template: Story<BlurCardProps> = args => <BlurCard {...args} />

export const Base = Template.bind({})
Base.args = {
  backgroundPosition: "center center",
  colour: getColour(),
  image: getImage(),
  justifyItems: "center",
  link: getLink(),
  tag: faker.lorem.word(),
  text: faker.lorem.paragraph(),
  title: faker.lorem.sentence(),
  width: { _: 1, sm: 1/2, md: 1/3, lg: 1/4 },
}
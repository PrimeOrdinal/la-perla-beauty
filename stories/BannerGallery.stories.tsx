import { Story, Meta } from "@storybook/react"
import faker from "faker"
import React from "react"

import {
  BannerGallery,
  BannerGalleryProps,
} from "../src/components/BannerGallery"

import { getColour, getImage, getLink } from "./utils/args"
import { backgroundPositionPreset, colourPreset } from "./utils/argTypes"

export default {
  title: "BannerGallery",
  component: BannerGallery,
  argTypes: {
    backgroundPosition: backgroundPositionPreset,
    colour: colourPreset,
  },
} as Meta

const Template: Story<BannerGalleryProps> = args => <BannerGallery {...args} />

export const Base = Template.bind({})
Base.args = {
  items: [
    {
      backgroundPosition: "center center",
      colour: getColour(),
      image: getImage(),
      layout: "hero",
      link: getLink(),
      tag: faker.lorem.word(),
      text: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
    },
    {
      backgroundPosition: "center center",
      colour: getColour(),
      image: getImage(),
      layout: "hero",
      link: getLink(),
      tag: faker.lorem.word(),
      text: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
    },
    {
      backgroundPosition: "center center",
      colour: getColour(),
      image: getImage(),
      layout: "hero",
      link: getLink(),
      tag: faker.lorem.word(),
      text: faker.lorem.paragraph(),
      title: faker.lorem.sentence(),
    },
  ],
  text: faker.lorem.paragraph(),
  title: faker.lorem.sentence(),
}

import { Story, Meta } from "@storybook/react"
import faker from "faker"
import React from "react"

import { Banner, BannerProps } from "../src/components/Banner"

import { getColour, getImage, getLink } from "./utils/args"
import { backgroundPositionPreset, colourPreset } from "./utils/argTypes"

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    backgroundPosition: backgroundPositionPreset,
    colour: colourPreset,
  },
} as Meta

const Template: Story<BannerProps> = args => <Banner {...args} />

const Base = Template.bind({})
Base.args = {
  backgroundPosition: "center center",
  colour: getColour(),
  image: getImage(),
  link: getLink(),
  tag: faker.lorem.word(),
  text: faker.lorem.paragraph(),
  title: faker.lorem.sentence(),
}

export const Column = Template.bind({});
Column.args = {
  ...Base.args,
  label: "Column",
  layout: "column",
}

export const Hero = Template.bind({});
Hero.args = {
  ...Base.args,
  label: "Hero",
  layout: "hero",
}

export const Image = Template.bind({});
Image.args = {
  ...Base.args,
  label: "Image",
  layout: "image",
}

export const Overlay = Template.bind({});
Overlay.args = {
  ...Base.args,
  label: "Overlay",
  layout: "overlay",
}

export const Row = Template.bind({});
Row.args = {
  ...Base.args,
  label: "Row",
  layout: "row",
}

// export const Video = Template.bind({});
// Video.args = {
//   ...Base.args,
//   label: "Video",
//   layout: "video",
// }
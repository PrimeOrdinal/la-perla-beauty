import { Story, Meta } from "@storybook/react"
import faker from "faker"
import React from "react"

import { Banner, BannerProps } from "../src/components/Banner"

import { getColour, getImage, getLink } from "./utils/args"
import { backgroundPositionPreset, colourPreset, justifyPreset } from "./utils/argTypes"

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    backgroundPosition: backgroundPositionPreset,
    colour: colourPreset,
    justifyItems: justifyPreset,
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
  justifyItems: "center",
  title: faker.lorem.sentence(),
}

export const CardColumn = Template.bind({});
CardColumn.args = {
  ...Base.args,
  label: "Card (column)",
  layout: "cardColumn",
}

export const CardRow = Template.bind({});
CardRow.args = {
  ...Base.args,
  label: "Card (row)",
  layout: "cardRow",
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

export const ImageAndTextOutside = Template.bind({});
ImageAndTextOutside.args = {
  ...Base.args,
  label: "Image succeed by text",
  layout: "imageAndTextOutside",
}

export const Overlay = Template.bind({});
Overlay.args = {
  ...Base.args,
  label: "Overlay",
  layout: "overlay",
}

// export const Video = Template.bind({});
// Video.args = {
//   ...Base.args,
//   label: "Video",
//   layout: "video",
// }
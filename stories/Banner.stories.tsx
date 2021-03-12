import React from "react"
import { Story, Meta } from "@storybook/react"

import { Banner, BannerProps } from "../src/components/Banner"

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    backgroundColor: { control: "color" },
    showImage: { control: "boolean" }
  },
} as Meta

const Template: Story<BannerProps> = args => <Banner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  backgroundPosition: "top right",
  colour: "lightgreen",
  image: {
    alt: "A grey placeholder image with the dimensions overlayed in white text",
    src: "https://via.placeholder.com/282",
  },
  layout: "overlay",
  link: {
    href: "/learn-more",
    title: "Learn more",
  },
  tag: "Sample tag",
  text: "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt",
  title: "Promo banner",
  width: { _: 1, md: 1/2 },
}

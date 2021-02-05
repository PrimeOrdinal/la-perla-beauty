import type { Product } from "schema-dts"

import React from "react"
import { Story, Meta } from "@storybook/react"

import { PromoBanner, PromoBannerProps } from "../src/components/PromoBanner"

export default {
  title: "PromoBanner",
  component: PromoBanner,
  argTypes: {
    backgroundColor: { control: "color" },
    showImage: { control: "boolean" }
  },
} as Meta

const Template: Story<PromoBannerProps> = args => <PromoBanner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  description: "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt.",
  image: {
    alt: "A grey placeholder image with the dimensions overlayed in white text",
    src: "https://via.placeholder.com/282",
  },
  link: {
    href: "/learn-more",
    text: "Learn more",
  },
  title: "Promo Banner",
  width: { _: 1, md: 1/2 },
}

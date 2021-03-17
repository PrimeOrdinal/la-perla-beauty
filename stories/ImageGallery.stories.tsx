import React from "react"
import { Story, Meta } from "@storybook/react"

import { ImageGallery } from "../src/components/ImageGallery"

export default {
  title: "ImageGallery",
  component: ImageGallery,
  argTypes: {
    showPlayButton: { control: "boolean" },
  },
} as Meta

const Template: Story = args => <ImageGallery {...args} />

export const Example = Template.bind({})
Example.args = {
  items: [
    {
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
    },
    {
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
    },
    {
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
    },
  ],
  showPlayButton: false
}

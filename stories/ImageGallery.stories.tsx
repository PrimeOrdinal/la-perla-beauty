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
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ],
  showPlayButton: true
}

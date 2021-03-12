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
      original: "https://picsum.photos/id/1018/600/600/",
      thumbnail: "https://picsum.photos/id/1018/100/100/",
    },
    {
      original: "https://picsum.photos/id/1015/600/600/",
      thumbnail: "https://picsum.photos/id/1015/100/100/",
    },
    {
      original: "https://picsum.photos/id/1014/600/600/",
      thumbnail: "https://picsum.photos/id/1014/100/100/",
    },
    {
      original: "https://picsum.photos/id/1016/600/600/",
      thumbnail: "https://picsum.photos/id/1016/100/100/",
    },
    {
      original: "https://picsum.photos/id/1015/600/600/",
      thumbnail: "https://picsum.photos/id/1015/100/100/",
    },
    {
      original: "https://picsum.photos/id/1019/600/600/",
      thumbnail: "https://picsum.photos/id/1019/100/100/",
    },
  ],
  showPlayButton: false
}

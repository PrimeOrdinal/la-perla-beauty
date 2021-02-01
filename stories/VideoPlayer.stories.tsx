import React from "react"
import { Story, Meta } from "@storybook/react"

import { VideoPlayer } from "../src/components/VideoPlayer"

export default {
  title: "VideoPlayer",
  component: VideoPlayer,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story = args => <VideoPlayer {...args} />

export const Example = Template.bind({})
Example.args = {
  controls: false,
  light: false,
  loop: true,
  muted: true,
  playing: true,
  playsinline: true,
  url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm"
}

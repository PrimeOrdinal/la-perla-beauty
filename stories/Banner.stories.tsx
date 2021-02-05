import React from "react"
import { Story, Meta } from "@storybook/react"

import { Banner, BannerProps } from "../src/components/Banner"

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    backgroundColor: { control: "color" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
  },
} as Meta

const Template: Story<BannerProps> = args => <Banner {...args} />

export const Example = Template.bind({})
Example.args = {
  children: "Lorem ipsum dolor sit amet",
  variant: "primary",
}
Example.argTypes = {
  onClick: { action: "Banner clicked" },
}

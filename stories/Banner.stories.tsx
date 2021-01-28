import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react"

import { Banner, BannerProps } from "../src/components/Banner"

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story<BannerProps> = args => <Banner {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: "Banner with primary style",
  variant: "primary",
}
Primary.argTypes = {
  onClick: { action: "Banner with primary style clicked" },
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: "Banner with secondary style",
  variant: "secondary",
}
Secondary.argTypes = {
  onClick: { action: "Banner with secondary style clicked" },
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  children: "Third button style",
  variant: "tertiary",
}

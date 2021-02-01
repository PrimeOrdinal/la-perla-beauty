import React from "react"
import { Story, Meta } from "@storybook/react"

import { Banner, BannerProps } from "../src/components/Banner"

export default {
  title: "Banner",
  component: Banner,
  argTypes: {
    backgroundColor: { control: "color" },
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
  children: "Banner with tertiary style",
  variant: "tertiary",
}

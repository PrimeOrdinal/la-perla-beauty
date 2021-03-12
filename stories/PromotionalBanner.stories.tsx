import React from "react"
import { Story, Meta } from "@storybook/react"

import { PromotionalBanner, PromotionalBannerProps } from "../src/components/PromotionalBanner"

export default {
  title: "PromotionalBanner",
  component: PromotionalBanner,
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

const Template: Story<PromotionalBannerProps> = args => <PromotionalBanner {...args} />

export const Example = Template.bind({})
Example.args = {
  children: "Lorem ipsum dolor sit amet",
  variant: "primary",
}
Example.argTypes = {
  onClick: { action: "PromotionalBanner clicked" },
}

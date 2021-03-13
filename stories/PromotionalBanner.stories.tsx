import React from "react"
import { Story, Meta } from "@storybook/react"

import { PromotionalBanner, PromotionalBannerProps } from "../src/components/PromotionalBanner"

export default {
  title: "PromotionalBanner",
  component: PromotionalBanner,
  argTypes: {
    backgroundColor: { control: "color" },
    colour: {
      control: {
        type: "inline-radio",
        options: ["beige", "lightgreen", "lilac", "orange", "pink"],
      },
    },
  },
} as Meta

const Template: Story<PromotionalBannerProps> = args => <PromotionalBanner {...args} />

export const Example = Template.bind({})
Example.args = {
  href: "/test",
  "title": "Lorem ipsum",
  variant: "primary",
}
Example.argTypes = {
  onClick: { action: "PromotionalBanner clicked" },
}

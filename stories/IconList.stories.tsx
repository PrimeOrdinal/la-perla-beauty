import React from "react"
import { Story, Meta } from "@storybook/react"

import { IconList, IconListProps } from "../src/components/IconList"

export default {
  component: IconList,
  title: "IconList",
} as Meta

const Template: Story<IconListProps> = args => <IconList {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
  items: [
    {
      colour: "beige",
      icon: "nib",
      text: "Lorem ipsum dolor sit amet",
      title: "Item 1",
    },
    {
      colour: "lightgreen",
      icon: "plant",
      text: "Lorem ipsum dolor sit amet",
      title: "Item 2",
    },
    {
      colour: "pink",
      icon: "heart",
      text: "Lorem ipsum dolor sit amet",
      title: "Item 3",
    },
  ],
  orientation: "horizontal",
}

export const Vertical = Template.bind({})
Vertical.args = {
  items: [
    {
      colour: "beige",
      icon: "nib",
      text: "Lorem ipsum dolor sit amet",
      title: "Item 1",
    },
    {
      colour: "lightgreen",
      icon: "plant",
      text: "Lorem ipsum dolor sit amet",
      title: "Item 2",
    },
    {
      colour: "pink",
      icon: "heart",
      text: "Lorem ipsum dolor sit amet",
      title: "Item 3",
    },
  ],
  orientation: "vertical",
}

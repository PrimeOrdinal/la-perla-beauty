import React from "react"
import { Story, Meta } from "@storybook/react"

import { IconList, IconListProps } from "../src/components/IconList"

export default {
  component: IconList,
  title: "IconList",
} as Meta

const Template: Story<IconListProps> = args => <IconList {...args} />

export const HorizontalStack = Template.bind({})
HorizontalStack.args = {
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
  mobileView: "stack",
  orientation: "horizontal",
}

export const VerticalStack = Template.bind({})
VerticalStack.args = {
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
  mobileView: "stack",
  orientation: "vertical",
}

export const HorizontalSwipe = Template.bind({})
HorizontalSwipe.args = {
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
  mobileView: "swipe",
  orientation: "horizontal",
}

export const VerticalSwipe = Template.bind({})
VerticalSwipe.args = {
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
  mobileView: "swipe",
  orientation: "vertical",
}

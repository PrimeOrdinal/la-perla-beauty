import { Story, Meta } from "@storybook/react"
import React from "react"

import { Leaf, LeafProps } from "../src/components/Leaf"

export default {
  title: "Leaf",
  component: Leaf,
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

const Template: Story<LeafProps> = args => <Leaf {...args} />

export const ImageAndTextInside = Template.bind({})
ImageAndTextInside.args = {
  colour: "beige",
  image: {
    alt: "Test",
    src: "https://picsum.photos/200/300"
  },
  layout: "image-and-text-inside",
  link: {
    href: "/test",
    title: "Test"
  },
  text: "Etiam aliquet metus mauris, in tempus ves odio feugiat non. Docet praesent eu magna id arcu docet ves.",
  title: "Lorem ipsum"
}
ImageAndTextInside.argTypes = {
  onClick: { action: "Leaf clicked" },
}

export const TextInsideAndImage = Template.bind({})
TextInsideAndImage.args = {
  colour: "lightgreen",
  image: {
    alt: "Test",
    src: "https://picsum.photos/200/300"
  },
  layout: "text-inside-and-image",
  link: {
    href: "/test",
    title: "Test"
  },
  text: "Etiam aliquet metus mauris, in tempus ves odio feugiat non. Docet praesent eu magna id arcu docet ves.",
  title: "Lorem ipsum"
}
TextInsideAndImage.argTypes = {
  onClick: { action: "Leaf clicked" },
}

export const ImageAndTextOutside = Template.bind({})
ImageAndTextOutside.args = {
  colour: "pink",
  image: {
    alt: "Test",
    src: "https://picsum.photos/200/300"
  },
  layout: "image-and-text-outside",
  link: {
    href: "/test",
    title: "Test"
  },
  text: "Etiam aliquet metus mauris, in tempus ves odio feugiat non. Docet praesent eu magna id arcu docet ves.",
  title: "Lorem ipsum"
}
ImageAndTextOutside.argTypes = {
  onClick: { action: "Leaf clicked" },
}

export const TextOutsideAndImage = Template.bind({})
TextOutsideAndImage.args = {
  colour: "lilac",
  image: {
    alt: "Test",
    src: "https://picsum.photos/200/300"
  },
  layout: "text-outside-and-image",
  link: {
    href: "/test",
    title: "Test"
  },
  text: "Etiam aliquet metus mauris, in tempus ves odio feugiat non. Docet praesent eu magna id arcu docet ves.",
  title: "Lorem ipsum"
}
TextOutsideAndImage.argTypes = {
  onClick: { action: "Leaf clicked" },
}
import { Story, Meta } from "@storybook/react"
import React from "react"
import faker from "faker"

import { ArticleCard, ArticleCardProps } from "../src/components/ArticleCard"

import { getColour, getImage, getLink } from "./utils/args"

export default {
  title: "ArticleCard",
  component: ArticleCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<ArticleCardProps> = args => <ArticleCard {...args} />
export const Example = Template.bind({})
Example.args = {
  aspectRatio: "3/4",
  colour: getColour(),
  image: getImage(),
  link: getLink(),
  summary: faker.lorem.sentence(),
  tag: faker.lorem.word(),
  title: faker.lorem.sentence(),
  titlePosition: "bottom",
  url: faker.internet.url(),
}

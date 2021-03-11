import { Link } from "../src/components/Button"
import React from "react"
import { Story, Meta } from "@storybook/react"

import { MenuCategory, MenuCategoryProps } from "../src/components/MenuCategory"

export default {
  title: "MenuCategory",
  component: MenuCategory,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<MenuCategoryProps> = args => <MenuCategory {...args} />

export const Example = Template.bind({})
Example.args = {
  children: [
    <React.Fragment>
      <Link to="/products">All</Link>
      <Link to="/fragrances">Fragrances</Link>
      <Link to="/makeup">Makeup</Link>
      <Link to="/body">Body</Link>
    </React.Fragment>
  ]
}

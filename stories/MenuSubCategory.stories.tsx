import { Link } from "../src/components/Button"
import React from "react"
import { Story, Meta } from "@storybook/react"

import { MenuSubCategory, MenuSubCategoryProps } from "../src/components/MenuSubCategory"

export default {
  title: "MenuSubCategory",
  component: MenuSubCategory,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<MenuSubCategoryProps> = args => <MenuSubCategory {...args} />

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

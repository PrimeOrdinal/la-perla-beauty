import React from "react"
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react"

import { MenuActions, MenuActionsProps } from "../src/components/MenuActions"

export default {
  title: "MenuActions",
  component: MenuActions,
  argTypes: {
    bg: { control: "color" },
  },
} as Meta

const Template: Story<MenuActionsProps> = args => <MenuActions {...args} />
export const Example = Template.bind({})
Example.args = {
  toggleMiniBagVisibility: false,
  toggleQuickSearchVisibility: false,
}

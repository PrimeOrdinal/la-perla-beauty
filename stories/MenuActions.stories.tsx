import React from "react"
import { Story, Meta } from "@storybook/react"

import { MenuActions, MenuActionsProps } from "../src/components/MenuActions"

export default {
  title: "MenuActions",
  component: MenuActions,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<MenuActionsProps> = args => <MenuActions {...args} />
export const Example = Template.bind({})
Example.args = {
  toggleBagPreviewVisibility: false,
  toggleQuickSearchVisibility: false,
  width: { _: 1, sm: 1/2, md: 1/2, lg: 1/6 },
}

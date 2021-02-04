import React from "react"
import { Story, Meta } from "@storybook/react"

import { Accordion, AccordionProps } from "../src/components/Accordion"

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta

const Template: Story<AccordionProps> = args => <Accordion {...args} />
export const Example = Template.bind({})
Example.args = {
    allowMultipleExpanded: false,
    allowZeroExpanded: false,
    items: [
    {
      heading: "Item 1",
      panel: <React.Fragment><p>Lorem ipsum</p></React.Fragment>
    },
    {
      heading: "Item 2",
      panel: <React.Fragment><p>Lorem ipsum</p><button>Test</button></React.Fragment>
    }
  ]
}

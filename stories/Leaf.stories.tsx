import { Link } from "./Button"
import React from "react"
import { Story, Meta } from "@storybook/react"

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

export const Image = Template.bind({})
Image.args = {
  children: <React.Fragment>
      <img src="https://via.placeholder.com/300x400" alt="Placeholder" />
  </React.Fragment>,
  variant: "primary",
}
Image.argTypes = {
  onClick: { action: "Leaf clicked" },
}

export const Text = Template.bind({})
Text.args = {
  children: <React.Fragment>
      <h1>Risk free purchase</h1>
      <p>Phasellus hendrerit nisl justo, non visto sollicitudin justo in. Quisque eu tincidunt arcu. Aenean ullamcorper augue vel ex iaculis.</p>
      <Link to="/test">Lorem ipsum</Link>
  </React.Fragment>,
  maxWidth: 640,
  variant: "primary",
  width: { _: 1, md: 1/2},
}
Text.argTypes = {
  onClick: { action: "Leaf clicked" },
}

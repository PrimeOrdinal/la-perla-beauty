import React from "react"
import { Story, Meta } from "@storybook/react"

import { Accordion, AccordionProps } from "../src/components/Accordion"
import { Link } from "../src/components/Button"

export default {
  argTypes: {
    backgroundColor: { control: "color" },
  },
  component: Accordion,
  title: "Accordion",
} as Meta

const Template: Story<AccordionProps> = args => <Accordion {...args} />

export const Example = Template.bind({})

Example.args = {
  items: [
    {
      title: "About Us",
      panel: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            aliquam laudantium pariatur tenetur perspiciatis eum! Ullam,
            accusamus. Debitis animi, cumque porro, in eveniet accusamus
            voluptas vel fugit, ex tenetur sit.`,
    },
    {
      title: "Delivery & Return",
      panel: (
        <React.Fragment>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            aliquam laudantium pariatur tenetur perspiciatis eum! Ullam,
            accusamus. Debitis animi, cumque porro, in eveniet accusamus
            voluptas vel fugit, ex tenetur sit.
          </p>
          <img alt="Placeholder" src="https://via.placeholder.com/300x400" />
          <Link to="/test">Test</Link>
        </React.Fragment>
      ),
    },
  ],
  width: { _: 1, sm: 1/2, md: 1/3, lg: 1/4 },
}

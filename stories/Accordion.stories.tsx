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
      heading: "About Us",
      panel: (
        <React.Fragment>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            doloribus officia officiis qui eos iste dolorem eaque, maiores
            quidem consequatur sequi harum sint repudiandae molestias non
            temporibus nihil facilis veritatis sit facere inventore asperiores
            itaque. Ut dolores reprehenderit praesentium eos.
          </p>
        </React.Fragment>
      ),
    },
    {
      heading: "Delivery & Return",
      panel: (
        <React.Fragment>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
            aliquam laudantium pariatur tenetur perspiciatis eum! Ullam,
            accusamus. Debitis animi, cumque porro, in eveniet accusamus
            voluptas vel fugit, ex tenetur sit.
          </p>
          <button>Test</button>
        </React.Fragment>
      ),
    },
  ],
}

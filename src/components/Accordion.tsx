import React from "react"
import {
  Accordion as ReactAccessibleAccordion,
  AccordionItem as ReactAccessibleAccordionItem,
  AccordionItemHeading as ReactAccessibleAccordionItemHeading,
  AccordionItemButton as ReactAccessibleAccordionItemButton,
  AccordionItemPanel as ReactAccessibleAccordionItemPanel,
} from "react-accessible-accordion"
import styled from "styled-components"
import {
  compose,
  layout,
  position,
  space,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import "./Accordion.css"

export type AccordionProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    allowMultipleExpanded: boolean
  }

export const AccordionStyled: React.FC<AccordionProps> = styled(
  ReactAccessibleAccordion
)`
  .accordion__button {
    background-color: blue;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
  }

  ${compose(layout, position, space)}
`

export const Accordion: React.FC<AccordionProps> = props => (
  <AccordionStyled {...props}>
    <ReactAccessibleAccordionItem>
      <ReactAccessibleAccordionItemHeading>
        <ReactAccessibleAccordionItemButton className="accordion__button">
          What harsh truths do you prefer to ignore?
        </ReactAccessibleAccordionItemButton>
      </ReactAccessibleAccordionItemHeading>
      <ReactAccessibleAccordionItemPanel>
        <p>
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </p>
      </ReactAccessibleAccordionItemPanel>
    </ReactAccessibleAccordionItem>
    <ReactAccessibleAccordionItem>
      <ReactAccessibleAccordionItemHeading>
        <ReactAccessibleAccordionItemButton className="accordion__button">
          Is free will real or just an illusion?
        </ReactAccessibleAccordionItemButton>
      </ReactAccessibleAccordionItemHeading>
      <ReactAccessibleAccordionItemPanel>
        <p>
          In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
          nostrud velit in irure cillum tempor laboris sed adipisicing eu esse
          duis nulla non.
        </p>
      </ReactAccessibleAccordionItemPanel>
    </ReactAccessibleAccordionItem>
  </AccordionStyled>
)

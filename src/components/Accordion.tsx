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

// import "./Accordion.css"

export type AccordionProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    allowMultipleExpanded: boolean
    items: Array<{
      heading: string
      panel: React.ReactNode
    }>
  }

export const AccordionStyled: React.FC<AccordionProps> = styled(
  ReactAccessibleAccordion
)`
  .accordion {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px;
  }

  .accordion__item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    background-color: unset;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
  }

  .accordion__button:hover {
    background-color: unset;
  }

  .accordion__button:before {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }

  .accordion__button[aria-expanded="true"]::before,
  .accordion__button[aria-selected="true"]::before {
    transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 20px;
    animation: fadein 0.35s ease-in;
  }

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  ${compose(layout, position, space)}
`

export const Accordion: React.FC<AccordionProps> = ({ items, ...props }) => (
  <AccordionStyled {...props}>
    <script>{JSON.stringify(items)}</script>
    {items?.length &&
      items.map((item, index) => (
        <ReactAccessibleAccordionItem key={index}>
          <ReactAccessibleAccordionItemHeading>
            <ReactAccessibleAccordionItemButton>
              {item.heading}
            </ReactAccessibleAccordionItemButton>
          </ReactAccessibleAccordionItemHeading>
          <ReactAccessibleAccordionItemPanel>
            {item.panel}
          </ReactAccessibleAccordionItemPanel>
        </ReactAccessibleAccordionItem>
      ))}
  </AccordionStyled>
)

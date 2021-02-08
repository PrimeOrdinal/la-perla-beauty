import { themeGet } from "@styled-system/theme-get"
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

import Minus from "../images/Minus.svg"
import Plus from "../images/Plus.svg"

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
    border-radius: ${themeGet("radii.1")}px;
  }

  .accordion__item {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  .accordion__button {
    align-content: center;
    align-items: center;
    display: grid;
    font-weight: bold;
    grid-auto-flow: column;
    justify-content: space-between;
    padding: 18px 0;
    text-transform: uppercase;
    width: 100%;
  }

  .accordion__button:hover {
    background-color: unset;
  }

  .accordion__button:after {
    background-image: url(${Minus});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: 16px;
    width: 16px;
  }

  .accordion__button:not([aria-expanded="true"]):after {
    background-image: url(${Plus});
  }

  .accordion__button[aria-expanded="true"]::after,
  .accordion__button[aria-selected="true"]::after {
  }

  .accordion__button[aria-expanded="false"]::after,
  .accordion__button[aria-selected="false"]::after {
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    padding: 0;
    animation: fadein 0.35s ease-in;
  }

  .accordion__panel ul {
    font-size: 13px;
    list-style: none;
    margin: 0;
    padding-block-end: 12px;
    padding: 0;
  }
  .accordion__panel ul li {
    padding: 8px 0;
  }
  .accordion__panel ul li a {
    color: #363139;
    text-decoration: none;
  }
  .accordion__panel ul li:last-child {
    padding-block-end: 16px;
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

import { themeGet } from "@styled-system/theme-get"
import React from "react"
import {
  Accordion as ReactAccessibleAccordion,
  AccordionItem as ReactAccessibleAccordionItem,
  AccordionItemHeading as ReactAccessibleAccordionItemHeading,
  AccordionItemButton as ReactAccessibleAccordionItemButton,
  AccordionItemPanel as ReactAccessibleAccordionItemPanel,
} from "react-accessible-accordion"
import Plus from "../images/Plus.svg"
import Minus from "../images/Minus.svg"
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
    background-color: unset;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    position: relative;
  }

  .accordion__button:hover {
    background-color: unset;
  }

  .accordion__button:after {
    display: inline-block;
    content: "";
    position: absolute;
    right: 0;
    height: 16px;
    width: 16px;
    margin-right: 12px;
    background-image: url(${Plus});
    background-size: cover;
    background-repeat: no-repeat;
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
    padding: 0 20px;
    animation: fadein 0.35s ease-in;
  }

  .accordion__panel ul {
    padding: 0;
    padding-block-end: 12px;
    margin: 0;
    list-style: none;
    font-size: 13px;
  }
  .accordion__panel ul li {
    padding: 8px 0;
  }
  .accordion__panel ul li a {
    text-decoration: none;
    color: #363139;
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

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
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import MinusIcon from "../../static/icons/Minus.svg"
import PlusIcon from "../../static/icons/Plus.svg"

export type AccordionProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    allowMultipleExpanded: boolean
    allowZeroExpanded: boolean
    items: Array<{
      title: string
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
    cursor: pointer;
  }

  .accordion__button:hover {
    background-color: unset;
  }

  .accordion__button:after {
    background-image: url(${MinusIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: "";
    display: block;
    height: 16px;
    width: 16px;
  }

  .accordion__button:not([aria-expanded="true"]):after {
    background-image: url(${PlusIcon});
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    animation: fadein 0.35s ease-in;
    padding: 0;
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

  .accordion__panel img {
    width: 100%;
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

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Accordion: React.FC<AccordionProps> = ({ allowMultipleExpanded=true, allowZeroExpanded=true, items, ...props }) => (
  <AccordionStyled allowMultipleExpanded={allowMultipleExpanded} allowZeroExpanded={allowZeroExpanded} {...props}>
    {items?.length &&
      items.map((item, index) => (
        <ReactAccessibleAccordionItem key={index}>
          <ReactAccessibleAccordionItemHeading>
            <ReactAccessibleAccordionItemButton>
              {item.title}
            </ReactAccessibleAccordionItemButton>
          </ReactAccessibleAccordionItemHeading>
          <ReactAccessibleAccordionItemPanel>
            {item.panel}
          </ReactAccessibleAccordionItemPanel>
        </ReactAccessibleAccordionItem>
      ))}
  </AccordionStyled>
)

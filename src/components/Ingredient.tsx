import type { Image as ImageProp } from "../../types/components"

import { themeGet } from "@styled-system/theme-get"
import React from "react"
import styled from "styled-components"
import {
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  space,
  variant,
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

import { mediaQueries } from "../theme"

export type IngredientProp = {
  id: string
  information: string
  image: ImageProp
  summary: string
  title: string
  url: string
}

export type IngredientProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    ingredient: IngredientProp
  }

export const IngredientStyled: React.FC<IngredientProps> = styled.article`
  padding-block-end: ${themeGet("space.9")}px;
  padding-block-start: ${themeGet("space.9")}px;

  ${mediaQueries.md} {
    gap: ${themeGet("space.7")}px;
    padding-block-end: ${themeGet("space.11")}px;
    padding-block-start: ${themeGet("space.11")}px;
  }

  .name {
    margin-block-start: unset;

    ${mediaQueries.md} {
      font-size: var(--font-size-lg, 18px);
    }
  }

  .contents {
    display: grid;
    gap: ${themeGet("space.6")}px;

    ${mediaQueries.md} {
      gap: ${themeGet("space.9")}px;
      grid-template-columns: 370px auto;
    }

    img {
      object-fit: cover;
      width: 100%;
    }

    .info-wrapper {
      display: grid;
      gap: ${themeGet("space.6")}px;
      grid-auto-flow: row;

      ${mediaQueries.md} {
        align-items: flex-start;
        gap: ${themeGet("space.10")}px;
        grid-template-columns: repeat(2, minmax(auto, 50ch));
      }

      .summary,
      .information {
        > *:first-child {
          margin-block-start: unset;
        }
      }
    }
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export const Ingredient: React.FC<IngredientProps> = props => (
  <IngredientStyled {...props}>
    <h2 className="name" id={props.ingredient?.id}>{props.ingredient?.title}</h2>
    <div className="contents">
      {props.ingredient?.image?.src && (
        <img
          alt={props.ingredient?.image?.title}
          aspect-ratio="1/1"
          src={props.ingredient?.image?.src}
        />
      )}
      <div className="info-wrapper">
        <div
          className="summary"
          dangerouslySetInnerHTML={{
            __html: props.ingredient?.summary as string,
          }}
        />
        <div
          className="information"
          dangerouslySetInnerHTML={{
            __html: props.ingredient?.information as string,
          }}
        />
      </div>
    </div>
  </IngredientStyled>
)

import type { ProductGroup } from "schema-dts"

import clsx from "clsx"
import { Field } from "formik"
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
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  VariantProps,
} from "styled-system"

const ProductSelectorColourStyled = styled.div`
  &:focus-within {
    .title {
      text-decoration: underline;
    }
  }

  .form-fields {
    grid-auto-flow: column;
    justify-content: start;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type ProductSelectorColourProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    product: ProductGroup[]
  }

export const ProductSelectorColour: React.FC<ProductSelectorColourProps> = ({
  product,
  ...props
}) => {
  return (
    <ProductSelectorColourStyled {...props}>
      <h3 className="title" id="group_label_sizes">
        Sizes
      </h3>
      <div aria-labelledby="group_label_sizes" className={clsx("form-fields")}>
        <div className="field">
          <Field
            type="radio"
            name="size"
            id="size-option-1"
            value="value-1"
            className="fancy-product"
          />
          <label htmlFor="size-option-1" className="product-radio-label">
            30 ml
          </label>
        </div>
        <div className="field">
          <Field
            type="radio"
            name="size"
            id="size-option-2"
            value="value-2"
            className="fancy-product"
          />
          <label htmlFor="size-option-2" className="product-radio-label">
            90 ml
          </label>
        </div>
        <div className="field">
          <Field
            type="radio"
            name="size"
            id="size-option-3"
            value="value-3"
            className="fancy-product"
          />
          <label htmlFor="size-option-3" className="product-radio-label">
            120 ml
          </label>
        </div>
      </div>
    </ProductSelectorColourStyled>
  )
}

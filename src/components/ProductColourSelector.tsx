import type { ProducGroup } from "schema-dts"

import clsx from "clsx"
import { Field } from "formik"
import React from "react"
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

const ProductColourSelectorStyled = styled.div`
  &:focus-within {
    .title {
      text-decoration: underline;
    }
  }

  ${compose(layout, position, space)}
`

export type ProductColourSelectorProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    product: ProducGroup[]
  }

export const ProductColourSelector: React.FC<ProductColourSelectorProps> = ({
  product,
  ...props
}) => {
  console.log("product", product)

  return (
    <ProductColourSelectorStyled {...props}>
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
    </ProductColourSelectorStyled>
  )
}
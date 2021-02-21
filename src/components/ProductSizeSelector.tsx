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

const ProductSizeSelectorStyled = styled.div`
  &:focus-within {
    .title {
      text-decoration: underline;
    }
  }

  ${compose(layout, position, space)}
`

export type ProductSizeSelectorProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    product: ProducGroup[]
  }

export const ProductSizeSelector: React.FC<ProductSizeSelectorProps> = ({
  product,
  ...props
}) => {
  console.log("product", product)

  return (
    <ProductSizeSelectorStyled {...props}>
      <h3 className="title" id="group_label_sizes">
        Sizes
      </h3>
      <div aria-labelledby="group_label_sizes" className={clsx("form-fields")}>
        {product?.hasVariant.map((variant, index) => <div className="field">
          <Field
            type="radio"
            name="size"
            id={`size-option-${index}`}
            key={index}
            value={variant?.size}
            className="fancy-product"
          />
          <label htmlFor={`size-option-${index}`} className="product-radio-label">
            {variant.size}
          </label>
        </div>)}
      </div>
    </ProductSizeSelectorStyled>
  )
}

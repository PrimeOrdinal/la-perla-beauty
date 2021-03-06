import type { ProductGroup } from "schema-dts"

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

const ProductSelectorSizeStyled = styled.div`
  &:focus-within {
    .title {
      text-decoration: underline;
    }
  }

  .form-fields {
    grid-auto-flow: column;
    justify-content: start;
  }

  ${compose(layout, position, space)}
`

export type ProductSelectorSizeProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    product: ProductGroup[]
  }

export const ProductSelectorSize: React.FC<ProductSelectorSizeProps> = ({
  product,
  ...props
}) => (
  <ProductSelectorSizeStyled {...props}>
    <h3 className="title" id="group_label_sizes">
      Sizes
    </h3>
    <div aria-labelledby="group_label_sizes" className={clsx("form-fields")}>
      {product?.hasVariant.map((variant, index) => (
        <div className="field" key={index}>
          <Field
            className="fancy-product"
            id={`size-option-${index}`}
            name="size"
            type="radio"
            value={variant?.size}
          />
          <label
            className="product-radio-label"
            htmlFor={`size-option-${index}`}
          >
            {variant.size}
          </label>
        </div>
      ))}
    </div>
  </ProductSelectorSizeStyled>
)

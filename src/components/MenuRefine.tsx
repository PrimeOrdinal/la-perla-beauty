import type { SetStateAction } from "react"

import clsx from "clsx"
import { Formik, Field, Form, FormikHelpers } from "formik"
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

import { themeGet } from "@styled-system/theme-get"
import { mediaQueries, theme } from "../theme"

import { Button } from "./Button"

const MenuRefineStyled = styled.section`
  display: none;
  ${mediaQueries.lg} {
    display: grid;
  }
  .menu {
    align-items: center;
    border-bottom: ${theme.border.width} solid ${theme.border.color};
    display: flex;
    justify-content: space-between;
    padding-block-end: ${themeGet("space.7")};
  }

  .form {
    grid-auto-flow: row;
  }
  .form-fields {
    ${mediaQueries.md} {
      grid-template-columns: 1fr 4fr;
    }
  }

  h1 {
    font-family: "Quicksand";
    font-weight: 600;
    text-transform: uppercase;
    padding-block-end: ${themeGet("space.6")}px;
    border-bottom: ${themeGet("border.width")} solid ${themeGet("border.color")};
  }

  h2 {
    font-family: "Quicksand";
    font-weight: normal;
    margin: 0;
    font-size: inherit;
    text-transform: uppercase;
    font-size: ${themeGet("fontSizes.heading4Desktop")}px;
  }

  .fancy-radio-label,
  .fancy-checkbox-label {
    font-size: ${themeGet("fontSizes.heading4Desktop")}px;
  }

  ${compose(layout, position, space)}
`

export type MenuRefineProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    productCount: number
    setView: React.Dispatch<SetStateAction<string>>
    view: "grid" | "list"
  }

interface Values {
  filter: string[]
  sort: string
}

const handleBlur = async (event: Values) => {
  console.log(event)
}

const handleChange = async (event: Values) => {
  console.log(event)
}

const handleSubmit = async (
  values: Values,
  { setSubmitting }: FormikHelpers<Values>
) => {
  const path = `/.netlify/functions/sign-up-to-our-newsletter`

  const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

  const response = await fetch(url.toString(), {
    body: JSON.stringify(values),
    headers: {
      Accept: "application/json",
    },
    method: "POST",
  })

  setSubmitting(false)

  console.log(response)
}

export const MenuRefine: React.FC<MenuRefineProps> = ({
  productCount,
  setView,
  view,
  ...props
}) => (
  <MenuRefineStyled {...props}>
    <Formik
      className={clsx("container", "form-container")}
      initialValues={{
        filter: [],
        sort: "value-1",
      }}
      onBlur={handleBlur}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="form">
          <div className="form-fields">
            <section className={clsx("form-section", "sort")}>
              <h1>Sort by</h1>
              <div className="form-column">
                <div className="field">
                  <Field
                    className="fancy-radio"
                    id="option-1"
                    name="sort"
                    type="radio"
                    value="value-1"
                  />
                  <label htmlFor="option-1" className="fancy-radio-label">
                    Best sellers
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="sort"
                    id="option-2"
                    value="value-2"
                    className="fancy-radio"
                  />
                  <label htmlFor="option-2" className="fancy-radio-label">
                    Recommended
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="sort"
                    id="option-3"
                    value="value-3"
                    className="fancy-radio"
                  />
                  <label htmlFor="option-3" className="fancy-radio-label">
                    new arrivals
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="sort"
                    id="option-4"
                    value="value-4"
                    className="fancy-radio"
                  />
                  <label htmlFor="option-4" className="fancy-radio-label">
                    price (low - high)
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="radio"
                    name="sort"
                    id="option-5"
                    value="value-5"
                    className="fancy-radio"
                  />
                  <label htmlFor="option-5" className="fancy-radio-label">
                    price (high - low)
                  </label>
                </div>
              </div>
              <div>Picked: {values.sort}</div>
            </section>
            <section className={clsx("form-section", "filter")}>
              <h1>Filter by</h1>
              <div className="form-row">
                <div className="form-column">
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-a-1"
                      value="value-a-1"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-a-1"
                      className="fancy-checkbox-label"
                    >
                      Value A 1
                    </label>
                  </div>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-a-2"
                      value="value-a-2"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-a-2"
                      className="fancy-checkbox-label"
                    >
                      Value A 2
                    </label>
                  </div>
                </div>
                <div className="form-column">
                  <h2>scent type</h2>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-b-1"
                      value="value-b-1"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-b-1"
                      className="fancy-checkbox-label"
                    >
                      Value B 1
                    </label>
                  </div>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-b-2"
                      value="value-b-2"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-b-2"
                      className="fancy-checkbox-label"
                    >
                      Value B 2
                    </label>
                  </div>
                </div>
                <div className="form-column">
                  <h2>category</h2>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-c-1"
                      value="value-c-1"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-c-1"
                      className="fancy-checkbox-label"
                    >
                      Value C 1
                    </label>
                  </div>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-c-2"
                      value="value-c-2"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-c-2"
                      className="fancy-checkbox-label"
                    >
                      Value C 2
                    </label>
                  </div>
                </div>
                <div className="form-column">
                  <h2>perfume strength</h2>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-d-1"
                      value="value-d-1"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-d-1"
                      className="fancy-checkbox-label"
                    >
                      Value D 1
                    </label>
                  </div>
                  <div className="field">
                    <Field
                      type="checkbox"
                      name="filter"
                      id="option-d-2"
                      value="value-d-2"
                      className="fancy-checkbox"
                    />
                    <label
                      htmlFor="option-d-2"
                      className="fancy-checkbox-label"
                    >
                      Value D 2
                    </label>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <Button
            type="reset"
            variant="tertiary"
            py={{ md: 4 }}
            px={{ md: 9 }}
            justifySelf={{ md: "flex-end" }}
          >
            Clear
          </Button>
        </Form>
      )}
    </Formik>
  </MenuRefineStyled>
)

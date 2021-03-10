import type { SetStateAction } from "react"

import clsx from "clsx"
import { Formik, Field, Form, FormikHelpers } from "formik"
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
    border-bottom: ${themeGet("border.width")} solid ${themeGet("border.color")};
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    padding-block-end: ${themeGet("space.6")}px;
    text-transform: uppercase;
  }

  h2 {
    font-family: "Quicksand", sans-serif;
    font-size: var(--font-size-heading-4, 13px);
    font-weight: normal;
    margin: 0;
    text-transform: uppercase;
  }

  .fancy-radio-label,
  .fancy-checkbox-label {
    font-size: var(--font-size-heading-4, 13px);
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type MenuRefineProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps & {
    productCount: number
    setFilterChips: React.Dispatch<SetStateAction<Array<string>>>
    setFiltersCount: React.Dispatch<SetStateAction<number>>
    setSortBy: React.Dispatch<SetStateAction<string>>
    view: "grid" | "list"
  }

interface Values {
  filter: string[]
  sort:
    | "best sellers"
    | "recommended"
    | "new arrivals"
    | "price (low - high)"
    | "price (high - low)"
}

export const MenuRefine: React.FC<MenuRefineProps> = ({
  productCount,
  setFiltersCount,
  setFilterChips,
  setSortBy,
  view,
  ...props
}) => {
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

  return (
    <MenuRefineStyled {...props}>
      <Formik
        className={clsx("container", "form-container")}
        initialValues={{
          filter: [],
          sort: "best sellers",
        }}
        onBlur={handleBlur}
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, values }) => {
          console.log("touched", touched)
          console.log("values", values)
          setFiltersCount(values?.filter?.length)
          setFilterChips(values?.filter)
          setSortBy(values?.sort)

          return (
            <Form className="form">
              <div className="form-fields">
                <section className={clsx("form-section", "sort")}>
                  <h1>Sort by</h1>
                  <div className="form-column">
                    {[
                      "best sellers",
                      "recommended",
                      "new arrivals",
                      "price (low - high)",
                      "price (high - low)",
                    ].map((option, index) => (
                      <div className="field">
                        <Field
                          className="fancy-radio"
                          id={`sort-${index}`}
                          name="sort"
                          type="radio"
                          value={option}
                        />
                        <label
                          htmlFor={`sort-${index}`}
                          className="fancy-radio-label"
                        >
                          {option}
                        </label>
                        {errors.sort && touched.sort ? (
                          <div className="error">{errors.sort}</div>
                        ) : undefined}
                      </div>
                    ))}
                  </div>
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
                  <div className="form-row">
                    {errors.filter && touched.filter ? (
                      <div className="error">{errors.filter}</div>
                    ) : undefined}
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
          )
        }}
      </Formik>
    </MenuRefineStyled>
  )
}

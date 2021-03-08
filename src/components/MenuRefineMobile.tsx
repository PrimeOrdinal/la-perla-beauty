import type { SetStateAction } from "react"

import React from "react"
import clsx from "clsx"
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
import { Formik, Field, Form, FormikHelpers } from "formik"

import { mediaQueries, theme } from "../theme"
import { themeGet } from "@styled-system/theme-get"

import { ReactComponent as Minus } from "../../static/icons/Minus.svg"
import { Button } from "./Button"
import { Accordion } from "./Accordion"

const MenuRefineMobileStyled = styled.section`
  display: grid;
  gap: ${themeGet("space.6")}px;
  grid-auto-flow: row;
  position: relative;

  ${mediaQueries.md} {
    display: none;
  }

  h1 {
    border-top: ${theme.border.width} solid ${theme.border.color};
    margin: 0px;
    padding-block-end: ${themeGet("space.6")}px;
    padding-block-start: ${themeGet("space.6")}px;
  }

  .sort,
  .filter {
    h1 {
      border-bottom: ${themeGet("border.color")} solid
        ${themeGet("border.width")};
      font-family: "Quicksand", sans-serif;
      font-size: ${themeGet("fontSizes.bodyMobile")}px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .mobile-menu {
    background-color: ${themeGet("colors.white")};
    border-radius: ${themeGet("space.4")}px 0px 0px 0px;
    border: 0.5px solid gray;
    padding: ${themeGet("space.6")}px;
    position: absolute;
    right: 0px;
    width: 80%;

    .main-title-wrapper {
      align-items: center;
      display: flex;
      justify-content: space-between;

      .main-title {
        border: none;
      }

      svg {
        width: 20px;
        object-fit: contain;
      }
    }
  }

  .sort-column {
    gap: ${themeGet("space.8")}px;
    padding-block-end: ${themeGet("space.3")}px;
    padding-block-start: ${themeGet("space.3")}px;
  }

  .filter-column {
    .field:not(:last-child) {
      border-bottom: ${themeGet("border.color")} solid
        ${themeGet("border.width")};
      padding-block-end: ${themeGet("space.5")}px;
    }
  }

  .field-wrapper {
    display: grid;
    gap: ${themeGet("space.6")}px;
  }

  .accordion__panel {
    margin-bottom: ${themeGet("space.6")}px;
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
  sort: "best sellers"
}

export const MenuRefineMobile: React.FC<MenuRefineProps> = ({
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
    <MenuRefineMobileStyled {...props}>
      <div className="mobile-menu">
        <div className="main-title-wrapper">
          <h1 className="main-title">Refine</h1>
          <Minus />
        </div>
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
                    <div className="form-column sort-column">
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
                    <div className="form-column">
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
                    <Accordion
                      allowMultipleExpanded={true}
                      allowZeroExpanded={true}
                      items={[
                        {
                          title: "Scent Types",
                          panel: (
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
                          ),
                        },
                        {
                          title: "Category",
                          panel: (
                            <div className="form-column">
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
                          ),
                        },
                        {
                          title: "Perfume Strength",
                          panel: (
                            <div className="form-column">
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
                          ),
                        },
                      ]}
                    />
                    {errors.filter && touched.filter ? (
                      <div className="error">{errors.filter}</div>
                    ) : undefined}
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
      </div>
    </MenuRefineMobileStyled>
  )
}

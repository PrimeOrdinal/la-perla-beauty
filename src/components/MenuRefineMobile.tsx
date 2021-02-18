import React from "react"
import clsx from "clsx"
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
import { Formik, Field, Form, FormikHelpers } from "formik"

import { mediaQueries, theme } from "../theme"
import { themeGet } from "@styled-system/theme-get"

import { ReactComponent as Minus } from "../images/Minus.svg"
import { Button } from "./Button"
import { Accordion } from "./Accordion"

const MenuRefineMobileStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: ${themeGet("space.6")}px;
  position: relative;
  ${mediaQueries.md} {
    display: none;
  }
  h1 {
    border-top: ${theme.border.width} solid ${theme.border.color};
    margin: 0px;
    padding-block-start: ${themeGet("space.6")}px;
    padding-block-end: ${themeGet("space.6")}px;
  }
  .sort,
  .filter {
    h1 {
      font-family: "Quicksand";
      font-weight: 600;
      text-transform: uppercase;
      font-size: ${themeGet("fontSizes.bodyMobile")}px;
      border-bottom: ${themeGet("border.color")} solid
        ${themeGet("border.width")};
    }
  }

  .mobile-menu {
    position: absolute;
    width: 80%;
    right: 0px;
    border: 0.5px solid gray;
    border-radius: ${themeGet("space.4")}px 0px 0px 0px;
    padding: ${themeGet("space.6")}px;

    .main-title-wrapper {
      display: flex;
      align-items: center;
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
    padding-block-start: ${themeGet("space.3")}px;
    padding-block-end: ${themeGet("space.3")}px;
  }

  .filter-column {
    .field:not(:last-child) {
      padding-block-end: ${themeGet("space.5")}px;
      border-bottom: ${themeGet("border.color")} solid
        ${themeGet("border.width")};
    }
  }

  .field-wrapper {
    display: grid;
    gap: ${themeGet("space.6")}px;
  }
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
  emailAddress: string
}

export const MenuRefineMobile: React.FC<MenuRefineProps> = ({
  productCount,
  setView,
  view,
  ...props
}) => {
  return (
    <MenuRefineMobileStyled>
      <div className="mobile-menu">
        <div className="main-title-wrapper">
          <h1 className="main-title">Refine</h1>
          <Minus />
        </div>
        <Formik
          className={clsx("container", "form-container")}
          initialValues={{
            emailAddress: "",
          }}
          onSubmit={async (
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
          }}
        >
          <Form className="form">
            <div className="form-fields">
              <section className={clsx("form-section", "sort")}>
                <h1>Sort by</h1>
                <div className="form-column sort-column">
                  <div className="field">
                    <Field
                      type="radio"
                      name="filter"
                      id="option-1"
                      value="value-1"
                      className="fancy-radio"
                    />
                    <label htmlFor="option-1" className="fancy-radio-label">
                      Best sellers
                    </label>
                  </div>
                  <div className="field">
                    <Field
                      type="radio"
                      name="filter"
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
                      name="filter"
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
                      name="filter"
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
                      name="filter"
                      id="option-5"
                      value="value-5"
                      className="fancy-radio"
                    />
                    <label htmlFor="option-5" className="fancy-radio-label">
                      price (high - low)
                    </label>
                  </div>
                </div>
              </section>
              <section className={clsx("form-section", "filter")}>
                <h1>Filter by</h1>
                <div className="form-row">
                  <div className="form-column filter-column">
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
                    <Accordion
                      allowMultipleExpanded={true}
                      allowZeroExpanded={true}
                      items={[
                        {
                          heading: "Scent Types",
                          panel: (
                            <React.Fragment>
                              <div className="field-wrapper">
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
                            </React.Fragment>
                          ),
                        },
                      ]}
                    />
                  </div>
                  <div className="form-column">
                    <Accordion
                      allowMultipleExpanded={true}
                      allowZeroExpanded={true}
                      items={[
                        {
                          heading: "Category",
                          panel: (
                            <React.Fragment>
                              <div className="field-wrapper">
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
                            </React.Fragment>
                          ),
                        },
                      ]}
                    />
                  </div>
                  <div className="form-column">
                    <Accordion
                      allowMultipleExpanded={true}
                      allowZeroExpanded={true}
                      items={[
                        {
                          heading: "Perfume Strength",
                          panel: (
                            <React.Fragment>
                              <div className="field-wrapper">
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
                            </React.Fragment>
                          ),
                        },
                      ]}
                    />
                  </div>
                  {/* <div className="form-column">
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-e-1"
                    value="value-e-1"
                    className="fancy-checkbox"
                  />
                  <label htmlFor="option-e-1" className="fancy-checkbox-label">
                    Value E 1
                  </label>
                </div>
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-e-2"
                    value="value-e-2"
                    className="fancy-checkbox"
                  />
                  <label htmlFor="option-e-2" className="fancy-checkbox-label">
                    Value E 2
                  </label>
                </div>
              </div> */}
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
        </Formik>
      </div>
    </MenuRefineMobileStyled>
  )
}

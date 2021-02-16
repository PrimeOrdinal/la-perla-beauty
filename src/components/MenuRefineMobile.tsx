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

import { Button } from "./Button"
import { Accordion } from "./Accordion"

const MenuRefineMobileStyled = styled.section`
  display: grid;
  grid-auto-flow: row;
  gap: 1rem;
  position: relative;
  h1 {
    border-top: 1px solid gray;
    padding-block-start: 1rem;
  }
  .sort,
  .filter {
    h1 {
      font-family: "Quicksand";
      font-weight: 600;
      text-transform: uppercase;
      font-size: 14px;
    }
  }
  .main-title {
    border: none;
  }
  .mobile-menu {
    position: absolute;
    width: 80%;
    right: 0px;
    border: 1px solid gray;
    padding: 1rem;
  }
  .field-wrapper {
    display: grid;
    gap: 1rem;
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
        <h1 className="main-title">Refine</h1>
        <Formik
          className={clsx("container", "form-container")}
          initialValues={{
            emailAddress: "",
          }}
          onSubmit={async (
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            const path = `${window.location.origin}/.netlify/functions/sign-up-to-our-newsletter`

            const url = new URL(path)

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
                <div className="form-column">
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

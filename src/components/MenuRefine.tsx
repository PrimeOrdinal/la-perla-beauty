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

import { theme } from "../theme"

import { Button } from "./Button"

const MenuRefineStyled = styled.section`
  .menu {
    align-items: center;
    border-bottom: ${theme.border.width} solid ${theme.border.color};
    display: flex;
    justify-content: space-between;
    padding-block-end: 1.25rem;
  }

  .form {
    grid-auto-flow: row;
  }

  .form-fields {
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
  emailAddress: string
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
        emailAddress: "",
      }}
      onSubmit={async (
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        const path = `${window.location.origin}/.netlify/functions/sign-up-to-our-newsletter`

        const url = new URL(path)

        const response = await fetch(url, {
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
                />
                <label htmlFor="option-1">Value 1</label>
              </div>
              <div className="field">
                <Field
                  type="radio"
                  name="filter"
                  id="option-2"
                  value="value-2"
                />
                <label htmlFor="option-2">Value 2</label>
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
                  />
                  <label htmlFor="option-a-1">Value A 1</label>
                </div>
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-a-2"
                    value="value-a-2"
                  />
                  <label htmlFor="option-a-2">Value A 2</label>
                </div>
              </div>
              <div className="form-column">
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-b-1"
                    value="value-b-1"
                  />
                  <label htmlFor="option-b-1">Value B 1</label>
                </div>
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-b-2"
                    value="value-b-2"
                  />
                  <label htmlFor="option-b-2">Value B 2</label>
                </div>
              </div>
              <div className="form-column">
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-c-1"
                    value="value-c-1"
                  />
                  <label htmlFor="option-c-1">Value C 1</label>
                </div>
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-c-2"
                    value="value-c-2"
                  />
                  <label htmlFor="option-c-2">Value C 2</label>
                </div>
              </div>
              <div className="form-column">
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-d-1"
                    value="value-d-1"
                  />
                  <label htmlFor="option-d-1">Value D 1</label>
                </div>
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-d-2"
                    value="value-d-2"
                  />
                  <label htmlFor="option-d-2">Value D 2</label>
                </div>
              </div>
              <div className="form-column">
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-e-1"
                    value="value-e-1"
                  />
                  <label htmlFor="option-e-1">Value E 1</label>
                </div>
                <div className="field">
                  <Field
                    type="checkbox"
                    name="filter"
                    id="option-e-2"
                    value="value-e-2"
                  />
                  <label htmlFor="option-e-2">Value E 2</label>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Button type="reset" variant="secondary" py={{ md: 4 }} px={{ md: 9 }}>
          Clear
        </Button>
      </Form>
    </Formik>
  </MenuRefineStyled>
)

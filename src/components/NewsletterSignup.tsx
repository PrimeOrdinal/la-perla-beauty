import { themeGet } from "@styled-system/theme-get"
import { Formik, Field, Form, FormikHelpers } from "formik"
import fetch from "node-fetch"
import React, { useState } from "react"
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

import { mediaQueries } from "../theme"

import { Button } from "./Button"

const NewsletterStyled = styled.div`
  form {
    grid-template-columns: 2fr 1fr;

    ${mediaQueries.md} {
      align-items: center;
      gap: ${themeGet("space.6")}px;
      grid-auto-flow: column;
      grid-template-columns: unset;
      justify-content: flex-end;
    }
  }

  input {
    height: 100%;

    ${themeGet("mediaQueries.md")} {
      min-width: 14rem;
    }
  }

  label {
    display: none;

    ${mediaQueries.md} {
      display: block;
    }
  }

  &:focus-within .information {
    display: block;
    grid-column: span 2;

    ${mediaQueries.md} {
      display: none;
    }

    p {
      font-size: var(--font-size-sm, 12px);
      font-weight: lighter;
      text-align: left;
      text-transform: unset;
    }
  }

  .information {
    display: grid;
    justify-content: end;
    margin-block-start: 1rem;
  }

  &:focus-within button {
    background-color: ${themeGet("colors.black")};
    color: ${themeGet("colors.white")};
  }

  &:focus-within input {
    border-color: ${themeGet("colors.black")};
    border-style: solid;
  }

  ${compose(color, flexbox, grid, layout, position, space)}
`

export type NewsletterSignupProps = ColorProps &
  FlexboxProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

interface Values {
  emailAddress: string
}

const validate = value => {
  let errorMessage

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = "Invalid email address"
  }

  return errorMessage
}

export const NewsletterSignup: React.FC = () => {
  const [message, setMessage] = useState(null)

  return (
    <NewsletterStyled>
      <Formik
        initialValues={{
          emailAddress: "",
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const path = `${location.origin}/.netlify/functions/subscribe-to-our-newsletter`

          const url = new URL(path, `${process.env.GATSBY_SITE_URL}`)

          const response = await fetch(url, {
            body: JSON.stringify(values),
            headers: {
              Accept: "application/json",
            },
            method: "POST",
          })

          setSubmitting(false)

          console.log(response)

          if (response.ok) {
            setMessage(response.statusText)
          }
        }}
      >
        <Form>
          <label htmlFor="emailAddress">Sign up to our newsletter</label>
          <Field
            as="input"
            id="emailAddress"
            name="emailAddress"
            placeholder="Enter your email address"
            type="email"
            validate={validate}
          />
          <Button
            type="submit"
            variant="secondary"
            py={{ md: 4 }}
            px={{ md: 9 }}
          >
            Sign up
          </Button>
        </Form>
      </Formik>
      {message && <div className="information">{message}</div>}
    </NewsletterStyled>
  )
}

import { themeGet } from "@styled-system/theme-get"
import { Formik, Field, Form, FormikHelpers } from "formik"
import fetch from "node-fetch"
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
      justify-content: end;
    }
  }

  .information {
    display: none;
  }

  input {
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

    ${mediaQueries.md}{
      display: none;
    }

    p {
      text-align: left;
      font-size: ${themeGet("fontSizes.small")}px;
      font-weight: 300;
      text-transform: unset;
    }
  }

  &:focus-within button {
    background: ${themeGet("colors.black")};
    color: ${themeGet("colors.white")};
  }

  &:focus-within input {
    border: 1px solid ${themeGet("colors.black")};
  }

  ${compose(layout, position, space)}
`

export type NewsletterSignupProps = LayoutProps &
  PositionProps &
  SpaceProps &
  VariantProps

interface Values {
  emailAddress: string
}

const validate = value => {
  let errorMessage;

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    errorMessage = 'Invalid email address';
  }

  return errorMessage;
};

export const NewsletterSignup: React.FC = () => (
  <NewsletterStyled>
    <Formik
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
        <Button type="submit" variant="secondary" py={{ md: 4 }} px={{ md: 9 }}>
          Sign up
        </Button>
        <div className="information">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
            minima blanditiis reprehenderit mollitia doloribus, voluptates omnis
            ex dolorem veritatis!
          </p>
        </div>
      </Form>
    </Formik>
  </NewsletterStyled>
)

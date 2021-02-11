import { Formik, Field, Form, FormikHelpers } from "formik"
import fetch from "node-fetch"
import React from "react"
import styled from "styled-components"

import { mediaQueries } from "../theme"

import { Button } from "./Button"

const StyledNewsletter = styled.div`
  ${mediaQueries.md} {
    justify-content: end;
  }
  label {
    display: none;
    ${mediaQueries.md} {
      display: block;
    }
  }
`

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
  <StyledNewsletter>
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
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
            minima blanditiis reprehenderit mollitia doloribus, voluptates omnis
            ex dolorem veritatis!
          </p>
        </div>
      </Form>
    </Formik>
  </StyledNewsletter>
)

import clsx from "clsx"
import { Formik, Field, Form, FormikHelpers } from "formik"
import fetch from "node-fetch"
import React from "react"
import * as Yup from "yup"

import { Button } from "../../components/Button"
import { Layout } from "../../components/Layout"
import { SEO } from "../../components/SEO"

interface Values {
  emailAddress: string
  password: string
}

const SignInSchema = Yup.object().shape({
  emailAddress: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(2, "Password is too short").required("Required"),
})

const SignInPage: React.FC = () => (
  <Layout>
    <SEO title="Sign in" />
    <main className={clsx("container")}>
      <h1>Sign in</h1>
      <Formik
        initialValues={{
          emailAddress: "",
          password: "",
        }}
        onSubmit={async (
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          const path = `/.netlify/functions/sign-in`

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
        }}
        validationSchema={SignInSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="emailAddress">Sign up to our newsletter</label>
            <Field
              as="input"
              id="emailAddress"
              name="emailAddress"
              placeholder="Enter your email address"
              type="email"
            />
            {errors.emailAddress && touched.emailAddress ? (
              <div className="error">{errors.emailAddress}</div>
            ) : undefined}
            <Field
              as="input"
              id="password"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            {errors.password && touched.password ? (
              <div className="error">{errors.password}</div>
            ) : undefined}
            <Button
              type="submit"
              variant="secondary"
              py={{ md: 4 }}
              px={{ md: 9 }}
            >
              Sign up
            </Button>
            <div className="information">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                amet minima blanditiis reprehenderit mollitia doloribus,
                voluptates omnis ex dolorem veritatis!
              </p>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  </Layout>
)

export default SignInPage

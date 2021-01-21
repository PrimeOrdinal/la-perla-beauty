import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

import Logo from "../images/logo.svg"

export const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Homepage</h1>
    <Logo />
    <section>
      <img alt="Lorem ipsum" src="https://via.placeholder.com/250" />
    </section>
    <section>
      <h1>Section</h1>
    </section>
    <section>
      <h1>Section</h1>
    </section>
    <section>
      <h1>Section</h1>
    </section>
    <section>
      <h1>Section</h1>
    </section>
  </Layout>
)

export default IndexPage

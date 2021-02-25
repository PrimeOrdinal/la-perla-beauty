import clsx from "clsx"
import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className={clsx("container")}>
      <h1>404: Not Found</h1>
      <p>Instructions here</p>
      <p>Promoted content here</p>
    </main>
  </Layout>
)

export default NotFoundPage

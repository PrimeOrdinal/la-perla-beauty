import React from "react"

import { Layout } from "../components/Layout"
import { SEO } from "../components/SEO"

export const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>Instructions here</p>
    <p>Promoted content here</p>
  </Layout>
)

export default NotFoundPage

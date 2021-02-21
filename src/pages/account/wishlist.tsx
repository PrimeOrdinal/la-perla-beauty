import React from "react"

import { Layout } from "../../components/Layout"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"

const WishlistPage: React.FC = () => (
  <Layout>
    <AccountLayout>
      <SEO title="My wishlist" />
      <div className="className">
        <h1>My wishlist</h1>
        <p>Content here</p>
      </div>
    </AccountLayout>
  </Layout>
)

export default WishlistPage

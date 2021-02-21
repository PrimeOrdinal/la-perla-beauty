import React from "react"

import { Layout } from "../../components/Layout"
import { OrdersItem } from "../../components/OrdersItem"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"

const OrdersPage: React.FC = () => (
  <Layout>
    <AccountLayout>
      <SEO title="My wishlist" />
      <div className="orders-column">
        <div className="current-orders">
          <h1>Orders</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <h2>current orders</h2>
          <OrdersItem />
        </div>
        <div className="previous-orders">
          <h2>Previous Orders</h2>
          <OrdersItem />
        </div>
      </div>
    </AccountLayout>
  </Layout>
)

export default OrdersPage

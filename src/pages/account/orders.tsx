import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

import { Layout } from "../../components/Layout"
import { ListPlain } from "../../components/ListPlain"
import { OrdersItem } from "../../components/OrdersItem"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"

const OrdersColumn = styled.section`
  h1 {
    text-transform: capitalize;
    font-size: 32px;
    margin: 0;
    font-weight: 300;
  }
  .current-orders {
    h2 {
      font-size: 24px;
    }
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    padding-block-end: 2rem;
  }
  .previous-orders {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    border-top: ${themeGet("border.width")} solid ${themeGet("border.color")};
  }

  .grid-item {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
  }
`

const OrdersPage: React.FC = () => (
  <Layout>
    <AccountLayout>
      <SEO title="My Orders" />
      <OrdersColumn>
        <h1>Orders</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div className="current-orders">
          <h2>Current orders</h2>
          <ListPlain className="grid-item">
            <li>
              <OrdersItem />
            </li>
          </ListPlain>
        </div>
        <div className="previous-orders">
          <h2>Previous Orders</h2>
          <ListPlain className="grid-item">
            <li>
              <OrdersItem />
            </li>
            <li>
              <OrdersItem />
            </li>
            <li>
              <OrdersItem />
            </li>
            <li>
              <OrdersItem />
            </li>
            <li>
              <OrdersItem />
            </li>
          </ListPlain>
        </div>
      </OrdersColumn>
    </AccountLayout>
  </Layout>
)

export default OrdersPage

import React from "react"
import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { mediaQueries } from "../../theme"

import { Layout } from "../../components/Layout"
import { ListPlain } from "../../components/ListPlain"
import { OrdersItem } from "../../components/OrdersItem"
import { PromotionalBanner } from "../../components/PromotionalBanner"
import { AccountLayout } from "../../components/AccountLayout"
import { SEO } from "../../components/SEO"

const OrdersColumn = styled.section`
  h1 {
    text-transform: capitalize;
    margin: 0;
    font-weight: lighter;
    font-size: ${themeGet("fontSizes.6")}px;
    ${mediaQueries.md} {
      font-size: ${themeGet("fontSizes.7")}px;
    }
  }

  .current-orders {
    h2 {
      font-size: 20px;
      ${mediaQueries.md} {
        font-size: ${themeGet("fontSizes.6")}px;
      }
    }
    display: grid;
    grid-auto-flow: row;
    gap: ${themeGet("space.6")}px;
    padding-block-end: ${themeGet("space.9")}px;
  }
  .previous-orders {
    display: grid;
    grid-auto-flow: row;
    gap: ${themeGet("space.6")}px;
    border-top: ${themeGet("border.width")} solid ${themeGet("border.color")};
  }

  .grid-item {
    display: grid;
    grid-auto-flow: row;
    gap: ${themeGet("space.9")}px;
  }
`
const PromoBannerArgs = {
  description:
    "Nullam sit amet laoreet urna. Donec quis erat feugiat, ultrices eros nec, tincidunt.",
  image: {
    description:
      "A grey placeholder image with the dimensions overlayed in white text",
    src: "https://via.placeholder.com/282",
  },
  link: {
    href: "/learn-more",
    text: "Learn more",
  },
  title: "Promo Banner",
  width: { _: 1, md: 1 / 2 },
}
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
              <OrdersItem current />
            </li>
          </ListPlain>
        </div>
        <div className="previous-orders">
          <h2>Previous Orders</h2>
          <ListPlain className="grid-item">
            <li>
              <OrdersItem previous />
            </li>
            <li>
              <OrdersItem previous />
            </li>
            <li>
              <OrdersItem previous />
            </li>
            <li>
              <OrdersItem previous />
            </li>
            <li>
              <OrdersItem previous />
            </li>
          </ListPlain>
        </div>
      </OrdersColumn>
    </AccountLayout>
    {/* <PromotionalBanner {...PromoBannerArgs} inlineView /> */}
  </Layout>
)

export default OrdersPage

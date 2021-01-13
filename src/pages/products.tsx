import clsx from "clsx";
import { PageProps, graphql } from "gatsby";
import React from "react";

import Breadcrumb from "../components/Breadcrumb";
import Layout from "../components/layout";
import Listing from "../components/Listing";
import SEO from "../components/seo";

import { transformBigCommerceProduct } from "../utils/transformBigCommerceProduct";
import { transformContentstackProduct } from "../utils/transformContentstackProduct";

export const ProductListings: React.FC<
  PageProps<DataTypeAllSources, PageContextTypeBreadcrumb>
> = ({ pageContext, location, data, path }) => {
  // console.log("pageContext", pageContext)
  // console.log("location", location)
  // console.log("data", data)
  // console.log("path", path)

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout>
      <SEO title="Product listings" />
      <Breadcrumb crumbs={crumbs} />
      <h1>Product Listings</h1>
      <section className={clsx("Contentstack")}>
        <h1>Contentstack Product Listings</h1>
        <Listing edges={data.allContentstackProducts.edges.map((edge) => transformContentstackProduct(edge))} />
      </section>

      <section className={clsx("BigCommerce")}>
        <h1>BigCommerce Product Listings</h1>
        <Listing edges={data.allBigCommerceProducts.edges.map((edge) => transformBigCommerceProduct(edge))} />
      </section>
    </Layout>
  )
};

export default ProductListings;

export const query = graphql`
  {
    allBigCommerceCategories {
      edges {
        node {
          name
          id
        }
      }
    }
    allBigCommerceProducts {
      edges {
        node {
          custom_url {
            url
          }
          availability
          calculated_price
          categories
          depth
          description
          fixed_cost_shipping_price
          gtin
          height
          id
          inventory_level
          inventory_warning_level
          is_featured
          is_free_shipping
          is_preorder_only
          is_price_hidden
          is_visible
          mpn
          order_quantity_maximum
          order_quantity_minimum
          preorder_message
          price
          price_hidden_label
          sale_price
          sku
          title: name
          upc
          weight
          width
        }
      }
    }
    allContentstackProducts {
      edges {
        node {
          created_at
          id
          product_id
          rich_text_editor
          title
          url
        }
      }
    }
  }
`;

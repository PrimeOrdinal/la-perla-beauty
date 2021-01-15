// import type { PageContextType } from "gatsby"

declare module "*.svg" {
  // eslint-disable-next-line
  const content: any
  export default content
}

interface SiteMetadata {
  title: string
  description: string
  email: string
  map: {
    url: string
  }
  telephone: {
    display: string
    href: string
  }
  siteUrl: string
  social?: []
}

type CategoryEdgeProps = {
  node: {
    custom_url: {
      url: string
    }
    description: string
    id: string
    is_visible: boolean
    meta_description: string
    meta_keywords: string[]
    name: string
    page_title: string
    parent_id: string
    search_keywords: string[]
  }
}

type HeaderData = {
  allBigCommerceCategories: {
    edges: CategoryEdgeProps[]
  }
  siteSearchIndex: {
    index: Record<string, unknown>
  }
}

type BigCommerceCategoryEdgeProps = {
  node: {
    name: string
    id: string
  }
}

type BigCommerceProductEdgeProps = {
  // node: {
  //   name: string
  //   price: number
  //   id: string
  //   sku: string
  // }
  node: ProductCustom
}

type ContentstackProductEdgeProps = {
  // node: {
  //   title: string
  //   description: number
  //   id: string
  //   url: string
  //   banner: {
  //     filename: string
  //     localAsset: {
  //       base: string
  //       absolutePath: string
  //       publicURL: string
  //       url: string
  //       childImageSharp: Record<string, unknown>
  //     }
  //   }
  // }
  node: ProductCustom
}

type DataTypeAllSources = {
  allBigCommerceCategories: {
    edges: BigCommerceCategoryEdgeProps[]
  }
  allBigCommerceProducts: {
    edges: BigCommerceProductEdgeProps[]
  }
  allContentstackProducts: {
    edges: ContentstackProductEdgeProps[]
  }
}

type Category = {
  description: string
  id: string
  price: number
  title: string
}

type SearchPage = {
  id: string
  path: string
  title: string
  tags: string[]
}

type ProductCustom = {
  availability: string
  calculated_price: number
  categories: string[]
  depth: number
  description: string
  fixed_cost_shipping_price: number
  gtin: number
  height: number
  id: string
  inventory_level: number
  inventory_warning_level: number
  is_featured: boolean
  is_free_shipping: boolean
  is_preorder_only: boolean
  is_price_hidden: boolean
  is_visible: boolean
  mpn: number
  order_quantity_maximum: number
  order_quantity_minimum: number
  preorder_message: string
  price: number
  price_hidden_label: string
  sale_price: number
  sku: string
  title: string
  upc: string
  url: string
  weight: number
  width: number
}

type GraphQLEdge = {
  node: Record<string, unknown>
}

// type PageContextTypeBreadcrumb = PageContextType & {
type PageContextTypeBreadcrumb = {
  breadcrumb: {
    title?: "string"
    crumbSeparator?: "string"
    crumbs: Array<{
      pathname: "string"
      location: Record<string, unknown>
    }>
    crumbLabel?: "string"
    disableLinks?: string[]
    hiddenCrumbs?: string[]
  }
}

type PageContextCategory = PageContextTypeBreadcrumb & {
  category: Category
}

type PageContextProduct = PageContextTypeBreadcrumb & {
  product: ProductCustom
}

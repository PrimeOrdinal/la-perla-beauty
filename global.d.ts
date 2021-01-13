declare module "*.svg" {
  const content: any;
  export default content;
}

interface GoogleMapsPlaceDetails {
  allPlaceDetails: {
    edges: Array<{
      node: {
        result: {
          address_components: Array<{
            long_name: string
            short_name: string
            types: string[]
          }>
          formatted_address: string
          geometry: {
            location: {
              lat: number
              lng: number
            }
          }
          name: string
          opening_hours: {
            periods: {
              close: {
                time: number
                day: number
              }
              open: {
                day: number
                time: number
              }
            }
          }
        }
      }
    }>
  }
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

// import type { PageContextType } from "gatsby"

type BigCommerceCategoryEdgeProps = {
  node: {
    name: string
    id: string
  }
}

type BigCommerceProductEdgeProps = {
  node: {
    name: string
    price: number
    id: string
    sku: string
  }
}

type ContentstackProductEdgeProps = {
  node: {
    title: string
    description: number
    id: string
    url: string
    banner: {
      filename: string
      localAsset: {
        base: string
        absolutePath: string
        publicURL: string
        url: string
        childImageSharp: {}
      }
    }
  }
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

// type PageContextTypeBreadcrumb = PageContextType & {
type PageContextTypeBreadcrumb = {
  breadcrumb: {
    title?: "string"
    crumbSeparator?: "string"
    crumbs: Array<{
      pathname: "string"
      location: {}
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
  product: Product
}

type Category = {
  description: string;
  id: string;
  price: number;
  title: string;
}

type Page = {
  id: string
  path: string
  title: string
  tags: string[]
}

type Product = {
  availability: string;
  calculated_price: number;
  categories: string[];
  depth: number;
  description: string;
  fixed_cost_shipping_price: number;
  gtin: number;
  height: number;
  id: string;
  inventory_level: number;
  inventory_warning_level: number;
  is_featured: boolean;
  is_free_shipping: boolean;
  is_preorder_only: boolean;
  is_price_hidden: boolean;
  is_visible: boolean;
  mpn: number;
  order_quantity_maximum: number;
  order_quantity_minimum: number;
  preorder_message: string;
  price: number;
  price_hidden_label: string;
  sale_price: number;
  sku: string;
  title: string;
  upc: string;
  url: string;
  weight: number;
  width: number;
}

// interface PagePropsWithBreadcrumb extends PageProps {
//   pageContext: PageContextTypeBreadcrumb
// }

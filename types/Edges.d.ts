type GraphQLEdge = {
  node: Record<string, unknown>
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
  node: BigCommerceProduct
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
  node: ContentstackProduct
}

type PageContextTypeBreadcrumb = {
  breadcrumb: {
    crumbSeparator?: "string"
    crumbs: Array<{
      crumbLabel?: "string"
      pathname?: string
    }>
    disableLinks?: string[]
    hiddenCrumbs?: string[]
    title?: "string"
  }
  page: any
}

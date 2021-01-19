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

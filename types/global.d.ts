export {}

declare global {
  namespace React {
    // interface ReactDOMAttributes {
    //   content?: string
    // }
    interface HTMLAttributes<T> {
      content?: boolean | number | string | undefined
    }
  }
}

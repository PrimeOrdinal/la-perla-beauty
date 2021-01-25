export const stripSlashes = (text: string): string =>
  text.replace(/([^:]\/)\/+/g, "$1")

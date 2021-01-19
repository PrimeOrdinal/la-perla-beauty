// export const returnSimpleType = <T>(value: T): T | undefined => {
export const returnSimpleType = <T>(
  value: T
): BigInt | boolean | number | string | symbol | undefined => {
  const type = typeof value

  const isSimpleType = [
    "bigint",
    "boolean",
    "number",
    "string",
    "symbol",
    "undefined",
  ].includes(type)

  const valueUnknown = value as unknown

  const valueSimpleType = valueUnknown as
    | BigInt
    | boolean
    | number
    | string
    | symbol
    | undefined

  return isSimpleType ? valueSimpleType : undefined
}

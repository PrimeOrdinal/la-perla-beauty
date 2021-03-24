import type { Context } from "react"

import type { Bag } from "../../types/BigCommerce"

import React from "react"

// export const BagContext: Context<Bag> = React.createContext({});
// export const BagContext: Context<Bag> = React.createContext({}) as Context<Bag>
// export const BagContext: Context<[Bag, () => {}]> = React.createContext([{}, () => {}])
export const BagContext = React.createContext({
    bag: {},
    setBag: (bag) => { console.log(bag) },
  } as {
    bag: Bag
    setBag: (bag: Bag) => void
  })
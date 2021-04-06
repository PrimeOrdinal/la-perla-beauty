import type { Bag } from "../../types/BigCommerce"

import React from "react"

export const BagContext = React.createContext({
    bag: {},
    setBag: (bag) => { console.log(bag) },
  } as {
    bag: Bag
    setBag: (bag: Bag) => void
  })
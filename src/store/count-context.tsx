import * as React from "react"

type Action = { type: "increment" } | { type: "decrement" }
type Dispatch = (action: Action) => void
type State = { count: number }
type CountProviderProps = { children: React.ReactNode }

const CountStateContext = React.createContext<State | undefined>(undefined)

const CountDispatchContext = React.createContext<Dispatch | undefined>(
  undefined
)

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 }
    }
    case "decrement": {
      return { count: state.count - 1 }
    }
    default: {
      if (action!.type) {
        throw new Error(`Unhandled action type: ${action!.type}`)
      } else {
        throw new Error(`Unhandled error`)
      }
    }
  }
}

export function CountProvider({ children }: CountProviderProps) {
  const [state, dispatch] = React.useReducer(countReducer, { count: 0 })
  
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}

export function useCountState() {
  const context = React.useContext(CountStateContext)
  
  if (context === undefined) {
    throw new Error("useCountState must be used within a CountProvider")
  }
  
  return context
}

export function useCountDispatch() {
  const context = React.useContext(CountDispatchContext)
  
  if (context === undefined) {
    throw new Error("useCountDispatch must be used within a CountProvider")
  }
  
  return context
}
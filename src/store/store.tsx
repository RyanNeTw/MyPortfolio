import { createContext, ReactNode } from 'react'

export const StoreContext = createContext<null>(null)

type StoreProviderProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <StoreContext.Provider value={null}>{children}</StoreContext.Provider>
}

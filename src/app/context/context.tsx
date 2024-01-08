import React, { createContext, useContext, useState } from 'react'

interface ContextState {
    products: string[]
    setProducts(products: string[]): void
}

const AppProductsContext = createContext({} as ContextState)

export const useProductsContext = () => {
    return useContext(AppProductsContext)
}

export const AppPreloaderProvider: React.FunctionComponent<React.PropsWithChildren> = ({ children }) => {
    const [products, setProducts] = useState<string[]>([])
    const AppContextObject = {
        products,
        setProducts,
    }
    return <AppProductsContext.Provider value={AppContextObject}>{children}</AppProductsContext.Provider>
}

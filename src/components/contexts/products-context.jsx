import { createContext, useEffect, useState } from 'react'
import SHOP_DATA from '../../shop-data.js'
import { addCollectionAndDoc, getCategoriesAndDocs } from '../../util/firebase/firebase.utils.ts'
export const ProductsContext = createContext({
    products: {},

})

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState({})

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocs()

            setProducts(categoryMap)
        }
        getCategoriesMap()
    }, [])

    // Below is the code for add data to the firestore
    // useEffect(() => {
    //     addCollectionAndDoc('categories', SHOP_DATA)
    // }, [])
    const value = { products }

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

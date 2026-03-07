import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/groceries')
            .then(res => setProducts(res.data.products));
    }, [])
    return <ProductContext.Provider value={[products, setProducts]}>{children}</ProductContext.Provider>
}
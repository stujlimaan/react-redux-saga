import { PRODUCT_LIST, SEARCH_PRODUCT } from "./ActionTypes"

export const productlist= ()=>{
    console.log("productlist")
    
    return {
        type:PRODUCT_LIST, 
        
    }
}

export const productSearch=(query)=>{
    console.log("sea",query)
    return {
        type:SEARCH_PRODUCT,
        query

    }
}
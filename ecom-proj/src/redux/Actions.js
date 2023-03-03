import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./ActionTypes"

export const addToCart = (data)=>{
    console.log("action called",data)
    return {
        type:ADD_TO_CART,
        data
    
    }
}
export const removeToCart=(data)=>{
    console.log("remove action called")
    return {
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart=()=>{
    console.log("empty cart")
    return {
        type:EMPTY_CART
    }
}
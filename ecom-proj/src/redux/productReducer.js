import {PRODUCT_LIST}from "./ActionTypes"
export const productData=(data=[],action)=>{
    switch(action.type){
        case PRODUCT_LIST:
            console.log("product",data)
            return [action.data]
        default : return "no data"
    }
}
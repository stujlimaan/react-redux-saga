import { SET_PRODUCT_LIST}from "./ActionTypes"
export const productData=(data=[],action)=>{
    switch(action.type){
        case SET_PRODUCT_LIST:
            return [...action.data]
        default : 
        return [...data]
    }
}
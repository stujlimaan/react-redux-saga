import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./ActionTypes"

export const cartData = (data=[],action)=>{
    // console.log("reducer",action)
    // if(action.type===ADD_TO_CART){
    //     console.log("add to cart ")
    //     return action.data
    // }else{
    //     return "no cart match"
    // }
   
    switch(action.type){
        case ADD_TO_CART:
            console.log("add to cart",data)
              return data+1>0?data+1:0 
        case REMOVE_TO_CART:
            console.log("remove to cart")
            return data>0?data-1:0
        case EMPTY_CART:
            return 0
        default :
         return data
    }
}
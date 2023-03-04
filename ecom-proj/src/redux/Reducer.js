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
            console.log("add to cart",action.data,[action.data,...data])
              return [action.data,...data]
        case REMOVE_TO_CART:
            console.log("remove to cart")
            const remainingItem=data.filter((item)=>item.id!==action.data)
            // data.length=data.length?data.length-1:[]
            console.log("remaining item",remainingItem)
            return [...remainingItem]
        case EMPTY_CART:
            return 0
        default :
         return [...data]
    }
}
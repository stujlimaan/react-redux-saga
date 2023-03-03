import { PRODUCT_LIST } from "./ActionTypes"

export const productlist=async ()=>{
    console.log("productlist")
    let data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    data = await data.json();
    console.log("productlist",data)
    return {
        type:PRODUCT_LIST, 
        data
    }
}
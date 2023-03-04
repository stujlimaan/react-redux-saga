import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from "./ActionTypes"

function* getProducts(){
    let data = yield fetch('http://localhost:3000/product')
    data = yield data.json();
    // console.log("productlist",data)
    console.log("call api here",data)
    yield put({type:SET_PRODUCT_LIST,data:data})
}
function* searchProducts(data){
    let result = yield fetch(`http://localhost:3000/product?q=${data.query}`)
    result = yield result.json();
    // console.log("productlist",result)
    console.log("call api here",data)
    yield put({type:SET_PRODUCT_LIST,data:result})
}
function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProducts)
yield takeEvery(SEARCH_PRODUCT,searchProducts)
}

export default productSaga
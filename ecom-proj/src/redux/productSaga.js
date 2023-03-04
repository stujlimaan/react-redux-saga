import {put, takeEvery} from "redux-saga/effects"
import { PRODUCT_LIST, SET_PRODUCT_LIST } from "./ActionTypes"

function* getProducts(){
    let data = yield fetch('http://localhost:3000/product')
    data = yield data.json();
    // console.log("productlist",data)
    console.log("call api here",data)
    yield put({type:SET_PRODUCT_LIST,data:data})
}
function* productSaga(){
yield takeEvery(PRODUCT_LIST,getProducts)
}

export default productSaga
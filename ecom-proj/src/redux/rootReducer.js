import { combineReducers } from "redux";
import { cartData } from "./Reducer";
import { productData } from "./productReducer";

export  const rootReducer= combineReducers({cartData,productData})
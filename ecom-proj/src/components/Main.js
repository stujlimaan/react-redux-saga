import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../redux/Actions';
import { productlist } from '../redux/productActions';
import { useSelector } from 'react-redux';
function Main() {
  const dispatch=useDispatch()
  const products={
    name:"mi",price:20000,color:"black"
  }
  const data=useSelector((state)=>state.productData)
  return (
    <div>
      <button onClick={()=>dispatch(addToCart(products))}>add to cart</button>
      <button onClick={()=>dispatch(removeToCart())}>remove to cart</button>
      <button onClick={()=>dispatch(emptyCart())}>empty cart</button>
      <button onClick={()=>dispatch(productlist())}>get product</button>
      <h1>{data}</h1>
    </div>
  );
}

export default Main;

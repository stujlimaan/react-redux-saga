import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../redux/Actions';
function Main() {
  const dispatch=useDispatch()
  const products={
    name:"mi",price:20000,color:"black"
  }
  return (
    <div>
      <button onClick={()=>dispatch(addToCart(products))}>add to cart</button>
      <button onClick={()=>dispatch(removeToCart())}>remove to cart</button>
      <button onClick={()=>dispatch(emptyCart())}>empty cart</button>
    </div>
  );
}

export default Main;

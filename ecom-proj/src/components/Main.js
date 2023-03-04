import {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from '../redux/Actions';
import { productlist } from '../redux/productActions';
import { useSelector } from 'react-redux';
function Main() {
  const dispatch=useDispatch()
 
  const data=useSelector((state)=>state.productData)
  const data1=useSelector((state)=>state.cartData)
  console.log("data in main",data,data1)

  useEffect(() => {
    dispatch(productlist())
  }, [])
  return (
    <div>
      {/* <button onClick={()=>dispatch(addToCart(products))}>add to cart</button>
      <button onClick={()=>dispatch(removeToCart())}>remove to cart</button> */}
      <button onClick={()=>dispatch(emptyCart())}>empty cart</button>
      {/* <button onClick={()=>dispatch(productlist())}>get product</button> */}
      <div className='product-container'>
          {
            data.map((item)=><div className='product-item' key={item.id}>
              <img src={item.photo} alt='mobile' />
              <div>name : {item.name}</div>
              <div>price : {item.price}</div>
              <div>category: {item.category}</div>
              <div>brand: {item.brand}</div>
              <div><button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button></div>
              <div><button onClick={()=>dispatch(removeToCart(item.id))}>Remove to Cart</button></div>
            </div>)
          }
      </div>
    </div>
  );
}

export default Main;

import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const cartData=useSelector((state)=>state.cartData)
    let amount =cartData.length && cartData.map((item)=>item.price).reduce((prev,next)=>prev+next)
    console.log(cartData)
  return (
    <>
    <div className='product-container'>
      {
        cartData.map((item)=><div className='product-item'>
            <img src={item.photo} alt='mobile'/>
            <div>name : {item.name}</div>
              <div>price : {item.price}</div>
              <div>category: {item.category}</div>
              <div>brand: {item.brand}</div>
            </div>
            )
      }
     
    </div>
    <div style={{backgroundColor:"powderblue",padding:10}}>
        <p>total amount : {amount}</p>
      </div>
    </>

  )
}

export default Cart

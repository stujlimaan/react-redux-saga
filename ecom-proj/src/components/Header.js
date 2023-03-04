import {useSelector,useDispatch} from "react-redux"
import { Link } from "react-router-dom"
import { productSearch } from "../redux/productActions"
const Header =()=>{
    const result = useSelector((state)=>state.cartData)
    console.log("hello cart",result)
    const dispatch=useDispatch()
  
    return (
        <div className="header">
            <h1 style={{float:"left",marginLeft:20}}><Link style={{textDecoration:"none",color:"black"}} to='/'>e-com</Link></h1>
            <div style={{paddingTop:30}}>
                <input type="text" placeholder="search" onChange={(e)=>dispatch(productSearch(e.target.value))}/>
            </div>
            <div className="cart-div">
                <span><Link style={{color:"white"}} to='/cart'>{result.length}</Link></span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="add to cart"/>
            </div>
        </div>
    )
}

export default Header
import {useSelector} from "react-redux"
const Header =()=>{
    const result = useSelector((state)=>state.cartData)
    console.log(result)
    return (
        <div className="header">
            <div className="cart-div">
                <span>{result}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="add to cart"/>
            </div>
        </div>
    )
}

export default Header
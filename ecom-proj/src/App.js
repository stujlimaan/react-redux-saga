import './App.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/Actions';
function App() {
  const dispatch=useDispatch()
  const products={
    name:"mi",price:20000,color:"black"
  }
  return (
    <div className="App">
      <h1>hello world</h1>
      <button onClick={dispatch(addToCart(products))}>add to cart</button>
    </div>
  );
}

export default App;

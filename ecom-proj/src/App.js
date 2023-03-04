import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

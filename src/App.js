import Navbar from './components/Nav';
import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import './App.css';
import { useEffect } from 'react';


function App() {
  const {cartItems} = useSelector((store)=> store.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(calculateTotals());
  }, [cartItems])
  return (
<main>
  <Navbar />
  <CartContainer/>
</main>
  );
}

export default App;

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './features/cart/cartSlice'
function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems, dispatch])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CartContainer />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App;

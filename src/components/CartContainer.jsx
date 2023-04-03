import React from 'react'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice';

const CartContainer = () => {
  const dispatch = useDispatch();
  const {cartItems, total, amount}= useSelector((store)=> store.cart)

  if (amount < 1){
    return(
      <section className='cart'>
        <header>
          <h2>Your Bag</h2>
          <h4 className='empty__cart'>is currently empty</h4>
        </header>

      </section>
    )
  }
  return (
    <section className='cart'>
         <header>
          <h2>YOUR BAG</h2>
         
         </header>
         <div className='empty__cart'>
              {
                cartItems.map((item)=>{
                  return(
                    <CartItem key={item.id} {...item} ></CartItem>
                  )
                  
                })
              }

          </div>
          <footer>
            <hr></hr>
            <div className='total__amount'>
              <h4>{`Total: $${total.toFixed(2)}`}</h4>

            </div>
            <button className="btn clear__btn" onClick={() =>dispatch(clearCart())}>clear cart</button>
          </footer>
    </section>
  )
}

export default CartContainer
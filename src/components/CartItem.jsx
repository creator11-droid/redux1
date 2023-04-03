import React from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {MdKeyboardArrowUp} from 'react-icons/md'
import {CiCircleRemove} from 'react-icons/ci'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'
const CartItem = ({id, title, price, img, amount}) => {
  const dispatch = useDispatch();
  return (
    <article className='cart__item'>

          <img src={img} alt={title}></img>
         <div className='cart__item-container'>
          <div className="price">
            <h3>{title}</h3>
            <h4>{`$${price}`}</h4>
            <CiCircleRemove className=' btn remove__btn' onClick={()=>{dispatch(removeItem(id))}}/>
            </div>
          <div className='cart__amount'>
            <div><MdKeyboardArrowUp className='btn btn-up' onClick={()=>{dispatch(increase({ id }))}}/></div>
           <div>{amount}</div> 
            <div><MdKeyboardArrowDown className='btn btn-down' onClick={()=>{
              if(amount===1){
                dispatch(removeItem(id))
                return;
              }
              dispatch(decrease({ id }))}}/></div>
          </div>
          
         </div>
    </article>
  )
}

export default CartItem
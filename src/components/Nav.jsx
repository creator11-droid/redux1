import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Navbar =() =>{
 const amount = useSelector((store)=> store.cart.amount)
    return(
        <nav>
          <div className='nav__center'>

            <h3> Redux toolkit</h3>

            <div className='nav__container'>
                <FaShoppingCart/>
                <div className='amount__container'>
                    <p className='total__amount'>{amount}</p>
                </div>
            </div>
          </div>


        </nav>
    )
}

export default Navbar
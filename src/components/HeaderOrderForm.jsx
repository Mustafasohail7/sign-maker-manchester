import '../styles/HeaderOrderForm.css'

import logo from '../assets/logo.png'

import { BiArrowBack } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const HeaderOrderForm = ({order}) => {
  return (
    <div className='order-header-container'>
      <div className='go-back-arrow'>
        <Link to='/'>
            <BiArrowBack/>
        </Link>
      </div>
      <div className='order-logo-holder'>
        <img src={logo} alt='logo' className='navbar-logo-order'/>
      </div>
      <div>
        <FaShoppingCart className='cart-icon-order'/>
        <span className='cart-count cart-order-form'>{order.length}</span>
      </div>
    </div>
  )
}

export default HeaderOrderForm

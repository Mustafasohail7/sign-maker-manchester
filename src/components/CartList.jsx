import '../styles/CartList.css'

import CartItems from './CartList/CartItems'
import OrderForm from './CartList/OrderForm'

const CartList = ({order}) => {
  return (
    <div className='order-function-container'>
        <div className='order-page-left'>
            <CartItems order={order}/>
        </div>
        <div className='order-page-right'>
            <OrderForm />
        </div>
    </div>
  )
}

export default CartList

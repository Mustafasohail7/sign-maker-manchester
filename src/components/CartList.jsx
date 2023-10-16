import '../styles/CartList.css'

import CartItems from './CartList/CartItems'
import OrderForm from './CartList/OrderForm'

const CartList = ({order,handleItemRemove}) => {
  return (
    <div className='order-function-container'>
        <div className='order-page-left'>
            <CartItems order={order} handleItemRemove={handleItemRemove}/>
        </div>
        <div className='order-page-right'>
            <OrderForm />
        </div>
    </div>
  )
}

export default CartList

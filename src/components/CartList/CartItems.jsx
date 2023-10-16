import '../../styles/CartItems.css'

import CartItemsItem from './CartItemsItem'

const CartItems = ({order,handleItemRemove}) => {
  return (
    <div className="cartItems-container">
      <div className='cart-table-headings'>
          <div className='cell-left'>
            products
          </div>
          <div className='cell-right'>
            price
          </div>
      </div>
      {order.map((item, index) => 
        <CartItemsItem key={index} item={item} handleItemRemove={handleItemRemove}/>
      )}
    </div>
  )
}

export default CartItems

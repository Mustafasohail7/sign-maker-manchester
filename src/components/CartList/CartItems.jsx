import '../../styles/CartItems.css'

import CartItemsItem from './CartItemsItem'

const CartItems = ({order}) => {
  return (
    <div className="cartItems-container">
      <div className='cart-table-headings'>
          <div className='product-heading'>
              products
          </div>
          <div className='other-heading'>
              <div>
                  Color
              </div>
              <div>
                  Size
              </div>
              <div>
                  Price
              </div>
              <div/>
          </div>
      </div>
      {order.map((item, index) => 
        <CartItemsItem key={index} item={item}/>
      )}
    </div>
  )
}

export default CartItems

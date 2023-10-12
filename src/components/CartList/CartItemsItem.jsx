import { BsFillTrashFill } from "react-icons/bs"

const CartItemsItem = ({item,heading}) => {
  return (
    <div className="cart-table-headings order-form-item">
          <div className='product-heading'>
              <div>
                {item.text} letter sign
              </div>
              <div>
                w/ adapter
              </div>
          </div>
          <div className='other-heading'>
              <div>
                  {item.color}
              </div>
              <div>
                  {item.size}
              </div>
              <div>
                  600
              </div>
              <div>
                    <BsFillTrashFill className='trash-icon'/>
              </div>
          </div>
        </div>
  )
}

export default CartItemsItem

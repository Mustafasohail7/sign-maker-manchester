import { BsFillTrashFill } from "react-icons/bs"

const CartItemsItem = ({item,handleItemRemove}) => {

  const add_on = item.stand1 || item.stand2 || item.adapter1 || item.adapter2 || item.adapter3

  return (
    <div className="cart-table-headings order-form-item">
          <div className="cell-left">
              <div className="cell-items-name">
                <div className="letter-sign">
                  {item.text} letter sign
                </div>
                {add_on && <div className="with">
                w/
                </div>}
                {item.stand1 && <div className="add_names">Wall Stand</div>}
                {item.stand2 && <div className="add_names">Window Stand</div>}
                {item.adapter1 && <div className="add_names">Adapter 1</div>}
                {item.adapter2 && <div className="add_names">Adapter 2</div>}
                {item.adapter3 && <div className="add_names">Adapter 3</div>}
                <div className="add_names">{item.color}</div>
                <div className="add_names">{item.size}</div>
              </div>
          </div>
          <div className="cell-right inside">
              600 pkr
              <BsFillTrashFill className="trashcan" onClick={() => handleItemRemove(item.id)}/>
          </div>
        </div>
  )
}

export default CartItemsItem

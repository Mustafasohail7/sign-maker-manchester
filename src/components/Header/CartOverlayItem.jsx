import { BsFillTrashFill } from 'react-icons/bs'

import '../../styles/CartOverlayItem.css'

const CartOverlayItem = ({item,colors,handleItemRemove}) => {

    const add_on = item.stand1 || item.stand2 || item.adapter1 || item.adapter2 || item.adapter3

  return (
    <div className='cart-item-holder'>
            <div className='cart-item-heading-holder'>
              <p>'<span className='sign-text'>{item.text}</span>' Letter Sign</p>
              {add_on && <p className='with'>w/</p>}
              {item.stand1 && <p>Wall Stand</p>}
              {item.stand2 && <p>Window Stand</p>}
              {item.adapter1 && <p>Adapter 1</p>}
              {item.adapter2 && <p>Adapter 2</p>}
              {item.adapter3 && <p>Adapter 3</p>}
              <div className='cart-item-color-holder'>
                <p className='cart-item-color' style={{backgroundColor: colors[item.color]}}>{item.color.charAt(0)}</p>
                <p className='cart-item-size'>{item.size}</p>
              </div>
            </div>
            <div className='delete-holder'>
              <BsFillTrashFill className='trashcan' onClick={() => handleItemRemove(item.id)}/>
              <p>600 pkr</p>
            </div>
    </div>
  )
}

export default CartOverlayItem

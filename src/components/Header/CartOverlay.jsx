import '../../styles/CartOverlay.css'

import {RxCross2} from 'react-icons/rx'
import { BsFillTrashFill } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const CartOverlay = ({hovered,setHovered,order,handleItemRemove}) => {

  const colors = {
    pink: '#c23291',
    red: '#da252a',
    chrome_yellow: '#d1913a',
    pumpkin_orange: '#e46c4a',
    light_green: '#73c259',
    meadow_green: '#309867',
    aqua: '#2da3a7',
    reflex_blue: '#2d3b7c',
    black: '#454648',
    white: '#B9B1B1'
  }

  if (hovered){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'unset'
  }

  return (
    <div className={`cart-overlay ${hovered? 'open' : ''}`}>
      <div className='cart-overlay-items'>
      <div className='heading-container-cart'>
        <h2 className='cart-heading'>Cart</h2>
        <button onClick={()=>setHovered(false)} className='cross-button-cart'><RxCross2/></button>
      </div>
      <div className='cart-items-holder'>
        {order.map((item,index) => 
          <div className='cart-item-holder'>
            <div className='cart-item-heading-holder'>
              <p>{item.text} Letter Sign</p>
              <p>Includes:</p>
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
        )}
      </div>
      </div>
      <div className='cart-item-price-holder'>
        <div className='price-div'>
          <p>Total</p>
          <p>Rs. 600</p>
        </div>
        <Link to='/order-form' className='checkout-btn'>
          <button >
            Checkout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CartOverlay

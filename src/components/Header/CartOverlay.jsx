import '../../styles/CartOverlay.css'

import {RxCross2} from 'react-icons/rx'
import { Link } from 'react-router-dom'

import { useEffect, useState } from 'react'

import CartOverlayItem from './CartOverlayItem'

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

  const [change,setChange] = useState(false)

  useEffect(() => {
    if(hovered){
      setTimeout(() => {
        setChange(true)
      }, 250)
    }else{
      setChange(false)
    }
  }, [hovered])

  return (
    <>
      <div className={`dark-layer ${change ? 'open' : ''}`}>
      </div>
      <div className={`cart-overlay ${hovered ? 'open' : ''}`}>
        <div className='cart-overlay-items'>
        <div className='heading-container-cart'>
          <h2 className='cart-heading'>Cart</h2>
          <button onClick={()=>setHovered(false)} className='cross-button-cart'><RxCross2/></button>
        </div>
        <div className='cart-items-holder'>
          {order.map((item,index) => 
            <CartOverlayItem item={item} colors={colors} handleItemRemove={handleItemRemove} key={index}/>
          )}
        </div>
        </div>
        <div className='cart-item-price-holder'>
          <div className='price-div'>
            <p className='total'>Total</p> 
            <p>600 pkr</p>
          </div>
          <Link to='/order-form' className='checkout-btn'>
            <button >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default CartOverlay

import { useState } from 'react';

import NavBar from './Header/NavBar';
import DropDown from './Header/DropDown';
import CartOverlay from './Header/CartOverlay';

const Header = ({order}) => {

    const [dropDown,setDropDown] = useState(false)
    const [hovered,setHovered] = useState(false)

  return (
    <div>
      <NavBar setDropDown={setDropDown} order={order} setHovered={setHovered}/>
      <DropDown dropDown={dropDown} setDropDown={setDropDown} /> 
      {hovered && <CartOverlay setHovered={setHovered}/>} 
    </div>
  )
}

export default Header

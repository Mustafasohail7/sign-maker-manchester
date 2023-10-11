import { useState } from 'react';

import NavBar from './Header/NavBar';
import DropDown from './Header/DropDown';
import CartOverlay from './Header/CartOverlay';

const Header = ({order,handleItemRemove}) => {

    const [dropDown,setDropDown] = useState(false)
    const [hovered,setHovered] = useState(false)

  return (
    <div>
      <NavBar setDropDown={setDropDown} order={order} setHovered={setHovered}/>
      <DropDown dropDown={dropDown} setDropDown={setDropDown} /> 
      <CartOverlay hovered={hovered} setHovered={setHovered} order={order} handleItemRemove={handleItemRemove}/>
    </div>
  )
}

export default Header

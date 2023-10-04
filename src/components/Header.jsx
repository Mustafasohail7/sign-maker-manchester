import { useState } from 'react';

import NavBar from './Header/NavBar';
import DropDown from './Header/DropDown';

const Header = () => {

    const [dropDown,setDropDown] = useState(false)

  return (
    <div>
      <NavBar setDropDown={setDropDown} />
      <DropDown dropDown={dropDown} setDropDown={setDropDown} />    
    </div>
  )
}

export default Header

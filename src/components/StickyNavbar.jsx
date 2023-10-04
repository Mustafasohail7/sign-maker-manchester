import { Link } from 'react-scroll'

import '../styles/DropDown.css'


const StickyNavbar = ({sticky,setSticky}) => {

  const handleClick = () => {
    setSticky(false)
  }

  return (
    <div className={`navbar-dropdown-scrolled ${sticky ? 'open' : ''}`}>
        <ul className="navbar-options-dropdown">
            <li className="nav-item-dropdown">
              <Link to="portfolio" smooth={true} duration={500} onClick={handleClick} offset={-150}>
                  Portfolio
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='features' smooth={true} duration={700} onClick={handleClick} offset={-150} >
                  Features
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='description' smooth={true} duration={800} onClick={handleClick} offset={-130} >
                  Description
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='faq' smooth={true} duration={800} onClick={handleClick} offset={-130} >
                  FAQ
              </Link>
            </li>
            <li className="nav-item-dropdown">
              <Link to='about' smooth={true} duration={800} onClick={handleClick} offset={-150} >
                  About
              </Link>
            </li>
        </ul>
    </div>
  )
}

export default StickyNavbar

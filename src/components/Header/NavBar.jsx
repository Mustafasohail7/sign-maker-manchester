import { useEffect } from 'react';
//Shopping Cart and Three Bars Icon
import { FaShoppingCart, FaBars } from 'react-icons/fa'

import NavBarItem from './NavBarItem';
import NavBarData from '../../data/NavBarData'

//style
import '../../styles/NavBar.css'

import logo from '../../assets/logo.png'

const NavBar = ({setDropDown,order,setHovered}) => {

    const handleCart = () => {
        setHovered(true)
    }

    //Close the dropdown menu when the user scrolls
    useEffect(() => { 
        const handleScroll = () => {
        if (window.scrollY > 500) {
            setDropDown(false)
        }};

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    },[setDropDown])

    //Toggle the dropdown menu
    const toggleMenu = () => {
      setDropDown(prev => !prev)
    };

    //Close the dropdown menu when the user resizes the window
    const handleResize = () => {
        if(window.innerWidth > 768) {
            setDropDown(false)
        }
    }

    //resize event listener
    useEffect(() => {
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })
  
    return (
      <nav className="navbar">
        <div className='main-flex-container'>
            <div className='header-left'>
                    <div className="navbar-toggle" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    <img src={logo} alt="logo" className="navbar-logo" />
                    <ul className='navbar-options'>
                        {NavBarData.map((navbarItem) => (
                            <NavBarItem key={navbarItem.id} NavBarData={navbarItem}/>
                        ))}
                    </ul>
            </div>       
            <div className="navbar-cart" onClick={handleCart}>
                <FaShoppingCart />
                <span className="cart-count">{order.length}</span>
            </div>
        </div>
      </nav>  
    )
}

export default NavBar

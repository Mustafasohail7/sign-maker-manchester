import { Link } from 'react-scroll'

const DropDownItem = ({setDropDown,NavBarData}) => {

    const handleClick = () => {
        setDropDown(false)
    }

  return (
    <li className="nav-item-dropdown">
        <Link to={NavBarData.link} smooth={true} duration={NavBarData.duration} offset={-400} onClick={handleClick}>
            {NavBarData.name}
        </Link>
    </li>
  )
}

export default DropDownItem

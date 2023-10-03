import { Link } from 'react-scroll'

const NavBarItem = ({NavBarData}) => {
  return (
        <li className="nav-item">
            <Link to={NavBarData.link} smooth={true} duration={NavBarData.duration} offset={-50}>
                {NavBarData.name}
            </Link>
        </li>
  )
}

export default NavBarItem

//stylesheet
import '../../styles/DropDown.css'

import NavBarData from '../../data/NavBarData'
import DropDownItem from './DropDownItem'

const DropDown = ({dropDown,setDropDown}) => {

  return (
    <>
    <div className={`navbar-dropdown ${dropDown ? 'open' : ''}`}>
        <ul className="navbar-options-dropdown">
            {NavBarData.map((navbarItem) => (
                <DropDownItem key={navbarItem.id} setDropDown={setDropDown} NavBarData={navbarItem}/>
            ))}
        </ul>
    </div>
    </>
  )
}

export default DropDown

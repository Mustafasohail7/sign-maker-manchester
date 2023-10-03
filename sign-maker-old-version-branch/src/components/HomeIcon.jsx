import '../styles/HomeIcon.css'

import { AiOutlineArrowUp } from 'react-icons/ai'
import { Link } from 'react-scroll'

const HomeIcon = () => {
  return (
    <div className="go-home-icon">
        <Link to='home' smooth={true} duration={500}>
            <AiOutlineArrowUp size={40} />
        </Link>
    </div>
  )
}

export default HomeIcon

import '../../styles/SocialLinks.css'

import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

import SocialLinkItem from './SocialLinkItem'

const SocialLinks = () => {

  const size = 25

  const social_links = [
    {id: 1, logo: <FaFacebookF size={size}/>, link: 'https://www.google.com'},
    {id: 2, logo: <FaTwitter size={size}/>, link: 'https://www.google.com'},
    {id: 3, logo: <FaInstagram size={size}/> , link: 'https://www.google.com'},
    {id: 4, logo: <FaYoutube size={size}/> , link: 'https://www.google.com'},
  ]

  return (
    <div className="floating-social-media">
        {social_links.map((social_link) => (
          <SocialLinkItem key={social_link.id} SocialLink={social_link}/>
        ))}
    </div>
  )
}

export default SocialLinks

const SocialLinkItem = ({SocialLink}) => {
  return (
      <a href={SocialLink.link} target='_blank' rel='noreferrer' className='social-media-icon' >{SocialLink.logo}</a>
  )
}

export default SocialLinkItem

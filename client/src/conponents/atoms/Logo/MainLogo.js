import React from 'react'
import './MainLogo.scss'

const MainLogo = ({
  imagePath = '/assets/images/logo.png',
  imageAlt = 'Test Page',
  imageTitle = 'Test Page',
}) => {
  return <img className={'logo_main'} src={imagePath} alt={imageAlt} title={imageTitle} />
}

export default MainLogo

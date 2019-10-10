import React from 'react'

const Image = ({imageAlt, imagePath, imageTitle}) => {
  console.log('hoho')
  // console.dir(props)
  return <img src={imagePath} alt={imageAlt} title={imageTitle} />
}

export default Image
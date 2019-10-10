import React from 'react'
import { RouterLink } from '../../atoms/Link'
import { MainLogo } from '../../atoms/Logo'

const LinkMainLogo = () => {
  return (
    <RouterLink url={'/'} content={<MainLogo/>} />
  )
}

export default LinkMainLogo
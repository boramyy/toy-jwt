import React from 'react'
import { Box } from '../atoms/Box'
import { H1 } from '../atoms/Text'
import { NavList } from '../molecules/List'
import './DefaultHeader.scss'
import { LinkMainLogo as Logo } from '../molecules/Link'

const DefaultHeader = ({ className }) => {
  
  return (
    <Box className={className}>
      <H1 id='logo' content={<Logo/>}/>
      <NavList className='group_gnb'/>
    </Box>
  )
}

export default DefaultHeader
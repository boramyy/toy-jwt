import React from 'react'
// import './LoginTemplate.scss'
import { Wireframe, Box } from '../../atoms/Box'

const MainTemplate = ({content}) => {

  return (
    <Box className="template_main">
      {content 
        ? <Box className="wrap_content">{content}</Box>
        : <Wireframe className="wrap_content" name="main content!!" />}
    </Box>
  )
}

export default MainTemplate
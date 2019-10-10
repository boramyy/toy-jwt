import React from 'react'
import './LoginTemplate.scss'
import { Wireframe, Box } from '../../atoms/Box'

const LoginTemplate = ({content}) => {

  return (
    <Box className="template_login">
      {content 
        ? <Box className="wrap_content">{content}</Box>
        : <Wireframe className="wrap_content" name="content!!" />}
    </Box>
  )
}

export default LoginTemplate
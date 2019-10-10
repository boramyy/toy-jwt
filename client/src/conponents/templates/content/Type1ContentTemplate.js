import React from 'react'
// import './LoginTemplate.scss'
import { Wireframe, Box } from '../../atoms/Box'

const Type1ContentTemplate = ({section1, section2, section3}) => {

  return (
    <Box className={`content_type1`}>
      {section1 
        ? <Box className="wrap_section1">{ section1 }</Box>
        : <Wireframe className="wrap_section1" name="section 1 1 1 1" />}

      {section2 
        ? <Box className="wrap_section2">{ section2 }</Box>
        : <Wireframe className="wrap_section2" name="section 222" />}
      
      {section3 
        ? <Box className="wrap_section3">{ section3 }</Box>
        : <Wireframe className="wrap_section3" name="section 333" />}
    </Box>
  )
}

export default Type1ContentTemplate
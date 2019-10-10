import React, {useEffect} from 'react'
import './DefaultPageTemplate.scss'
import { Wireframe, Box } from '../../atoms/Box'
import { DefaultHeader, DefaultFooter } from '../../organisms'

const DefaultPageTemplate = ({content, ...props}) => {
  // content.className = 'wrap_content'

  return (
    <Box className="template_type1">
      {/* {header 
        ? <DefaultHeader/>
        : <Wireframe className="wrap_header" name="header!!" />} */}
      
      <DefaultHeader className="wrap_header"/>
      
      {content 
        ? <Box className="wrap_content">{content}</Box>
        : <Wireframe className="wrap_content" name="content!!" />}
      
      <DefaultFooter className="wrap_footer"/>

      {/* {footer 
        ? <DefaultFooter/>
        : <Wireframe className="wrap_footer" name="footer!!" />} */}
    </Box>
  )
}

export default DefaultPageTemplate
import React, { useEffect } from 'react'
import DefaultPageTemplate from '../conponents/templates/page/DefaultPageTemplate'
import Type1ContentTemplate from '../conponents/templates/content/Type1ContentTemplate'
import { DefaultContent } from '../conponents/organisms'

const Main = props => {
  return (
    <>
      <DefaultPageTemplate
        content={<Type1ContentTemplate section1={''} section2={''} section3={''} />}
      />
    </>
  )
}

export default Main
import React from 'react'
import './H1.scss'

const H1 = ({ content, ...props }) => {
  return (
    <h1 {...props}>{ content }</h1>
  )
}

export default H1
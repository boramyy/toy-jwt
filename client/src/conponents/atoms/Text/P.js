import React from 'react'

const P = ({ children, ...props }) => {
  return (
    <p {...props}>{ children }</p>
  )
}

export default P
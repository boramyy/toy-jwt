import React from 'react'

const Box = ({ children, ...props }) => {
  // id, className, content
  return (
    <div {...props}>{children}</div>
  )
}

export default Box
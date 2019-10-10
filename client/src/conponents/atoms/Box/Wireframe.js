import React from 'react'

const Wireframe = (props) => {
  const {name, className} = props
  const style = {
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#eee',
    border: '1px solid #ccc'
  }

  return (
    <div className={`box_wireframe ${className}`}  style={style}>
      {name}
    </div>
  )
}

export default Wireframe
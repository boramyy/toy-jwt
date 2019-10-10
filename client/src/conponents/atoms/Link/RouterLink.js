import React from 'react'
import { Link } from 'react-router-dom'

const RouterLink = ({ url, content }) => {
  // console.dir(content)
  return <Link to={url}>{content}</Link>
}

export default RouterLink
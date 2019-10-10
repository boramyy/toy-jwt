import React, {useEffect} from 'react'
import { RouterLink } from '../../atoms/Link'

const NavList = (props) => {
  // console.log(data)
  useEffect(() => {
    console.log('여기여기 ! NavList')
  }, [])

  const data = [
    {url: '/login', content: 'login'},
    {url: '/menu2', content: 'menu2'},
    {url: '/menu3', content: 'menu3'},
  ]

  return (
    <nav className={props.className}>
      <ul>
        { data.map( ({ url, content }, index) => {
          return <li key={index}><RouterLink url={url} content={content} {...props} /></li>
        })}
      </ul>
    </nav>
  )
}

export default NavList
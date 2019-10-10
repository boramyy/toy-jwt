import React, {useState, useEffect} from 'react'
import { DefaultPageTemplate, LoginTemplate } from '../../conponents/templates'
import { LoginForm } from '../../conponents/organisms'
import { KEYCODE, API_URL } from '../../utils/utils'

const Login = () => {
  const [userId, setUserId] = useState('')
  const [userPw, setUserPw] = useState('')

  useEffect(() => {
    console.log('렌더링 노노해')
  }, [])

  const onChangeId = e => {
    console.log('여기는 ! onChangeId')
    setUserId(e.target.value)
  }
  
  const onChangePw = e => {
    console.log('여기는 ! onChangePw')
    setUserPw(e.target.value)
  }
  
  const onClickSignin = async e => {
    if (e.keyCode === KEYCODE.ENTER) {
      console.log('엔터 쳐써열 ~ ~ ~', userId, userPw)
      
      const data = {
        id: userId,
        pw: userPw
      }

      try {
        const response = await fetch(`${API_URL}/signin`, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        const token = await response.json()
        console.dir(token)
        
      } catch (error) {
        console.log(error.message)
      }
      // 여기서 로그인 정보 확인 요청
      // 맞으면 200 과 함께 jwt 토큰이 발행되어 날라올것
      // 틀리면 
    }
  }

  return (
    <>
      <DefaultPageTemplate
        content={
          <LoginTemplate content={
            <LoginForm
              userId={userId}
              userPw={userPw}
              onChangeId={onChangeId}
              onChangePw={onChangePw}
              onClickSignin={onClickSignin}
            />
         }/>
       }/>
    </>
  )
}

export default Login
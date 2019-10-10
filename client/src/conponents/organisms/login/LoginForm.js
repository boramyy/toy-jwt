import React from 'react'
import { InputText, Button } from '../../atoms/Form'

const LoginForm = ({ userId, userPw, onChangeId, onChangePw, onClickSignin }) => {
  return (
    <>
      <InputText value={userId} onChange={onChangeId} placeholder="id를 입력해주세요" />
      <InputText value={userPw} onChange={onChangePw} onKeyDown={onClickSignin} placeholder="pw를 입력해주세요" />
      <Button>로그인</Button>
    </>
  )
}

export default LoginForm
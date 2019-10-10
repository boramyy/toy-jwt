const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const cors = require('cors');

const PORT = 8080
const SECRET = 'bormay_secret_key'

const users = [
  {name: 'boramk', id: 'hoho', pw: '111', role: 'admin'},
  {name: 'lukas', id: 'haha', pw: '222', role: 'user'},
  {name: 'merlin', id: 'hehe', pw: '333', role: 'user'}
]

// api 응답 데이터
// {
//   success: true,

// }

// 로그인
// 1. 입력한 유저 id가 존재하는지
// 2. 입력한 유저 id와 pw가 일치하는지
  // 2-1. 일치하면 토큰 생성 - 그 유저의 정보중 토큰에 저장할 데이터를 뽑아서 
  // 2-2. 일치하지 않으면 에러
  // 

const setIat = () => Date.now()
const setExp = () => Date.now() + 10000 // 10초 추가

const isUser = inputId => users.find(user => inputId === user.id)
const isVaildId = id => id === user.id
const isVaildPw = pw => pw === user.pw
const isVaildLogin = ({ id = '', pw = '' }) => {
  const user = isUser(id)
  return isVaildId(user.id) && isVaildPw(user.pw)
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});


const tokenMaker = user => {
  console.dir(user)
  const tokenUserData = {
    "name": user.name,
    "id": user.id,
    "role": user.role,
    "iat": setIat(),
    "exp": setExp()
  }

  const accessToken = jwt.sign(tokenUserData, SECRET)
  delete tokenUserData.name, tokenUserData.id, tokenUserData.iat
  
  tokenUserData.exp = setExp() + 10000
  const refreshToken = jwt.sign(tokenUserData, SECRET)

  return {
    accessToken,
    refreshToken
  }
}

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World\n')
})

// app.get('/user/:id', (req, res) => {
//   res.setHeader('Content-Type', 'application/json');
//   const data = {
//     name: 'boramkim',
//     id: 'boram',
//     role: 'admin',
//     age: 27
//   }
//   return res.status(200).json(data)
// })

app.post('/signin', (req, res) => {
  // user 정보와 맞는지 비교할 곳
  console.log('여기는 사인인!!')
  console.dir(req.body)
  // console.dir(res)
  
  if (isVaildLogin(req.body)) {
    // 로그인 성공! 토큰 리턴
  } else {
    res.status(401)
  }

  // const data = {
  //   test: 'test1',
  //   test2: 'test2'
  // }
  // return res.status(200).json(data)
})

app.get('/test', (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const hoho = tokenMaker(user)

  // const hoho = jwt.sign({
  //   iat: Math.floor(Date.now() / 1000),
  //   exp: Math.floor(Date.now() / 1000) + (60 * 60),
  //   data: user
  // }, 'bormay_secret_key');

  res.status(200).json(hoho)
  // return hoho
})

app.listen(PORT,()=>{
  console.log(`hello, :D - sever listen ...PORT : ${PORT}`);
})


// jsonwebtoken
// jwt.verify(token, secretOrPublicKey, [options, callback]) -> 이 토큰이 유효한지 확인하는 함수
// jwt.sign(payload, secretOrPrivateKey, [options, callback]) 토큰 만드는?
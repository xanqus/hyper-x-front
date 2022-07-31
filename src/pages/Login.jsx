import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Login = () => {
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const onChangeIdInput = e => {
    setUserId(e.target.value)
  }
  const onChnagePasswordInput = e => {
    setUserPassword(e.target.value)
  }

  const doLogin = async e => {
    e.preventDefault()
    try {
      const data = await axios({
        method: 'post',
        url: 'http://localhost:8287/login',
        data: {
          username: userId,
          password: userPassword,
        },
      })

      if (data.headers.authorization) {
        localStorage.setItem('login-token', data.headers.authorization)
        alert('로그인 성공')
      }
    } catch (e) {
      console.log(e)
      alert('로그인 실패')
    }
  }
  // useEffect(() => {
  //   doLogin()
  // }, [])
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={doLogin}>
        <input
          type="text"
          placeholder="ID"
          value={userId}
          onChange={onChangeIdInput}
        />
        <input
          type="text"
          placeholder="PASSWORD"
          value={userPassword}
          onChange={onChnagePasswordInput}
        />
        <button type="submit">로그인</button>
      </form>
    </div>
  )
}

export default Login

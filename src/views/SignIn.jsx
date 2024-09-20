import { useState } from 'react'
import axios from 'axios'
const { VITE_API_URL } = import.meta.env
import { useNavigate } from 'react-router-dom'


function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${VITE_API_URL}/users/sign_in`, formData)
      .then(res => {
        console.log(res)
        setIsLogin(true)
        // 存 token 到 cookie
        const { token } = res.data
        console.log('token', token)
        document.cookie = `React_Token=${token}`
        navigate('/todo')
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }

  return (
    <>
      <h1>登入</h1>
      {isLogin ? '登入中' : ''}
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="請輸入Email"
          />
        </div>
        <div>
          <label htmlFor="password">密碼</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="請輸入密碼"
          />
        </div>
        <button disabled={isLogin} type="button" onClick={handleSubmit} >登入</button>
      </form>
    </>
  );
}

export default SignIn
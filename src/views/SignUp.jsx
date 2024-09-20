import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const { VITE_API_URL } = import.meta.env

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`${VITE_API_URL}/users/sign_up`, formData)
      .then(res => {
        console.log(res)
        navigate('/auth/signin')
      })
      .catch(err => {
        console.log(err.response.data.message)
      })
  }

  return (
    <>
      <h1>註冊</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="請輸入Email" />
        </div>
        <div>
          <label htmlFor="password">密碼</label>
          <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} placeholder="請輸入密碼" />
        </div>
        <div>
          <label htmlFor="nickname">名稱</label>
          <input type="text" name="nickname" id="nickname" value={formData.nickname} onChange={handleChange} placeholder="請輸入名稱" />
        </div>
        <button type="submit">註冊</button>
      </form>
    </>
  )
}

export default SignUp
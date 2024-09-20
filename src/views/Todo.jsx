import { useEffect } from 'react';
import axios from 'axios';
const { VITE_API_URL } = import.meta.env;
import { useNavigate } from 'react-router-dom';

function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    // 取得 token
    const tokenValue =
      document.cookie
        .split('; ')
        .find((row) => row.startsWith('React_Token='))
        ?.split('=')[1] || '';

    // axios 預設值
    axios.defaults.headers.common['Authorization'] = tokenValue;

    // 檢查 token 是否有效
    axios
      .get(`${VITE_API_URL}/users/checkout`)
      .then((res) => {
        console.log('token_伺服器回應', res);
      })
      .catch((err) => {
        console.log('token_伺服器錯誤', err);
        navigate('/auth/signin');
      });
  }, [navigate]);

  return (
    <>
      <h1>待辦事項</h1>
    </>
  );
}

export default Todo;

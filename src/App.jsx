import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Auth from './views/Auth'
import SignIn from './views/Signin'
import SignUp from './views/SignUp'
import Todo from './views/Todo'
import NotFound from './views/NotFound'
function App() {

  const navLinkStyle = ({isActive}) => ({color: isActive ? 'red' : null})

  return (
    <>
      <nav>導覽列
        <NavLink to="/" style={navLinkStyle}>首頁</NavLink>
        <NavLink to="/about" style={navLinkStyle}>關於</NavLink> |
        <NavLink to="/auth/signup" style={navLinkStyle}>註冊</NavLink> |
        <NavLink to="/auth/signin" style={navLinkStyle}>登入</NavLink> |
        <NavLink to="/todo" style={navLinkStyle}>待辦事項</NavLink>
      </nav>
      <Routes>
        {/* 路由表 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        {/* /auth 共用版型 */}
        {/* /auth/sign_in */}
        {/* /auth/sign_up */}

        <Route path="/auth" element={<Auth />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App

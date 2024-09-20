import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'




function App() {

  return (
    <>
      <nav>導覽列
        <NavLink to="/">首頁</NavLink>
        <NavLink to="/about">關於</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

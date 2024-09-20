import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <>
    <h1>共用元件、共用區塊</h1>
    <Outlet />
    </>
  );
}

export default Auth;

import './App.css'
import ForgotPassword from './pages/loginPage/forgotPassword/ForgotPassword'
import Login from './pages/loginPage/Login'
import Register from './pages/registerPage/Register'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>

      {/* <Login/> */}
      {/* <Register/> */}
    </>
  )
}

export default App

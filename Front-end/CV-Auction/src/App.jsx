import './App.css'
import Dashboard from './pages/anupPages/Dashboard'
import Frontpage from './pages/anupPages/Frontpage'
import VehiclesPage from './pages/anupPages/VehiclesPage'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Login from './pages/loginPage/Login'
import Register from './pages/registerPage/Register'
import AdminDashboard from "./pages/tejasPages/component/AdminDashboard"
import AddVehicle from "./pages/tejasPages/component/AddVehicle"
import Card from "./pages/tejasPages/component/Card"
import Auction from "./pages/tejasPages/component/Auction"
import Logout from "./pages/tejasPages/component/Logout"

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Frontpage/>}/>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/vehicalpage" element={<VehiclesPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
          <Route path="/allvehicles" element={<Card />} />
          <Route path="/auction" element={<Auction />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>

      {/* <Login/> */}
      {/* <Register/> */}
    </>
  )
}

export default App

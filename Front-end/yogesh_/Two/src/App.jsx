import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import ModalPage from './Model/ModalPage';
import './app.css'
import HomePageTwo from './components/HomePageTwo';
import Cart from './Cart/Cart';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Cart/> } />
        {/* <Route path='/' element = {<HomePageTwo/>} /> */}
        {/* <Route path="/" element={<HomePage />} />
         <Route path="/modal" element={<ModalPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;

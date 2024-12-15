import React from 'react';
import './App.css';
import Modal from './modal/Modal';
import Layout from './cardLayout/Layout';
import TestMoreInfo from './modal/TestMoreInfo';

const App = () => {
  return (
    <div>
      <TestMoreInfo/>
      <Layout/>
    </div>
  );
}

export default App;

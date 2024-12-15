import React, { useState } from 'react';
import Modal from './Modal';

const TestMoreInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const [carData, setCarData] = useState(null);

  const car = {
    model: 'Toyota 91',
    id: '12',
    price: '915000',
    state: 'Delhi',
    startDate: '2024-06-15',
  };

  const openModal = () => {
    setCarData(car);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={openModal}>More</button>
      <Modal showModal={showModal} closeModal={closeModal} car={carData} />
    </div>
  );
};

export default TestMoreInfo;

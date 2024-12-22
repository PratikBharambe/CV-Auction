import React, { useState } from 'react';
import ModalPageTwo from '../Model/ModalPageTwo'; // Import ModalPageTwo

const HomePageTwo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="app-container">


      <div className={`main-content ${isModalOpen ? 'blur-background' : ''}`}>
        <div className="container text-center mt-5">
          <h1>Welcome to the Main Page</h1>
          <p>Click the button to open the modal.</p>
          <button className="btn btn-primary mt-3" onClick={toggleModal}>
            Open Modal
          </button>
        </div>
      </div>

      {isModalOpen && <ModalPageTwo closeModal={toggleModal} />}
    </div>
  );
};

export default HomePageTwo;

import React, { useRef, useEffect } from 'react';
import './modal2.css'; 

const ModalPageTwo = ({ closeModal }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();  
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <h2>Modal Page</h2>
        <p>This is a modal. Click outside to close it.</p>
        <button className="btn btn-secondary" onClick={closeModal}>
          Close Modal
        </button>
      </div>
    </div>
  );
};

export default ModalPageTwo;

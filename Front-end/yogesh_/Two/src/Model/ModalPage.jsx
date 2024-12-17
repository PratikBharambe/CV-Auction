import React, { useRef, useEffect } from 'react';
import './modal.css';
import { useNavigate } from 'react-router-dom';

const ModalPage = () => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      navigate('/');
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
        <p>This is a modal. Click outside to go back to the home page.</p>
      </div>
    </div>
  );
};

export default ModalPage;

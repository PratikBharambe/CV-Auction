import React, { useState } from 'react';
import image1 from '../assets/car1.jpg';
import './Card.css';

const Card = () => {
  const [model, setModel] = useState('Maruti Suzuki Dzire');
  const [id, setId] = useState('MH12-1009-12');
  const [price, setPrice] = useState(1000000);
  const [selected, setSelected] = useState(false);
  const [state, setState] = useState('Maharashtra');
  const [startDate, setStartDate] = useState('2024-12-05');

  function showInfoHandler(identity) {
    window.alert(identity);
  }

  return (
    <div className="card shadow-lg border-0 rounded" style={{ width: '20rem', border: '2px solid #007bff', borderRadius: '12px' }}>
      <img
        src={image1}
        className="card-img-top rounded-top"
        alt="Car"
        style={{
          height: '180px',
          objectFit: 'cover',
          width: '100%',
          marginTop: '13px',
        }}
      />
      <div className="card-body p-4">
        <h5 className="card-title fw-bold">{model}</h5>
        <p className="card-text mb-1">
          <strong>Auction ID:</strong> {id}
        </p>
        <p className="card-text mb-1">
          <strong>Base Price:</strong> {price}₹
        </p>
        <p className="card-text mb-1">
          <strong>State:</strong> {state}
        </p>
        <p className="card-text">
          <strong>Start Date:</strong> {startDate}
        </p>
        <div className="d-flex justify-content-between mt-4">
          <button
            className={`btn ${selected ? 'btn-success' : 'btn-outline-danger'}`}
            style={{ width: '120px' }}
            onClick={() => setSelected(!selected)}
          >
            {selected ? 'Added' : 'Add'}
          </button>
          <button
            className="btn btn-primary"
            style={{ width: '120px' }}
            onClick={() => showInfoHandler(id)}
          >
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

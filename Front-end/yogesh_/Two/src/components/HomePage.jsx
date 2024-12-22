import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Press Button</h1>
      <Link to="/modal">
        <button className="btn btn-primary mt-3">Open Modal</button>
      </Link>
    </div>
  );
};

export default HomePage;
    
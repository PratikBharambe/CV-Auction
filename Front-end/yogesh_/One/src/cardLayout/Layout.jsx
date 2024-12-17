import React from 'react';
import Card from '../card/Card';

const Layout = () => {
  const cards = Array(20).fill(null); 

  return (
    <div className="card-container">
      {cards.map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default Layout;

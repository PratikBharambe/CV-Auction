import React from 'react';
import Card from '.Card';

const Layout = () => {
  const cards = Array(20).fill(null); 

  return React.createElement(
    'div',
    { className: 'card-container' },
    cards.map((_, index) =>
      React.createElement(Card, { key: index })
    )
  );
};

export default Layout;

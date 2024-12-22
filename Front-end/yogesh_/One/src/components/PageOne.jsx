import React, { useState } from 'react';
import './pageone.css';
import image1 from '../assets/car1.jpg';

const PageOne = () => {
  const [model,setModel] = useState('Maruti Suzuki Dzire');
  const [id, setId] = useState("MH12-1009-12");
  const [price, setPrice] = useState(1000000);
  const [selected, setSelected] = useState(false);
  const [state,setState] = useState('Maharashtra');
  const [startDate, setStartDate] = useState('2024-12-05');  

  function showInfoHandler(identity){
      window.alert(identity);
  }


  return (
    <div>
      <div className="containor">
        <div className="card">
          <div className="img">
            <img src={image1} alt="Car" />
          </div>
          <div className="info">
            <h3>Car Model : {model}</h3>
            <h3>Auction Id : {id}</h3>
            <h3>Base Price : {price}&#8377;</h3>
            <h3>State : {state}</h3>
            <h3>
              Start date: <output>{startDate}</output>
            </h3>
          </div>
          <div className="btns">
            <button id='cart'>&#x2665; {selected}</button>
            <button onClick={() => showInfoHandler(id)}>More</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
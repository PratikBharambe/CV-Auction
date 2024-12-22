import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import './moreInfo.css';

const MoreInfo = () => {
  const [carData, setCarData] = useState({
    auctionDate: '06-12-2024',
    carBrand: 'Toyota',
    model: 'Yamaha',
    number: 'MH421919',
    state: 'Maharashtra',
    tyreCount: 4,
    fuelType: 'Disel',
    kmDriven: '50,000 km',
    ownershipCount: 2,
    insurance: 'Active',
    rto: 'ABCD-123',
    engine: '1.8L 4-Cylinder',
    mileage: '15 km/l',
    transmission: 'Automatic',
    power: '140 HP',
    seatingCapacity: 5,
    ac: 'Yes',
    tankCapacity: '50 Liters',
  });

  return (
    <div>
      <div className="car-Info">

        <div className="img-slider">
          <ImageSlider />
        </div>

        <div className="info">
          <div className="car-detail">
            <strong>Auction Date:</strong> {carData.auctionDate}
          </div>
          <div className="car-detail">
            <strong>Car Brand:</strong> {carData.carBrand}
          </div>
          <div className="car-detail">
            <strong>Model:</strong> {carData.model}
          </div>
          <div className="car-detail">
            <strong>Number:</strong> {carData.number}
          </div>
          <div className="car-detail">
            <strong>State:</strong> {carData.state}
          </div>
          <div className="car-detail">
            <strong>Tyre Count:</strong> {carData.tyreCount}
          </div>
          <div className="car-detail">
            <strong>Fuel Type:</strong> {carData.fuelType}
          </div>
          <div className="car-detail">
            <strong>KM Driven:</strong> {carData.kmDriven}
          </div>
          <div className="car-detail">
            <strong>Ownership Count:</strong> {carData.ownershipCount}
          </div>
          <div className="car-detail">
            <strong>Insurance:</strong> {carData.insurance}
          </div>
          <div className="car-detail">
            <strong>RTO:</strong> {carData.rto}
          </div>
          <div className="car-detail">
            <strong>Engine:</strong> {carData.engine}
          </div>
          <div className="car-detail">
            <strong>Mileage:</strong> {carData.mileage}
          </div>
          <div className="car-detail">
            <strong>Transmission:</strong> {carData.transmission}
          </div>
          <div className="car-detail">
            <strong>Power:</strong> {carData.power}
          </div>
          <div className="car-detail">
            <strong>Seating Capacity:</strong> {carData.seatingCapacity}
          </div>
          <div className="car-detail">
            <strong>AC:</strong> {carData.ac}
          </div>
          <div className="car-detail">
            <strong>Tank Capacity:</strong> {carData.tankCapacity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;

import React from 'react';

const Card = ({
  vehicle,
  activeButtonIndices,
  onButtonClick,
  basePrice,
  onBasePriceChange,
  onAddToAuction,
  onDeleteVehicle,
  onImageClick
}) => {
  const galleryImages = vehicle.images || [];
  
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card" style={{ width: '100%' }}>
        <img
          src={galleryImages[0] || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt={vehicle.modelName}
          loading="lazy"
          onClick={onImageClick}
        />
        <div className="card-body">
          <h6 className="card-title">
            {vehicle.modelName} <span className="text-primary">{vehicle.regNo}</span>
          </h6>
          <hr />
          <div className="d-flex flex-wrap">
            {["Gallery", "Vehicle Details", "Evaluation Report"].map((label, index) => (
              <button
                key={index}
                type="button"
                className={`btn btn-sm me-2 mt-2 ${activeButtonIndices[vehicle.id] === index ? "btn-primary" : "btn-light"}`}
                onClick={() => onButtonClick(vehicle.id, index)}
              >
                {label}
              </button>
            ))}
          </div>
          
          <div className="mt-1">
            <label htmlFor={`baseprice-${vehicle.id}`} className="form-label">
              Base Price
            </label>
            <input
              type="number"
              id={`baseprice-${vehicle.id}`}
              className="form-control"
              placeholder="Base Price"
              value={basePrice || ""}
              onChange={(e) => onBasePriceChange(vehicle.id, e)}
            />
          </div>

          <div className="btn-group" role="group" aria-label="Basic outlined example">
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => onAddToAuction(vehicle.id)}
            >
              Add To Auction
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDeleteVehicle(vehicle.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

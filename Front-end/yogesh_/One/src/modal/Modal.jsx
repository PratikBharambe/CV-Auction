import './modal.css';

const Modal = ({ showModal, closeModal, car }) => {

  console.log('Modal is showing with car data:', car);

  if (!showModal) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Car Details</h2>

        {car ? (
          <>
            <p><strong>Model:</strong> {car.model}</p>
            <p><strong>Auction ID:</strong> {car.id}</p>
            <p><strong>Base Price:</strong> {car.price}₹</p>
            <p><strong>State:</strong> {car.state}</p>
            <p><strong>Start Date:</strong> {car.startDate}</p>
          </>
        ) : (
          <p>Loading car details...</p>
        )}
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

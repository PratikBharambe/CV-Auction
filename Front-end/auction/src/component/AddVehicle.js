import React, { useState } from 'react';
import MainNav from './MainNav'; // Import the MainNav component
import './AddVehicle.css'; // Add custom styles for AddVehicle
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddVehicle = () => {
    const [formData, setFormData] = useState({
        carNumber: '',
        registrationYear: '',
        brandName: '',
        modelName: '',
        fuelType: 'petrol',
        insurance: '',
        kmDriven: '',
        rtoPassing: '',
        ownership: 'first',
        manufacturingYear: '',
        price: '',
        images: [], // Change to an array for multiple images
        pdf: null // For the evaluation report PDF
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        
        if (name === 'images') {
            setFormData({
                ...formData,
                images: Array.from(files) // Convert file list to an array
            });
        } else {
            setFormData({
                ...formData,
                [name]: files[0] // For single file (PDF)
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <div>
            <MainNav /> {/* Main navigation */}

            <main className="container mt-5">
                <section className="add-vehicle-form">
                    <h2 className="text-center">Enter Vehicle Details</h2>
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="car-number" className="form-label">Car Number:</label>
                            <input
                                type="text"
                                id="car-number"
                                name="carNumber"
                                className="form-control"
                                value={formData.carNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="registration-year" className="form-label">Registration Year:</label>
                            <input
                                type="number"
                                id="registration-year"
                                name="registrationYear"
                                className="form-control"
                                value={formData.registrationYear}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="brand-name" className="form-label">Brand Name:</label>
                            <input
                                type="text"
                                id="brand-name"
                                name="brandName"
                                className="form-control"
                                value={formData.brandName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="model-name" className="form-label">Model Name:</label>
                            <input
                                type="text"
                                id="model-name"
                                name="modelName"
                                className="form-control"
                                value={formData.modelName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="fuel-type" className="form-label">Fuel Type:</label>
                            <select
                                id="fuel-type"
                                name="fuelType"
                                className="form-select"
                                value={formData.fuelType}
                                onChange={handleChange}
                                required
                            >
                                <option value="petrol">Petrol</option>
                                <option value="diesel">Diesel</option>
                                <option value="electric">Electric</option>
                                <option value="hybrid">Hybrid</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="insurance" className="form-label">Insurance:</label>
                            <input
                                type="text"
                                id="insurance"
                                name="insurance"
                                className="form-control"
                                value={formData.insurance}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="km-driven" className="form-label">KM Driven:</label>
                            <input
                                type="number"
                                id="km-driven"
                                name="kmDriven"
                                className="form-control"
                                value={formData.kmDriven}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="rto-passing" className="form-label">RTO Passing:</label>
                            <input
                                type="text"
                                id="rto-passing"
                                name="rtoPassing"
                                className="form-control"
                                value={formData.rtoPassing}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="ownership" className="form-label">Ownership:</label>
                            <select
                                id="ownership"
                                name="ownership"
                                className="form-select"
                                value={formData.ownership}
                                onChange={handleChange}
                                required
                            >
                                <option value="first">First</option>
                                <option value="second">Second</option>
                                <option value="third">Third</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="manufacturing-year" className="form-label">Year of Manufacturing:</label>
                            <input
                                type="number"
                                id="manufacturing-year"
                                name="manufacturingYear"
                                className="form-control"
                                value={formData.manufacturingYear}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="price" className="form-label">Price:</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="form-control"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="images" className="form-label">Upload Vehicle Images:</label>
                            <input
                                type="file"
                                id="images"
                                name="images"
                                accept="image/*"
                                className="form-control"
                                multiple // Allows multiple file selection
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="pdf" className="form-label">Evaluation Report PDF:</label>
                            <input
                                type="file"
                                id="pdf"
                                name="pdf"
                                accept=".pdf" // This ensures only PDF files can be selected
                                className="form-control"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        {/* Preview selected images */}
                        {formData.images.length > 0 && (
                            <div className="col-12">
                                <h5>Selected Images Preview:</h5>
                                <div className="d-flex flex-wrap">
                                    {formData.images.map((image, index) => (
                                        <div key={index} className="m-2">
                                            <img
                                                src={URL.createObjectURL(image)} // Display preview of the image
                                                alt={`vehicle-img-${index}`}
                                                className="img-thumbnail"
                                                width="100"
                                                height="100"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">Submit Vehicle</button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <Link to="/" className="btn btn-primary btn-lg">
                            Go to Admin Dashboard
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="text-center py-4">
                <p>&copy; 2025 Commercial Vehicle Auction. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AddVehicle;

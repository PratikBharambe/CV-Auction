import React, { useState } from 'react';
import MainNav from './MainNav'; // Import the MainNav component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const AddVehicle = () => {
    const [formData, setFormData] = useState({
        vehicleno: '',
        carBrand: '',
        state: '',
        registrationYear: '',
        model: '',
        fuel: '',
        insurance: '',
        kmDriven: '',
        rtoPassing: '',
        ownership: '',
        engineDisplacement: '',
        yearOfManufacture: '',
        price: '',
        ownerId: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
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
                    <h2 className="text-center mb-4">Enter Vehicle Details</h2>
                    <form onSubmit={handleSubmit} className="row g-4">
                        <div className="col-md-6">
                            <label htmlFor="vehicleno" className="form-label">Vehicle Number:</label>
                            <input
                                type="text"
                                id="vehicleno"
                                name="vehicleno"
                                className="form-control border border-2"
                                value={formData.vehicleno}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="car-brand" className="form-label">Car Brand:</label>
                            <input
                                type="text"
                                id="car-brand"
                                name="carBrand"
                                className="form-control border border-2"
                                value={formData.carBrand}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="state" className="form-label">State:</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                className="form-control border border-2"
                                value={formData.state}
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
                                className="form-control border border-2"
                                value={formData.registrationYear}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="model" className="form-label">Model:</label>
                            <input
                                type="text"
                                id="model"
                                name="model"
                                className="form-control border border-2"
                                value={formData.model}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="fuel" className="form-label">Fuel Type:</label>
                            <select
                                id="fuel"
                                name="fuel"
                                className="form-select border border-2"
                                value={formData.fuel}
                                onChange={handleChange}
                            >
                                <option value="">Select Fuel Type</option>
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
                                className="form-control border border-2"
                                value={formData.insurance}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="km-driven" className="form-label">KM Driven:</label>
                            <input
                                type="number"
                                id="km-driven"
                                name="kmDriven"
                                className="form-control border border-2"
                                value={formData.kmDriven}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="rto-passing" className="form-label">RTO Passing:</label>
                            <input
                                type="text"
                                id="rto-passing"
                                name="rtoPassing"
                                className="form-control border border-2"
                                value={formData.rtoPassing}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="ownership" className="form-label">Ownership:</label>
                            <select
                                id="ownership"
                                name="ownership"
                                className="form-select border border-2"
                                value={formData.ownership}
                                onChange={handleChange}
                            >
                                <option value="">Select Ownership</option>
                                <option value="first">First</option>
                                <option value="second">Second</option>
                                <option value="third">Third</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="engine-displacement" className="form-label">Engine Displacement:</label>
                            <input
                                type="number"
                                id="engine-displacement"
                                name="engineDisplacement"
                                className="form-control border border-2"
                                value={formData.engineDisplacement}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="year-of-manufacture" className="form-label">Year of Manufacture:</label>
                            <input
                                type="number"
                                id="year-of-manufacture"
                                name="yearOfManufacture"
                                className="form-control border border-2"
                                value={formData.yearOfManufacture}
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
                                className="form-control border border-2"
                                value={formData.price}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="owner-id" className="form-label">Owner ID:</label>
                            <input
                                type="number"
                                id="owner-id"
                                name="ownerId"
                                className="form-control border border-2"
                                value={formData.ownerId}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="image" className="form-label">Upload Vehicle Image:</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                accept="image/*"
                                className="form-control border border-2"
                                onChange={handleFileChange}
                            />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">Submit Vehicle</button>
                        </div>
                    </form>
                    <a href="/AdminDashboard" className="btn btn-secondary mt-3">Back to Admin Dashboard</a>
                </section>
            </main>

            <footer className="text-center py-4">
                <p>&copy; 2023 Car Selling Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AddVehicle;

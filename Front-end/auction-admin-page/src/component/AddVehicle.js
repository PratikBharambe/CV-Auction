import React, { useState } from 'react';
import MainNav from './MainNav'; // Import the MainNav component
import './AddVehicle.css'; // Add custom styles for AddVehicle

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
        image: null
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

            <main className="add-vehicle-container">
                <section className="add-vehicle-form">
                    <h2>Enter Vehicle Details</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="car-number">Car Number:</label>
                        <input
                            type="text"
                            id="car-number"
                            name="carNumber"
                            value={formData.carNumber}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="registration-year">Registration Year:</label>
                        <input
                            type="number"
                            id="registration-year"
                            name="registrationYear"
                            value={formData.registrationYear}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="brand-name">Brand Name:</label>
                        <input
                            type="text"
                            id="brand-name"
                            name="brandName"
                            value={formData.brandName}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="model-name">Model Name:</label>
                        <input
                            type="text"
                            id="model-name"
                            name="modelName"
                            value={formData.modelName}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="fuel-type">Fuel Type:</label>
                        <select
                            id="fuel-type"
                            name="fuelType"
                            value={formData.fuelType}
                            onChange={handleChange}
                            required
                        >
                            <option value="petrol">Petrol</option>
                            <option value="diesel">Diesel</option>
                            <option value="electric">Electric</option>
                            <option value="hybrid">Hybrid</option>
                        </select>

                        <label htmlFor="insurance">Insurance:</label>
                        <input
                            type="text"
                            id="insurance"
                            name="insurance"
                            value={formData.insurance}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="km-driven">KM Driven:</label>
                        <input
                            type="number"
                            id="km-driven"
                            name="kmDriven"
                            value={formData.kmDriven}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="rto-passing">RTO Passing:</label>
                        <input
                            type="text"
                            id="rto-passing"
                            name="rtoPassing"
                            value={formData.rtoPassing}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="ownership">Ownership:</label>
                        <select
                            id="ownership"
                            name="ownership"
                            value={formData.ownership}
                            onChange={handleChange}
                            required
                        >
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>
                        </select>

                        <label htmlFor="manufacturing-year">Year of Manufacturing:</label>
                        <input
                            type="number"
                            id="manufacturing-year"
                            name="manufacturingYear"
                            value={formData.manufacturingYear}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="price">Price:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="image">Upload Vehicle Image:</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />

                        <button type="submit" className="submit-btn">Submit Vehicle</button>
                    </form>
                    <a href="/dashboard" className="back-btn">Back to Admin Dashboard</a>
                </section>
            </main>

            <footer>
                <p>&copy; 2023 Car Selling Website. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default AddVehicle;

import React, { useState } from 'react';
import axios from 'axios'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 

const AddVehicle = () => {

    const URL = 'https://localhost:44358/api/vehicles';
    // const s3URL = ``;  // Comment out S3 URL for testing

    const [formData, setFormData] = useState({
        registrationNumber: '',
        registrationYear: '',
        manufacturereName: '',
        modelName: '',
        fuelType: 'petrol',
        insurance: '',
        kmDriven: '',
        rtoPassing: '',
        yearofregistration: '',
        manufacturingYear: '',
        parkingLocation: '',
        images: [], 
        pdf: null 
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
                images: Array.from(files) 
            });
        } else {
            setFormData({
                ...formData,
                [name]: files[0] 
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        data.append('regNo', formData.registrationNumber);
        data.append('regYear', formData.registrationYear);
        data.append('manufacName', formData.manufacturereName);
        data.append('modelName', formData.modelName);
        data.append('fuelType', formData.fuelType);
        data.append('insurance', formData.insurance);
        data.append('kmDriven', formData.kmDriven);
        data.append('rtoPassing', formData.rtoPassing);
        data.append('yearOfManufacturing', formData.yearofregistration);
        data.append('manufacturingYear', formData.manufacturingYear);
        data.append('parkingLocation', formData.parkingLocation);

        // For testing, replace S3 upload with hardcoded URLs
        const imageUrls = [];
        for (let image of formData.images) {
            const formDataImage = new FormData();
            formDataImage.append('file', image);
            formDataImage.append('upload_preset', 'your_upload_preset'); // For cloud storage (e.g., Cloudinary)

            try {
                const imageResponse = await axios.post('your_image_upload_endpoint', formDataImage, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                imageUrls.push(imageResponse.data.secure_url); // Push the URL returned from S3 or Cloudinary
            } catch (err) {
                console.error("Error uploading image:", err);
            }
        }
        
        data.append('images', imageUrls.join(','));

        if (formData.pdf) {
            const formDataPdf = new FormData();
            formDataPdf.append('file', formData.pdf);
            formDataPdf.append('upload_preset', 'your_upload_preset_for_pdf'); 

            try {
                const pdfResponse = await axios.post('your_pdf_upload_endpoint', formDataPdf, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                data.append('pdf', pdfResponse.data.secure_url); 
            } catch (err) {
                console.error("Error uploading PDF:", err);
            }
        }

        // Make the POST request using Axios
        try {
            const response = await axios.post('your_api_endpoint_here', data);
            console.log('Form data successfully submitted:', response);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    return (
        <div>
            <main className="container mt-5">
                <section className="add-vehicle-form">
                    <h2 className="text-center">Enter Vehicle Details</h2><br />
                    <form onSubmit={handleSubmit} className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="car-number" className="form-label">Register Number:</label>
                            <input
                                type="text"
                                id="car-number"
                                name="registrationNumber"
                                className="form-control"
                                value={formData.registrationNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="brand-name" className="form-label">Manufacturer Name:</label>
                            <input
                                type="text"
                                id="brand-name"
                                name="manufacturereName"
                                className="form-control"
                                value={formData.manufacturereName}
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
                                <option value="electric">CNG</option>
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
                            <label htmlFor="year-of-registration" className="form-label">Year of Registration:</label>
                            <input
                                type="number"
                                id="year-of-registration"
                                name="yearofregistration"
                                className="form-control"
                                value={formData.yearofregistration}
                                onChange={handleChange}
                                required
                            />
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
                            <label htmlFor="parking-location" className="form-label">Parking Location:</label>
                            <input
                                type="text"
                                id="parking-location"
                                name="parkingLocation"
                                className="form-control"
                                value={formData.parkingLocation}
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
                                multiple
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
                                accept=".pdf"
                                className="form-control"
                                onChange={handleFileChange}
                                required
                            />
                        </div>

                        {formData.images.length > 0 && (
                        <div className="col-12">
                            <h5>Selected Images Preview:</h5>
        <div className="d-flex flex-wrap">
            {formData.images.map((image, index) => {
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onloadend = () => {
                    setFormData(prevState => ({
                        ...prevState,
                        imagePreviews: prevState.imagePreviews ? [...prevState.imagePreviews, reader.result] : [reader.result]
                    }));
                };
                return (
                    <div key={index} className="m-2 text-center">
                        <div className="image-container">
                            <img
                                src={formData.imagePreviews[index]}
                                alt={`vehicle-img-${index}`}
                                className="img-thumbnail"
                                width="100"
                                height="100"
                            />
                            <span className="plus-sign">+</span>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
)}


                        <div className="col-12 mt-3 mb-3">
                            <button type="submit" className="btn btn-primary w-100">Submit Vehicle</button>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default AddVehicle;

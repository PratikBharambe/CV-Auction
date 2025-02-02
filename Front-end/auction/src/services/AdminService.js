import axios from "axios";

// Define API paths
const adminPath = "http://localhost:30699/api/Admins";
const vehiclePath = "http://localhost:30699/api/Vehicles";
const auctionPath = "http://localhost:30699/api/Auctions";  
const eventPath = "http://localhost:30699/api/Events"; // New path for events
const approvalsPath = "http://localhost:30699/api/Approvals"; // Assuming there's an endpoint for approvals
const apiBase = "http://localhost:30699/api";


class AdminService {

  // Method to add an admin
  AddAdmin = (data) => {
    return axios.post(adminPath, data);
  };

  // Method to add a vehicle
  AddVehicle = (data) => {
    const formData = new FormData();

    formData.append('registrationNumber', data.registrationNumber);
    formData.append('registrationYear', data.registrationYear);
    formData.append('manufacturereName', data.manufacturereName);
    formData.append('modelName', data.modelName);
    formData.append('fuelType', data.fuelType);
    formData.append('insurance', data.insurance);
    formData.append('kmDriven', data.kmDriven);
    formData.append('rtoPassing', data.rtoPassing);
    formData.append('yearofregistration', data.yearofregistration);
    formData.append('manufacturingYear', data.manufacturingYear);
    formData.append('parkingLocation', data.parkingLocation);

    data.images.forEach(image => {
      formData.append('images', image);
    });

    if (data.pdf) {
      formData.append('pdf', data.pdf);
    }

    return axios.post(vehiclePath, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Important for file uploads
      },
    });
  };

  // Method to update a vehicle's base price and event ID
  UpdateVehicleDetails = (vehicleId, basePrice, eventId) => {
    return axios.put(`${vehiclePath}/${vehicleId}`, {
      basePrice, 
      eventId,
    });
  };

  // Method to add a vehicle to auction
  AddVehicleToAuction = (vehicleId) => {
    return axios.post(`${auctionPath}/add`, { vehicleId });
  };

  // Method to add a new event
  AddEvent = (newEvent) => {
    return axios.post(eventPath, newEvent)  // Posting new event data to backend
      .then((response) => {
        console.log("Event added:", response.data);
        return response.data; // Return the new event data from the server if needed
      })
      .catch((error) => {
        console.error("Error adding event:", error);
        throw error;  // Propagate error to handle it on the component level
      });
  };

  // Fetch all auction events
  getAllAuctions = () => {
    return axios.get(auctionPath); // Fetch all auction events from the backend
  };

  // Start an auction event
  startAuction = (auctionId) => {
    return axios.put(`${auctionPath}/${auctionId}/start`); // Mark the auction as started
  };

  // Delete an auction event
  deleteAuction = (auctionId) => {
    return axios.delete(`${auctionPath}/${auctionId}`); // Delete the auction event by ID
  };

  // Get all users
  getAllUsers = () => {
    return axios.get(`${apiBase}/users`); // Assuming the API endpoint to get users is /users
  };

  // Delete a user by ID
  deleteUser = (userId) => {
    return axios.delete(`${apiBase}/users/${userId}`); // Assuming the API endpoint to delete users is /users/{id}
  };

  getAllApprovals = () => {
    return axios.get(approvalsPath);  // Assuming the backend returns all approvals
  };

  // Approve a vehicle (or item) for auction
  approveItem = (approvalId) => {
    return axios.put(`${approvalsPath}/${approvalId}/approve`);  // Assuming PUT request to approve
  };

  // Deny a vehicle (or item) for auction
  denyItem = (approvalId) => {
    return axios.put(`${approvalsPath}/${approvalId}/deny`);  // Assuming PUT request to deny
  };

  // Delete an approval (item)
  deleteApproval = (approvalId) => {
    return axios.delete(`${approvalsPath}/${approvalId}`);  // Assuming DELETE request to delete approval
  };
}

export default new AdminService();

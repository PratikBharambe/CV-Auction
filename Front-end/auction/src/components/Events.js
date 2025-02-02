import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

// AddEventForm Component
const AddEventForm = ({ addEvent, toggleForm }) => {
  const [eventName, setEventName] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [vehicles, setVehicles] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEvent = {
      eventName,
      vehicleType,
      startDate,
      endDate,
      location,
      vehicles: parseInt(vehicles),
    };

    // Call the addEvent function passed from parent
    addEvent(newEvent);

    // Clear form
    setEventName("");
    setVehicleType("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    setVehicles("");

    // Close the form after submission
    toggleForm(false);
  };

  return (
    <div className="mt-3">
      <h4>Add New Event</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Event Name</label>
          <input
            type="text"
            className="form-control"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Vehicle Type</label>
          <input
            type="text"
            className="form-control"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Start Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>End Date & Time</label>
          <input
            type="datetime-local"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Number of Vehicles</label>
          <input
            type="number"
            className="form-control"
            value={vehicles}
            onChange={(e) => setVehicles(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Event</button>
      </form>
    </div>
  );
};

// Main Events Component
const Events = () => {
  const [serverTime, setServerTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("live");
  const [liveEventsData, setLiveEventsData] = useState([]);
  const [upcomingEventsData, setUpcomingEventsData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setServerTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBidNow = (event) => alert(`Host Event Clicked for: ${event.eventName}`);
  const handleOpenEvent = (event) => alert(`Host Event Clicked for: ${event.eventName}`);

  const addEvent = (newEvent) => {
    // Add the event to either live or upcoming based on the current date
    const eventStartDate = new Date(newEvent.startDate);
    const eventEndDate = new Date(newEvent.endDate);

    if (eventStartDate <= new Date() && eventEndDate >= new Date()) {
      setLiveEventsData((prevEvents) => [...prevEvents, newEvent]);
    } else if (eventStartDate > new Date()) {
      setUpcomingEventsData((prevEvents) => [...prevEvents, newEvent]);
    }

    // Send new event to backend using Axios
    axios.post("/api/events", newEvent)
      .then((response) => {
        console.log("Event added to database:", response.data);
      })
      .catch((error) => {
        console.error("Error adding event:", error);
      });
  };

  const renderEventTable = (events, isHostButton = false, isOpenButton = false) => (
    <table className="table table-bordered text-center table-hover">
      <thead className="table-primary">
        <tr>
          <th>Event ID</th>
          <th>Event Name</th>
          <th>Vehicle Type</th>
          <th>Start Date & Time</th>
          <th>End Date & Time</th>
          <th>Location</th>
          <th>No. of Vehicles</th>
          {isHostButton && <th>Action</th>}
          {isOpenButton && <th>Open</th>}
        </tr>
      </thead>
      <tbody>
        {events.map((event) => (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.eventName}</td>
            <td>{event.vehicleType}</td>
            <td>{event.startDate}</td>
            <td>{event.endDate}</td>
            <td>{event.location}</td>
            <td>{event.vehicles}</td>
            {isHostButton && (
              <td>
                <button className="btn btn-primary btn-sm" onClick={() => handleBidNow(event)}>Host Event</button>
              </td>
            )}
            {isOpenButton && (
              <td>
                <button className="btn btn-success btn-sm" onClick={() => handleOpenEvent(event)}>Open Event</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 px-4 py-3">
      {/* Tabs */}
      <div className="mt-3 d-flex">
        <button
          className={`btn me-2 ${activeTab === "live" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setActiveTab("live")}
        >
          LIVE EVENTS ({liveEventsData.length})
        </button>
        <button
          className={`btn me-2 ${activeTab === "upcoming" ? "btn-outline-dark" : "btn-dark"}`}
          onClick={() => setActiveTab("upcoming")}
        >
          UPCOMING EVENTS ({upcomingEventsData.length})
        </button>
      </div>

      {/* Event Tables */}
      <div className="mt-3">
        {activeTab === "live" && (
          <>
            {liveEventsData.length > 0 && renderEventTable(liveEventsData, true)}
            <button className="btn btn-secondary mt-3" onClick={() => setShowForm(true)}>Add Event</button>
          </>
        )}
        {activeTab === "upcoming" && (
          <>
            {upcomingEventsData.length > 0 && renderEventTable(upcomingEventsData, false, true)}
            <button className="btn btn-secondary mt-3" onClick={() => setShowForm(true)}>Add Event</button>
          </>
        )}
      </div>

      {/* Add Event Form */}
      {showForm && <AddEventForm addEvent={addEvent} toggleForm={setShowForm} />}
    </div>
  );
};

export default Events;

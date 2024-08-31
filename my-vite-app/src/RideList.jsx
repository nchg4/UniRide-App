import React, { useState, useEffect } from 'react';

const RideList = () => {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState(null);

  useEffect(() => {
    loadRides();
  }, []);

  const loadRides = () => {
    const existingRides = JSON.parse(localStorage.getItem('rides')) || [];
    setRides(existingRides);
  };

  const handleRideClick = (ride) => {
    setSelectedRide(ride); // Show ride details when clicked
  };

  const clearRides = () => {
    localStorage.removeItem('rides'); // Clear the rides from local storage
    setRides([]); // Clear the rides from state
  };

  return (
    <div>
      <h2>Show Rides Near Me</h2>
      <button onClick={clearRides}>Clear All Rides</button> {/* Button to clear rides */}
      {selectedRide ? (
        <div>
          <h3>Ride Details</h3>
          <p><strong>Destination:</strong> {selectedRide.destination}</p>
          <p><strong>Car Details:</strong> {selectedRide.carDetails}</p>
          <p><strong>Seats Available:</strong> {selectedRide.seatsAvailable}</p>
          <p><strong>Pick-up Preference:</strong> {selectedRide.pickupPreference}</p>
          <p><strong>Date:</strong> {selectedRide.rideDate}</p>
          <p><strong>Time:</strong> {selectedRide.rideTime}</p>
          <p><strong>Driver Name:</strong> {selectedRide.driverName}</p>
          <p><strong>Driver Phone Number:</strong> {selectedRide.driverPhoneNumber}</p>
          <button onClick={() => setSelectedRide(null)}>Back to Rides</button>
        </div>
      ) : rides.length > 0 ? (
        <ul>
          {rides.map((ride, index) => (
            <li key={index} onClick={() => handleRideClick(ride)}>
              <strong>Pick-up Preference:</strong> {ride.pickupPreference} <br />
              <strong>Destination:</strong> {ride.destination} <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No rides available.</p>
      )}
    </div>
    
  );
};

export default RideList;


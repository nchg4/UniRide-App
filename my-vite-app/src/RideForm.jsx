import React, { useState, useEffect } from 'react';

const RideForm = () => {
  const [destination, setDestination] = useState('');
  const [carDetails, setCarDetails] = useState('');
  const [seatsAvailable, setSeatsAvailable] = useState(0);
  const [pickupPreference, setPickupPreference] = useState('');
  const [rideDate, setRideDate] = useState('');
  const [rideTime, setRideTime] = useState('');

  useEffect(() => {
    // Automatically set the destination from localStorage
    const selectedUniversity = localStorage.getItem('selectedUniversity');
    if (selectedUniversity) {
      setDestination(selectedUniversity);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ride = { destination, carDetails, seatsAvailable, pickupPreference, rideDate, rideTime };

    // Save the ride to localStorage
    const existingRides = JSON.parse(localStorage.getItem('rides')) || [];
    existingRides.push(ride);
    localStorage.setItem('rides', JSON.stringify(existingRides));

    // Reset the form
    setCarDetails('');
    setSeatsAvailable(0);
    setPickupPreference('');
    setRideDate('');
    setRideTime('');
  };

  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
  const endOfWeek = new Date(today.setDate(startOfWeek.getDate() + 6)); // Saturday

  const formattedStartDate = startOfWeek.toISOString().split('T')[0];
  const formattedEndDate = endOfWeek.toISOString().split('T')[0];

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Ride</h2>
      <div>
        <label>Destination:</label>
        <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} /> {/* Changed to allow typing */}
      </div>
      <div>
        <label>Car Details:</label>
        <input
          type="text"
          value={carDetails}
          onChange={(e) => setCarDetails(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Seats Available:</label>
        <input
          type="number"
          value={seatsAvailable}
          onChange={(e) => {
            const value = Math.max(0, Math.min(9, e.target.value)); // Limit between 0 and 9
            setSeatsAvailable(value);
          }}
          required
        />
      </div>
      <div>
        <label>Pick-up Preference:</label>
        <input
          type="text"
          value={pickupPreference}
          onChange={(e) => setPickupPreference(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={rideDate}
          onChange={(e) => setRideDate(e.target.value)}
          min={formattedStartDate} // Set minimum date to start of the week
          max={formattedEndDate} // Set maximum date to end of the week
          required
        />
      </div>
      <div>
        <label>Time:</label>
        <input
          type="time"
          value={rideTime}
          onChange={(e) => setRideTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Create Ride</button>
    </form>
  );
};

export default RideForm;

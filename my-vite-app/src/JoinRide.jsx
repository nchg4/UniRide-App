import React, { useState, useEffect } from 'react';

const JoinRide = ({ userInfo }) => {
  const [rides, setRides] = useState([]);
  const [selectedRide, setSelectedRide] = useState('');

  useEffect(() => {
    const allRides = JSON.parse(localStorage.getItem('rides')) || [];
    setRides(allRides);
  }, []);

  const handleJoin = (rideIndex) => {
    const allRides = JSON.parse(localStorage.getItem('rides')) || [];
    const ride = allRides[rideIndex];
    
    if (ride.joinedUsers.find(user => user.phoneNumber === userInfo.phoneNumber)) {
      alert('You have already joined this ride.');
      return;
    }

    if (ride.seatsAvailable <= 0) {
      alert('No seats available.');
      return;
    }

    ride.joinedUsers.push({ name: userInfo.name, phoneNumber: userInfo.phoneNumber });
    ride.seatsAvailable -= 1;
    allRides[rideIndex] = ride;
    localStorage.setItem('rides', JSON.stringify(allRides));

    alert('You have joined the ride.');
  };

  return (
    <div>
      <h2>Join a Ride</h2>
      <ul>
        {rides.map((ride, index) => (
          <li key={index}>
            <strong>Destination:</strong> {ride.destination} <br />
            <strong>Car Details:</strong> {ride.carDetails} <br />
            <strong>Seats Available:</strong> {ride.seatsAvailable} <br />
            <strong>Pick-up Preference:</strong> {ride.pickupPreference} <br />
            <strong>Date:</strong> {ride.rideDate} <br />
            <strong>Time:</strong> {ride.rideTime} <br />
            <button 
              onClick={() => handleJoin(index)} 
              disabled={ride.seatsAvailable <= 0} 
              style={{ backgroundColor: '#ed5700', color: 'white' }} // Set background color to #ed5700
            >
              {ride.seatsAvailable > 0 ? 'Join this Ride' : 'No Seats Available'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JoinRide;

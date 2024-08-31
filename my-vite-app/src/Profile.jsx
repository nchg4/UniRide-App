import React from 'react';

const Profile = ({ userInfo, onLogout }) => {
  return (
    <div>
      <h2>My Profile</h2>
      {userInfo ? (
        <div>
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Phone Number:</strong> {userInfo.phoneNumber}</p>
          <p><strong>Student ID:</strong> {userInfo.studentID}</p>
          <button 
            onClick={onLogout} 
            style={{ backgroundColor: '#ed5700', color: 'white' }} // Set background color to #ed5700
          >
            Logout
          </button>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
    </div>
  );
};

export default Profile;

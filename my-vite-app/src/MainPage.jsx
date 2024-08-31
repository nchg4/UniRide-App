import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainPage.css'; // Style your main page here

const MainPage = () => {
  return (
    <div id="main-page">
      <h2>Welcome to Uni Ride</h2>
      <p>Find and share rides with fellow students to your university.</p>
      <div id="waze-map">
      <iframe
  src="https://embed.waze.com/iframe?zoom=10"
  width="100%"
  height="400"
  allowFullScreen
  style={{ border: 'none' }}
  title="Waze Map"
></iframe>

      </div>
      <nav>
        <NavLink to="/create-ride" activeClassName="active">Create Ride</NavLink>
        <NavLink to="/join-ride" activeClassName="active">Join a Ride</NavLink>
      </nav>
    </div>
  );
};

export default MainPage;

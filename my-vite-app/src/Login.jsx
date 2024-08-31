import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Login = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [studentID, setStudentID] = useState('');
  const [university, setUniversity] = useState(''); // State for university selection
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Map university to a destination (for example purposes)
    const universityDestinations = {
      'TAU': 'Tel Aviv University',
      'Hebrew U': 'Hebrew University',
      'Ben Gurion Negev': 'Ben Gurion University',
      'Other': 'Your custom location'
    };
    const destination = universityDestinations[university] || 'Default Location';
    
    // Simulate user info for now, you would fetch this from a server
    const user = { name, phoneNumber, studentID, destination };
    onLogin(user); // Pass user info to App component

    navigate('/'); // Redirect to the home page (map page) after login
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Student ID:
          <input
            type="text"
            value={studentID}
            onChange={(e) => setStudentID(e.target.value)}
            required
          />
        </label>
        <label>
          University:
          <select value={university} onChange={(e) => setUniversity(e.target.value)} required>
          <option value="">Select a university</option>
          <option value="TAU">Tel Aviv University</option>
                <option value="HUJI">Hebrew University</option>
                <option value="BGU">Ben Gurion University</option>
                <option value="BIU">Bar Ilan University</option>
                <option value="HU">U of Haifa</option>
                <option value="IDC">Reichman/IDC</option>
                <option value="IIT">Technion</option>
                <option value="WIS">Weizmann</option>
                <option value="AU">Ariel</option>
                <option value="OPENU">Open University</option>
		 <option value="OTHER">Other Institution</option>
          </select>
        </label>
        {university === 'Other' && (
          <label>
            Custom Location:
            <input
              type="text"
              placeholder="Enter your custom location"
              onChange={(e) => setUniversity(e.target.value)}
            />
          </label>
        )}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


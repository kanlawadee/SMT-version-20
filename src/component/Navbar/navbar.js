import React, { useState } from 'react';
import '../Navbar/nav.css'

function Navbar() {
  const [username, setUsername] = useState(''); 

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logging out...");
  };

  return (
    <div className="smart-ticket-container">
      <div className="header">
        <h2> SMART TICKET </h2>
        <div className="user-info">
          <span> ชื่อผู้ใช้ {username}</span>
          <button onClick={handleLogout}>ออกจากระบบ</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
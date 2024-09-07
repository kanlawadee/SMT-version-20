import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import '../Dashboard/dash.css'


function Dashboard() {

const [tickets, setTickets] = useState([]);
const [searchQuery, setSearchQuery] = useState('');

useEffect(() => {
    // Fetch ticket data from an API or other data source
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      const response = await fetch('/api/tickets'); // Example API endpoint
      const data = await response.json();
      setTickets(data);
    };

    fetchData();
}, []); 

  const filteredTickets = tickets.filter(ticket => {
    // Basic filtering based on searchQuery 
    // You can enhance this with more advanced filtering logic
    return ticket.หมายเลขใบสั่ง.includes(searchQuery) ||
           ticket.เลขบัตรประชาชน.includes(searchQuery) ||
           ticket.ผู้ขับขี่.includes(searchQuery);
});

  return (
    <div className='head'>
      <h2>รายการใบสั่ง</h2>
      <Form.Select aria-label="Default select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      <div>
        <input 
          type="text" 
          placeholder="ค้นหาใบสั่ง..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} 
        />
        <button>ค้นหา</button> {/* Placeholder button, you'll need to implement search logic */}
      </div>

      <table>
        <thead>
          <tr>
            <th>หมายเลขใบสั่ง</th>
            <th>เลขบัตรประชาชน</th>
            <th>ผู้ขับขี่</th>
            <th>วันที่ออก</th>
            <th>ข้อหา</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map(ticket => (
            <tr key={ticket.หมายเลขใบสั่ง}>
              <td>{ticket.หมายเลขใบสั่ง}</td>
              <td>{ticket.เลขบัตรประชาชน}</td>
              <td>{ticket.ผู้ขับขี่}</td>
              <td>{ticket.วันที่ออก}</td>
              <td>{ticket.ข้อหา}</td>
              <td>{ticket.สถานะ}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
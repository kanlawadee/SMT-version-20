import logo from './logo.svg';
import './App.css';
import Login from './component/Login/login';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/navbar'
import Dashboard from './component/Dashboard/dashboard'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Dashboard />
      {/* <Login/> */}
    </div>
  );
}

export default App;

// function App() {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Navbar>< Dashboard/></Navbar>} />
//                 {/* <Route path="/" element={<Navbar />} /> */}
//                 {/* <Route path="/" element={<Login />} /> */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Innerpage from './Pages/Innerpage';
import Docs from './Pages/Docs';
import Timeline from './Pages/Timeline';
import Help from './Pages/Help';
import Setting from './Pages/Setting';

function App() {
  return (
    <div className="App">
      
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/innerpage" element={<Innerpage></Innerpage>} />
          <Route path="/docs" element={<Docs></Docs>} />
          <Route path="/timeline" element={<Timeline></Timeline>} />
          <Route path="/help" element={<Help></Help>} />
          <Route path="/setting" element={<Setting></Setting>} />
        </Routes>
      </BrowserRouter> 
      
    
    </div>
  );
}

export default App;

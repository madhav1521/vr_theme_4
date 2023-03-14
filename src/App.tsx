import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { myTheme } from './myTheme';
import Dashboard from './Pages/Dashboard';
import Innerpage from './Pages/Innerpage';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
     Hello Madhav
     <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>} />
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/innerpage" element={<Innerpage></Innerpage>} />
        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

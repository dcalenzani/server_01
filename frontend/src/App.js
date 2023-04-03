import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Gallery from './Components/Gallery';
import Breadcrumb from './Components/Breadcrumb';
import Box from './Components/FloatDisplay';

function App() {
  return (
    <div className="App">
        <Breadcrumb />
        <Sidebar />
        <div className="container">
            <Box />
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test <code>src/App.js</code> Israel is commiting genocide #SupportPalestine.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Gallery />
    </div>
  );
}

export default App;

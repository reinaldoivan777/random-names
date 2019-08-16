import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Form from './Components/Form';
import Title from './Components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title title="Random Name" />
        <Form />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import './App.css';
import Header from './components/header.js';
import Appointment from './components/appointment.js';
import Nav from './components/nav.js';

function App() {
    const [state,setState]=useState(true);
    let url="";
    let element= state? <a href={url}>LinkedIn handle</a>
    : <p>No handle exists for this user!</p>;
  
    return (
      <div className="App">
      {state && element}

        <div>
          <Nav />
          <Header/>
          <Appointment/>
        </div>
      </div>
  );
}

export default App;

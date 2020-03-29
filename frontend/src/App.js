import React from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './component/Student'
import Facebook from './component/Facebook'

function App() {
  console.log("my react");
  return (
    <div className="App">
      {/* <Student/> */}
      <Facebook/>
      <div>PSU Login</div>
    </div>

  );
}

export default App;

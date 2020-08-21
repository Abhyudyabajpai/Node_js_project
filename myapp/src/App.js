import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>"WELCOME TO MY APP"</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:5000/auth/google"
          target="_blank"
          rel="noopener noreferrer">
          Sign In with Google
        </a>
      </header>
    </div>
  );
}

export default App;

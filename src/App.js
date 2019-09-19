import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <marquee behavior="alternate">
          <h1>Hello CRM Team</h1>
        </marquee>
        <marquee behavior="slide scroll alternate">
          <h2 style={{ color: "green" }}>Welcome to Git</h2>
        </marquee>
        <h3>This is git test</h3>
      </header>
    </div>
  );
}

export default App;

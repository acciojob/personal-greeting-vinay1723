
import './../styles/App.css';
import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");
  let greeting = "";
  if (message.length) {
    greeting = `Hello, ${message}!`;
  }
  return (
    <div>
      <label>Enter your name: </label>
      <br />
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <p>{greeting}</p>
    </div>
  )
}

export default App

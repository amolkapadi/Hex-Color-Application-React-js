import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the hex color value
  const [hexColor, setHexColor] = useState('#ffffff');

  // Function to generate a random hex color
  const generateRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to handle the button click and change the background color
  const changeBackgroundColor = () => {
    const newColor = generateRandomColor();
    setHexColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <div className="App">
      <h1>Hex Color Application</h1>
      <button onClick={changeBackgroundColor}>Change Background Color</button>
      <p>{hexColor}</p>
    </div>
  );
}

export default App;

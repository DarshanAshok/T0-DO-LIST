import React, { useState } from 'react';

function ChangeBackgroundColor() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      <h1> Background Color</h1>
      <button onClick={() => handleColorChange('red')}>Red</button>
      <button onClick={() => handleColorChange('orange')}>Orange</button>
      <button onClick={() => handleColorChange('blue')}>Blue</button>
      <button onClick={() => handleColorChange('green')}>Green</button>
      <button onClick={() => handleColorChange('yellow')}>Yellow</button>
    </div>
  );
}

export default ChangeBackgroundColor;

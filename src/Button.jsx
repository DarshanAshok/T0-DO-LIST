import React from 'react';

const Button = ({ onClick, count }) => {
  return (
    <button onClick={onClick}>
      Click me! Count: {count}
    </button>
  );
};

export default Button;
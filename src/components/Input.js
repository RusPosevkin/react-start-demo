import React from 'react';
import './Input.css';

function Input({ placeholder, handleChange }) {
  return (
    <input
      type="text"
      className="Input"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default Input;

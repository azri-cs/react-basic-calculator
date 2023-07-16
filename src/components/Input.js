import React from 'react';

function Input(props) {
  return (
    <input type="number" onChange={props.handleChange} value={props.value} />
  );
}

export default Input;
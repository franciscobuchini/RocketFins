// InputOption.jsx
import React from 'react';

function InputOption({ setTexture, texturePath, id, name, text, onClick }) {
  return (
    <div className='InputOption'>
      <input 
        type="radio" 
        id={id} 
        name={name} 
        value={texturePath} 
        onChange={() => setTexture(texturePath)}
        onClick={onClick}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default InputOption;
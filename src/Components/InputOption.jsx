// InputOption.jsx
import React from 'react';

function InputOption({ setTexture, texturePath, id, name, text, onClick }) {

  const handleChange = () => {
    if (setTexture) {
      setTexture(texturePath);
    }
  };

  return (
    <div className='InputOption'>
      <input 
        type="radio" 
        id={id} 
        name={name} 
        value={texturePath} 
        onChange={setTexture ? handleChange : null}
        onClick={onClick}
      />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}

export default InputOption;
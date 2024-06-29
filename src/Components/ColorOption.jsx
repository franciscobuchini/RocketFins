// ColorOption.jsx
import React from 'react';

function ColorOption({ setTexture, texturePath, id}) {
  return (
    <button id={id} className='ColorOption' onClick={() => setTexture(texturePath)}> </button>
  );
}

export default ColorOption;
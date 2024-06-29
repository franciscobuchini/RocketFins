// Home.jsx
import React, { useState } from 'react';
import Object3D from "../Components/Object3D";
import ColorOption from "../Components/ColorOption";

function Home() {
  const [texture, setTexture] = useState('option1');

  return (
    <>
      <h1>Home</h1>
      <article>
        <Object3D texture={texture} />
        <div className='OptionsList'>
          <label>Fiberglass blades:</label>
          <div className='ButtonsRow'>
            <ColorOption setTexture={setTexture} texturePath="option1" id='BladesBlack'/>
            <ColorOption setTexture={setTexture} texturePath="option2" id='BladesBlue'/>
            <ColorOption setTexture={setTexture} texturePath="option9" id='BladesPink'/>
            <ColorOption setTexture={setTexture} texturePath="option8" id='BladesIvory'/>
          </div>

          <label>Shoes:</label>
          <div className='ButtonsRow'>
            <ColorOption setTexture={setTexture} texturePath="option1" id='ShoesBlack'/>
            <ColorOption setTexture={setTexture} texturePath="option2" id='ShoesBlue'/>
            <ColorOption setTexture={setTexture} texturePath="option3" id='ShoesYellow'/>
            <ColorOption setTexture={setTexture} texturePath="option4" id='ShoesWhite'/>
          </div>

          <label>Bumpers:</label>
          <div className='ButtonsRow'>
            <ColorOption setTexture={setTexture} texturePath="option1" id='BumpersBlack'/>
            <ColorOption setTexture={setTexture} texturePath="option2" id='BumpersBlue'/>
            <ColorOption setTexture={setTexture} texturePath="option3" id='BumpersYellow'/>
            <ColorOption setTexture={setTexture} texturePath="option5" id='BumpersGreen'/>
            <ColorOption setTexture={setTexture} texturePath="option6" id='BumpersRed'/>
            <ColorOption setTexture={setTexture} texturePath="option7" id='BumpersOrange'/>
          </div>

          <label>Guides:</label>
          <div className='ButtonsRow'>
            <ColorOption setTexture={setTexture} texturePath="option1" id='GuidesBlack'/>
            <ColorOption setTexture={setTexture} texturePath="option2" id='GuidesBlue'/>
            <ColorOption setTexture={setTexture} texturePath="option3" id='GuidesYellow'/>
            <ColorOption setTexture={setTexture} texturePath="option4" id='GuidesWhite'/>
            <ColorOption setTexture={setTexture} texturePath="option5" id='GuidesGreen'/>
            <ColorOption setTexture={setTexture} texturePath="option6" id='GuidesRed'/>
            <ColorOption setTexture={setTexture} texturePath="option7" id='GuidesOrange'/>
            <ColorOption setTexture={setTexture} texturePath="option9" id='GuidesPink'/>

          </div>          
        </div>
      </article>
    </>
  );
}

export default Home;
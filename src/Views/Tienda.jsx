//Tienda.jsx
import React, { useState, useEffect } from 'react';
import Object3D from "../Components/Object3D";
import InputOption from "../Components/InputOption";

function Tienda() {
  const [texture, setTexture] = useState('option3');
  const [bladesTexture, setBladesTexture] = useState('option1');
  const [price, setPrice] = useState(230);
  const [guideText, setGuideText] = useState('');

  const guideTextChange = (text) => {
    setGuideText(text);
  };

  useEffect(() => {
    // Update price based on selected texture for Fiberglass blades
    if (bladesTexture === 'option1') {
      setPrice(230);
    } else {
      setPrice(280);
    }
  }, [bladesTexture]);

  const textGuide_size = 'S: 5-6 (21cm shoe length) // M: 7-8 (23cm shoe length) // L: 8-9 (24.5cm shoe length) // XL: 10-11 (27cm shoe length)';
  const textGuide_bladeArea = 'Less blade area: more agility. (recomended for UWH) // More blade area: more power. (recommended for UWR)';
  const textGuide_bladeStiffness = 'The fiberglass blades have the best slap ever in the market, helping to save energy when swimming. And its high flexibility coefficient reduces the probability of blade fracture.';
  const textGuide_bladesColor = 'The fiberglass blades have the best slap ever in the market, helping to save energy when swimming. And its high flexibility coefficient reduces the probability of blade fracture.';
  const textGuide_shoesColor = 'Made of superior rubber material, comfortable, and flexible. With a tight fit to get the necessary grip, which helps maintain greater efficiency by transferring the energy produced by the body to the fin.';
  const textGuide_bumpersColor = 'Bumpers protect players from injuries. Made from high quality rubber material, more durable than other fiberglass fins in the market.';
  const textGuide_guidesColor = 'Guides help fin stabilization, avoiding slide movements, and improving kick efficiency, while reducing water resistance and turbulence.';

  return (
    <>
      <h1>Tienda</h1>
      <article>
        <Object3D texture={texture} />
        <div className='OptionsRow'>

          <div className='ButtonsRow'>
            <label>Shoes size:</label>
            <InputOption id='SizeS' name='Size' text='S' onClick={() => guideTextChange(`${textGuide_size}`)}/>
            <InputOption id='SizeM' name='Size' text='M' onClick={() => guideTextChange(`${textGuide_size}`)}/>
            <InputOption id='SizeL' name='Size' text='L' onClick={() => guideTextChange(`${textGuide_size}`)}/>
            <InputOption id='SizeXL' name='Size' text='XL' onClick={() => guideTextChange(`${textGuide_size} `)}/>
          </div>

          <div className='ButtonsRow'>
            <label>Blade area:</label>
            <InputOption id='AreaUWH' name='Area' text='UWH' onClick={() => guideTextChange(`${textGuide_bladeArea}`)} />
            <InputOption id='AreaUWR' name='Area' text='UWR' onClick={() => guideTextChange(`${textGuide_bladeArea}`)} />
          </div>

          <div className='ButtonsRow'>
            <label>Blade stiffness:</label>
            <InputOption id='StiffnessSoft' name='Stiffness' text='Soft' onClick={() => guideTextChange(`${textGuide_bladeStiffness}`)}/>
            <InputOption id='StiffnessMedium' name='Stiffness' text='Medium' onClick={() => guideTextChange(`${textGuide_bladeStiffness}`)}/>
            <InputOption id='StiffnessHard' name='Stiffness' text='Hard' onClick={() => guideTextChange(`${textGuide_bladeStiffness}`)}/>
            <InputOption id='StiffnessExtraHard' name='Stiffness' text='Extra Hard' onClick={() => guideTextChange(`${textGuide_bladeStiffness}`)}/>
          </div>

          <div className='ButtonsRow'>
            <label>Blades color:</label>
            <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option1" id='BladesBlack' name='Blades'  onClick={() => guideTextChange(`${textGuide_bladesColor}`)}/>
            <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option2" id='BladesBlue' name='Blades'  onClick={() => guideTextChange(`${textGuide_bladesColor}`)}/>
            <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option9" id='BladesPink' name='Blades'  onClick={() => guideTextChange(`${textGuide_bladesColor}`)}/>
            <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option8" id='BladesIvory' name='Blades'  onClick={() => guideTextChange(`${textGuide_bladesColor}`)}/>
          </div>

          <div className='ButtonsRow'>
            <label>Shoes color:</label>
            <InputOption setTexture={setTexture} texturePath="option1" id='ShoesBlack' name='Shoes' onClick={() => guideTextChange(`${textGuide_shoesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option2" id='ShoesBlue' name='Shoes' onClick={() => guideTextChange(`${textGuide_shoesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option3" id='ShoesYellow' name='Shoes' onClick={() => guideTextChange(`${textGuide_shoesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option4" id='ShoesWhite' name='Shoes' onClick={() => guideTextChange(`${textGuide_shoesColor}`)}/>
          </div>
          
          <div className='ButtonsRow'>
            <label>Bumpers color:</label>
            <InputOption setTexture={setTexture} texturePath="option1" id='BumpersBlack' name='Bumpers' onClick={() => guideTextChange(`${textGuide_bumpersColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option2" id='BumpersBlue' name='Bumpers' onClick={() => guideTextChange(`${textGuide_bumpersColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option3" id='BumpersYellow' name='Bumpers' onClick={() => guideTextChange(`${textGuide_bumpersColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option5" id='BumpersGreen' name='Bumpers' onClick={() => guideTextChange(`${textGuide_bumpersColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option6" id='BumpersRed' name='Bumpers' onClick={() => guideTextChange(`${textGuide_bumpersColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option7" id='BumpersOrange' name='Bumpers' onClick={() => guideTextChange(`${textGuide_bumpersColor}`)}/>
          </div>
          
          <div className='ButtonsRow'>
            <label>Guides color:</label>
            <InputOption setTexture={setTexture} texturePath="option1" id='GuidesBlack' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option2" id='GuidesBlue' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option3" id='GuidesYellow' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option4" id='GuidesWhite' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option5" id='GuidesGreen' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option6" id='GuidesRed' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option7" id='GuidesOrange' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
            <InputOption setTexture={setTexture} texturePath="option9" id='GuidesPink' name='Guides' onClick={() => guideTextChange(`${textGuide_guidesColor}`)}/>
          </div>

          <div className='Subtotal'>
            <label>Subtotal: </label>
            <span>$usd {price}</span>
          </div>
        </div>
        <div className='Guide'> {guideText} </div>
      </article>
    </>
  );
}

export default Tienda;
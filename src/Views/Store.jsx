//Store.jsx
import React, { useState, useEffect } from 'react';
import Object3D from "../Components/Object3D";
import InputOption from "../Components/InputOption";

function Store() {
  const [texture, setTexture] = useState('option5');
  const [bladesTexture, setBladesTexture] = useState('option1');
  const [price, setPrice] = useState(280);
  const [guideText, setGuideText] = useState('');

  const [sizeSelected, setSizeSelected] = useState(false);
  const [areaSelected, setAreaSelected] = useState(false);
  const [stiffnessSelected, setStiffnessSelected] = useState(false);
  const [bladesColorSelected, setBladesColorSelected] = useState(false);
  const [shoesColorSelected, setShoesColorSelected] = useState(false);
  const [bumpersColorSelected, setBumpersColorSelected] = useState(false);
  const [guidesColorSelected, setGuidesColorSelected] = useState(false);

  const allOptionsSelected = sizeSelected && areaSelected && stiffnessSelected && bladesColorSelected && shoesColorSelected && bumpersColorSelected && guidesColorSelected;

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [selectedBladesColor, setSelectedBladesColor] = useState('');
  const [selectedShoesColor, setSelectedShoesColor] = useState('');
  const [selectedBumpersColor, setSelectedBumpersColor] = useState('');
  const [selectedGuidesColor, setSelectedGuidesColor] = useState('');

  const guideTextChange = (text) => {
    setGuideText(text);
  };

  useEffect(() => {
    if (bladesTexture === 'option1') {
      setPrice(230);
    } else {
      setPrice(330);
    }
  }, [bladesTexture]);

  const textGuide_size = 'S: 5-6 (21cm shoe length) // M: 7-8 (23cm shoe length) // L: 8-9 (24.5cm shoe length) // XL: 10-11 (27cm shoe length)';
  const textGuide_bladeArea = 'Less blade area: more agility. (recommended for UWH) // More blade area: more power. (recommended for UWR)';
  const textGuide_bladeStiffness = 'The fiberglass blades have the best slap ever in the market, helping to save energy when swimming. These have high flexibility coefficient reduces the probability of blade fracture.';
  const textGuide_bladesColor = 'The fiberglass blades have the best slap ever in the market, helping to save energy when swimming. These have high flexibility coefficient reduces the probability of blade fracture.';
  const textGuide_shoesColor = 'Made of superior rubber material, comfortable, and flexible. With a tight fit to get the necessary grip, which helps maintain greater efficiency by transferring the energy produced by the body to the fin.';
  const textGuide_bumpersColor = 'Bumpers protect players from injuries. Made from high quality rubber material, more durable than other fiberglass fins in the market.';
  const textGuide_guidesColor = 'Guides help fin stabilization, avoiding slide movements, and improving kick efficiency, while reducing water resistance and turbulence.';

  return (
    <>
      <article>
        <div className='ObjectAndButtons'>
          <Object3D texture={texture} />
          <form className='OptionsRow'>
            <fieldset className='ButtonsRow'>
              <label>Shoes size: <span>{selectedSize}</span> </label>
              <InputOption id='SizeS' name='Size' text='S' onClick={() => { guideTextChange(`${textGuide_size}`); setSizeSelected(true); setSelectedSize('S'); }}/>
              <InputOption id='SizeM' name='Size' text='M' onClick={() => { guideTextChange(`${textGuide_size}`); setSizeSelected(true); setSelectedSize('M'); }}/>
              <InputOption id='SizeL' name='Size' text='L' onClick={() => { guideTextChange(`${textGuide_size}`); setSizeSelected(true); setSelectedSize('L'); }}/>
              <InputOption id='SizeXL' name='Size' text='XL' onClick={() => { guideTextChange(`${textGuide_size}`); setSizeSelected(true); setSelectedSize('XL'); }}/>
            </fieldset>

            <fieldset className='ButtonsRow'>
              <label>Blade area: <span>{selectedArea}</span> </label>
              <InputOption id='AreaUWH' name='Area' text='UWH' onClick={() => { guideTextChange(`${textGuide_bladeArea}`); setAreaSelected(true); setSelectedArea('UWH'); }}/>
              <InputOption id='AreaUWR' name='Area' text='UWR' onClick={() => { guideTextChange(`${textGuide_bladeArea}`); setAreaSelected(true); setSelectedArea('UWR'); }}/>
            </fieldset>

            <fieldset className='ButtonsRow'>
              <label>Blade stiffness: <span>{selectedStiffness}</span> </label>
              <InputOption id='StiffnessSoft' name='Stiffness' text='Soft' onClick={() => { guideTextChange(`${textGuide_bladeStiffness}`); setStiffnessSelected(true); setSelectedStiffness('Soft'); }}/>
              <InputOption id='StiffnessMedium' name='Stiffness' text='Medium' onClick={() => { guideTextChange(`${textGuide_bladeStiffness}`); setStiffnessSelected(true); setSelectedStiffness('Medium'); }}/>
              <InputOption id='StiffnessHard' name='Stiffness' text='Hard' onClick={() => { guideTextChange(`${textGuide_bladeStiffness}`); setStiffnessSelected(true); setSelectedStiffness('Hard'); }}/>
              <InputOption id='StiffnessExtraHard' name='Stiffness' text='Extra Hard' onClick={() => { guideTextChange(`${textGuide_bladeStiffness}`); setStiffnessSelected(true); setSelectedStiffness('Extra Hard'); }}/>
            </fieldset>

            <fieldset className='ButtonsRow'>
              <label>Blades color: <span>{selectedBladesColor}</span> </label>
              <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option1" id='BladesBlack' name='Blades' onClick={() => { guideTextChange(`${textGuide_bladesColor}`); setBladesColorSelected(true); setSelectedBladesColor('Black'); }}/>
              <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option2" id='BladesBlue' name='Blades' onClick={() => { guideTextChange(`${textGuide_bladesColor}`); setBladesColorSelected(true); setSelectedBladesColor('Blue'); }}/>
              <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option9" id='BladesPink' name='Blades' onClick={() => { guideTextChange(`${textGuide_bladesColor}`); setBladesColorSelected(true); setSelectedBladesColor('Pink'); }}/>
              <InputOption setTexture={(texture) => { setTexture(texture); setBladesTexture(texture); }} texturePath="option8" id='BladesIvory' name='Blades' onClick={() => { guideTextChange(`${textGuide_bladesColor}`); setBladesColorSelected(true); setSelectedBladesColor('Ivory'); }}/>
            </fieldset>

            <fieldset className='ButtonsRow'>
              <label>Shoes color: <span>{selectedShoesColor}</span> </label>
              <InputOption setTexture={setTexture} texturePath="option1" id='ShoesBlack' name='Shoes' onClick={() => { guideTextChange(`${textGuide_shoesColor}`); setShoesColorSelected(true); setSelectedShoesColor('Black'); }}/>
              <InputOption setTexture={setTexture} texturePath="option4" id='ShoesWhite' name='Shoes' onClick={() => { guideTextChange(`${textGuide_shoesColor}`); setShoesColorSelected(true); setSelectedShoesColor('White'); }}/>
              <InputOption setTexture={setTexture} texturePath="option2" id='ShoesBlue' name='Shoes' onClick={() => { guideTextChange(`${textGuide_shoesColor}`); setShoesColorSelected(true); setSelectedShoesColor('Blue'); }}/>
              <InputOption setTexture={setTexture} texturePath="option3" id='ShoesYellow' name='Shoes' onClick={() => { guideTextChange(`${textGuide_shoesColor}`); setShoesColorSelected(true); setSelectedShoesColor('Yellow'); }}/>
            </fieldset>
            
            <fieldset className='ButtonsRow'>
              <label>Bumpers color: <span>{selectedBumpersColor}</span> </label>
              <InputOption setTexture={setTexture} texturePath="option1" id='BumpersBlack' name='Bumpers' onClick={() => { guideTextChange(`${textGuide_bumpersColor}`); setBumpersColorSelected(true); setSelectedBumpersColor('Black'); }}/>
              <InputOption setTexture={setTexture} texturePath="option2" id='BumpersBlue' name='Bumpers' onClick={() => { guideTextChange(`${textGuide_bumpersColor}`); setBumpersColorSelected(true); setSelectedBumpersColor('Blue'); }}/>
              <InputOption setTexture={setTexture} texturePath="option3" id='BumpersYellow' name='Bumpers' onClick={() => { guideTextChange(`${textGuide_bumpersColor}`); setBumpersColorSelected(true); setSelectedBumpersColor('Yellow'); }}/>
              <InputOption setTexture={setTexture} texturePath="option5" id='BumpersGreen' name='Bumpers' onClick={() => { guideTextChange(`${textGuide_bumpersColor}`); setBumpersColorSelected(true); setSelectedBumpersColor('Green'); }}/>
              <InputOption setTexture={setTexture} texturePath="option6" id='BumpersRed' name='Bumpers' onClick={() => { guideTextChange(`${textGuide_bumpersColor}`); setBumpersColorSelected(true); setSelectedBumpersColor('Red'); }}/>
              <InputOption setTexture={setTexture} texturePath="option7" id='BumpersOrange' name='Bumpers' onClick={() => { guideTextChange(`${textGuide_bumpersColor}`); setBumpersColorSelected(true); setSelectedBumpersColor('Orange'); }}/>
            </fieldset>
            
            <fieldset className='ButtonsRow'>
              <label>Guides color: <span>{selectedGuidesColor}</span> </label>
              <InputOption setTexture={setTexture} texturePath="option1" id='GuidesBlack' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Black'); }}/>
              <InputOption setTexture={setTexture} texturePath="option2" id='GuidesBlue' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Blue'); }}/>
              <InputOption setTexture={setTexture} texturePath="option3" id='GuidesYellow' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Yellow'); }}/>
              <InputOption setTexture={setTexture} texturePath="option4" id='GuidesWhite' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('White'); }}/>
              <InputOption setTexture={setTexture} texturePath="option5" id='GuidesGreen' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Green'); }}/>
              <InputOption setTexture={setTexture} texturePath="option6" id='GuidesRed' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Red'); }}/>
              <InputOption setTexture={setTexture} texturePath="option7" id='GuidesOrange' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Orange'); }}/>
              <InputOption setTexture={setTexture} texturePath="option9" id='GuidesPink' name='Guides' onClick={() => { guideTextChange(`${textGuide_guidesColor}`); setGuidesColorSelected(true); setSelectedGuidesColor('Pink'); }}/>
            </fieldset>
          </form>
        </div>
        <div className='Guide'> {guideText} </div>
        <div className='Footer'>
          <div className='Subtotal'>
            <label>Subtotal: </label>
            <span>USD {price}</span>
          </div>
          <button disabled={!allOptionsSelected}> Continue </button>
        </div>
      </article>
    </>
  );
}

export default Store;
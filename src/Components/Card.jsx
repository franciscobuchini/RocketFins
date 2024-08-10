//Card.jsx

function Card({img, blade_area, shoe_size, blade_stiffness, blade_color, shoe_color, bumper_color, guide_color, fins_price}) {

  return (
    <div className="card">
      <div className="cardInfo">
        <label>Area: <span>{blade_area}</span> </label> <br/>
        <label>Size: <span>{shoe_size}</span> </label> <br/>
        <label>Stiffness: <span>{blade_stiffness}</span> </label> <br/>
        <label>Blades: <span>{blade_color}</span> </label> <br/>
        <label>Shoes: <span>{shoe_color}</span> </label> <br/>
        <label>Bumpers: <span>{bumper_color}</span> </label> <br/>
        <label>Guides: <span>{guide_color}</span> </label> <br/>
        <br/> <label><span>{fins_price}</span> </label>
      </div>
      <img src={img}/>
    </div>
  );
}

export default Card;

//Card.jsx

function Card({img, blade_area, shoe_size, blade_stiffness, blade_color, shoe_color, bumper_color, guide_color, fins_price}) {

  return (
    <div className="card">
      <img src={img}/>
      <div className="cardInfo">
        <label>Blade area: <span>{blade_area}</span> </label> <br/>
        <label>Shoe size: <span>{shoe_size}</span> </label> <br/>
        <label>Blade stiffness: <span>{blade_stiffness}</span> </label> <br/>
        <label>Blade color: <span>{blade_color}</span> </label> <br/>
        <label>Shoe color: <span>{shoe_color}</span> </label> <br/>
        <label>Bumper color: <span>{bumper_color}</span> </label> <br/>
        <label>Guide color: <span>{guide_color}</span> </label> <br/>
        <br/> <label><span>{fins_price}</span> </label>
      </div>
    </div>
  );
}

export default Card;

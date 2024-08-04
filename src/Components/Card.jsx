//Card.jsx

function Card(img) {

  return (
    <div className="card">
      <img src={img}/>
      <h4>Product name</h4>
      <p>Description</p>
      <p>Price</p>
    </div>
  );
}

export default Card;

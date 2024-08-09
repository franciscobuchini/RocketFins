// Home.jsx
import { Link } from 'react-router-dom';
import Card from "./../Components/Card.jsx"
import fins01 from "./../Assets/fins01.webp"
import fins02 from "./../Assets/fins02.webp"
import fins03 from "./../Assets/fins03.webp"
import fins04 from "./../Assets/fins04.webp"
import img01 from "./../Assets/img01.webp"
import img02 from "./../Assets/img02.webp"
import wave from "./../Assets/wave.webp"
import wave2 from "./../Assets/wave2.webp"
function Home() {

  return (
    <section>
      <article id='home_title'>
        <img src={img01}/>
        <h1>THE NEXT GEN FINS FOR UNDERWATER SPORTS</h1>
      </article>
      <article className='home_separation'>
        {/* <img src={wave}/>
        <img src={wave2}/> */}
        <h2> The best selection: </h2>
      </article>
      <article id="home_cardsrow">
        <img src={img02}/>
        <div>
          <Card img={fins01}/>
          <Card img={fins02}/>
          <Card img={fins03}/>
          <Card img={fins04}/>
        </div>
      </article>

      <article id='home_design'>
        <h2> Design your own fins </h2>
        <p> 50.000 availables combinations! </p>
        <Link className='buttonLink' to="/store">
          <button>Let's do it</button>
        </Link>
      </article>
{/* 
      <article>
        <h2>Shop with Purpose: Support Ukraine</h2>
        <p>At Rocketfin, we believe in the power of sports to unite and uplift communities. That's why, with every pair of fins you purchase, a portion of the sale goes directly to humanitarian aid in Ukraine.</p>
        <p>Your support helps provide food, shelter, and medical assistance to families affected by the ongoing conflict. Together, we can make a significant impact and bring hope to those in need.</p>
        <p>Purchase today and let your swim make waves of change.</p>
        <Link className="buttonLink" to="/store">
          <button>Purchase Now and Support Ukraine</button>
        </Link>
      </article>
      
      <article>
        <p>* Shipping Information</p>
        <p>Language Switcher</p>
        <p>Contact Information</p>
        <p>Blog section: New releases, next dates.</p>
        <p>Instagram API</p>
        <p>Other products</p>
        <p>PDF info</p>
        <p>Best models list // call to action</p>
      </article> */}
    </section>
  );
}

export default Home;
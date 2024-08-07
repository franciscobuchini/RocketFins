// Home.jsx
import { Link } from 'react-router-dom';
import Card from "./../Components/Card.jsx"
import img01 from "./../Assets/img01.webp"

function Home() {

  return (
    <section>
      <article id='Title'>
        <img src={img01}/>
        <h1>THE NEXT-GEN FINS FOR UNDERWATER SPORTS</h1>
      </article>

      <article id='goToOrder'>
        <h2> Design your own fins </h2>
        <Link className='buttonLink' to="/store">
          <button>Let's do it</button>
        </Link>
      </article>
      <article>
        <h2>Shop with Purpose: Support Ukraine</h2>
        <p>At Rocketfin, we believe in the power of sports to unite and uplift communities. That's why, with every pair of fins you purchase, a portion of the sale goes directly to humanitarian aid in Ukraine.</p>
        <p>Your support helps provide food, shelter, and medical assistance to families affected by the ongoing conflict. Together, we can make a significant impact and bring hope to those in need.</p>
        <p>Purchase today and let your swim make waves of change.</p>
        <Link className="buttonLink" to="/store">
          <button>Purchase Now and Support Ukraine</button>
        </Link>
      </article>
      <article id="cardsRow">
        <Card img={img01}/>
        <Card img={img01}/>
        <Card img={img01}/>
        <Card img={img01}/>
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
      </article>
    </section>
  );
}

export default Home;
// Home.jsx
import { Link } from 'react-router-dom';
import Card from "./../Components/Card.jsx"
import img01 from "./../Assets/fins.webp"

function Home() {

  return (
    <section>
      <div id='Title'>
        <h1>
          <span className='word-span'>
            <span className='letter-span'>T</span>
            <span className='letter-span'>h</span>
            <span className='letter-span'>e</span>
          </span>
          <span className='word-span'>
            <span className='letter-span'>N</span>
            <span className='letter-span'>e</span>
            <span className='letter-span'>x</span>
            <span className='letter-span'>t</span>
            <span className='letter-span'>-</span>
            <span className='letter-span'>G</span>
            <span className='letter-span'>e</span>
            <span className='letter-span'>n</span>
          </span>
          <span className='word-span'>
            <span className='letter-span'>F</span>
            <span className='letter-span'>i</span>
            <span className='letter-span'>n</span>
            <span className='letter-span'>s</span>
          </span>
        </h1>
      </div>

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
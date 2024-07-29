// Home.jsx
import logo from '../Assets/logo.svg'

import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <div id='Title'>
        <img src={logo}/>
        <h1>The Next-Gen Fins</h1>
      </div>

      <article id='goToOrder'>
        <h2> Design your own fins </h2>
        <Link className='buttonLink' to="/store">
          <button>Let's do it</button>
        </Link>
      </article>
      <article>
        <p>* Shipping Information</p>
        <p>* FAQ</p>
        <p>Contact Information</p>
        <p>Language Switcher</p>
        <p>Blog section: New releases, next dates.</p>
        <p>Instagram API</p>
        <p>Other products</p>
        <p>PDF info</p>
        <p>Support Ukraine</p>
      </article>
    </>
  );
}

export default Home;
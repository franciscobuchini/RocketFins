// Home.jsx
import logo from '../Assets/logo.svg'

import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <div id='Title'>
        <img src={logo}/>
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
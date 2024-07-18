// Home.jsx
import img01 from '../Assets/img01.webp'
import img02 from '../Assets/img02.webp'

import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <article id='goToOrder'>
        <img className='ImgB' src={img02}/>
        <img className='ImgF' src={img01}/>
        <h1> Design your own fins </h1>
        <Link className='buttonLink' to="/store">
          <button>Let's do it</button>
        </Link>
      </article>
      <article>
        <p>Blog section: New releases, next dates.</p>
        <p>Instagram API</p>
        <p>Other products</p>
        <p>Contact information</p>
        <p>FAQ</p>
        <p>PDF info</p>
        <p>Shipping Information</p>
        <p>Dark & Light theme</p>
      </article>
    </>
  );
}

export default Home;
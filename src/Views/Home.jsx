// Home.jsx
import img01 from '../Assets/img01.webp'

function Home() {

  return (
    <>
      <article id='goToOrder'>
        <img src={img01}/>
        <h1> Design your own fins </h1>
        <button>Let's do it</button>
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
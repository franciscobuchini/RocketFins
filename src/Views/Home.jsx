// Home.jsx
import { Link } from 'react-router-dom';
import Card from "./../Components/Card.jsx"
import fins01 from "./../Assets/fins01.webp"
import fins02 from "./../Assets/fins02.webp"
import fins03 from "./../Assets/fins03.webp"
import fins04 from "./../Assets/fins04.webp"
import fins05 from "./../Assets/fins05.webp"
import fins06 from "./../Assets/fins06.webp"
import img01 from "./../Assets/img01.webp"
import img02 from "./../Assets/img02.webp"
function Home() {

  return (
    <section>
      <article id='home_title'>
        <img src={img01}/>
        <h1>The NextGen fins for <br/> underwater sports</h1>
        <p>Create your fins to match your style. <br/> With 50,000 unique combinations, <br/> you'll stand out from the crowd.</p>
        <button>
          <Link to="/Store">Create your fins</Link>
        </button>
      </article>
      <article id="home_featured">
        <h2>Featured ❤️‍🔥</h2>
        <p>Discover our best selection for you:</p>
        <div>
          <Card img={fins01} blade_area="UWH" shoe_size="M" blade_stiffness="Soft" blade_color="Ivory" shoe_color="White" bumper_color="White" guide_color="White" fins_price="USD 380"/>
          <Card img={fins02} blade_area="UWH" shoe_size="L" blade_stiffness="Soft" blade_color="Blue" shoe_color="White" bumper_color="White" guide_color="White" fins_price="USD 320"/>
          <Card img={fins03} blade_area="UWH" shoe_size="L" blade_stiffness="Soft" blade_color="Pink" shoe_color="White" bumper_color="White" guide_color="White" fins_price="USD 320"/>
          <Card img={fins04} blade_area="UWH" shoe_size="L" blade_stiffness="Soft" blade_color="Black" shoe_color="Blue" bumper_color="Blue" guide_color="Blue" fins_price="USD 320"/>
          <Card img={fins05} blade_area="UWH" shoe_size="S" blade_stiffness="Extra Hard" blade_color="Black" shoe_color="Black" bumper_color="Black" guide_color="Black" fins_price="USD 370"/>
          <Card img={fins06} blade_area="UWH" shoe_size="S" blade_stiffness="Soft" blade_color="Pink" shoe_color="Black" bumper_color="Black" guide_color="Black" fins_price="USD 370"/>
        </div>
      </article>
      <article id='home_design'>
        <h2> Design your own fins 🖌️</h2>
        <p> Try your creativity. 50,000 availables combinations! </p>
        <Link className='buttonLink' to="/store">
          <button>Try it!</button>
        </Link>
        <img src={img02}/>
      </article>
      <article id='home_ukraine'>
        <h2>Shop with purpose: support Ukraine 💛💙</h2>
        <p>At Rocketfin, we believe in the power of sports to unite and uplift communities. That's why, with every pair of fins you purchase, a portion of the sale goes directly to humanitarian aid in Ukraine.</p>
        <p>Your support helps provide food, shelter, and medical assistance to families affected by the ongoing conflict. Together, we can make a significant impact and bring hope to those in need.</p>
        <p>Purchase today and let your swim make waves of change.</p>
        <Link className="buttonLink" to="/store">
          <button>Purchase & Support Ukraine</button>
        </Link>
      </article>
    </section>
  );
}

export default Home;

      {/*

      <article id='home_ukraine'>
        <h2>Shop with Purpose: Support Ukraine</h2>
        <p>At Rocketfin, we believe in the power of sports to unite and uplift communities. That's why, with every pair of fins you purchase, a portion of the sale goes directly to humanitarian aid in Ukraine.</p>
        <p>Your support helps provide food, shelter, and medical assistance to families affected by the ongoing conflict. Together, we can make a significant impact and bring hope to those in need.</p>
        <p>Purchase today and let your swim make waves of change.</p>
        <Link className="buttonLink" to="/store">
          <button>Purchase & Support Ukraine 💛💙</button>
        </Link>
      </article>

      <article>
        <p>* Shipping and Buy Information</p>
        <p>Language Switcher</p>
        <p>Contact Information</p>
        <p>Blog section: New releases, next dates.</p>
        <p>Instagram API</p>
        <p>Other products</p>
        <p>PDF info</p>
      </article> */}
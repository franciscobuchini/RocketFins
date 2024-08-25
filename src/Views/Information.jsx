// Information.jsx
import { Link } from 'react-router-dom';

function Information() {

  return (
    <section>
      <article id="information_inputs">
        <h1> Shipping information: </h1>
        <div class="input_box">
          <label htmlFor="FirstName"> first name* </label>
          <input id="FirstName" type="text"></input>

          <label htmlFor="LastName"> last name* </label>
          <input id="LastName" type="text"></input>
        </div>

        <div class="input_box">
          <label htmlFor="Country"> country* </label>
          <input id="Country" type="text"></input>

          <label htmlFor="City"> city* </label>
          <input id="City" type="text"></input>

          <label htmlFor="ZipCode"> zip code* </label>
          <input id="ZipCode" type="number"></input>
        </div>

        <div class="input_box">
          <label htmlFor="Street"> street* </label>
          <input id="Street" type="text"></input>

          <label htmlFor="HouseNumber"> house number* </label>
          <input id="HouseNumber" type="text"></input>

          <label htmlFor="FloorApartment"> floor, apartment</label>
          <input id="FloorApartment" type="text"></input>
        </div>

        <div class="input_box">
          <label htmlFor="Email"> e-mail* </label>
          <input id="Email" type="mail"></input>

          <label htmlFor="Code"> area code* </label>
          <input id="Code" type="number"></input>

          <label htmlFor="Phone"> phone* </label>
          <input id="Phone" type="number"></input>
        </div>

        <div class="input_box">
          <label htmlFor="Sport"> sport* </label>
          <input id="Sport" type="text"></input>

          <label htmlFor="TeamClub"> team/club </label>
          <input id="TeamClub" type="text"></input>
        </div>

        <button>
            <Link>Continue</Link>
        </button>

      </article>
    </section>
  );
}

export default Information;
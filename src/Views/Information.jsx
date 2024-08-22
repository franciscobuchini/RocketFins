// Information.jsx
function Information() {

  return (
    <section>
      <article id="information_inputs">
        <div class="input_box">
          <label htmlFor="FirstName"> First name* </label>
          <input id="FirstName" type="text"></input>

          <label htmlFor="LastName"> Last name* </label>
          <input id="LastName" type="text"></input>
        </div>

        <div class="input_box">
          <label htmlFor="Country"> Country* </label>
          <input id="Country" type="text"></input>

          <label htmlFor="City"> City* </label>
          <input id="City" type="text"></input>

          <label htmlFor="ZipCode"> Zip code* </label>
          <input id="ZipCode" type="text"></input>
        </div>

        <div class="input_box">
          <label htmlFor="Street"> Street* </label>
          <input id="Street" type="text"></input>

          <label htmlFor="HouseNumber"> House number* </label>
          <input id="HouseNumber" type="text"></input>

          <label htmlFor="FloorApartment"> Floor, apartment</label>
          <input id="FloorApartment" type="text"></input>
        </div>

        <div class="input_box">

          <label htmlFor="Email"> E-mail* </label>
          <input id="Email" type="text"></input>

          <label htmlFor="Code"> Code* </label>
          <input id="Code" type="text"></input>

          <label htmlFor="Phone"> Phone* </label>
          <input id="Phone" type="text"></input>
        </div>

      </article>
    </section>
  );
}

export default Information;
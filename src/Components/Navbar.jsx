import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
      <ul>
        <li> <Link to="/">Inicio</Link> </li>
        <li> <Link to="/Tienda">Tienda</Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar
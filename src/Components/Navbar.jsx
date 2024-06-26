import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav>
      <ul>
        <li> <Link to="/">Inicio</Link> </li>
        <li> <Link to="/about">Acerca de</Link> </li>
        <li> <Link to="/contact">Contacto</Link> </li>
        <li> <Link to="/services">Servicios</Link> </li>
      </ul>
    </nav>
  );
}

export default Navbar
import Home from './Views/Home'
import Tienda from './Views/Tienda';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
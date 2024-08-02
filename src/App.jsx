import Home from './Views/Home'
import Store from './Views/Store';
import FAQ from './Views/FAQ';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Store" element={<Store />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
        </div>
        <footer >
          <div className="waves">
            <div className="wave wave1"></div>
            <div className="wave wave2"></div>
            <div className="wave wave3"></div>
            <div className="wave wave4"></div>
          </div>
          <div className='footer'>
          </div>
        </footer>
      </main>
    </Router>
  );
}

export default App;
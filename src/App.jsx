import Home from './Views/Home'
import Store from './Views/Store';
import FAQ from './Views/FAQ';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='Main'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </div>
      <div className="background">
        <div></div>
        <div></div>
      </div>
    </Router>
  );
}

export default App;
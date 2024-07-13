import Home from './Views/Home'
import Store from './Views/Store';
import Navbar from './Components/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='Main'>
        <Navbar />
        <Routes>
          <Route path="/Store" element={<Store />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
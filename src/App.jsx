import Home from './Views/Home'
import Store from './Views/Store';
import FAQ from './Views/FAQ';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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
        <Footer/>
      </main>
    </Router>
  );
}

export default App;
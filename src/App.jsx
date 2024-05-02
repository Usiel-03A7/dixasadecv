import Navbar from './Navbar';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Portafolio from './Portafolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';

export default function App() {

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Portafolio' element={<Portafolio />} />
        <Route path='*' element={<Portafolio />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}


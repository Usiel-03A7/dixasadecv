import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Portafolio from './pages/Portafolio';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

export default function App() {

  return (
    <BrowserRouter >
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Portafolio' element={<Portafolio />} />
        <Route path='/login-admin' element={<Login />} />
        <Route path='*' element={<Portafolio />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}


import Navbar from './Navbar';
import Body from './Body';
import Projects from './Projects';
import MoreProjects from './MoreProjects';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Portafolio from './Portafolio/index,';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Portafolio' element={<Portafolio />} />
      </Routes>
      <Navbar />
      <Body />
      <Projects />
      <MoreProjects />
      <Footer />
    </BrowserRouter>
  )
}


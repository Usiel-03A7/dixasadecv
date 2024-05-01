import Navbar from './Navbar';
import Body from './body';
import Projects from './projects';
import MoreProjects from './moreProjects';
import Footer from './footer';
import AboutUs from './aboutUs';
import ContactUs from './contactUs';
import Portafolio from './portafolio/index,';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter >


      <Navbar />
      <Routes>
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/Portafolio' element={<Portafolio />} />
      </Routes>
      <Body />
      <Projects />
      <MoreProjects />
      <Footer />

    </BrowserRouter>
  )
}


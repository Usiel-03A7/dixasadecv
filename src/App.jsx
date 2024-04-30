import Navbar from './Navbar';
import Body from './body';

import Projects from './projects';
import MoreProjects from './moreProjects';
import Footer from './footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './aboutUs';
function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path='/AboutUs' Component={AboutUs} />
      </Routes>
      <Navbar />
      <Body />
      <Projects />
      <MoreProjects />
      <Footer />
    </BrowserRouter>
  )
}

export default App

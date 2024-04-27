import Navbar from './Navbar';
import Body from './body';
import style from "./App.module.css"
import Projects from './projects';
import MoreProjects from './moreProjects';
import Footer from './footer';
function App() {

  return (
    <div className={style.container}>
      <Navbar />
      <Body />
      <Projects />
      <MoreProjects />
      <Footer />
    </div>
  )
}

export default App

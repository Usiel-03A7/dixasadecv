import Navbar from './Navbar';
import Body from './body';
import style from "./App.module.css"
import Projects from './projects';
import MoreProjects from './moreProjects';
function App() {

  return (
    <div className={style.container}>
      <Navbar />
      <Body />
      <Projects />
      <MoreProjects />
      <h1>

      </h1>
    </div>
  )
}

export default App

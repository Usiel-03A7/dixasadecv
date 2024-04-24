import Navbar from './Navbar';
import Body from './body';
import style from "./App.module.css"
import Projects from './projects';
function App() {

  return (
    <div className={style.container}>
      <Navbar />
      <Body />
      <Projects/>
      <h1>

      </h1>
    </div>
  )
}

export default App

  import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import style from "./App.module.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className={style.container}>
    <App />
  </div>,
)

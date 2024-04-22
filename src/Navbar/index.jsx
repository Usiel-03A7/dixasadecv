import style from "./Navbar.module.css"
export default function Navbar() {
    return (
        <nav className={style.container}>
            <span className={style.imgContainer}>
                <img src="./logo.jpg" alt="" />
            </span>
            <span className={style.navegation}>
                <ul className={style.navegationList}>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Contactanos</li>
                </ul>
            </span>
        </nav>
    )
}
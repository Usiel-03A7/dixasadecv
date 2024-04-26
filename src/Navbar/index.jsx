import { useState, useEffect } from 'react';
import style from "./Navbar.module.css"; // Importa el archivo de estilos

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${style.container} ${isScrolled ? style['navbar-fixed'] : ''}`}>
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
            <span className="menubar">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </span>
        </nav>
    );
}

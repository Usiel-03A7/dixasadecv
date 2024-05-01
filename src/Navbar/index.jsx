import { useState, useEffect } from 'react';
import style from "./Navbar.module.css"; // Importa el archivo de estilos
import { Link } from 'react-router-dom';

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
                    <li> <Link to="/AboutUs">Inicio</Link> </li>
                    <li><Link to="/">Nosotros</Link></li>
                    <li>< Link to="/">Contactanos</Link></li>
                </ul>
            </span>
        </nav >
    );
}
